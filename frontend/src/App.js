import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/auth-pages/LoginPage';
import SignUp from './Pages/auth-pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
