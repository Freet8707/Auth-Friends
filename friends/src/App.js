import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import PrivateRoute from './utils/PrivateRoute'
import Header from './components/Header'
import Home from './components/Home'
import LogIn from './components/Login'
import FriendsList from './components/FriendsList'
import Friend from './components/Friend'
import FriendAdd from './components/FriendAdd'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <PrivateRoute exact path='/friend-add' component={FriendAdd} />
        <PrivateRoute exact path='/friends-list/:id' component={Friend} />
        <PrivateRoute exact path='/friends-list' component={FriendsList} />
        <Route path='/login' component={LogIn} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>    
  );
}

export default App;
