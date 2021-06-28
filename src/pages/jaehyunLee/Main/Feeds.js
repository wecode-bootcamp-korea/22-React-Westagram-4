import React, { Component } from 'react';
import Feed from './Feed';
import Reply from './Reply';

export default class Feeds extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/mockFeeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
    fetch('http://localhost:3000/data/MockReplies.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          replies: data,
        });
      });
  }

  addFeed = (content, src, userName) => {
    const newFeed = {
      id: Math.random(),
      userName: userName,
      content: content,
      src: src,
      isLike: true,
    };
    this.setState({ feeds: [...this.state.feeds, newFeed] });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {' '}
        {this.state.feeds.map(x => (
          <Feed feeds={x} />
        ))}
      </div>
    );
  }
}
