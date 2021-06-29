import React, { Component } from 'react';

export class ShowReplies extends Component {
  downReply = e => {
    this.props.delReply(this.props.feedId, this.props.replies.id);
  };

  setLike = e => {
    this.props.doLike(this.props.feedId, this.props.replies.id);
  };

  render() {
    const { userName, content } = this.props.replies;

    return (
      <div className="ReplyBar">
        <div>
          <span>{userName}</span>
          <span>{content}</span>
        </div>
        <div>
          <img
            className={this.props.replies.isLike ? `delete` : `none delete`}
            src="./images/jaehyunLee/Main/like.png"
            alt=""
            onClick={this.setLike}
          />
          <img
            className={this.props.replies.isLike ? `none delete` : `delete`}
            src="./images/jaehyunLee/Main/islike.png"
            alt=""
            onClick={this.setLike}
          />
          <img
            className="delete"
            src="./images/jaehyunLee/Main/deleteReply.jpg"
            alt=""
            onClick={this.downReply}
          />
        </div>
      </div>
    );
  }
}

export default ShowReplies;
