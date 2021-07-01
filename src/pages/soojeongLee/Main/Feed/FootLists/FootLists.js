//라이브러리
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//컴포넌트
import { FOOTLIST } from '../FootLists/footData';

// css
import './FootLists.scss';

export class FootLists extends Component {
  render() {
    return FOOTLIST.map(footlists => {
      return (
        <Link to="" className="listDot" key={footlists.id}>
          {footlists.footlist}
        </Link>
      );
    });
  }
}

export default FootLists;
