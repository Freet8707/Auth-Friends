import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path='/login' /*component={LogIn}*/ />
        <Route exact path='/' /*component={Home}*/ />
      </Switch>
    </Router>    
  );
}

export default App;
