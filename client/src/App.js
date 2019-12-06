import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';

import {
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper';
import SubventContainer from './components/SubventConainer'
import UserModal from './components/UserModal';
import PostContainer from './components/PostContainer';
import Header from './components/Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authErrorMessage: "",
     
      postFormData: {
        post_title: null,
        post_content: null,
        comments: null
      },
      currentUser: {
        id: null,
        username: null,
        email: null
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
      this.setState({
        currentUser: {
          id: currentUser.id,
          username: currentUser.username,
          email: currentUser.email
      } });
      this.props.history.push("/")
    }
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser: {
          id: currentUser.id,
          username: currentUser.username,
          email: currentUser.email
      } })
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

  getUserInfo = () => {
    this.setState({
      userInfo: {
        id: this.state.currentUser.id,
        username: "",
        email: ""
      }
    })
  }
  /* /// ================================================================== */



  render() {
    const errorMessage = this.state.hasError
      ? <p>  Error</p> : null

    
    console.log(this.state.currentUser)


    return (
      <div className="app">
        <>
          <UserModal
            handleLogout={this.handleLogout}
            currentUser={this.state.currentUser}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister} />

          <SubventContainer currentUser={this.state.currentUser} />
          <PostContainer currentUser={this.state.currentUser} />
        </>



      </div>
    );
  }
}
export default withRouter(App);