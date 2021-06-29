//라이브러리

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//스타일
import './Comment.scss';

export class Comment extends Component {
  render() {
    return (
      <li>
        <Link className="commentUserId">{this.props.name} </Link>
        <span className="commnetList">{this.props.comment}</span>
      </li>
    );
  }
}

export default Comment;
