import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {updateSubvent} from '../services/api-helper'

class UpdateSubventForm extends Component {
  state = {
    vent_title: "",
    description: "",
  }
  setFormData = () => {
    if (this.props.subvents.length) {
      const {
        vent_title,
        description,
      } = this.props.subvents.find(subvent => {
        return subvent.id === parseInt(this.props.subventId)
      })
      this.setState({
        vent_title,
        description,

      })
    }
  }
  componentDidMount() {
    this.setFormData();
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  updateSubvent = async (subventId, subventData) => {
    const updated = await updateSubvent(subventId, subventData)
    this.setState({
      vent_title:null,
      description:null
    })
   
    this.props.getAllSubvents()
    this.props.history.push(`/subvents/${subventId}`)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.subvents !== this.props.subvents) {
      this.setFormData();
    }
  }
  render() {
    const { vent_title,
      description } = this.state;
    console.log(this.props.subvents)
    console.log(this.state)
    return (
      <div id="update-wishlist-div">
        <form className="create-form" onSubmit={(e) => {
          e.preventDefault();
          this.updateSubvent(this.props.subventId, this.state);
        }}>
          <h2 className="update-header">Update Wishlist</h2>

          {/* <label htmlFor="name">name</label> */}
          <input
            className="input-fields"
            type="text"
            name="vent_title"
            id="name"
            value={vent_title}
            onChange={this.handleChange}
          />
          <br />
          {/* <label htmlFor="description">description</label> */}
          <input
            className="input-fields"
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <button className="update-button">Submit</button>
        </form>
      </div>
    )
  }
}
export default withRouter(UpdateSubventForm)