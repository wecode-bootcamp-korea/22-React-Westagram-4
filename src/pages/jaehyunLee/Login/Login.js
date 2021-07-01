import React from 'react';
import { Link } from 'react-router-dom';
import Postings from './Postings';

import './Login.scss';

export class Login extends React.Component {
  state = {
    inputId: '',
    inputPw: '',
    inputCheck: false,
    backend: [],
  };

  login = () => {
    fetch('http://10.58.6.223:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.inputId,
        password: this.state.inputPw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ backend: result });
        var token = result.access_token;
        localStorage.setItem('token', token);
      });
  };

  // 포스팅내려받기
  // login = () => {
  //   fetch('http://10.58.6.223:8000/postings', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result.results);
  //       this.setState({ backend: result.results });
  //     });
  // };
  // 올리기
  // posting = () => {
  //   fetch('http://10.58.6.223:8000/postings', {
  //     method: 'POST',
  //     headers: { Authorization: localStorage.getItem('token') },
  //     body: JSON.stringify({
  //       image_url: 'https://t1.daumcdn.net/cfile/tistory/240814485574155029',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result);
  //     });
  // };
  //회원가입
  // login = () => {
  //   // console.log(this.state.inputId);
  //   // console.log(this.state.inputPw);
  //   fetch('http://10.58.6.223:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.inputId,
  //       password: this.state.inputPw,
  //       nickname: '재현',
  //       phone: '010-2230-5992',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // };

  typeId = e => {
    this.setState({ inputId: e.target.value });
  };

  typePw = e => {
    this.setState({ inputPw: e.target.value });
  };

  checkLoginInfo = e => {
    let indexOfAt = this.state.inputId.indexOf('@');
    let lengthOfPw = this.state.inputPw.length;

    if (indexOfAt !== -1 && lengthOfPw >= 5) {
      this.setState({ inputCheck: true });
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
              {/* <Link to="/main-Jaehyun"> */}
              <button
                disabled={this.state.inputCheck === true ? false : true}
                style={{
                  backgroundColor:
                    this.state.inputCheck === false ? 'red' : 'blue',
                }}
                className="A B2 bdRadius noneBorder "
                type="button"
                onClick={this.login}
              >
                로그인
              </button>
              <div onClick={this.posting}>포스팅</div>
            </form>
            <div className="missPassword"></div>
          </div>
        </article>
        {/* {this.state.backend.map(posting => (
          <Postings image_url={posting.image_url} user={posting.nickname} />
        ))} */}
        {/* {console.log(this.state.backend.results)} */}
      </div>
    );
  }
}

export default Login;
