import React from 'react';
class Comment extends React.Component {
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
