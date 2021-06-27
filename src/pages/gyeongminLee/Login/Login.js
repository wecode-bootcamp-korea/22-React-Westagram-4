import React, { Component } from 'react';
import './Login.scss';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      buttonColor: '#B2DFFC',
      idValue: '',
      passwordValue: '',
    };
  }

  controlValue = event => {
    if (event.target.type === 'text') {
      this.setState({
        idValue: event.target.value,
      });
    } else if (event.target.type === 'password') {
      this.setState({
        passwordValue: event.target.value,
      });
    }
  };

  controlActivation = () => {
    if (
      this.state.idValue.includes('@') &&
      this.state.passwordValue.length >= 5
    ) {
      this.setState({
        buttonColor: '#0095F6',
      });
    } else {
      this.setState({
        buttonColor: '#B2DFFC',
      });
    }
  };

  render() {
    console.log(this.setState);
    return (
      <>
        <div className="container">
          <form id="logo" action="index.html" method="post">
            <a id="logo">westagram</a>
          </form>

          <form id="login-form" onKeyUp={this.controlActivation}>
            <input
              onChange={this.controlValue}
              type="text"
              className="text"
              id="id"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />

            <input
              onChange={this.controlValue}
              type="password"
              className="text"
              id="password"
              placeholder="비밀번호"
            />

            <button
              style={{ backgroundColor: this.state.buttonColor }}
              type="button"
              id="loginButton"
              disabled
            >
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
