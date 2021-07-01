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
      id: '',
      pw: '',
      isButtonOn: false,
    };
  }

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
    // fetch() 함수 사용 시
    // fetch('http://10.58.3.29:8000/user/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.id,
    //     password: this.state.pw,
    //     nick_name: 'newnew',
    //     name: '새로운친구',
    //     phone_number: '01051282089',
    //   }),
    // })
    //   .then(response => response.json())

    //   // result : 백에서 전달됨. 통신할 때 정해준 값으로
    //   .then(result => {
    //      // 조건을 지정해준다.
    //     if (result.message === 'success') {
    //       localStorage.setItem('access_token', result.access_token);
    //       this.props.history.push('/main-Soojeong#');
    //     } else {
    //       alert(`❗️아이디와 비밀번호를 확인해주세요❗️`);
    //     }
    //   });

    if (this.state.isButtonOn === true) {
      this.props.history.push('/main-Soojeong#');
    } else {
      alert(`❗️아이디와 비밀번호를 확인해주세요❗️`);
    }
  };

  handleKeyPress = event => {
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
            <form onKeyUp={this.isButtonOn} onKeyPress={this.handleKeyPress}>
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
            <Link to="" className="findPassword">
              비밀번호를 잊으셨나요?
            </Link>
          </footer>
        </main>
      </div>
    );
  }
}

export default Login;
