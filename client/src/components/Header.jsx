import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap'





export default class Header extends React.Component {
  state = {
    show: true
  }


  render() {

    return (

      <>
        {this.props.currentUserName
          ?
          <>
            <Navbar className="nav" bg="dark">
              <Navbar.Brand href="/"><h1>Vent <span>IT</span ></h1></Navbar.Brand>
              <Navbar.Toggle />
              <div className="User">
                <Navbar.Collapse >
                  <Navbar.Text>
                    <NavDropdown title={this.props.currentUserName} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">{this.props.currentUserId}</NavDropdown.Item>
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
            <Navbar className="nav" bg="dark">
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