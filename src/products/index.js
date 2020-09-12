import React from 'react';
import Product from '../product'

const arrAllproducts= [{},{}]
const productObj= {
  img: "https://images.app.goo.gl/2SFZKYbZ8NBgbpEG9",
  name: "Cat",
  description: "A kitty",
  price: "1.1$"
}
const Products = () => {
    return <Product productInfo={productObj} />//map all products and return each product with its prop
}
export default Products