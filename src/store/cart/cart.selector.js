import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartIsOpen = createSelector([selectCartReducer], cart => {
    return cart.isCartOpen;
});
export const selectCartItems = createSelector([selectCartReducer], cart => {
    return cart.cartItems;
});

export const selectCartTotal = createSelector([selectCartItems], cartItems => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
});

export const selectCartQuantity = createSelector([selectCartItems], cartItems => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
});
