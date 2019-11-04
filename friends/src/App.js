import React from 'react';
import './App.css';

// Components
// import LoginForm from './components/LoginForm';
import Signin from './components/Signin';

// Browser Router
import {  Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>

        </nav>


        
        <Route exact path="/signin" component={Signin} />
    </div>
  );
}

export default App;
