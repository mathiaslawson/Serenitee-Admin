import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SignIn } from '../../actions';
import { withFirebase } from '../../services/index';
import { authStateObserver } from '../../utils/authStateObserver';

import Routes from '../../routes';


class App extends Component {
  componentDidMount() {
    const { firebase, SignIn } = this.props;
    authStateObserver(firebase, SignIn);
  }

  render() {
    console.log(this.props.user);

    return (
      <Fragment>
        <Routes />
      </Fragment>
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
