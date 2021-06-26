import React, { Component } from 'react';
import './Login.scss';
class Login extends Component {
  handleIdInput = event => {
    this.setState({
      idValue: event.target.value,
    });
  };

  handlePasswordInput = event => {
    this.setState({
      passwordValue: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="container">
          <form id="logo" action="index.html" method="post">
            <a id="logo">westagram</a>
          </form>

          <form id="login-form">
            <input
              onChange={this.handleIdInput}
              type="text"
              className="text"
              id="id"
              name="id"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />

            <input
              onChange={this.handlePasswordInput}
              type="password"
              className="text"
              id="password"
              placeholder="비밀번호"
            />

            <button type="button" id="loginButton" disabled>
              로그인
            </button>
          </form>

          <div id="askinghelp">
            <a href="#">비밀번호를 잊어버리셨나요?</a>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
