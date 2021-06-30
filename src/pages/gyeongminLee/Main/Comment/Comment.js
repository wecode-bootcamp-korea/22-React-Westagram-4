import React from 'react';
//import COMMENT from './commentData';

class Comment extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     commentList: [],
  //     commentValue: '',
  //   };
  // }

  // componentDidMount() {
  //   this.setState({
  //     commentList: COMMENT,
  //   });
  // }

  // handleCommentValue = e => {
  //   this.setState({
  //     commentValue: e.target.value,
  //   });
  // };

  // addComment = e => {
  //   e.preventDefault();
  //   const { commentList, commentValue } = this.state;
  //   this.setState({
  //     commentList: [
  //       ...commentList,
  //       {
  //         id: commentList.length + 1,
  //         content: commentValue,
  //       },
  //     ],
  //     commentValue: '',
  //   });
  // };

  render() {
    //console.log(this.props.comment);
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
