import React, { Component } from 'react';

import { Form, Col } from 'react-bootstrap'



export default class LoginForm extends Component {
  state = {
    username: "",
    password: "",

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }


  render() {
    return (
      <div >

        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state)
          this.setState({
            username: "",
            password: ""
          })
          console.log(this.state)
        }}>

          <Form.Group controlId="formBasicEmail">

            <Form.Control
              name="username"
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange} />
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange} />

          </Form.Group>
          {/* <button id = "login-submit-button">Submit</button> */}

          <Col md={{ span: 3, offset: 4 }}>
            <button>Submit</button></Col> 
           <br />

          <p>{this.props.authErrorMessage}</p>
        </form>

      </div>
    )
  }
}