import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";
import Button from "./../button/button.component";

import {
    CartDropdownContainer,
    EmptyMessageContainer,
    CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };

    const cartItemsElements = cartItems.map(item => <CartItem key={item.id} {...item} />);

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length === 0 ? (
                    <EmptyMessageContainer>
                        <p>Your cart is empty.</p>
                        <Link to="/shop">Shop</Link>
                    </EmptyMessageContainer>
                ) : (
                    cartItemsElements
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
