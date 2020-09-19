import React from 'react';
import Product from '../product'
import db from '../firebaseConfig'



const arrAllproducts= [{},{}]
const productObj= {
  image: "https://images.app.goo.gl/2SFZKYbZ8NBgbpEG9",
  name: "Cat",
  description: "A kitty",
  models: ["https://images.app.goo.gl/2SFZKYbZ8NBgbpEG9"],
  price: "1.1$",
  quantity: 4,
  cart: 0
}

const Products = () => {
    let [state, setState] = React.useState([]);

    const fetchData = async ()=>{
      const res = await db.collection('products').get();
      const data = res.docs;
       return data.forEach(el=>console.log("data", el))
      // return data.map(el=>setState(state=>[...state, el ]))
     
    }

    React.useEffect(()=>{
      fetchData()
    },[])

    // console.log("state",state)
    
    return <Product 
      name={productObj.name}
      image={productObj.image} 
      description= {productObj.description}
      models= {productObj.models}
      price= {productObj.price}
      quantity ={productObj.quantity}
      cart = {productObj.cart}
      />//map all products and return each product with its prop
}
export default Products