import React from 'react';
import db from "../firebaseConfig";
import Product from "../product/index";
import {useParams} from "react-router-dom";
//this renders single page product
export default function ProductDetails() {
    let { id } = useParams();
    const [product, setProductDetail] = React.useState({});
console.log("id", id)
  const fetchProductDetail = async () => {
    const res = await db.collection('Products').doc(id).get()
    console.log("resfromDB", res.data())
    setProductDetail(res.docs.data());
  }
  React.useEffect(()=>{
    fetchProductDetail()
  },[])
  console.log("productState", product)
    return (
        <div>
            hi
            
        </div>
    )
}
