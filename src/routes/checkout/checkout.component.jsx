import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { useCartContext } from "../../contexts/cart.context";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles.jsx";

const Checkout = () => {
    const { cartItems } = useCartContext();

    const totalAmount = cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(item => (
                <CheckoutItem key={item.id} {...item} />
            ))}

            <Total>TOTAL: ${totalAmount}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;
