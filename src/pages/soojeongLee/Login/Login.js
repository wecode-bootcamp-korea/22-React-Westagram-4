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
    };
  }

  goToMain = () => {
    this.props.history.push('/main-Soojeong#');
  };

  handleInputId = event => {
    this.setState({
      id: event.target.value,
    });
  };

  handleInputPw = event => {
    this.setState({
      pw: event.target.value,
    });
  };

  render() {
    console.log('handleinput>>>', this.state.handleInput);
    return (
      <div className="Login">
        <main>
          <header>
            <h1>Westagram</h1>
          </header>

          <section className="loginInputBox">
            <h2 className="sr-only">login page</h2>
            <form action="">
              <input
                onChange={this.handleInputId}
                type="text"
                id="loginId"
                value={this.state.id}
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.handleInputPw}
                type="password"
                id="loginPw"
                value={this.state.pw}
                placeholder="비밀번호"
              />
              <button
                onClick={this.goToMain}
                type="button"
                className="loginBtn"
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
