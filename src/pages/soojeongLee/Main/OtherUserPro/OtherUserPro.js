import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PROFILE } from '../OtherUserPro/OtherUserProData';

// css
import './OtherUserPro.scss';

export class otherUserProp extends Component {
  render() {
    return PROFILE.map(propfileLists => {
      return (
        <li key={propfileLists.id}>
          <Link to="" className="otherUserImg">
            <img alt="User Profile" src={propfileLists.src} />
          </Link>
          <Link to="">
            {propfileLists.profileId}
            <span className="postTime">{propfileLists.postTime}</span>
          </Link>
        </li>
      );
    });
  }
}

export default otherUserProp;
