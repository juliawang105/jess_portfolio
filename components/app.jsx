import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import Splash from './splash';
import NavBar from './navbar'

const App = () => (
  <HashRouter>
    <Route exact path="/" component={Splash} />
    <Route exact path="/navbar" component={NavBar} />
  </HashRouter>
);

export default App; 