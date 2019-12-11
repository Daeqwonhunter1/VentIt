import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import { updatePostInSubvent } from '../services/api-helper'

class UpdatePostForm extends Component {
  state = {
    post_title: "",
    post_content: "",
  }
  setFormData = () => {
    if (this.props.posts.length) {
      const {
        post_title,
        post_content,
      } = this.props.posts.find(post => {
        return post.id === parseInt(this.props.postId)
      })
      this.setState({
        post_title,
        post_content,

      })
    }
  }
  componentDidMount() {
    this.setFormData();
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  updatePost = async (subventId, postId, postData) => {
    // eslint-disable-next-line
    const updated = await updatePostInSubvent(subventId, postId, postData)
    this.setState({
      post_title: null,
      post_content: null
    })

    this.props.getAllPosts(this.props.subventId)
    this.props.history.push(`/subvents/${this.props.subventId}/posts`)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.posts !== this.props.posts) {
      this.setFormData();
    }
  }
  render() {
    const { post_title,
      post_content } = this.state;
    console.log(this.props)
    return (
      <div id="update-wishlist-div">
        <Form className="create-form" onSubmit={(e) => {
          e.preventDefault();
          this.updatePost(this.props.subventId, this.props.postId, this.state);
        }}>>
            <Form.Group controlId="formBasicEmail">

            <Form.Control type="text"
              name="post_title"
              id="name"
              value={post_title}
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">

            <Form.Control type="text"
              name="post_content"
              id="post_content"
              value={post_content}
              onChange={this.handleChange} />
          </Form.Group>
        </Form>


        
      </div>
    )
  }
}
export default withRouter(UpdatePostForm)