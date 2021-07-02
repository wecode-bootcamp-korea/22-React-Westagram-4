import React, { Component } from 'react';
import Feed from './Feed';

export default class Feeds extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/jaehyunLee/mockFeeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  feedLike = feedId => {
    let newFeeds = this.state.feeds;
    console.log(newFeeds, feedId);
    newFeeds[feedId].numsOfLikes = newFeeds[feedId].numsOfLikes + 1;
    this.setState({ feeds: newFeeds });
  };

  addReply = (content, feedId) => {
    const newReply = {
      id: Math.random(),
      userName: '재현',
      content: ' ' + content,
      isLike: true,
    };

    const { feeds } = this.state;

    let newFeeds = feeds;
    newFeeds[feedId].replies = [...newFeeds[feedId].replies, newReply];
    this.setState({ feeds: newFeeds });
  };

  delReply = (feedId, id) => {
    const { feeds } = this.state;

    let newFeeds = feeds;
    newFeeds[feedId].replies = newFeeds[feedId].replies.filter(
      x => x.id !== id
    );

    this.setState({ feeds: newFeeds });
  };

  doLike = (feedId, replyId) => {
    const { feeds } = this.state;

    let newFeeds = feeds;
    newFeeds[feedId].replies = newFeeds[feedId].replies.map(replies => {
      if (replies.id === replyId) {
        replies.isLike = !replies.isLike;
      }

      return replies;
    });

    this.setState({ feeds: newFeeds });
  };

  addFeed = (content, src, userName) => {
    const newFeed = {
      id: Math.random(),
      userName: userName,
      content: content,
      src: src,
      isLike: true,
    };
    this.setState({ feeds: [...this.state.feeds, newFeed] });
  };

  render() {
    return (
      <div>
        {this.state.feeds.map(feed => (
          <Feed
            // feeds={feed} feed를 넘겨서 this.props.feed.@@@으로 가는게 나을지도?
            // {src,userName,Id,replies} = this.props.feed
            key={Math.random()}
            feedSrc={feed.src}
            feedUserName={feed.userName}
            feedId={feed.id}
            replies={feed.replies}
            addReply={this.addReply}
            delReply={this.delReply}
            doLike={this.doLike}
            numsOfLikes={feed.numsOfLikes}
            feedLike={this.feedLike}
          />
        ))}
      </div>
    );
  }
}
