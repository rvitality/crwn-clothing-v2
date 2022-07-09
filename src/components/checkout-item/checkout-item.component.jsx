import React from "react";
import { useCartContext } from "../../contexts/cart.context";

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    RemoveButton,
    Arrow,
    Value,
} from "./checkout-item.styles.jsx";

const CheckoutItem = item => {
    const { id, name, price, quantity, imageUrl } = item;

    const { addItemToCart, decreaseItemQuantity, removeItemFromCart } = useCartContext();

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={decreaseItemQuantity.bind(null, id)}>❮</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemToCart.bind(null, item)}>❯</Arrow>
            </Quantity>
            <BaseSpan>${price}</BaseSpan>
            <RemoveButton onClick={removeItemFromCart.bind(null, id)}>✕</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
