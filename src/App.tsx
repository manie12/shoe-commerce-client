import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import LandingPage from './Components/LandingPage/Landing';
import Shop from './Components/ShopPage/Shop';
import Contact from './Components/Contacts/Contact';
import Cart from './Components/CartPage/Cart';
import { FETCH_POST } from './Graphql/FetchPost';
import { postsProps } from './Graphql/FetchPost';
import Paypal from './Components/Checkout/Paypal';
// export type Props = {
//   id: string,
//   image: string,
//   productname: string,
//   prices: string,
// }

function App() {
  const [postData, setPostData] = useState<postsProps[]>([]);
  //const [postInfo, setPostInfo] = useState([])
  const { loading, data } = useQuery(FETCH_POST);


  const CartHandle = (postId: any) => {

    setPostData(postId)



  }



  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />

        </Route>
        <Route exact path="/shop"  >
          <Shop posts={data?.posts} loading={loading} CartHandle={CartHandle} postData={postData} />

        </Route>
        <Route exact path="/contact"  >
          <Contact />

        </Route>
        <Route exact path="/cart"  >
          <Cart posts={data?.posts} loading={loading} postData={postData} />

        </Route>
        <Route exact path="/paypal"  >
          <Paypal posts={data?.posts} />
        </Route>


      </Switch>
    </div >
  );
}

export default App;
