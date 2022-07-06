import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useCartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { cartItems, setIsCartOpen } = useCartContext();

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const toggleDropdownHandler = () => {
        setIsCartOpen(prevState => !prevState);
    };

    return (
        <div className="cart-icon-container" onClick={toggleDropdownHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalQuantity}</span>
        </div>
    );
};

export default CartIcon;
