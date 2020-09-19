import React from 'react';
import Product from '../product'

const arrAllproducts= [{},{}]
const productObj= {
  image: "https://images.app.goo.gl/2SFZKYbZ8NBgbpEG9",
  name: "Cat",
  description: "A kitty",
  models: ["https://images.app.goo.gl/2SFZKYbZ8NBgbpEG9"],
  price: "1.1$",
  quantity: 4
}

const Products = () => {
    return <Product 
      name={productObj.name}
      image={productObj.image} 
      description= {productObj.description}
      models= {productObj.models}
      price= {productObj.price}
      quantity ={productObj.quantity}
      />//map all products and return each product with its prop
}
export default Products