import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Commnet from '../Feed/Commnet/Commnet';

import '../Feed/Feed.scss';

export class Feed extends Component {
  constructor() {
    super();
    this.state = {
      // 초기셋팅
      comment: '',
      commentList: [],
    };
  }

  // js 일 때,
  // componentDidMount() {
  //   this.setState({
  //     commentList: COMMENT,
  //   });
  // }

  // json 일 때,
  componentDidMount() {
    fetch('http://localhost:3000/data/soojeonglee/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
        // console.log(`data>>>`, data); // 페칭 할때 콘솔로 데이터 들어오는지 확인하기!
      });
  }

  hadComment = event => {
    //input 값 입력되었을 때
    this.setState({
      comment: event.target.value,
    });
  };

  submitComent = event => {
    // 기존 코드
    //button을 클릭했을 때
    // event.preventDefault();
    // this.setState({
    //   commentList: this.state.commentList.concat([this.state.comment]), // 댓글 추가
    //   comment: '', // 인풋 밸류 초기화
    // });

    // mock - data 적용한 코드
    const { commentList, comment } = this.state;
    this.setState({
      commentList: this.state.commentList.concat([
        {
          id: commentList.length + 1,
          userName: 'eessoo__',
          content: comment,
          isLiked: false,
        },
      ]),
      comment: '',
    });
  };

  // // // ❗️ 충돌 발생
  handleKeyPress = event => {
    //input 창에서 enter press 했을 때
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submitComent();
    }
  };

  render() {
    return (
      <article>
        <header>
          <h1>
            <Link className="contentHeader"></Link>
            <Link className="userName">{this.props.userName}</Link>
          </h1>
          <button className="ellipsis" type="button">
            <i className="fas fa-ellipsis-h ellipsisIcon"></i>
          </button>
        </header>
        <section className="feedContent">
          <img alt="feedImage" src={this.props.src} />
          <ul className="reactionsBox">
            <li className="reactionsLeft">
              <button type="button">
                <i className="far fa-heart"></i>
              </button>
              <button type="button">
                <i className="far fa-comment"></i>
              </button>
              <button type="button">
                <i className="fas fa-external-link-alt"></i>
              </button>
            </li>
            <li className="reactionsRight">
              <button>
                <i className="far fa-bookmark"></i>
              </button>
            </li>
          </ul>
          <h2>
            <Link className="userProfile feedConUser"></Link>
            <b>eessoo__</b>님 외
            <button>
              <b> 7명</b>
            </button>
            이 좋아합니다.
          </h2>
          <p className="feedText">
            {this.props.feedText}
            <span className="postTime">54분 전</span>
          </p>
          <ul id="commnetBox">
            {this.state.commentList.map(comment => {
              return (
                <Commnet
                  key={comment.id}
                  name={comment.userName}
                  comment={comment.content}
                />
              );
            })}
          </ul>
        </section>
        <footer>
          <form className="inputBox">
            <input
              autoComplete="off"
              onChange={this.hadComment}
              onKeyPress={this.handleKeyPress}
              id="userComment"
              className="comment"
              value={this.state.comment}
              type="text"
              placeholder="댓글 달기..."
            />
          </form>
          <button
            onClick={this.submitComent}
            className="commentSubmit"
            type="submit"
          >
            게시
          </button>
        </footer>
      </article>
    );
  }
}

export default Feed;
