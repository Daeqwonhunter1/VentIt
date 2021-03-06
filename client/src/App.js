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
      this.setState({
        currentUser: {
          id: currentUser.id,
          username: currentUser.username,
          email: currentUser.email,
          password:currentUser.password_digest
      } })
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
          email: currentUser.email,
          password:currentUser.password_digest
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
          email: currentUser.email,
          password:currentUser.password_digest
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

  /* /// ================================================================== */



  render() {

    return (
      <div className="app">
        <>
          <UserModal
            handleLogout={this.handleLogout}
            currentUserId={this.state.currentUser.id}
            currentUserName={this.state.currentUser.username}
            currentUserEmail={this.state.currentUser.email}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister} />

          <SubventContainer currentUserId={this.state.currentUser.id}
            currentUserName={this.state.currentUser.username}/>
          
        </>



      </div>
    );
  }
}
export default withRouter(App);