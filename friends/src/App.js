import React from 'react';
import './App.css';

// Components
// import LoginForm from './components/LoginForm';
import Signin from './components/Signin';
import FriendsList from './components/FriendsList';

// Browser Router
import {  Link, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/friends">Friends</Link>

        </nav>

        {/* <FriendsList /> */}
        
        <Route exact path="/signin" component={Signin} />
        <ProtectedRoute exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
