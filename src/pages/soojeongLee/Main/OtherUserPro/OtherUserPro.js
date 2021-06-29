import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PROFILE } from '../OtherUserPro/OtherUserProData';

// css
import './OtherUserPro.scss';

export class otherUserProp extends Component {
  //여기서 데이터 받아오기

  render() {
    return PROFILE.map(propfileLists => {
      return (
        <li key={propfileLists.id}>
          <Link className="otherUserImg">
            <img alt="User Profile" src={propfileLists.src} />
          </Link>
          <Link>
            {propfileLists.profileId}
            <span className="postTime">{propfileLists.postTime}</span>
          </Link>
        </li>
      );
    });
  }
}

export default otherUserProp;
