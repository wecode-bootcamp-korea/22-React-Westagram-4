import React, { Component } from 'react';
import AddReply from './AddReply';
import ShowReplies from './ShowReplies';

export class Reply extends Component {
  render() {
    return (
      <div>
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
        </div>
        {this.props.replies.map(x => (
          <ShowReplies
            replies={x}
            delReply={this.props.delReply}
            doLike={this.props.doLike}
          />
        ))}
        <AddReply
          feedsId={this.props.feedsId}
          addReply={this.props.addReply}
          replies={this.props.replies}
        />
      </div>
    );
  }
}

export default Reply;
