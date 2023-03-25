import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SignIn } from '../../actions';
import { withFirebase } from '../../services/index';
import Routes from '../../routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {
    console.log(this.props.user);

    return (
      <div className='app'>
      <Fragment>
       
        <Routes />
        
      </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default compose(
  connect(
    mapStateToProps,
    { SignIn }
  ),
  withFirebase
)(App);
