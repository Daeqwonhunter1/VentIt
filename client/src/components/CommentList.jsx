import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
import {postNewCommentInPost} from '../services/api-helper'

class CommentList extends Component {
  state = {
     comment: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  createComment = async (subventId,postId,commentData) => {
    const post = await postNewCommentInPost(subventId, postId, commentData)
    this.setState({
      comment: "",
      
    })
  }


  render() {
    return (
      <div>
        <Form onSubmit={(e) => {
          e.preventDefault()
          this.createComment(this.props.currentSubventId,this.props.postId,this.state)
        }}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
      
            <Form.Control as="textarea" rows="3"
            name="comment"
            type="text"
            placeholder="comments"
            value={this.state.comment}
            onChange={this.handleChange}/>
          </Form.Group>
          <button>Test</button>
        </Form>
        <h1>
          {this.state.comment}
        </h1>
      </div>
    );
  }
}

export default CommentList;