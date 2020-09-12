import React from 'react';

const Product = (props) => {
    console.log(props.productInfo.name)
    return (
        <>
             <h2>{props.productInfo.name}</h2>
        </>
    )
}
export default Product