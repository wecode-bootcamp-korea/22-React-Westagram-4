// 필수
import React from 'react';

// 컴포넌트
import Nav from '../../../components/Nav/Nav';
import AsideRight from './AsideRight';
import Feeds from './Feeds';

import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div class="flex-center">
        <Nav />
        <main class="mainDiv">
          <Feeds />
          <AsideRight />
        </main>
      </div>
    );
  }
}
export default Main;
