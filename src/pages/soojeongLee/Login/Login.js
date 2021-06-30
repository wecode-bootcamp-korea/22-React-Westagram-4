// 필수 라이브러리 import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 컴포넌트 import

// 스타일
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      // default 값 부여
      id: '',
      pw: '',
      isButtonOn: false,
    };
  }

  //name 속성은 오직 input 태그에서 사용
  //계산된 속성명 사용
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isButtonOn = () => {
    const isValid =
      this.state.id.includes('@') &&
      this.state.id.length >= 5 &&
      this.state.pw.length >= 8;

    this.setState({
      isButtonOn: isValid ? true : false,
    });
  };

  goToMain = () => {
    //여기에 fetch 함수 적어주기 fetch();
    fetch('http://10.58.3.29:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        nick_name: 'newnew',
        name: '새로운친구',
        phone_number: '01051282089',
      }),
    })
      .then(response => response.json())
      // result : 백에서 전달됨. 통신할 때 정해준 값으로
      .then(result => {
        console.log(result);
        if (result.message === 'success') {
          // if 조건을 바꿔주기
          console.log(result.access_token);
          localStorage.setItem('access_token', result.access_token);
          this.props.history.push('/main-Soojeong#');
        } else {
          alert(`❗️아이디와 비밀번호를 확인해주세요❗️`);
        }
      });

    // if (this.state.isButtonOn === true) {
    //   this.props.history.push('/main-Soojeong#');
    // } else {
    //   alert(`❗️아이디와 비밀번호를 확인해주세요❗️`);
    // }
  };

  handleKeyPress = event => {
    //input 창에서 enter press 했을 때
    if (event.key === 'Enter') {
      event.preventDefault();
      this.goToMain();
    }
  };

  render() {
    return (
      <div className="Login">
        <main>
          <header>
            <h1>Westagram</h1>
          </header>

          <section className="loginInputBox">
            <h2 className="sr-only">login page</h2>
            <form action="" onKeyUp={this.isButtonOn}>
              <input
                name="id"
                autoComplete="off"
                onChange={this.handleInput}
                type="text"
                id="loginId"
                value={this.state.id}
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                name="pw"
                onChange={this.handleInput}
                type="password"
                id="loginPw"
                value={this.state.pw}
                placeholder="비밀번호"
                onKeyPress={this.handleKeyPress}
              />
              <button
                onClick={this.goToMain}
                type="button"
                className={
                  this.state.isButtonOn
                    ? 'loginBtn inputIdAndPw'
                    : 'loginBtn inputNone'
                }
              >
                로그인
              </button>
            </form>
          </section>

          <footer>
            <Link className="findPassword">비밀번호를 잊으셨나요?</Link>
          </footer>
        </main>
      </div>
    );
  }
}

export default Login;
