import React from 'react';
import './App.css';

import styled from 'styled-components';

// Components
// import LoginForm from './components/LoginForm';
import Signin from './components/Signin';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';
import AddFriendForm from './components/AddFriendForm';

// Browser Router
import {  Link, Route } from 'react-router-dom';

const token = window.localStorage.getItem('token');

function App() {
  return (
    <div className="App">
      <h1>Auth Friends Project</h1>
        <Navigation>
          <Link to="/">Home</Link>
          {!token && <Link to="/signin">Sign In</Link>}
          <Link to="/friends">Friends</Link>
          <Link to="/addfriend">Add New Friend</Link>

        </Navigation>


        
        <Route exact path="/signin" component={Signin} />
        <ProtectedRoute exact path="/friends" component={FriendsList} />
        <ProtectedRoute path="/addfriend" component={AddFriendForm} />
    </div>
  );
}

export default App;

const Navigation = styled.nav`
  a {
    color: rgb(8, 193, 226);
    font-size: 1.5rem;
    padding-right: 10px;
    text-decoration: none;
    font-weight: 600;
  }
`;