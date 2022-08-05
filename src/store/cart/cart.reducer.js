import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = { isCartOpen: false, cartItems: [] };

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    if (type === CART_ACTION_TYPES.SET_IS_OPEN_CART) {
        return { ...state, isCartOpen: !state.isCartOpen };
    }

    if (type === CART_ACTION_TYPES.ADD_ITEM_TO_CART) {
        const existingItem = state.cartItems.find(cartItem => cartItem.id === payload.id);

        const cartItemsCopy = [...state.cartItems];

        // push item to arr
        if (!existingItem) {
            // return [{ ...item, quantity: 1 }, ...prevCartItems];
            return { ...state, cartItems: [...cartItemsCopy, { ...payload, quantity: 1 }] };
        }
        // increase item quantity
        else {
            const cartItemsMap = state.cartItems.map(cartItem => {
                if (cartItem.id === payload.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }

                return cartItem;
            });

            return { ...state, cartItems: cartItemsMap };
        }
    }

    if (type === CART_ACTION_TYPES.DECREASE_ITEM_QUANTITY) {
        const cartItemsMapped = state.cartItems
            .map(cartItem => {
                if (cartItem.id === payload) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                }

                return cartItem;
            })
            .filter(cartItem => cartItem.quantity > 0);

        return { ...state, cartItems: cartItemsMapped };
    }

    if (type === CART_ACTION_TYPES.DELETE_ITEM) {
        const cartItemsFiltered = state.cartItems.filter(cartItem => cartItem.id !== payload);

        return { ...state, cartItems: cartItemsFiltered };
    }

    return state;
};
