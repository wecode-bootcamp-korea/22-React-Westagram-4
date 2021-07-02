import React, { Component } from 'react';
import AddReply from './AddReply';
import ShowReplies from './ShowReplies';

export class Reply extends Component {
  clikcHeart = e => {
    this.props.feedLike(this.props.feedsId);
    console.log('실행');
  };

  render() {
    return (
      <div>
        <div className="feedAddOn">
          <div className="feedAddOnLeft">
            <i
              className="far fa-heart likeFeedBtn"
              onClick={this.clikcHeart}
            ></i>
            <i
              className="none fas fa-heart hateFeedBtn"
              onClick={this.clikcHeart}
            ></i>
            <i className="far fa-comment"></i>
            <i className="fas fa-share-alt"></i>
          </div>
          <div className="feedAddOnRight">
            <i className="far fa-bookmark addToFav"></i>
            <i className="none fas fa-bookmark delOfFav"></i>
          </div>
        </div>
        <div className="numOfLikesMain">
          <div className="numOfLikes">
            <img
              alt=""
              className="profile"
              src="./images/jaehyunLee/Main/psa.png"
            />

            <span>{`aineworld님 외  ${this.props.numsOfLikes}명이 좋아합니다.`}</span>
          </div>
        </div>
        <div className="replies">
          <div className="reply">
            <p>canon_mj 위워크에서 진행한 베이킹 클래스...</p>
          </div>
          <div className="reply">
            <p>neceosecius 거봐 좋았잖아~~~~</p>
          </div>
          <div className="reply">
            <p>42분 전</p>
          </div>
        </div>
        {this.props.replies.map(x => (
          <ShowReplies
            key={Math.random()}
            feedId={this.props.feedsId}
            replies={x}
            delReply={this.props.delReply}
            doLike={this.props.doLike}
          />
        ))}
        <AddReply
          feedId={this.props.feedsId}
          addReply={this.props.addReply}
          replies={this.props.replies}
        />
      </div>
    );
  }
}

export default Reply;
