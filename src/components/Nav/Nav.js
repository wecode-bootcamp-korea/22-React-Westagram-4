//필수
import React from 'react';
import { Link } from 'react-router-dom';

// 스타일
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <h1>
          <Link to="/login-Soojeong" className="iconLogo">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/login-Soojeong" className="letterLogo">
            <span>Westagram</span>
          </Link>
        </h1>
        <div className="searchBox">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="검색" />
        </div>
        <ul className="userBtn">
          <li>
            <button type="button">
              <i className="far fa-compass"></i>
            </button>
          </li>
          <li>
            <button type="button">
              <i className="far fa-heart"></i>
            </button>
          </li>
          <li>
            <button type="button">
              <i className="far fa-user"></i>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
