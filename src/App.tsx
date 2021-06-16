import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/Landing';
import Shop from './Components/ShopPage/Shop';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />

        </Route>
        <Route exact path="/shop"  >
          <Shop />

        </Route>


      </Switch>
    </div >
  );
}

export default App;
