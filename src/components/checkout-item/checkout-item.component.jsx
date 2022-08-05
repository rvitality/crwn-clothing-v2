import React from "react";
import { useDispatch } from "react-redux";

import {
    addItemToCart,
    decreaseItemQuantity,
    removeItemFromCart,
} from "../../store/cart/cart.action";

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

    const dispatch = useDispatch();

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={() => dispatch(decreaseItemQuantity(id))}>❮</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => dispatch(addItemToCart(item))}>❯</Arrow>
            </Quantity>
            <BaseSpan>${price}</BaseSpan>
            <RemoveButton onClick={() => dispatch(removeItemFromCart(id))}>✕</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
