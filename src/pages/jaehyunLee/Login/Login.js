import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

export class Login extends React.Component {
  state = {
    inputId: '',
    inputPw: '',
    inputCheck: false,
  };

  typeId = e => {
    this.setState({ inputId: e.target.value });
    // console.log(e.target.value);
  };

  typePw = e => {
    this.setState({ inputPw: e.target.value });
    // console.log(e.target.value);
  };

  checkLoginInfo = e => {
    let indexOfAt = this.state.inputId.indexOf('@');
    let lengthOfPw = this.state.inputPw.length;

    if (indexOfAt !== -1 && lengthOfPw >= 5) {
      this.setState({ inputCheck: true });
      console.log('유효');
      // this.state.inputCheck = !this.state.inputCheck;
    } else {
      this.setState({ inputCheck: false });
    }
  };

  render() {
    return (
      <div>
        <article id="mainBox">
          <div id="loginBox">
            <div className="mainLogo logoFont">
              <h1>Westargram</h1>
            </div>
            <form className="beColumn centerForm">
              <input
                type="string"
                className="A B"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.typeId}
                onKeyPress={this.checkLoginInfo}
              />

              <input
                type="password"
                onChange={this.typePw}
                onKeyPress={this.checkLoginInfo}
                className="A B"
                placeholder="비밀번호"
              />
              <Link to="/main-Jaehyun">
                <button
                  disabled={this.state.inputCheck === true ? false : true}
                  style={{
                    backgroundColor:
                      this.state.inputCheck === false ? 'red' : 'blue',
                  }}
                  className="A B2 bdRadius noneBorder "
                  type="button"
                >
                  로그인
                </button>
              </Link>
            </form>
            <div className="missPassword"></div>
          </div>
        </article>
      </div>
    );
  }
}

export default Login;
