import React from "react";

import { CartItemContainer, ItemDetails } from "./cart-item.styles.jsx";

const CartItem = item => {
    const { name, price, imageUrl, quantity } = item;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <span>{name}</span>
                <span>{`${quantity} x $${price}`}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
