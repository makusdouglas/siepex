import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Main from '../pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/main" component={Main} isPrivate />

      <Route component={SignIn} undefinedRoute />
    </Switch>
  );
}
