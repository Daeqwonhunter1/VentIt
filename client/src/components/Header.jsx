import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Button, Modal, Show } from 'react-bootstrap'
import LoginForm from './LoginForm';




export default class Header extends React.Component {
  state = {
    show: true
  }


  render() {
    return (

      <>
        {this.props.currentUser
          ?
          <>
            <Navbar bg="dark">
              <Navbar.Brand href="/">Vent IT</Navbar.Brand>
              <Navbar.Toggle />
              <div className="User">
                <Navbar.Collapse >
                  <Navbar.Text>
                    <NavDropdown title={this.props.currentUser.username} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={this.props.handleLogout} href="/">Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Navbar.Text>
                </Navbar.Collapse>
              </div>
            </Navbar>
          </>

          :
          <>
            <Navbar bg="dark">
              <Navbar.Brand href="/">Vent IT</Navbar.Brand>
              <div className="User">
                <button onClick={this.props.handleLoginClick}>
                  Login
                </button>
                <button onClick={this.props.handleRegisterClick}>
                  Register
                </button>
              </div>
            </Navbar>

          </>
        }
      </>



    )

  }
}