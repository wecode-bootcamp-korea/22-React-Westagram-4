import React, { Component } from 'react';
import Reply from './Reply';

export default class Feed extends Component {
  render() {
    const {
      feedSrc,
      feedUserName,
      feedId,
      replies,
      addReply,
      delReply,
      doLike,
    } = this.props;
    return (
      <article id="article">
        <div className="feedTop">
          <div className="whoIsUploader">
            <img
              alt=""
              className="profile"
              src="./images/jaehyunLee/Main/psa.png"
            />
            <span>{feedUserName}</span>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <article className="feedImage">
          <img alt="" src={feedSrc} />
        </article>
        <Reply
          feedsId={feedId}
          replies={replies}
          addReply={addReply}
          delReply={delReply}
          doLike={doLike}
          numsOfLikes={this.props.numsOfLikes}
          feedLike={this.props.feedLike}
        />
      </article>
    );
  }
}
