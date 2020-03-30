import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import EditIncident from './pages/EditIncident';

export default function Routes () {
  return(
    <BrowserRouter>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />

        <Route path="/profile" component={Profile} />
        <Route path="/incident/"  component={NewIncident} />
        <Route path="/incidents/:id" exact component={EditIncident} />
    </BrowserRouter>
  );
};
