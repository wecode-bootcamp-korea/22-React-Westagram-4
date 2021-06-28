// 필수
import React from 'react';
import { Link } from 'react-router-dom';

// 컴포넌트
import Nav from '../../../components/Nav/Nav';
// import Commnet from '../Main/Commnet/Commnet';
import Feed from '../Main/Feed/Feed';
// import COMMENT from '../Main/Commnet/commentData';

// 스타일
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  // fetch의 짝궁
  componentDidMount() {
    fetch('http://localhost:3000/data/soojeonglee/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
        // console.log(`feedList data>>>`, data);// 페칭 할때 콘솔로 데이터 들어오는지 확인하기!
      });
  }

  render() {
    return (
      <div className="Main">
        <Nav />
        <main>
          <div className="feeds">
            {this.state.feedList.map(feed => {
              return (
                <Feed
                  key={feed.id}
                  userName={feed.userName}
                  src={feed.src}
                  feedText={feed.feedText}
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
                <li>
                  <Link className="otherUserImg">
                    <img
                      alt="User Profile"
                      src="images/soojeongLee/user1.jpg"
                    />
                  </Link>
                  <Link>
                    namzieun<span className="postTime">16분 전</span>
                  </Link>
                </li>
                <li>
                  <Link className="otherUserImg">
                    <img
                      alt="User Profile"
                      src="images/soojeongLee/user2.jpg"
                    />
                  </Link>
                  <Link>
                    zz_ing94<span className="postTime">40분 전</span>
                  </Link>
                </li>
                <li>
                  <Link className="otherUserImg">
                    <img
                      alt="User Profile"
                      src="images/soojeongLee/user3.jpg"
                    />
                  </Link>
                  <Link>
                    hwayoonci<span className="postTime">2시간 전</span>
                  </Link>
                </li>
                <li>
                  <Link className="otherUserImg">
                    <img
                      alt="User Profile"
                      src="images/soojeongLee/user4.jpg"
                    />
                  </Link>
                  <Link>
                    cosz_zy<span className="postTime">20시간전</span>
                  </Link>
                </li>
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
                <li>
                  <Link>소개</Link>
                </li>
                <li>
                  <Link>도움말</Link>
                </li>
                <li>
                  <Link>홍보 센터</Link>
                </li>
                <li>
                  <Link>API</Link>
                </li>
                <li>
                  <Link>채용 정보</Link>
                </li>
                <li>
                  <Link>개인정보처리방침</Link>
                </li>
                <li>
                  <Link>약관</Link>
                </li>
                <li>
                  <Link>위치</Link>
                </li>
                <li>
                  <Link>인기 계정</Link>
                </li>
                <li>
                  <Link>해시태그</Link>
                </li>
                <li>
                  <Link>언어</Link>
                </li>
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
