import React from 'react';
import { prettyDOM } from '@testing-library/react';

const Cart = (props) => {
const cart = props.cart;
let total = 0;
for(let i = 0; i<cart.length; i++){
    const product = cart[i];
    total = Math.floor(total) + product.price;
}
let shipping = 0;
if (total > 15){
    shipping  = 4.99;
}
else if (total > 0){
    shipping = 14.99;   
}
else if (total == 0){
    shipping = 0;
}

let tax = total / 10;
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Orderd : {cart.length}</p>
            <p>Product Price : ${total}</p>
            <p>Tax : ${tax}</p>
            <p>Shipping Costs : ${shipping}</p>
            <p>Total Price : ${total + shipping}</p>
        </div>
    );
};

export default Cart;