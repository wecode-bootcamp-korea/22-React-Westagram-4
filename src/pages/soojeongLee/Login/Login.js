import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    this.props.history.push('/main-Soojeong#');
  };

  render() {
    const isValid =
      this.state.id.includes('@') &&
      this.state.id.length >= 5 &&
      this.state.pw.length >= 8;

    return (
      <div className="Login">
        <main>
          <header>
            <h1>Westagram</h1>
          </header>

          <section className="loginInputBox">
            <h2 className="sr-only">login page</h2>
            <form>
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
                value={this.state.pw}
                placeholder="비밀번호"
              />
              <button
                onClick={this.goToMain}
                type="button"
                className="loginBtn"
                disabled={!isValid}
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
