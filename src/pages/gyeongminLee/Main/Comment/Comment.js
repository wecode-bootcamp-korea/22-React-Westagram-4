import React, { Component } from 'react';

//import COMMENT from '../../data/commentData';

class Comment extends Component {
  render() {
    return (
      <>
        <li>
          <span>{this.props.userName}</span>
          <span>{this.props.comment}</span>

          <button>x</button>
        </li>
      </>
    );
  }
}

export default Comment;
