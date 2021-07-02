import React, { Component } from 'react';

//import COMMENT from '../../data/commentData';
import commentData from '../../data/commentData.json';
class Comment extends Component {
  render() {
    return (
      <>
        <li>
          <span>{this.props.comment}</span>
          <button>x</button>
        </li>
      </>
    );
  }
}

export default Comment;
