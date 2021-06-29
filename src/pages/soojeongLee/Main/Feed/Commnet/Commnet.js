//라이브러리

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//스타일
import './Commnet.scss';

export class Commnet extends Component {
  render() {
    return (
      <li>
        <Link className="commentUserId">{this.props.name} </Link>
        <span>{this.props.comment}</span>
      </li>
    );
  }
}

export default Commnet;
