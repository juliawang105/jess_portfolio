import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import Splash from './splash';
import GraphicDesign from './graphic_design';
import Illustrations from './illustrations';
import About from './about'


const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/graphic_design" component={GraphicDesign} />
      <Route exact path="/illustrations" component={Illustrations} />
      <Route exact path="/about" component={About} />

      <Route exact path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);

export default App; 