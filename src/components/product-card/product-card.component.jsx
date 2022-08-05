import React from "react";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";

import Button from "../button/button.component";

import {
    ProductCard as ProductCardContainer,
    ProductCardFooter,
    Name,
    Price,
} from "./product-card.styles.jsx";

const ProductCard = item => {
    const { name, price, imageUrl } = item;

    const dispatch = useDispatch();

    const addItemToCartHandler = () => {
        dispatch(addItemToCart(item));
    };

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <ProductCardFooter>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </ProductCardFooter>
            <Button buttonType="inverted" onClick={addItemToCartHandler}>
                Add to Cart
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
