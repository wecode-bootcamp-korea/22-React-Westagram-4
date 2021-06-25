// 필수
import React from 'react';

// 컴포넌트
import Reply from './Reply';
import Nav from '../../../components/Nav/Nav';

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
      <div>
        <Nav />
        <main class="mainDiv">
          <div class="feeds">
            <article id="article">
              <div class="feedTop">
                <div class="whoIsUploader">
                  <img
                    alt=""
                    class="profile"
                    src="./images/jaehyunLee/Main/psa.png"
                  />
                  <span>dlwlrma</span>
                </div>
                <i class="fas fa-ellipsis-h"></i>
              </div>
              <article class="feedImage">
                <img alt="" src="./images/jaehyunLee/Main/iu2.jpg" />
              </article>
              <div class="feedAddOn">
                <div class="feedAddOnLeft">
                  <i class="far fa-heart likeFeedBtn"></i>
                  <i class="none fas fa-heart hateFeedBtn"></i>
                  <i class="far fa-comment"></i>
                  <i class="fas fa-share-alt"></i>
                </div>
                <div class="feedAddOnRight">
                  <i class="far fa-bookmark addToFav"></i>
                  <i class="none fas fa-bookmark delOfFav"></i>
                </div>
              </div>
              <div class="numOfLikesMain">
                <div class="numOfLikes">
                  <img
                    alt=""
                    class="profile"
                    src="./images/jaehyunLee/Main/psa.png"
                  />

                  <span>aineworld님 외 10명이 좋아합니다.</span>
                </div>
              </div>
              <div class="replies">
                <div class="reply">
                  <p>canon_mj 위워크에서 진행한 베이킹 클래스...</p>
                </div>
                <div class="reply">
                  <p>neceosecius 거봐 좋았잖아~~~~</p>
                </div>
                <div class="reply">
                  <p>42분 전</p>
                </div>
                <Reply
                  replies={this.state.replies}
                  addReply={this.addReply}
                  delReply={this.delReply}
                  doLike={this.doLike}
                />
              </div>
            </article>
          </div>

          <div class="mainRight">
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
