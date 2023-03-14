import React from 'react';
import { Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import SignIn from '../pages/Login';


const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.SIGN_IN} component={SignIn} />
    </Switch>
  );
};

export default Routes;
