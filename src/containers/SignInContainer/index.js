import React, { Component, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SignIn as SignInAction } from '../../actions';
import { withFirebase } from '../../services/index';
import Loader from '../../components/Loader';
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import Login from '../../pages/Login'



class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
    error: null,
    loading: false,
    //loaderMounted: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit =  (e) => {
    e.preventDefault();

    const { firebase, SignInAction } = this.props;
    const { email, password } = this.state;

    firebase
      .signIn(email, password)
      .then(success => {
        const user = success.user;
        // console.log(user);

        const userData = {
          email: user.email
          
        };
  
    this.setState({
      loading: true,
      error: !this.state.loading && 
             <>
                 <Loader />    
                 {SignInAction(userData)}     
              </>
    })
    
    SignInAction(userData) 


    
      })
      .catch(error => {
      const errorMessage = error.message;  
  
      this.setState({
        loading: false,
        error: (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="error">
              {errorMessage}
            </Alert>
          </Stack>
        )
      });
      
      });

    
  };

  render() {
    return <Login onChange={this.handleChange} 
    onSubmit={this.handleSubmit}
    error={this.state.error}
    />;
  }
}

export default compose(
  connect(
    null,
    { SignInAction }
  ),
  withFirebase
)(SignInContainer);
