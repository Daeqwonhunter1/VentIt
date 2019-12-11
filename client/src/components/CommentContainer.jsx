import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CommentList from './CommentList'
import {Form} from 'react-bootstrap'

class CommentContainer extends Component {
  state = {

  }


  createComment = async () => {
    
  }
  render() {
    return (
      <div>
        <Route path='/subvents/:subventId/posts/:postId/comments' render={(props) => (
          <CommentList
            currentSubventId={props.match.params.subventId}
            postId={props.match.params.postId} />
        )} />


      </div>
    );
  }
}

export default CommentContainer;