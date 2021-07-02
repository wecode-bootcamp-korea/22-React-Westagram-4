import React, { Component } from 'react';
import './Main.scss';
export default class AsideRight extends Component {
  render() {
    return (
      <div>
        {' '}
        <div className="mainRight main-right-media">
          <div className="myAccount">
            <img
              alt=""
              className="profile"
              src="./images/jaehyunLee/Main/psa.png"
            />
            <div className="accountName">
              <p>wecode_bootcamp</p>
              <p>WeCode | 위코드</p>
            </div>
          </div>

          <div className="navRightContainer">
            <div className="navRightTop">
              <div>스토리</div>
              <div>모두 보기</div>
            </div>
            <nav>
              <div className="otherAccount">
                <img
                  alt=""
                  className="profile"
                  src="./images/jaehyunLee/Main/psa.png"
                />
                <div className="accountName">
                  <p>wecode_bootcamp</p>
                  <p>WeCode | 위코드</p>
                </div>
              </div>
              <div className="otherAccount">
                <img
                  alt=""
                  className="profile"
                  src="./images/jaehyunLee/Main/psa.png"
                />
                <div className="accountName">
                  <p>wecode_bootcamp</p>
                  <p>WeCode | 위코드</p>
                </div>
              </div>
              <div className="otherAccount">
                <img
                  alt=""
                  className="profile"
                  src="./images/jaehyunLee/Main/psa.png"
                />
                <div className="accountName">
                  <p>wecode_bootcamp</p>
                  <p>WeCode | 위코드</p>
                </div>
              </div>
            </nav>
          </div>

          <div className="navRightContainer">
            <div className="navRightTop">
              <div>스토리</div>
              <div>모두 보기</div>
            </div>
            <nav className="storyBody">
              <div className="otherAccount">
                <img
                  alt=""
                  className="profile"
                  src="./images/jaehyunLee/Main/psa.png"
                />
                <div className="accountName">
                  <p>wecode_bootcamp</p>
                  <p>WeCode | 위코드</p>
                </div>
              </div>
              <div className="otherAccount">
                <img
                  alt=""
                  className="profile"
                  src="./images/jaehyunLee/Main/psa.png"
                />
                <div className="accountName">
                  <p>wecode_bootcamp</p>
                  <p>WeCode | 위코드</p>
                </div>
              </div>
              <div className="otherAccount">
                <img
                  alt=""
                  className="profile"
                  src="./images/jaehyunLee/Main/psa.png"
                />
                <div className="accountName">
                  <p>wecode_bootcamp</p>
                  <p>WeCode | 위코드</p>
                </div>
              </div>
            </nav>
          </div>
          <div>
            <nav>
              <ul className="footerRight">
                <li className="floatLeft">intagram 정보</li>
                <li className="floatLeft">지원</li>
                <li className="floatLeft">등등.. 언어</li>
                <li>&nbsp;</li>
              </ul>
            </nav>
            <span>카피라이트 인스타그램</span>
          </div>
        </div>
      </div>
    );
  }
}
