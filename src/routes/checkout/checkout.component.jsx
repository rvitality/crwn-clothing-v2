import React from "react";
import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles.jsx";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectCartTotal);

    // const totalAmount = cartItems
    //     .reduce((acc, item) => acc + item.price * item.quantity, 0)
    //     .toFixed(2);

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
