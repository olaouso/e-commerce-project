import React from 'react';
import "./index.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const Product = (props) => {
    // console.log(props)
    const {name, image, description, models, price, quantity, cart, idRoute} = props;

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
        <div >
            {/* <img src={image} alt={ `${name}`}/>
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
            {showModels()}  */}
             <Card style={{ width: '18rem' }}  className="col-md-4 col-lg-4">
                <Link to={idRoute} ><Card.Img variant="top" src={image} /></Link>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <p>{price}$</p>
                    <p>{description}</p>
                    <p>Item in stock:</p>
                    <p>{inStock===0 ? "Out of stock!" : inStock}</p>  
                    <Button variant="primary" onClick={handleBuyClick} disabled={inStock===0? true : false}>Buy</Button>
                    <div className="justify-content-md-center"> 
                        <p>likes:{likes}</p>
                        <Button onClick={handleLikeClick}>Like</Button>
                    </div>
                    <div className="justify-content-md-center">
                        <p>dislikes:{dislikes}</p>
                        <Button onClick={handleDislikeClick}>Dislike</Button>   
                    </div>
                    <div className="models">
                        {showModels()}
                    </div>
                </Card.Body>
            </Card>
            </div>
         
    )
}
export default Product