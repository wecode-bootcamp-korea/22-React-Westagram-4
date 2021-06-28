import React, { Component } from 'react';

export default class Feed extends Component {
  render() {
    return (
      <article id="article">
        <div class="feedTop">
          <div class="whoIsUploader">
            <img
              alt=""
              class="profile"
              src="./images/jaehyunLee/Main/psa.png"
            />
            <span>dlwlrma</span>
          </div>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <article class="feedImage">
          <img alt="" src="./images/jaehyunLee/Main/iu2.jpg" />
        </article>
      </article>
    );
  }
}
