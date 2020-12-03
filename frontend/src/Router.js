import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Btc from './pages/Btc';
import Xrp from './pages/Xrp';
import Eth from './pages/Eth';
import NotFound from './components/404/NotFound.js';
import LayoutApp from './components/layoutApp'
import Login from './pages/Login';
import Signup from './pages/Signup';



// testing routes
// const Profile = () => <h1>profile</h1>


const Router = () => (
  <BrowserRouter>
  <LayoutApp>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Profile} exact path='/profile' />
      <Route component={Btc} exact path='/btc' />
      <Route component={Xrp} exact path='/xrp' />
      <Route component={Eth} exact path='/eth' />
      <Route component={Login} exact path='/login' />
      <Route component={Signup} exact path='/signup' />
      <Route component={NotFound} />
    </Switch>
    </LayoutApp>
  </BrowserRouter>
);

export default Router;
