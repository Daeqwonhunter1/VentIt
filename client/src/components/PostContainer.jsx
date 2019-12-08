import React, { Component } from 'react';
import {
  showAllPostsInSubvent, postNewPostInSubvent
} from '../services/api-helper'
import {Route} from 'react-router-dom'
import CreatePostForm from './CreatePostForm'

class PostContainer extends Component {
  state = {
    currentPostContainer: " ",
    posts: []
  }

  
   // =============== Read ===============

  //  getAllPosts = async () => {
  //   const posts = await showAllPostsInSubvent()
  //   this.setState({ posts })
  //  }
  
  // =============== Create ===============

  createPost = async (subventId, subventData) => {

    const newPosts = await postNewPostInSubvent(subventId, subventData);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPosts]
    }))

    this.props.history.push(`/subvents/${subventId}`)
  }



  render() {
    return (
      <div>
          {/* <Route path='/subvents/:subventId/posts/create_post' render={(props) => (
          <CreatePostForm
            createPost={this.createPost}
            currentSubventId={props.match.params.subventId}
          />
        )} /> */}

        {/* <Route path='/subvents/:subventId/post/:postId/edit' render={(props) => (
          <UpdateItemForm
            itemId={props.match.params.itemId}
            wishlistId={props.match.params.wishlistId}
            updateItems={this.updateItems}
            handleItemChange={this.handleItemChange}
            ItemFormData={this.state.ItemFormData}
            items={this.state.items}
          />
        )} /> */}
      </div>
    );
  }
}

export default PostContainer;