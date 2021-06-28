import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//스타일
import './Commnet.scss';

export class Commnet extends Component {
  render() {
    return (
      <div>
        <li>
          <Link className="commentUserId">{this.props.name} </Link>
          <span>{this.props.comment}</span>
        </li>
      </div>
    );
  }
}

export default Commnet;
