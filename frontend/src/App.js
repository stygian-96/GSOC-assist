import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import WishListPage from './Pages/WishListPage/WishListPage';
import Profile from './Pages/auth-pages/Profile';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={HomePage} />
            <Route exact path="/wishlist" component={WishListPage} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
