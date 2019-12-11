import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  verifyUser, destroyPostInSubvent
} from '../services/api-helper'
import { Carousel, Button, ButtonGroup } from 'react-bootstrap';


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
    this.props.history.push(`${this.props.location.pathname}`)
  }



  render() {
    const { posts } = this.props
    console.log(this.props)

    return (
      <div id="carousel">
        <Carousel id="post-carousel">
          {posts && posts.map(post =>
            <Carousel.Item>
              <Link to={`${this.props.location.pathname}/${post.id}/comments`} > <img
                className="d-block w-100"
                src={post.image_url == null ? "https://previews.123rf.com/images/mikekiev/mikekiev1709/mikekiev170900038/86953191-skeleton-makes-selfie-in-the-dark.jpg" : post.image_url}
                alt={post.alt}
                height="600"
                width="300"
              /></Link>
              <>
                <Carousel.Caption>
                  <div className="infor">
                    <h3 className=" info">{post.post_title}</h3>
                    <p className=" info">{post.post_content}</p>
                  </div>
                  {this.state.currentUser.id === post.user_id ?
                    <>
                      <Button variant="outline-secondary">Edit</Button>
                      <Button variant="outline-secondary" onClick={() => { this.destroyPost(this.props.location.pathname, post.id) }}>Delete</Button>
                    </>
                    :
                    false
                  }
                </Carousel.Caption>

              </>
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    )
  }
}
export default withRouter(PostList);
