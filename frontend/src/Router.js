import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Btc from './pages/btc/Btc';
import Xrp from './pages/xrp/Xrp';
import Eth from './pages/eth/Eth';
import NotFound from './components/404/NotFound.js';


// testing routes
// const Profile = () => <h1>profile</h1>


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Profile} exact path='/profile' />
      <Route component={Btc} exact path='/btc' />
      <Route component={Xrp} exact path='/xrp' />
      <Route component={Eth} exact path='/eth' />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
