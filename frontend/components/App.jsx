import React from 'react';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
    <section>
      <ProtectedRoute exact path="/" component={HomeContainer} />
    </section>
    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
  </div>
);
};

export default App;
