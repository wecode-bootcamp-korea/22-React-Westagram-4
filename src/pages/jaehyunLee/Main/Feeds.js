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

  addReply = (content, id) => {
    const newReply = {
      id: Math.random(),
      userName: '재현',
      content: ' ' + content,
      isLike: true,
    };

    let newFeeds = this.state.feeds;
    newFeeds[id].reply = [...newFeeds[id].reply, newReply];
    this.setState({ feeds: newFeeds });
    // console.log(this.state.feeds[id]);
  };

  delReply = (feedId, id) => {
    let newFeeds = this.state.feeds;
    newFeeds[feedId].reply = newFeeds[feedId].reply.filter(x => x.id !== id);
    // console.log(newFeeds);

    this.setState({ feeds: newFeeds });
  };

  doLike = (feedId, replyId) => {
    let newFeeds = this.state.feeds;
    newFeeds[feedId].reply = newFeeds[feedId].reply.map(x => {
      if (x.id === replyId) {
        x.isLike = !x.isLike;
      }

      return x;
    });
    // console.log(replyId);
    console.log(newFeeds);

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
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        {' '}
        {this.state.feeds.map(x => (
          <Feed
            feedId={x.id}
            feeds={x}
            replies={x.reply}
            addReply={this.addReply}
            delReply={this.delReply}
            doLike={this.doLike}
          />
        ))}
      </div>
    );
  }
}
