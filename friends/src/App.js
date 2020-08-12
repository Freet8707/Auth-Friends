import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import LogIn from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path='/login' component={LogIn} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>    
  );
}

export default App;
