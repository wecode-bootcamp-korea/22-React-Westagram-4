//라이브러리

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//스타일
import './Comment.scss';

export class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentLike: false,
    };
  }

  componentDidMount() {
    this.setState({
      commentLike: this.props.commnetLike,
    });
  }

  handleCommnetLike = () => {
    this.setState({
      commentLike: !this.state.commentLike,
    });
  };

  render() {
    return (
      <li>
        <Link className="commentUserId">{this.props.name} </Link>
        <span className="commnetList">{this.props.comment}</span>
        <button className="commentLike" onClick={this.handleCommnetLike}>
          {this.state.commentLike ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </button>
        <i class="far fa-trash-alt"></i>
      </li>
    );
  }
}

export default Comment;
