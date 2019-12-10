import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  verifyUser, destroyPostInSubvent
} from '../services/api-helper'
import { Carousel } from 'react-bootstrap';


class PostList extends Component {
  state = {
    posts: [],
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

  destroyPost = async (subventId, postId) => {
    await destroyPostInSubvent(subventId, postId);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => {
        return post.id !== postId
      })
    }))
    this.props.history.push(`/subvents`)
  }



  render() {
    const { posts } = this.props
    console.log(this.props)

    return (
      <div id="item-list">
        <Carousel>
          {posts && posts.map(post =>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt={post.alt}
              />
              <>
                <Carousel.Caption>
                  <h3>{post.post_title}</h3>
                  <p>{post.post_content}</p>
                </Carousel.Caption>
              {this.state.currentUser.id === post.user_id ?
                <>
                  <Link to={`${this.props.location.pathname}/${post.id}/edit`}> <button>Edit</button></Link>
                  <button onClick={() => { this.destroyPost(this.props.location.pathname, post.id) }}>Delete</button>
                </>
                :
                false
              }
              </>
              </Carousel.Item>
          )}
        </Carousel>
      </div>
    )
  }
}
export default withRouter(PostList);
