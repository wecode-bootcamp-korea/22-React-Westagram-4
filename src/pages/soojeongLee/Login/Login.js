// 필수 라이브러리 import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 컴포넌트 import

// 스타일
import './Login.scss';

class Login extends Component {
  goToMain = () => {
    this.props.history.push('/main-Soojeong#');
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
            <form action="">
              <input
                type="text"
                id="loginId"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input type="password" id="loginPw" placeholder="비밀번호" />
              <button
                type="button"
                className="loginBtn"
                onClick={this.goToMain}
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
