import React from "react";
import { useCartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

import Button from "./../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { cartItems } = useCartContext();

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <Button>Go to Checkout</Button>
        </div>
    );
};

export default CartDropdown;
