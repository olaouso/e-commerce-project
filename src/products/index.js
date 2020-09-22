import React from 'react';
import Product from '../product'
import db from '../firebaseConfig'
   
import { Link } from "react-router-dom";




const Products = () => {
    let [state, setState] = React.useState([]);

    const fetchData = async ()=>{
      const res = await db.collection('products').get();
      const data = res.docs;
      //  return data.forEach(el=>console.log("data", el.data()))
      return data.map(el=>setState(state=>[...state, el.data() ]))
     
    }
    console.log("state", state)
    React.useEffect(()=>{
      fetchData()
    },[])

    // console.log("state",state)
 
    return (
    <div className="products">
      {
        state.map((productInfo, index)=>{ 
          return (
            
            <Link to="/product">
              <Product 
              name={productInfo.name}
              image={productInfo.image} 
              description= {productInfo.description}
              models= {productInfo.models}
              price= {productInfo.price}
              quantity ={productInfo.quantity}
              cart = {productInfo.cart}
              id={index}/>
          </Link>
          )
          
        })
      }
    </div>)
      //map all products and return each product with its prop
}
export default Products