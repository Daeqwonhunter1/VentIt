import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap'


class CreatePostForm extends Component {
  state = {
    post_title: "",
    post_content: "",
    image_url: ""

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { post_title, post_content,image_url } = this.state;
    console.log(this.props.currentSubventId)
    return (
      <div id="create-item-form">
        <Form className="create-form" onSubmit={(e) => {
          e.preventDefault();
          this.props.createPost(this.props.currentSubventId, this.state);
        }}>


          <Form.Group controlId="formBasicEmail">
            <Form.Control placeholder="post_title"
              className="input-fields"
              type="text"
              name="post_title"
              onChange={this.handleChange}
              value={post_title} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control placeholder="post_content"
              className="input-fields"
              type="text"
              name="post_content"
              onChange={this.handleChange}
              value={post_content} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control placeholder="image"
              className="input-fields"
              type="text"
              name="image_url"
              onChange={this.handleChange}
              value={image_url} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
          Submit
        </Button>

        </Form>
      </div>
    )
  }
}

export default withRouter(CreatePostForm)