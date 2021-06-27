import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//스타일
import './Commnet.scss';

export class Commnet extends Component {
  render() {
    console.log(`this.props.aaa ?>>`, this.props.aaa);
    return (
      <div>
        <li>
          <Link className="commentUserId">eessoo__</Link>
          {this.props.aaa}
          {/* 댓글 값만 들어오면돼 값이 안들어오네 뭐로 지정해야하지*/}
        </li>
      </div>
    );
  }
}

export default Commnet;

//
// {this.props.commentList.map((comment, index) => {
//   return (
//     <li key={index}>
//       <Link className="commentUserId">eessoo__</Link>
//       {comment}
//     </li>
//   );
// })}

// - **map 함수를 활용해 댓글 목록을 구현해주세요.**
// - 댓글 하나를 컴포넌트화 시켜주세요.
// - 부모의 `state` 에 저장된 댓글 데이터에 `Array.map()`
// 메소드를 적용해 댓글의 개수만큼 댓글 컴포넌트가 나타나게 해주세요.
// - 필요한 데이터를 `props` 로 넘겨주세요.
// - 기존에 보였던 대로 댓글이 화면에 나타나면 과제 완료입니다.
