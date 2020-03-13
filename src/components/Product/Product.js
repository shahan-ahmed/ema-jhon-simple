import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock}=props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br/>
            <p><small>By : {seller}</small></p>
            
            
            <h2>${price}</h2>
            <p>Only {stock} items left in stock</p>
            <br/>
            <button className="main-btn" onClick={() => props.addCartHandelar (props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;