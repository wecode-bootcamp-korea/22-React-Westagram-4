
// 필수
import React from 'react';

// 컴포넌트
import Nav from './components/Nav/Nav'

// 기타
import './styles/reset.scss';
import './styles/common.scss';
import './components/Nav/Nav.scss';

class App extends React.Component {

  render(){
  return (
    <div>
      <Nav />
    </div>
  )
 }
}
export default App;
