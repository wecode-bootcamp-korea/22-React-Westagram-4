//라이브러리
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//컴포넌트
import Comment from './Comment/Comment';

// css
import '../Feed/Feed.scss';

export class Feed extends Component {
  constructor() {
    super();
    this.state = {
      // 초기셋팅
      comment: '',
      commentList: [],
      isLike: false,
    };
  }

  // js 일 때,
  // componentDidMount() {
  //   this.setState({
  //     commentList: COMMENT,
  //   });
  // }

  // fetch 일 때,
  componentDidMount() {
    this.setState({
      commentList: this.props.commentData,
      isLike: this.props.isLike,
    });
  }

  hadComment = event => {
    //input 값 입력되었을 때
    this.setState({
      comment: event.target.value,
    });
  };

  submitComent() {
    // mock - data 이전
    //button을 클릭했을 때
    // event.preventDefault();
    // this.setState({
    //   commentList: this.state.commentList.concat([this.state.comment]), // 댓글 추가
    //   comment: '', // 인풋 밸류 초기화
    // });

    // fetch('http://10.58.3.29:8000/postings/post/2/comment/create', {
    //   method: 'POST',
    //   headers: {
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZXhwIjoxNjI1MDYxMTIyfQ.svGswFZtglbdmhoYojR8gmXD14fTI4L3Y3t2SRMSymE',
    //   },
    //   body: JSON.stringify({
    //     content: this.state.comment,
    //   }),
    // })
    //   .then(response => response.json())
    //   // result : 백에서 전달됨. 통신할 때 정해준 값으로
    //   .then(result => {
    //     console.log(result);
    //     // if (result.message === 'success') {
    //     //   // if 조건을 바꿔주기
    //     //   console.log(result.access_token);
    //     //   // localStorage.setItem('access_token', result.access_token);
    //   });

    // mock - data 적용한 코드
    const { commentList } = this.state;
    this.setState({
      commentList: commentList.concat([
        {
          id: commentList.length + 1,
          userName: 'eessoo__',
          content: this.state.comment,
          commentLike: false,
        },
      ]),
      comment: '',
    });
  }

  handleKeyPress = event => {
    //input 창에서 enter press 했을 때
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submitComent();
    }
  };

  // 발생한 이벤트의 값을 따로 전달하지 않아도 되어서
  handleLike = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
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
              <button type="button" onClick={this.handleLike}>
                {this.state.isLike ? (
                  <i className="fas fa-heart"></i>
                ) : (
                  <i className="far fa-heart"></i>
                )}
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
                <Comment
                  key={comment.id}
                  name={comment.userName}
                  comment={comment.content}
                  commnetLike={comment.commnetLike}
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
