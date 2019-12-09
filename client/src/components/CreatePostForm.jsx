import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CreatePostForm extends Component {
  state = {
    post_title: "",
    post_content: ""

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { post_title, post_content } = this.state;
    console.log(this.props.currentSubventId)
    return (
      <div id="create-item-div">
        <form className="create-form" onSubmit={(e) => {
          e.preventDefault();
          this.props.createPost(this.props.currentSubventId, this.state);
        }}>
          <h2 className="create-header">Create New Item</h2>

          <input placeholder="post_title"
            className="input-fields"
            type="text"
            name="post_title"
            onChange={this.handleChange}
            value={post_title} />
          <input placeholder="post_content"
            className="input-fields"
            type="text"
            name="post_content"
            onChange={this.handleChange}
            value={post_content} />

          <button className="create-button" >
            Create
        </button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreatePostForm)