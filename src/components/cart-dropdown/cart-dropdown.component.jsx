import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

import Button from "./../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { cartItems } = useCartContext();

    const cartItemsElements = cartItems.map(item => <CartItem key={item.id} {...item} />);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <div className="empty-message">
                        <p>Your cart is empty.</p>
                        <Link to="/shop">Shop</Link>
                    </div>
                ) : (
                    cartItemsElements
                )}
            </div>
            <Link to="/checkout">
                <Button>Go to Checkout</Button>
            </Link>
        </div>
    );
};

export default CartDropdown;
