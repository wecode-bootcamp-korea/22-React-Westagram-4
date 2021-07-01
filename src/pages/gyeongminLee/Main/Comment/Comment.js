import React, { Component } from 'react';

import COMMENT from '../../data/commentData';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  componentDidMount() {
    this.setState({
      commentList: COMMENT,
    });
  }

  handleCommentValue = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: 'wecode',
          content: commentValue,
          isLiked: false,
        },
      ],
      commentValue: '',
    });
  };

  render() {
    //console.log(this.props.comment);
    //console.log(this.setState.commentList);
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
