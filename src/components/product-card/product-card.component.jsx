import React from "react";

import { useCartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = item => {
    const { name, price, imageUrl } = item;
    const { addItemToCart } = useCartContext();

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="inverted" onClick={addItemToCart.bind(null, item)}>
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;
