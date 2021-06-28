// 필수
import React from 'react';

// 컴포넌트
import Reply from './Reply';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';

import './Main.scss';

class Main extends React.Component {
  state = {
    replies: [],
  };

  addReply = content => {
    const newReply = {
      id: Math.random(),
      userName: '재현',
      content: ' ' + content,
      isLike: true,
    };
    this.setState({ replies: [...this.state.replies, newReply] });
    console.log(this.state);
    // this.setState({ replies: this.state.replies.push(newReply) });
  };

  delReply = id => {
    this.setState({
      replies: [...this.state.replies.filter(x => x.id !== id)],
    });
  };

  doLike = id => {
    console.log(id);
    this.setState({
      replies: this.state.replies.map(reply => {
        if (reply.id === id) {
          reply.isLike = !reply.isLike;
        }
        return reply;
      }),
    });
  };

  render() {
    return (
      <div class="flex-center">
        <Nav />
        <main class="mainDiv">
          <div class="feeds">
            <Feed />
            <Reply
              replies={this.state.replies}
              addReply={this.addReply}
              delReply={this.delReply}
              doLike={this.doLike}
            />
          </div>

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
