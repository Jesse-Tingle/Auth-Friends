import React from 'react';
import './App.css';

// Components
// import LoginForm from './components/LoginForm';
import Signin from './components/Signin';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';
import AddFriendForm from './components/AddFriendForm';

// Browser Router
import {  Link, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/addfriend">Add New Friend</Link>

        </nav>
        
        <Route exact path="/signin" component={Signin} />
        <ProtectedRoute exact path="/friends" component={FriendsList} />
        <ProtectedRoute path="/addfriend" component={AddFriendForm} />
    </div>
  );
}

export default App;
