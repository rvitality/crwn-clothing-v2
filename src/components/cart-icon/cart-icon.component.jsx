import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartQuantity } from "../../store/cart/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
    // const cartItems = useSelector(selectCartItems);
    const cartQuantity = useSelector(selectCartQuantity);

    const dispatch = useDispatch();

    // const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const toggleDropdownHandler = () => {
        dispatch(setIsCartOpen());
    };

    return (
        <CartIconContainer onClick={toggleDropdownHandler}>
            <ShoppingIcon />
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
