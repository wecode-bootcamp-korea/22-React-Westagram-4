import React, { Component } from 'react';

//import COMMENT from '../../data/commentData';

class Comment extends Component {
  render() {
    console.log(this.props.userName);
    //이상한점 - 내가 인풋에 글자 입력한글자씩 할때마다 데이터의
    // 유저네임이 차례대로 콘솔에 찍힘
    //엔터입력하면controlKeyPress 함수에 의해 setState 되어 입력해둔 내 아이디가 화면에 렌더링 되는것 같다.
    // 그리고 엔터쳤을떄에야 이미 입력해둔 내 닉네임이 찍힘
    //

    console.log('라이프사이클 확인 :  Comment.js의 render() ');
    return (
      <>
        <li>
          <span>{this.props.userName}</span>
          <span>{this.props.comment}</span>

          {/* 위의 한 줄을 지우면 새로운 댓글의 댓글 내용, 데이터의 댓글 내용이 나오지 않는다
           데이터와 내가 직접 입력한 댓글 모두 이 코드를 거친다는 것 을 알 수 있다
           언제 거쳐가는 거지????
           내가 댓글을 직접 입력할때 - 
           
           
           */}
          <button>x</button>
          <button>♡</button>
        </li>
      </>
    );
  }
}

export default Comment;
