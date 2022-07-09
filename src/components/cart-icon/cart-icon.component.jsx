import React from "react";

import { useCartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const { cartItems, setIsCartOpen } = useCartContext();

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const toggleDropdownHandler = () => {
        setIsCartOpen(prevState => !prevState);
    };

    return (
        <CartIconContainer onClick={toggleDropdownHandler}>
            <ShoppingIcon />
            <ItemCount>{totalQuantity}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
