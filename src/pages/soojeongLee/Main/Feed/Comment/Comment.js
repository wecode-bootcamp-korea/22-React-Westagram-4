import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="" className="commentUserId">
          {this.props.userName}
        </Link>
        <span className="commnetList">{this.props.content}</span>
        <button className="commentLike" onClick={this.handleCommnetLike}>
          {this.state.commentLike ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </button>
        {/* 추가 기능 구현 중 */}
        {/* <button
          className="commentDelete"
          onClick={() => this.props.handleCommnetDelete(this.props.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button> */}
      </li>
    );
  }
}

export default Comment;
