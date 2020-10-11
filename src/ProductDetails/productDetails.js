import React from 'react';
import db from "../firebaseConfig";
import Product from "../product/index";
import {useParams} from "react-router-dom";
//this renders single page product
export default function ProductDetails() {
    let { productId } = useParams();
    const [product, setProductDetail] = React.useState('');

  const fetchProductDetail = async () => {
    const res = await db.collection('Products').doc(productId).get()
    setProductDetail(res.data());
  }
    return (
        <>
            hi
            {fetchProductDetail()}
            {console.log("product from productDetails", product)}
        </>
    )
}
