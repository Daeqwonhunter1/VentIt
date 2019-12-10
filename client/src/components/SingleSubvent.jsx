import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import PostList from './PostList'
import { showAllPostsInSubvent, showOneSubvent } from '../services/api-helper'
import { Dropdown, DropdownButton } from 'react-bootstrap'


class SingleSubvent extends Component {
  state = {
    currentSubvent: {
      id: null,
      vent_title: null,
      description: null,
      user_id: null
    },
    currentPosts: [],

  }


  


  setCurrentSubvent = async () => {

    const currentSubvent = await showOneSubvent(this.props.subventId);
    this.setState({
      currentSubvent: {
        id: currentSubvent.id,
        vent_title: currentSubvent.vent_title,
        description: currentSubvent.description,
        user_id: currentSubvent.user_id
      }
    })

    const posts = await showAllPostsInSubvent(this.props.subventId);
    const newPosts = posts.filter(post =>
      post.subventId === parseInt(this.props.subventId))

    this.setState({ posts: newPosts })
  }


  setCurrentPostlist = async () => {

    const allPosts = await showAllPostsInSubvent(this.props.subventId);


    const currentPosts = allPosts.filter(post =>
      post.subvent_id === parseInt(this.props.subventId))

    this.setState({ currentPosts })
  }



  async componentDidMount() {
    await this.setCurrentSubvent();
    await this.setCurrentPostlist();
  }


  async componentDidUpdate(prevProps) {
    if (prevProps.subventId !== this.props.subventId) {
      await this.setCurrentSubvent();
      await this.setCurrentPostlist();
    }
  }



  render() {

    const { currentSubvent } = this.state;


    return (
      <div id="single-subvent">

        {currentSubvent && (
          <>
            {currentSubvent.vent_title}

            {
              currentSubvent.user_id === this.props.currentUserId ?
                <>
                  <DropdownButton id="dropdown-basic-button" title="Options" >
                    <Dropdown.Item href={`/subvents/${this.state.currentSubvent.id}/edit`}>Edit Subvent</Dropdown.Item>
                    <Dropdown.Item href={`/subvents/${this.state.currentSubvent.id}/posts/create_post`}>Add Post</Dropdown.Item>
                    <Dropdown.Item className="Delete" eventKey="2" onClick={() => {
                      this.props.destroySubvent(this.state.currentSubvent.id)
                    }}>Delete This Sub-Vent?</Dropdown.Item>
                  </DropdownButton>

                </>
                :
                <DropdownButton id="dropdown-basic-button" title="Options" >
                <Dropdown.Item href={`/subvents/${this.state.currentSubvent.id}/posts/create_post`}>Add Post</Dropdown.Item>
                </DropdownButton>
            } 
          </>
    )
  }
        <PostList
          posts={this.state.currentPosts}
          destroyItem={this.destroyItem}
          currentUser={this.props.currentUserId}
          // currentSubvent={this.state.currentSubvent}
/>

{/* <PostContainer
        /> */}

      </div >
    )
  }
}

export default withRouter(SingleSubvent);