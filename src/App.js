import React from 'react';
import Products from './products';
import Navbar from "./navbar/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <Router>
      <Route path="/" component={Navbar} />
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/products" component={Products} />
      {/* <Route path="/contact" component={Contact} /> */}
    </Router>
  );
}

export default App;
