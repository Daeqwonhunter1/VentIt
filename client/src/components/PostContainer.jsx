import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PostList from './PostList'
import CreatePostForm from './CreatePostForm'
import { showAllPostsInSubvent, postNewPostInSubvent } from '../services/api-helper';

class ItemContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentPostContainer: " ",
      posts:[]
    }
  }

  // componentDidMount() {
  //   this.getAllPosts(this.props.subventId);

  // }

  // // // =============== Read ===============

  // getAllPosts = async (subventId) => {
  //   const posts = await showAllPostsInSubvent(subventId)
  //   console.log(posts)
  //   this.setState({ posts })
  // }


  // // =============== Create ===============

  // createPost = async (id, newPost) => {

  //   const newPosts = await postNewPostInSubvent(id, newPost);
  //   console.log(newPosts)
  //   this.setState(prevState => ({
  //     posts: [...prevState.posts, newPosts]
  //   }))

  //   this.props.history.push(`/subvents/${id}`)
  // }

  createPost = async (subventId, postData) => {
    console.log(subventId,postData)
    const post = await postNewPostInSubvent(subventId, postData);

  }

  render() {
   
    return (
      <div>
        <Route path='/subvents/:subventId/posts/create_post' render={(props) => (
          <CreatePostForm
            currentSubventId = {props.match.params.subventId}
            createPost={this.createPost}
            currentSubventId={props.match.params.subventId}
          />
        )} />



        {/* <Route path='/wishlists/:wishlistId/items/:itemId/edit' render={(props) => (
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
    )
  }
}
export default withRouter(ItemContainer);

