import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap'



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
        }}>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="username"
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

          <Button variant="secondary" size="lg" active onClick={this.handleClose}>
              Submit
              </Button>
          <Link id="register-link" to="/register">Not registered? Register here.</Link>
          <br />
          <p>{this.props.authErrorMessage}</p>



        </form>

      </div>
    )
  }
}