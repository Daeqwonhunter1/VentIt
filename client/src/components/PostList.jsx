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

//// 
  render() {
    const { posts } = this.props
    console.log(this.props)

    return (
      <div id="item-list">
        {posts && posts.map(post =>
          <div className="item" key={post.id}>
            <h3>{post.post_title}</h3>
            <p>{post.post_content}</p>

            {/* {currentUser && currentUser.id === post.userId && (
              <>
                <button id={postid}
                  onClick={() => { this.props.destroyItem(post.subventId, postid) }}>
                  DESTROY {post.name}</button>
                <Link to={`/wishlists/${post.subventId}/items/${post.id}/edit`}><button>Edit Item</button></Link>
              </>
             )}  */}

          </div>
        )}

      </div>
    )
  }
}
export default withRouter(ItemList);
