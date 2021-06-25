import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

export class Login extends React.Component {
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
              />

              <input type="password" className="A B" placeholder="비밀번호" />
              <Link to="/main-Jaehyun">
                <button className="A B2 bdRadius noneBorder">로그인</button>
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
