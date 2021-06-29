//라이브러리
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//컴포넌트
import { FOOTLIST } from '../FootLists/footData';

export class FootLists extends Component {
  render() {
    return FOOTLIST.map(footlists => {
      return <Link class="listDot">{footlists.footlist}</Link>;
    });
  }
}

export default FootLists;
