import React from 'react';
import Products from './products';
import ProductsList from "./products/productsList"
import ProductDetails from "./ProductDetails/productDetails";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
          
          {/* <Route path='/products' render={routerProps => <ProductsList {...routerProps}/>} /> */}
          <Route path='/products' component={Products} />
         
          {/* <Route path="/about" component={About} /> */}
          
    </Router>
  );
}

export default App;
