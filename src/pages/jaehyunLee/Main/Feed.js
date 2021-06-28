import React, { Component } from 'react';
import Reply from './Reply';

export default class Feed extends Component {
  state = {
    replies: [],
  };

  componentDidMount() {
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

  addReply = content => {
    const newReply = {
      id: Math.random(),
      userName: '재현',
      content: ' ' + content,
      isLike: true,
    };
    this.setState({ replies: [...this.state.replies, newReply] });
    console.log(this.state);
    // this.setState({ replies: this.state.replies.push(newReply) });
  };

  delReply = id => {
    this.setState({
      replies: [...this.state.replies.filter(x => x.id !== id)],
    });
  };

  doLike = id => {
    console.log(id);
    this.setState({
      replies: this.state.replies.map(reply => {
        if (reply.id === id) {
          reply.isLike = !reply.isLike;
        }
        return reply;
      }),
    });
  };

  render() {
    const { content, src, userName } = this.props.feeds;

    return (
      <article id="article">
        <div class="feedTop">
          <div class="whoIsUploader">
            <img
              alt=""
              class="profile"
              src="./images/jaehyunLee/Main/psa.png"
            />
            <span>{userName}</span>
          </div>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <article class="feedImage">
          <img alt="" src={src} />
        </article>
        <Reply
          replies={this.state.replies}
          addReply={this.addReply}
          delReply={this.delReply}
          doLike={this.doLike}
        />
      </article>
    );
  }
}
