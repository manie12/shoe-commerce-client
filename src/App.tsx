import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/Landing';
import Shop from './Components/ShopPage/Shop';
import Contact from './Components/Contacts/Contact';
import Cart from './Components/CartPage/Cart';

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
        <Route exact path="/contact"  >
          <Contact />

        </Route>
        <Route exact path="/cart"  >
          <Cart />

        </Route>


      </Switch>
    </div >
  );
}

export default App;
