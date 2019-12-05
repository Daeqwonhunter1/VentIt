import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './components/Header';
import {
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import SubventContainer from './components/SubventConainer'
import UserModal from './components/UserModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authErrorMessage: "",
      currentUser: null,
      postFormData: {
        post_title: null,
        post_content: null,
        comments: null

      }
    };
  }

  /* /// ===================== Auth ======================================== */
  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData)
    if (currentUser.error) {
      this.setState({ authErrorMessage: currentUser.error })
      console.log("i don't work")
    } else {
      this.setState({ currentUser })
      this.props.history.push("/")
    }
  }

  logErrorToMyService = async () => {
    await this.setState({
      hasError: true
    })
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);

    if (this.state.hasError) {
      this.logErrorToMyService();
      console.log("i don't work")
    } else {
      this.setState({ currentUser });
      this.props.history.push("/")
    }
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
  }

  componentDidMount() {
    this.handleVerify()

  }
  /* /// ================================================================== */



  render() {
    const errorMessage = this.state.hasError
      ? <p>  Error</p> : null
    return (
      <div className="app">
        
        <UserModal
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          authErrorMessage={this.state.authErrorMessage}
          handleRegister={this.handleRegister} />


          
        
        {/* <Route path="/login" render={() => (
          <LoginForm
            handleLogin={this.handleLogin}
            authErrorMessage={this.state.authErrorMessage} />)}
        />
        <Route path="/register" render={() => (
          <RegisterForm
            handleRegister={this.handleRegister}
            authErrorMessage={this.state.authErrorMessage}
          />)}
        /> */}
        <SubventContainer currentUser={this.state.currentUser} />

      </div>
    );
  }
}
export default withRouter(App);