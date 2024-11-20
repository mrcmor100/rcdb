// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RunList from './components/RunList';
import RunDetails from './components/RunDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RunList} />
        <Route path="/runs/:id" component={RunDetails} />
      </Switch>
    </Router>
  );
}

export default App;
