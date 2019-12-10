import React, { Component } from 'react';
import { Form,  Col } from 'react-bootstrap'



export default class RegisterForm extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="register-div">
        <form className="register-div-form" onSubmit={(e) => {
          e.preventDefault()
          this.props.handleRegister(this.state)
          this.setState({
            username: "",
            email: "",
            password: ""
          })
        }}>
          
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange} />
            <Form.Control
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange} />
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </Form.Group>
          <Col md={{ span: 3, offset: 4 }}>
            <button>Submit</button></Col> 
           <br />
          
          <p>{this.props.authErrorMessage}</p>
        </form>
      </div>
    )
  }
}