import React from 'react';
import Products from './products';
import ProductDetails from "./ProductDetails/productDetails";
import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
      
        <Route path="/" component={Navbar} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/products" >
        <Products />
        </Route>
        <Route exact path="/:productId" component={ProductDetails} />
        {/* <Route path="/about" component={About} /> */}
      
    </Router>
  );
}

export default App;
