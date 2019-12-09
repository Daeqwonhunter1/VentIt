import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  verifyUser
} from '../services/api-helper'


class ItemList extends Component {
  state = {
    currentUser: {
      id: null,
      username: null,
      email: null,

    }
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    this.setState({
      currentUser: {
        id: currentUser.id,
        username: currentUser.username,
        email: currentUser.email,

      }
    })
  }

  //// Make CRUD FOR POSTS HERE /////
  ///Take things from postContainer////
  ///Have a good day at work H.M.T/////


  render() {
    const { posts } = this.props
    console.log(this.props.currentSubvent.id)

    return (
      <div id="item-list">
        {posts && posts.map(post =>
          <div className="item" key={post.id}>
            <h3>{post.post_title}</h3>
            <p>{post.post_content}</p>
          </div>
        )}



        {this.props.currentUser && (
          <>
            <Link to={`/subvents/${this.props.currentSubvent.id}/posts/create_post`}><button>Create Post</button></Link>
          </>
        )}
      </div>
    )
  }
}
export default withRouter(ItemList);
