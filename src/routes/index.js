import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import SignInContainer from '../containers/SignInContainer';
import HomeContainer from '../containers/HomeContainer';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute'


const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.SIGN_IN} component={SignInContainer} />
      <PrivateRoute path={ROUTES.HOME} component={HomeContainer} />
    </Switch>
  );
};

export default Routes;
