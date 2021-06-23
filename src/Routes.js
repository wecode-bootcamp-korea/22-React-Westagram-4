import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// 경민's 컴포넌트
import LoginGyeongmin from './pages/gyeongminLee/Login/Login';
import MainGyeongmin from './pages/gyeongminLee/Main/Main';

// 재현's 컴포넌트
import LoginJaehyun from './pages/jaehyunLee/Login/Login';
import MainJaehyun from './pages/jaehyunLee/Main/Main';

// 수정's 컴포넌트
import LoginSoojeong from './pages/SoojeongLee/Login/Login';
import MainSoojeong from './pages/SoojeongLee/Main/Main';

// 공용 컴포넌트


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login-Gyeongmin' component={LoginGyeongmin} />
          <Route exact path='/main-Gyeongmin' component={MainGyeongmin} />
          <Route exact path='/login-Jaehyun' component={LoginJaehyun} />
          <Route exact path='/main-Jaehyun' component={MainJaehyun} />
          <Route exact path='/login-Soojeong' component={LoginSoojeong} />
          <Route exact path='/main-Soojeong' component={MainSoojeong} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;