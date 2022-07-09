import React from "react";

import { useCartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import {
    ProductCard as ProductCardContainer,
    ProductCardFooter,
    Name,
    Price,
} from "./product-card.styles.jsx";

const ProductCard = item => {
    const { name, price, imageUrl } = item;
    const { addItemToCart } = useCartContext();

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <ProductCardFooter>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </ProductCardFooter>
            <Button buttonType="inverted" onClick={addItemToCart.bind(null, item)}>
                Add to Cart
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
