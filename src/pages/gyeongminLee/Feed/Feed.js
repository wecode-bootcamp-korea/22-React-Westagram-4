import React, { Component } from 'react';
import Comment from '../Main/Comment/Comment';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      newCommentValue: '',
      commentList: [],
      feedProfilePhoto: null,
      feedImage: null,
      howManyLikes: '',
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
        <article>
          <div className="feedTop">
            <img
              alt="feed profile"
              id="feedProfilePhoto"
              src={this.props.feedProfilePhoto}
            />
            <div id="feedProfileAccount">
              <span> {this.props.feedId} </span>
            </div>
          </div>
          <div className="feedImage">
            <img id="feedImage1" alt="feed" src={this.props.feedImage} />
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
          <div id="howManyLikes">{this.props.howManyLikes}</div>
          <div id="feedContentsContainer">
            <span id="feedContentsId">{this.props.feedId}</span>
            <span id="feedContents">{this.props.feedContent}</span>
          </div>

          <div className="feedCommentsListContainer">
            {commentList.map(comment => {
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
        </article>
      </>
    );
  }
}

export default Feed;
