import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import CreatePostForm from './CreatePostForm'
import { showAllPostsInSubvent, postNewPostInSubvent } from '../services/api-helper';
import UpdatePostForm from './UpdatePostForm'
import CommentList from './CommentList'

class ItemContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentPostContainer: " ",
      posts:[]
    }
  }

  

  // // // =============== Read ===============

  getAllPosts = async (subventId) => {
    const posts = await showAllPostsInSubvent(subventId)
    console.log(posts)
    this.setState({ posts })
  }



  createPost = async (subventId, postData) => {
    
    // eslint-disable-next-line
    const post = await postNewPostInSubvent(subventId, postData);
    this.props.history.push(`/subvents/${subventId}/posts`)
  }

  render() {
   
    return (
      <div>
        <Route path='/subvents/:subventId/posts/create_post' render={(props) => (
          <CreatePostForm
            currentSubventId = {props.match.params.subventId}
            createPost={this.createPost}
           
          />
        )} />
{/* 
        <Route path='/subvents/:subventId/posts/:postId/comments' render={(props) => (
          <CommentList
            currentSubventId={props.match.params.subventId}
            postId={props.match.params.postId}/>
        )}/> */}

        <Route path='/subvents/:subventId/posts/:postId/edit' render={(props) => (
          <UpdatePostForm
            postId={props.match.params.postId}
            subventId={props.match.params.subventId}
            updatePosts={this.updatePosts}
            handlePostChange={this.handlePostChange}
            PostFormData={this.state.PostFormData}
            posts={this.state.posts}
            getAllPosts = {this.getAllPosts}
          />
        )} />
      </div>
    )
  }
}
export default withRouter(ItemContainer);

