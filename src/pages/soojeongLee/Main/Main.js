// 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

// 컴포넌트
import Nav from '../../../components/Nav/Nav';
import Feed from '../Main/Feed/Feed';
import OtherUserPro from './OtherUserPro/OtherUserPro';
import FootLists from '../Main/Feed/FootLists/FootLists';

// css
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('/data/soojeonglee/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="Main">
        <Nav />
        <main>
          <div className="feeds">
            {feedList.map(feed => {
              return (
                <Feed
                  key={feed.id}
                  userName={feed.userName}
                  src={feed.src}
                  feedText={feed.feedText}
                  commentData={feed.commentData}
                  isLike={feed.isLike}
                />
              );
            })}
          </div>
          <div className="main-right">
            <header className="userAccount">
              <h1>
                <Link className="userProfile mainRightProfile"></Link>
                <Link>
                  <strong>wecode_bootcamp</strong>
                  <span className="accountDec">WeCode - 위코드</span>
                </Link>
              </h1>
            </header>
            <aside className="asideBox storyAside">
              <header>
                <h2>스토리</h2>
                <button className="btnTextColor" type="button">
                  모두 보기
                </button>
              </header>
              <ul className="storyUser">
                <OtherUserPro />
              </ul>
            </aside>

            <aside className="asideBox recommandAside">
              <header>
                <h2>회원님을 위한 추천</h2>
                <button className="btnTextColor" type="button">
                  모두 보기
                </button>
              </header>

              <ul className="recommandUser">
                <li className="otherUserProfile">
                  <span className="profileBox">
                    <Link className="otherUserImg">
                      <img
                        alt="User Profile"
                        src="images/soojeongLee/user5.jpg"
                      />
                    </Link>
                    <Link>
                      limpack_official
                      <span className="followReco">회원님을 위한 추천</span>
                    </Link>
                  </span>
                  <button className="follow" type="button">
                    팔로우
                  </button>
                </li>
                <li className="otherUserProfile">
                  <span className="profileBox">
                    <Link className="otherUserImg">
                      <img
                        alt="User Profile"
                        src="images/soojeongLee/user6.jpg"
                      />
                    </Link>
                    <Link>
                      les_photos_de_cat
                      <span className="followReco">
                        geee____nie님 외 1명이 팔로우합니다.
                      </span>
                    </Link>
                  </span>
                  <button className="follow" type="button">
                    팔로우
                  </button>
                </li>
                <li className="otherUserProfile">
                  <span className="profileBox">
                    <Link className="otherUserImg">
                      <img
                        alt="User Profile"
                        src="images/soojeongLee/user7.jpg"
                      />
                    </Link>
                    <Link>
                      mornstar_nail
                      <span className="followReco">
                        effie_yxz님 외 3명이 팔로우합니다
                      </span>
                    </Link>
                  </span>
                  <button className="follow" type="button">
                    팔로우
                  </button>
                </li>
              </ul>
            </aside>
            <footer className="main-right-footer">
              <ul className="footList">
                <FootLists />
              </ul>
              <span className="copyright">© 2021 INSTAGRAM FROM FACEBOOK</span>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}
export default Main;
