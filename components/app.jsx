import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import Splash from './splash';
import GraphicDesign from './graphic_design'

const App = () => (
  <HashRouter>
    <Route exact path="/" component={Splash} />
    <Route exact path="/graphic_design" component={GraphicDesign} />
  </HashRouter>
);

export default App; 