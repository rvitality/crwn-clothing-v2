import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { useCartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems } = useCartContext();

    const totalAmount = cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => (
                <CheckoutItem key={item.id} {...item} />
            ))}

            <div class="total">TOTAL: ${totalAmount}</div>
        </div>
    );
};

export default Checkout;
