import React from "react";
import { useCartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = item => {
    const { id, name, price, quantity, imageUrl } = item;

    const { addItemToCart, decreaseItemQuantity, removeItemFromCart } = useCartContext();

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow" onClick={decreaseItemQuantity.bind(null, id)}>
                    ❮
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemToCart.bind(null, item)}>
                    ❯
                </div>
            </div>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={removeItemFromCart.bind(null, id)}>
                ✕
            </div>
        </div>
    );
};

export default CheckoutItem;
