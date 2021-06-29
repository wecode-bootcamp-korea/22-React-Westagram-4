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
        <div class="feedTop">
          <div class="whoIsUploader">
            <img
              alt=""
              class="profile"
              src="./images/jaehyunLee/Main/psa.png"
            />
            <span>{feedUserName}</span>
          </div>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <article class="feedImage">
          <img alt="" src={feedSrc} />
        </article>
        <Reply
          feedsId={feedId}
          replies={replies}
          addReply={addReply}
          delReply={delReply}
          doLike={doLike}
        />
      </article>
    );
  }
}
