import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Form } from 'react-bootstrap'
import { updateSubvent } from '../services/api-helper'

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
    // eslint-disable-next-line
    const updated = await updateSubvent(subventId, subventData)
    this.setState({
      vent_title: null,
      description: null
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
    return (
      <div id="update-wishlist-div">

        <Form className="create-form" onSubmit={(e) => {
          e.preventDefault();
          this.updateSubvent(this.props.subventId, this.state);
        }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text"
              name="vent_title"
              id="name"
              value={vent_title}
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text"
              name="description"
              id="description"
              value={description}
              onChange={this.handleChange} />
          </Form.Group>

        </Form>

      </div >
    )
  }
}
export default withRouter(UpdateSubventForm)