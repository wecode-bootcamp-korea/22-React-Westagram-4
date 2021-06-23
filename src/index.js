//필수
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// 스타일
import '../src/styles/reset.scss';
import '../src/styles/common.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
