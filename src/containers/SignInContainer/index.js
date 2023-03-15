import React, { Component } from 'react';
import Login from '../../pages/Login';
import {compose} from 'redux'
import {connect} from 'react-redux'
import {SignIn as SignInAction} from '../../actions'
import { withFirebase } from '../../services';

class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault()

    const { firebase, SignInAction } = this.props
    const { email, password } = this.state

    firebase
      .signIn(email, password)
      .then(success => {
        const user = success.user
         console.log(user)

        const userData = {
          email: user.email
        }

        SignInAction(userData)
        console.log('wokred signed in')
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);

        this.setState({error: errorMessage})
      })
    
  
  };

  render() {
    return <Login
    onChange={this.handleChange} 
    onSubmit={this.handleSubmit} 
    error= {this.state.error}
    />;
  }
}

export default compose(
  connect(
    null,
    { SignInAction }
  ),
  withFirebase
)(SignInContainer)