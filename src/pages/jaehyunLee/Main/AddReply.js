import React, { Component } from 'react';

export class AddReply extends Component {
  state = {
    content: '',
  };

  setContent = e => {
    this.setState({ content: e.target.value });
  };

  setReply = e => {
    if (e.key === 'Enter') {
      this.props.addReply(this.state.content, this.props.feedId);
      this.setState({ content: '' });
    } else if (e.type === 'click') {
      this.props.addReply(this.state.content, this.props.feedId);
      this.setState({ content: '' });
    }
  };

  render() {
    return (
      <div>
        <div className="ReplyBar">
          <input
            onChange={this.setContent}
            onKeyPress={this.setReply}
            className="newReplyInput"
            type="text"
            placeholder="댓글 달기..."
            value={this.state.content}
          />
          <button className="forTab uploadReply">
            <div onClick={this.setReply} className="uploadReply">
              게시
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default AddReply;
