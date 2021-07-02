import React, { Component } from 'react';

//import COMMENT from '../../data/commentData';
import commentData from '../../data/commentData.json';
class Comment extends Component {


  render() {
    return (
      <>
        <li>
          <span>
            {this.props.list.map(data => {
             
              return (
              id={commentData.id} // 
              comment={comment.content}
              userName={comment.userName}
              value={newCommentValue}
              );
            })}
          </span>

          <button>x</button>
        </li>
      </>
    );
  }
}

export default Comment;
