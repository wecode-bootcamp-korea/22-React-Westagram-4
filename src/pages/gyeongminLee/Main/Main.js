// 필수
import React from 'react';
//import Comment from './Comment/Comment';
import Feed from '../Feed/Feed';
//import commentData from '../data/commentData';
//import CommentData from '../';
// 컴포넌트
import Nav from '../../../components/Nav/Nav';
import './Main.scss';
import FEED from '../Feed/feedData';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      feedProfilePhoto: null,
      feedImage: null,
      howManyLikes: '',
    };
  }
  // setFeedList() {
  //   this.state({
  //     feedList: [
  //     ...feedList,
  //       {
  //         id: FEED.length + 1,
  //         feedId: 'glorious_min',
  //         feedImage: '',
  //         howManyLikes: 'lalala 님 외 80명이 좋아요를 눌렀습니다',
  //         feedContent: '아무것도 하기 싫다',
  //       },
  //     ],
  //   });
  // }

  componentDidMount() {
    this.setState({
      feedList: FEED,
    });
  }

  render() {
    return (
      <>
        <Nav />
        <main className="mainPageMain">
          <div className="feeds">
            {this.state.feedList.map(feed => {
              return (
                <article key={feed.id}>
                  <Feed
                    id={feed.id}
                    feedProfilePhoto={feed.feedProfilePhoto}
                    feedImage={feed.feedImage}
                    feedId={feed.feedId}
                    howManyLikes={feed.howManyLikes}
                    feedContent={feed.feedContent}
                  />
                </article>
              );
            })}
          </div>

          <div className="main-right main-right-media">
            <div id="main-rightFeedProfileContainer">
              <img
                id="main-rightFeedProfilePhoto"
                alt="right feed profile photo"
                src="https://cdn.pixabay.com/photo/2020/12/06/16/16/cosmos-5809271_1280.png"
                alt=""
              />
              <div id="main-rightFeedProfileAccount">glorious_min</div>
            </div>
            <div className="story">
              <div id="recommandedAccount">
                <div className="recommandedAccountHeader">
                  <div id="recommandedAccountHeaderText">
                    <span id="recommandedAccountForMe">
                      {' '}
                      회원님을 위한 추천{' '}
                    </span>
                    <span id="seeAll">모두보기</span>
                  </div>
                  <div className="recommandedAccountList">
                    <div className="recommandedAccount">
                      <img
                        className="recommandedAccountPhoto"
                        alt="recommanded account photo"
                        src="https://image.shutterstock.com/image-vector/perfect-slogan-colorful-flowers-butterfly-600w-1617104455.jpg"
                        alt=""
                      />
                      <span className="recommandedAccountId">lulu_lala</span>
                    </div>
                    <div className="recommandedAccount">
                      <img
                        className="recommandedAccountPhoto"
                        alt="recommanded account photo"
                        src="https://image.shutterstock.com/image-vector/pretty-hurts-typography-slogan-girl-600w-1305019120.jpg"
                        alt=""
                      />
                      <span className="recommandedAccountId">huhu_haha</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Main;
