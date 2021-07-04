import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PROFILE } from '../OtherUserPro/OtherUserProData';

// css
import './OtherUserPro.scss';

export class otherUserProp extends Component {
  render() {
    return PROFILE.map(propfile => {
      return (
        <li key={propfile.id}>
          <Link to="" className="otherUserImg">
            <img alt="User Profile" src={propfile.src} />
          </Link>
          <Link to="">
            {propfile.profileId}
            <span className="postTime">{propfile.postTime}</span>
          </Link>
        </li>
      );
    });
  }
}

export default otherUserProp;
