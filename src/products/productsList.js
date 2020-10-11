import React from 'react';
import {Route} from "react-router-dom";
import ProductDetails from '../ProductDetails/productDetails';
import Products from "./index"

export default function ProductsList({match}) {
    return (
        <div>
            <Products />
    
            <Route path={`${match.url}/:productId`} render={routerProps => <ProductDetails {...routerProps} /* product={product} */ /> }/>
            
        </div>
    )
}