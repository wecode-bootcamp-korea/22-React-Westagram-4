import React, { Component } from 'react';
import './Login.scss';
class Login extends Component {
  constructor() {
    super();
    this.state = {
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

  goToMain = e => {
    fetch('http://10.58.0.86:8000/user/signin', {
      method: 'post',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.passwordValue,
      }),
    })
      .then(response => response.json())
      .then(
        result => {
          if (result.MESSAGE !== 'SUCCESS') {
            this.props.history.push('/main-Gyeongmin');
            //alert(result.ACCESS_TOKEN);
            localStorage.setItem('Token', result['ACCESS_TOKEN']);
          }
        }

        //.then setItem('ACCESS_TOKEN', result.ACCESS_TOKEN)
      );
    // .then(localStorage.setItem('ACCESS_TOKEN',  JsonResponse.ACCESS_TOKEN));
  };

  render() {
    const idValid = this.state.idValue.includes('@');
    const passwordValid = this.state.passwordValue.length >= 5;

    return (
      <>
        <div className="container">
          <form id="logo" action="index.html" method="post">
            <a id="logo">westagram</a>
          </form>

          <form id="login-form" onChange={this.controlValue}>
            <input
              type="text"
              className="text"
              id="id"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="text"
              id="password"
              placeholder="비밀번호"
            />

            <button
              //style={{ backgroundColor: this.state.buttonColor }} // 클래스 네임을 동적으로 바꾸어주자(무슨뜻인지 모름 ^^)
              onClick={this.goToMain}
              type="button"
              id="loginButton"
              backgroundcolor={
                idValid && passwordValid === true ? '#B2DFFC' : '#0095F6'
              }
              disabled={idValid && passwordValid === true ? false : true}
            >
              로그인
            </button>
          </form>

          <div id="askinghelp">
            {/* <a href="#">비밀번호를 잊어버리셨나요?</a> */}
          </div>
        </div>
      </>
    );
  }
}

export default Login;
