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
      comment: '',
      commentList: [],
      isLike: false,
    };
  }

  componentDidMount() {
    this.setState({
      commentList: this.props.commentData,
      isLike: this.props.isLike,
    });
  }

  hadComment = event => {
    this.setState({
      comment: event.target.value,
    });
  };

  submitComent = () => {
    this.setState({
      commentList: this.state.commentList.concat([
        {
          id: this.state.commentList.length + 1,
          userName: 'eessoo__',
          content: this.state.comment,
          commentLike: false,
        },
      ]),
      comment: '',
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submitComent();
    }
  };

  handleLike = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };

  // 추가 기능 구현 중
  // handleCommnetDelete = id => {
  //   const newCommentList = this.state.commentList.filter(comment => {
  //     return comment.id !== id;
  //   });

  //   this.setState({
  //     commentList: newCommentList,
  //   });
  // };

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
              <button
                className="leftButton"
                type="button"
                onClick={this.handleLike}
              >
                {this.state.isLike ? (
                  <i className="fas fa-heart" />
                ) : (
                  <i className="far fa-heart" />
                )}
              </button>
              <button className="leftButton" type="button">
                <i className="far fa-comment" />
              </button>
              <button className="leftButton" type="button">
                <i className="fas fa-external-link-alt" />
              </button>
            </li>
            <li className="reactionsRight">
              <button className="rightButton">
                <i className="far fa-bookmark" />
              </button>
            </li>
          </ul>
          <h2>
            <Link className="userProfile feedConUser"></Link>
            <b>eessoo__</b>님 외
            <button className="likeCount">
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
                  // 추가 기능 구현 중
                  // handleCommnetDelete={this.handleCommnetDelete}
                  // id={comment.id}
                />
              );
            })}
          </ul>
        </section>
        <footer className="feedFooter">
          <form className="inputBox" onKeyPress={this.handleKeyPress}>
            <input
              autoComplete="off"
              onChange={this.hadComment}
              className="comment"
              value={this.state.comment}
              type="text"
              placeholder="댓글 달기..."
            />
            <button
              onClick={this.submitComent}
              className="commentSubmit"
              type="button"
            >
              게시
            </button>
          </form>
        </footer>
      </article>
    );
  }
}

export default Feed;
