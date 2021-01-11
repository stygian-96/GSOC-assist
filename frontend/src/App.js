import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/auth-pages/LoginPage';
import SignUp from './Pages/auth-pages/SignUp';
import WishListPage from './Pages/WishListPage/WishListPage';
import {UserContextProvider} from './contexts/userContext';
import Profile from './Pages/auth-pages/Profile';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/wishlist" component={WishListPage} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
