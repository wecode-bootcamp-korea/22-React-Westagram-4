import React, { Component } from 'react';

export default class posting extends Component {
  render() {
    return (
      <article id="article">
        <article className="feedImage">
          <img alt="" src={this.props.image_url} />
        </article>
      </article>
    );
  }
}
