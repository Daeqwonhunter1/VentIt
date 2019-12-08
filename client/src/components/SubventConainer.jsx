import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import {
  showAllSubvents, destroySubvent, postSubvent
} from '../services/api-helper'
import SubventList from './SubventList';
import CreateSubvent from './CreateSubvent';
import SingleSubvent from './SingleSubvent';
import UpdateSubventForm from './UpdateSubventForm';


class SubventConainer extends Component {
  state = {
    currentSubvent: null,
    subvents: [],
    subventFormData: {
      vent_title: null,
      description: null,
      user_id: this.props.currentUserId
    },
    
  }

  componentDidMount() {
    this.getAllSubvents();
  }


  handleSubventChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      subventFormData: {
        ...prevState.subventFormData,
        [name]: value
      }
    }))
  }

  // =============== Read ===============

  getAllSubvents = async () => {
    const subvents = await showAllSubvents()
    this.setState({ subvents })
  }


  // =============== Create ===============

  createSubvent = async () => {
    await postSubvent(this.state.subventFormData);
    this.getAllSubvents()
    this.props.history.push("/subvents")
  }

  // =============== Delete ===============
  DoYouWantTodestroySubvent = async () => {
    document.getElementById("modal").style.display = "block";

  }

  destroySubvent = async (subventId) => {
    await destroySubvent(subventId);
    this.setState(prevState => ({
      subvents: prevState.subvents.filter(subvent => {
        console.log(subvent.id)
        return subvent.id !== subventId
      })
    }))
    this.props.history.push("/subvents")
  }



  // =============== Update ===============

  updateSubvent = async () => {
    this.getAllSubvents()
    this.props.history.push("/subvents")
  }
  render() {

    
    return (
      <div>


        <Route exact path='/' render={() => (<SubventList subvents={this.state.subvents}
          getAllSubvents={this.getAllSubvents} />)} />

        <Route exact path='/subvents' render={() => (<SubventList subvents={this.state.subvents} getAllSubvents={this.getAllSubvents} />)} />

        
        <Route exact path='/subvents/:subventId/posts' render={(props) => {
          const subventId = props.match.params.subventId;
          const currentSubvent = this.state.subvents.find(subvent => {
            return subvent.id === parseInt(subventId)
          })
          {console.log(subventId)}
          return <SingleSubvent
            DoYouWantTodestroySubvent={this.DoYouWantTodestroySubvent}
            destroySubvent={this.destroySubvent}
            currentSubvent={currentSubvent}
            currentUserId={this.props.currentUserId}
            subventId = {subventId}
          />
        }} />
        <Route path='/subvents/new' render={() => (
          <CreateSubvent
            createSubvent={this.createSubvent}
            handleSubventChange={this.handleSubventChange}
            handleSubventChange={this.handleSubventChange}
            subventFormData={this.state.subventFormData}
            currentUser={this.props.currentUser}
          />
        )} />

        <Route path='/subvents/:subventId/edit' render={(props) => (
          <UpdateSubventForm
            subventId={props.match.params.subventId}
            updateSubvent={this.updateSubvent}
            handleSubventChange={this.handleSubventChange}
            subventFormData={this.state.subventFormData}
            subvents={this.state.subvents}
            getAllSubvents={this.getAllSubvents}
          />
        )} />
      </div>
    );
  }
}

export default withRouter(SubventConainer);