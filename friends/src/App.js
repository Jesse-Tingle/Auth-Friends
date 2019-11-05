import React from 'react';
import './App.css';

// Components
// import LoginForm from './components/LoginForm';
import Signin from './components/Signin';

// Browser Router
import {  Link, Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>

        </nav>

        <FriendsList />
        
        <Route exact path="/signin" component={Signin} />
    </div>
  );
}

export default App;
