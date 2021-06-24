// 필수
import React from 'react';
import { Link } from 'react-router-dom';

// 컴포넌트
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <main>
          <div className="feeds">
            <article>
              <header>
                <h1>
                  <Link className="contentHeader"></Link>
                  <Link className="userName">eessoo__</Link>
                </h1>
                <button className="ellipsis" type="button">
                  <i className="fas fa-ellipsis-h ellipsisIcon"></i>
                </button>
              </header>
              <section className="feedContent">
                <img alt="feedImage" src="images/soojeongLee/feedImage.jpg" />
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
                  나의 새로운 취미 ✂️
                  <span className="postTime">54분 전</span>
                </p>
                <ul id="commnetBox"></ul>
              </section>
              <footer>
                <div className="inputBox">
                  <input
                    id="userComment"
                    className="comment"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button className="commentSubmit" type="submit">
                    게시
                  </button>
                </div>
              </footer>
            </article>
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
                    <Link href="#">
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

            <footer>
              <ul className="footList">
                <li>
                  <Link>소개</Link>
                </li>
                <li>
                  <Link>도움말</Link>
                </li>
                <li>
                  <Link href="#">홍보 센터</Link>
                </li>
                <li>
                  <Link href="#">API</Link>
                </li>
                <li>
                  <Link href="#">채용 정보</Link>
                </li>
                <li>
                  <Link href="#">개인정보처리방침</Link>
                </li>
                <li>
                  <Link href="#">약관</Link>
                </li>
                <li>
                  <Link href="#">위치</Link>
                </li>
                <li>
                  <Link href="#">인기 계정</Link>
                </li>
                <li>
                  <Link href="#">해시태그</Link>
                </li>
                <li>
                  <Link href="#">언어</Link>
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
