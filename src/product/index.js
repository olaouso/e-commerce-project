import React from 'react';
import "./index.css";

const Product = (props) => {
    // console.log(props)
    const {name, image, description, models, price, quantity, cart} = props;

    const showModels = ()=>{
        return models.map((model, index)=><img src={model} alt={`model-${index+1}`}/>)
    }

    let [likes, setLikes] = React.useState(0)
    const handleLikeClick = (e)=>{
        e.preventDefault();
        setLikes(likes + 1)
    }


    let [inStock, setStock] = React.useState(quantity)
    let [inCart, setCart] = React.useState(cart)
    const handleBuyClick =(e)=>{
        console.log("cart",inCart)
        e.preventDefault();
        if(inStock>0) {
            return (setStock(inStock - 1), setCart(inCart + 1)) 
        }

    }

    let [dislikes, setDislikes]= React.useState(0)
    const handleDislikeClick = (e)=>{
        e.preventDefault();
        setDislikes(dislikes + 1)
    }

   

    return (
        <div className="card">
            <img src={image} alt={ `${name} product image`}/>
            <p>likes:{likes}</p>
            <button onClick={handleLikeClick}>Like</button>
            <p>dislikes:{dislikes}</p>
            <button onClick={handleDislikeClick}>Dislike</button>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <p>Item in stock:</p>
            <p>{inStock===0 ? "Out of stock!" : inStock}</p>
            <button onClick={handleBuyClick} disabled={inStock===0? true : false}>Buy</button>
            <div className="models">
            {showModels()} 
            </div>
        </div>    
    )
}
export default Product