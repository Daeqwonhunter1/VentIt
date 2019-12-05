import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import {
  showAllSubvents, destroySubvent, postSubvent
} from '../services/api-helper'
import CreateSubvent from './CreateSubvent';
import SingleSubvent from './SingleSubvent';
import UpdateSubventForm from './UpdateSubventForm';
import SubventList from './SubventList';


class SubventConainer extends Component {
  state = {
    currentSubvent: null,
    subvents: [],
    subventFormData: {
      vent_title: null,
      description: null,
      image_url:null
    }
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
        return subvent.id !== subventId
      })
    }))
    this.props.history.push("/subvent")
  }

  

  // =============== Update ===============

  updateSubvent = async () => {
    this.getAllSubvents()
    this.props.history.push("/subvent")
  }
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (<SubventList subvents={this.state.subvents}
          getAllSubvents={this.getAllSubvents} />)} />

        <Route exact path='/subvents' render={() => (<SubventList subvents={this.state.subvents} />)} />

        <Route exact path='/subvents/:subventId' render={(props) => {
          const subventId = props.match.params.subventId;
          const currentSubvent = this.state.subvents.find(subvent => {
            return subvent.id === parseInt(subventId)
          })
          return <SingleSubvent
            DoYouWantTodestroySubvent = {this.DoYouWantTodestroySubvent}
            destroySubvent={this.destroySubvent}
            currentSubvent={currentSubvent}
            currentUser={this.props.currentUser}
            subventId={subventId}
          />
        }} />
        <Route path='/subvents/new' render={() => (
          <CreateSubvent
            createSubvent={this.createSubvent}
            handleSubventChange={this.handleSubventChange}
            handleSubventChange={this.handleSubventChange}
            subventFormData={this.state.subventFormData}
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