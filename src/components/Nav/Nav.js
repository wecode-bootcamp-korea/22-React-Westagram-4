import React from "react";

class Nav extends React.Component{
  render(){
      return (
        <nav>
          <h1>
            <a href="#" className="iconLogo"><i className="fab fa-instagram"></i></a>
            <a href="#" className="letterLogo"><span>Westagram</span></a>
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