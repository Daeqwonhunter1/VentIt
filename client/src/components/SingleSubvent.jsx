import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostList from './PostList'
import { showAllPostsInSubvent, showOneSubvent, destroyPostInSubvent } from '../services/api-helper'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'

class SingleSubvent extends Component {
  state = {
    currentSubvent: null,
    currentPosts: [],

  }


  // destroyPost = async (subventId, postId) => {
  //   await destroyPostInSubvent(subventId, postId);
  //   this.setState(prevState => ({
  //     currentPosts: prevState.currentPosts.filter(posts => (
  //       postsid !== parseInt(post.id)
  //     ))
  //   }))
  //   this.props.history.push(`/subvents/${subventId}`)
  // }


  async componentDidMount() {
    await this.setCurrentSubvent();
    await this.setCurrentPostlist();
  }
  setCurrentSubvent = async () => {

    const currentSubvent = await showOneSubvent(this.props.subventId);

    this.setState({ currentSubvent })

    const posts = await showAllPostsInSubvent(this.props.subventId);

    const newPosts = posts.filter(post =>
      post.subvent_id === parseInt(this.props.subventId))

    this.setState({ posts: newPosts })
  }

  setCurrentPostlist = async () => {

    const allPosts = await showAllPostsInSubvent(this.props.subventId);

    const currentPosts = allPosts.filter(post =>
      post.subvent_id === parseInt(this.props.subventId))

    this.setState({ currentPosts })
  }




  async componentDidUpdate(prevProps) {
    if (prevProps.subventId !== this.props.subventId) {
      await this.setCurrentSubvent();
      await this.setCurrentPostlist();
    }
  }


  render() {
    console.log(this.state.currentUser)
    console.log(this.state.currentSubvent)

    return (
      <div id="single-subvent">
        {
          this.state.currentSubvent === this.props.currentUser ?
            <>
              <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} title="Edit" id="bg-vertical-dropdown-1">
                  <Dropdown.Item className="Delete" eventKey="2" onClick={() => {
                    this.props.destroySubvent(this.state.currentSubvent)
                  }}>Delete This Sub-Vent?</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </>
            :
            false
        }

        <PostList
          items={this.state.currentItems}
          destroyItem={this.destroyItem}
          currentUser={this.props.currentUser}
        />

      </div>
    )
  }
}

export default withRouter(SingleSubvent);