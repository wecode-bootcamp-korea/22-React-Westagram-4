// 필수
import React from 'react';

// 컴포넌트
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds';

import './Main.scss';

class Main extends React.Component {
  state = {
    replies: [],
    feeds: [],
  };

  render() {
    return (
      <div class="flex-center">
        <Nav />
        <main class="mainDiv">
          <Feeds />

          <div class="mainRight main-right-media">
            <div class="myAccount">
              <img
                alt=""
                class="profile"
                src="./images/jaehyunLee/Main/psa.png"
              />
              <div class="accountName">
                <p>wecode_bootcamp</p>
                <p>WeCode | 위코드</p>
              </div>
            </div>

            <div class="navRightContainer">
              <div class="navRightTop">
                <div>스토리</div>
                <div>모두 보기</div>
              </div>
              <nav>
                <div class="otherAccount">
                  <img
                    alt=""
                    class="profile"
                    src="./images/jaehyunLee/Main/psa.png"
                  />
                  <div class="accountName">
                    <p>wecode_bootcamp</p>
                    <p>WeCode | 위코드</p>
                  </div>
                </div>
                <div class="otherAccount">
                  <img
                    alt=""
                    class="profile"
                    src="./images/jaehyunLee/Main/psa.png"
                  />
                  <div class="accountName">
                    <p>wecode_bootcamp</p>
                    <p>WeCode | 위코드</p>
                  </div>
                </div>
                <div class="otherAccount">
                  <img
                    alt=""
                    class="profile"
                    src="./images/jaehyunLee/Main/psa.png"
                  />
                  <div class="accountName">
                    <p>wecode_bootcamp</p>
                    <p>WeCode | 위코드</p>
                  </div>
                </div>
              </nav>
            </div>

            <div class="navRightContainer">
              <div class="navRightTop">
                <div>스토리</div>
                <div>모두 보기</div>
              </div>
              <nav class="storyBody">
                <div class="otherAccount">
                  <img
                    alt=""
                    class="profile"
                    src="./images/jaehyunLee/Main/psa.png"
                  />
                  <div class="accountName">
                    <p>wecode_bootcamp</p>
                    <p>WeCode | 위코드</p>
                  </div>
                </div>
                <div class="otherAccount">
                  <img
                    alt=""
                    class="profile"
                    src="./images/jaehyunLee/Main/psa.png"
                  />
                  <div class="accountName">
                    <p>wecode_bootcamp</p>
                    <p>WeCode | 위코드</p>
                  </div>
                </div>
                <div class="otherAccount">
                  <img
                    alt=""
                    class="profile"
                    src="./images/jaehyunLee/Main/psa.png"
                  />
                  <div class="accountName">
                    <p>wecode_bootcamp</p>
                    <p>WeCode | 위코드</p>
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <nav>
                <ul class="footerRight">
                  <li class="floatLeft">intagram 정보</li>
                  <li class="floatLeft">지원</li>
                  <li class="floatLeft">등등.. 언어</li>
                  <li>&nbsp;</li>
                </ul>
              </nav>
              <span>카피라이트 인스타그램</span>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default Main;
