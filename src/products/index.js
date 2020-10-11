import React from 'react';
import Product from '../product'
import db from '../firebaseConfig'
   
import { BrowserRouter as Router,  Route, Link } from "react-router-dom";


import {useParams} from "react-router-dom";


const Products = () => {
    let [state, setState] = React.useState([]);

    const fetchData = async ()=>{
      const res = await db.collection('products').get();
      const data = res.docs;
      //  return data.forEach(el=>console.log("data", el.data()))
      
      return data.map(el=> setState(state => {
         const newItem = {
          id: el.id,
          ...el.data()
        }
         return [...state, newItem]
      })
     
      )}
    console.log("state", state)
    React.useEffect(()=>{
      fetchData()
    },[])

    // console.log("state",state)
 
    return (
    <div className="products container" >
      <div className="row">

      
      {
        state.map((productInfo, index)=>{ 
          console.log("id product",productInfo.id)
            
          return (
              <div >
                <Link  key={productInfo.id} to={`/products/${productInfo.id}`}>
                <Product
                idRoute= {productInfo.id} 
                name={productInfo.name}
                image={productInfo.image} 
                description= {productInfo.description}
                models= {productInfo.models}
                price= {productInfo.price}
                quantity ={productInfo.quantity}
                cart = {productInfo.cart}
                id={index}/>
                </Link>
              </div>
           
          )
          
        })
      }
      </div>
    </div>)
      //map all products and return each product with its prop
}
export default Products