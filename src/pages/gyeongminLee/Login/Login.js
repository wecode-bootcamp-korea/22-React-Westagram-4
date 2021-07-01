import React, { Component } from 'react';
import './Login.scss';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      passwordValue: '',
      // submitButtonDisabled: true,
      // buttonColor: '#B2DFFC',
    };
  }

  controlValue = event => {
    if (event.target.type === 'text') {
      // 해결함 !!!!!
      //인풋이 여러개일때 이벤트 객체를 활용, 타입이 텍스트인 인풋을 찾는것
      // <form id="login-form" onChange={this.controlValue()}> 라고 적혀있으면 컨트롤 밸류의 리턴값을 찾는데 없으므로 언디파인이나온다.
      this.setState(
        {
          idValue: event.target.value,
        },
        () => this.controlActivation(event) //정리해야할것 - 기존의 컨트롤 액티베이션 함수를 태그에 넣을 필요없이
      );

      // 실행이 완료될때까지 기다리지 않는다 - setState -> 비동기 아이디 밸류 달라지기 전에 아래 함수 실행함
    } else if (event.target.type === 'password') {
      this.setState(
        {
          passwordValue: event.target.value,
        },
        () => this.controlActivation(event)
      );
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
            //응답은 맞는경우도 있고 아닌경우도 있다 - if문으로 나누어 주어야된다
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
    //console.log(JsonResponse['ACCESS_TOKEN']);
    // const idValid = this.state.idValue.length >= 1; 멘토님의 것
    //const inputValid =this.state.idValue.includes('@')&&this.state.password.length>=5
    const idValid = this.state.idValue.includes('@');
    const passwordValid = this.state.passwordValue.length >= 5;
    // let button = null;

    // if (idValid && passwordValid) {
    //   button = (
    //     <button
    //       //onClick={this.goToMain}
    //       type="button"
    //       id="loginButton"
    //       backgroundColor="#0095F6"
    //     >
    //       {' '}
    //       로그인
    //     </button>
    //   );
    // } else {
    //   button = (
    //     <button
    //       //onClick={this.goToMain}
    //       type="button"
    //       id="loginButton"
    //       backgroundColor="#B2DFFC"
    //     >
    //       {' '}
    //       로그인
    //     </button>
    //   );
    // }

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
              //disabled
              //

              //disabled={true}
              //button={button}
              // onChange={function () {
              //   if (idValid && passwordValid) {
              //     button.backgroundColor = '#0095F6';
              //   }
              // }}
              // style={{
              //   backgroundColor: '#B2DFFC',
              // }}
              onClick={this.goToMain}
              type="button"
              id="loginButton"
              backgroundColor={
                idValid && passwordValid === true ? '#B2DFFC' : '#0095F6'
              }
              disabled={idValid && passwordValid === true ? false : true}
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
