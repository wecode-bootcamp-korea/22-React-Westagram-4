import React, { Component } from 'react';

//import COMMENT from '../../data/commentData';

class Comment extends Component {
  render() {
    //console.log(this.props.id);
    return (
      <>
        <li key={this.props.commentKey}>
          <span>{this.props.userName}</span>
          <span>{this.props.comment}</span>

          <button>x</button>
          <button>♡</button>
        </li>
      </>
    );
  }
}

export default Comment;
