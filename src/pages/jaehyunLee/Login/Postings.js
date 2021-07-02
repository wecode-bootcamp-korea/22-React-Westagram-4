import React, { Component } from 'react';

export default class Postings extends Component {
  render() {
    return (
      <article id="article">
        <div>{this.props.user}</div>
        <article className="feedImage">
          <img alt="" src={this.props.image_url} />
        </article>
      </article>
    );
  }
}
