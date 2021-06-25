import React, { Component } from 'react';
import AddReply from './AddReply';
import ShowReplies from './ShowReplies';

export class Reply extends Component {
  render() {
    return (
      <div>
        {this.props.replies.map(x => (
          <ShowReplies
            replies={x}
            delReply={this.props.delReply}
            doLike={this.props.doLike}
          />
        ))}
        <AddReply addReply={this.props.addReply} replies={this.props.replies} />
      </div>
    );
  }
}

export default Reply;
