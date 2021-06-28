import React, { Component } from 'react';

export class AddReply extends Component {
  state = {
    content: '',
  };

  setReply = e => {
    if (e.key === 'Enter') {
      this.props.addReply(e.target.value);
      // this.setState({ content: e.target.value });
      e.target.value = '';
    }
  };

  render() {
    return (
      <div>
        <div class="ReplyBar">
          <input
            onKeyPress={this.setReply}
            class="newReplyInput"
            type="text"
            placeholder="댓글 달기..."
          />
          <button class="forTab uploadReply">
            <div onClick={this.setReply} class="uploadReply">
              게시
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default AddReply;
