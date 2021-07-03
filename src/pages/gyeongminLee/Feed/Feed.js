import React, { Component } from 'react';
import Comment from '../Main/Comment/Comment';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      newCommentValue: '',
      commentList: [],
      //feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  controlButton = event => {
    if (event.target.type === 'text') {
      this.setState({
        newCommentValue: event.target.value,
      });
    } else if (event.target.type === 'button') {
      this.setState({
        submitButtonColor: event.target.backgroundColor,
      });
    }
  };

  controlKeyPress = event => {
    const { commentList, newCommentValue } = this.state;
    if (event.key === 'Enter') {
      this.setState({
        commentList: [
          ...commentList,
          {
            id: commentList.length + 1,
            userName: 'glorious_min',
            content: newCommentValue,
          },
        ],

        newCommentValue: '',
      });
    }
  };
  render() {
    const { commentList, newCommentValue } = this.state;
    const commentValid = this.state.newCommentValue.length > 0;
    return (
      <>
        <div className="feedTop">
          <img
            alt="feed profile"
            id="feedProfilePhoto"
            src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271_1280.png"
          />
          <div id="feedProfileAccount">
            <span> glorious_min </span>
          </div>
        </div>
        <div className="feedImage">
          <img
            id="feedImage1"
            alt="feed"
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
          {this.state.commentList.map(comment => {
            return (
              <Comment
                userName={comment.userName}
                comment={comment.content}
                id={comment.id}
                value={newCommentValue}
              />
            );
          })}
        </div>
        <div id="makingCommentContainer" onChange={this.controlButton}>
          <i id="smileIcon" class="far fa-smile"></i>
          <input
            type="text"
            id="makingComment"
            placeholder="댓글을 입력하세요"
            onKeyUp={this.controlKeyPress}
          />
          <button
            style={{
              backgroundColor: commentValid ? '#0095F6' : '#B2DFFC',
            }}
            disabled={commentValid ? false : true}
            type="button"
            id="submitCommentButton"
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Feed;
