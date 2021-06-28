// 필수
import React from 'react';
import Comment from './Comment/Comment';

// 컴포넌트
import Nav from '../../../components/Nav/Nav';
import './Main.scss';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      submitButtonColor: 'none',
      // submitButtonDisabled: 'true',
      newCommentValue: '',

      list: [],
    };
  }

  controlComment = event => {
    if (event.target.type === 'text') {
      this.setState({
        newCommentValue: event.target.value,
      });
    }
  };
  controlButton = event => {
    if (event.target.type === 'button') {
      this.setState({
        submitButtonColor: event.target.backgroundColor,
      });
    }
  };
  // submitButtonDisabled = event => {
  //   if (event.target.type === 'button') {
  //     this.setState({
  //       submitButtonDisabled: event.target.disabled,
  //     });
  //   }
  // };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      //this.state.list.push(this.state.newCommentValue); // 들어가짐

      //const [list, newCommentValue] = this.state; // 이 부분이 이상함
      this.setState({
        list: this.state.list.concat(
          //  num : this.num,
          //newCommentValue: newCommentValue,
          [this.state.newCommentValue]
        ),

        // newCommentValue: '',
      });
      //this.num += 1;
    }
  };
  activateSubmitButton = e => {
    if (this.state.newCommentValue.length > 0) {
      this.setState({
        submitButtonColor: '#0095F6',
        submitButtonDisabled: false,
      });
    } else {
      this.setState({
        submitButtonColor: '#B2DFFC',
        submitButtonDisabled: true,
      });
    }
    this.handleKeyPress(e);
  };

  // handleRemove = num => {
  //   const { list } = this.state;
  //   const nextList = list.filter(item => {
  //     return item.num !== num;
  //   });
  //   this.setState({ list: nextList });
  // };

  // handleCreate = () => {
  //   const { newCommentValue, list } = this.state;
  //   this.setState({
  //     list: list.add(newCommentValue),
  //   });
  // };

  // function Comment (props){
  //   const comment = props.list;
  //   const commentList = list.map(item => {
  //     return  (<li>
  //     <span>{props}</span>
  //     <button>x</button>
  //   </li>
  //   );
  //   }

  // }

  render() {
    return (
      <>
        <Nav />

        <main className="mainPageMain">
          <div className="feeds">
            <article>
              <div className="feedTop">
                <img
                  alt="feed profile image"
                  id="feedProfilePhoto"
                  src="data:image/jpeg;base64,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"
                />

                <div id="feedProfileAccount">
                  {' '}
                  <span> glorious_min </span>{' '}
                </div>
              </div>
              <div className="feedImage">
                <img
                  id="feedImage1"
                  alt="feed image"
                  src="https://i.pinimg.com/originals/5d/99/89/5d9989c2ddc5aaa8a8627df55c998b62.jpg"
                />
              </div>

              <div id="feedFunction">
                <img
                  className="feedIcon"
                  id="likesIcon"
                  alt="like icon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt=""
                />
                <img
                  className="feedIcon"
                  id="makeCommentIcon"
                  alt="make comment icon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                />
                <img
                  className="feedIcon"
                  id="shareIcon"
                  alt="share icon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                />
              </div>
              <div id="howManyLikes">spanish_ghetto님외 34명이 좋아합니다</div>
              <div id="feedContentsContainer">
                <span id="feedContentsId">glorious_min</span>
                <span id="feedContents">사진 찍었다.</span>
              </div>
              <div className="feedCommentsListContainer">
                {this.state.list.map((item, i) => {
                  return <Comment comment={item} key={i} />;
                })}
              </div>
              <div
                id="makingCommentContainer"
                onKeyUp={this.activateSubmitButton}
              >
                <i id="smileIcon" class="far fa-smile"></i>
                <input
                  type="text"
                  id="makingComment"
                  placeholder="댓글을 입력하세요"
                  onKeyUp={this.controlComment}
                />
                <button
                  onChange={this.controlButton}
                  style={{ backgroundColor: this.state.submitButtonColor }}
                  type="button"
                  id="submitCommentButton"
                  disabled //={this.submitButtonDisabled}
                >
                  게시
                </button>
              </div>
            </article>
          </div>

          <div className="main-right main-right-media">
            <div id="main-rightFeedProfileContainer">
              <img
                id="main-rightFeedProfilePhoto"
                alt="right feed profile photo"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div id="main-rightFeedProfileAccount">glorious_min</div>
            </div>

            <div className="story">
              <div id="recommandedAccount">
                <div className="recommandedAccountHeader">
                  <div id="recommandedAccountHeaderText">
                    <span id="recommandedAccountForMe">
                      {' '}
                      회원님을 위한 추천{' '}
                    </span>
                    <span id="seeAll">모두보기</span>
                  </div>
                  <div className="recommandedAccountList">
                    <div className="recommandedAccount">
                      <img
                        className="recommandedAccountPhoto"
                        alt="recommanded account photo"
                        src="https://image.shutterstock.com/image-vector/perfect-slogan-colorful-flowers-butterfly-600w-1617104455.jpg"
                        alt=""
                      />
                      <span className="recommandedAccountId">lulu_lala</span>
                    </div>
                    <div className="recommandedAccount">
                      <img
                        className="recommandedAccountPhoto"
                        alt="recommanded account photo"
                        src="https://image.shutterstock.com/image-vector/pretty-hurts-typography-slogan-girl-600w-1305019120.jpg"
                        alt=""
                      />
                      <span className="recommandedAccountId">huhu_haha</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Main;
