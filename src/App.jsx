// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoList from './components/VideoList';
import Login from './components/Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/videos" component={VideoList} />
    </Switch>
  </Router>
);

export default App;
