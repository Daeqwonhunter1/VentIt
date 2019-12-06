import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap'


class CreatePostForm extends Component {
  state = {
    post_title: "",
    post_content: "",
   
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  render() {
    const { post_title, post_content } = this.state;
    return (
      <div>

        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.createPost(this.props.currentSubventId, this.state)
        }}>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Create</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={post_title}
              onChange={this.handleChange} />
            <Form.Control
              type="text"
              name="name"
              value={post_content}
              onChange={this.handleChange} />

          </Form.Group>
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePostForm);