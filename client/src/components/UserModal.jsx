import React, { Component } from 'react';
import Header from './Header'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { Button, Modal } from 'react-bootstrap'


class UserModal extends Component {
  state = {
    showLogin: false,
    showRegister: false,
  }

  handleShowLogin = () => {
    this.setState({
      showLogin: true
    })
  }

  handleShowRegister = () => {
    this.setState({
      showRegister: true
    })
  }

  handleClose = () => {
    this.setState({
      showLogin: false,
      showRegister: false
    })
  }
  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
        <Header handleLoginClick={this.handleShowLogin}
          handleRegisterClick={this.handleShowRegister}
          handleLogout={this.props.handleLogout}
          currentUserId={this.props.currentUserId}
          currentUserName={this.props.currentUserName}
          currentUserEmail={this.props.currentUserEmail} />

        <Modal show={this.state.showLogin} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body><LoginForm handleLogin={this.props.handleLogin} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="lg" active onClick={this.handleClose}>
              Close
             </Button>

          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showRegister} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body><RegisterForm handleRegister={this.props.handleRegister} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="lg" active onClick={this.handleClose}>
              Close
              </Button>


          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default UserModal;