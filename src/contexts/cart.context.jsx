import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    setIsCartOpen: () => {},
    addItemToCart: item => {},
});

const cartReducer = (state, action) => {
    const { type, payload } = action;

    if (type === "SET_IS_OPEN_CART") {
        return { ...state, isCartOpen: !state.isCartOpen };
    }

    if (type === "ADD_ITEM_TO_CART") {
        const existingItem = state.cartItems.find(cartItem => cartItem.id === payload.item.id);

        const cartItemsCopy = [...state.cartItems];

        // push item to arr
        if (!existingItem) {
            // return [{ ...item, quantity: 1 }, ...prevCartItems];
            return { ...state, cartItems: [...cartItemsCopy, { ...payload.item, quantity: 1 }] };
        }
        // increase item quantity
        else {
            const cartItemsMap = state.cartItems.map(cartItem => {
                if (cartItem.id === payload.item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }

                return cartItem;
            });

            return { ...state, cartItems: cartItemsMap };
        }
    }

    if (type === "DECREASE_ITEM_QUANTITY") {
        const cartItemsMapped = state.cartItems
            .map(cartItem => {
                if (cartItem.id === payload.itemID) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                }

                return cartItem;
            })
            .filter(cartItem => cartItem.quantity > 0);

        return { ...state, cartItems: cartItemsMapped };
    }

    if (type === "DELETE_ITEM") {
        const cartItemsFiltered = state.cartItems.filter(
            cartItem => cartItem.id !== payload.itemID
        );

        return { ...state, cartItems: cartItemsFiltered };
    }

    return { isCartOpen: false, cartItems: [] };
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { isCartOpen: false, cartItems: [] });

    const addItemToCart = item => {
        dispatch({ type: "ADD_ITEM_TO_CART", payload: { item } });
    };

    const setIsCartOpen = () => {
        dispatch({ type: "SET_IS_OPEN_CART" });
    };

    const decreaseItemQuantity = itemID => {
        dispatch({ type: "DECREASE_ITEM_QUANTITY", payload: { itemID } });
    };

    const removeItemFromCart = itemID => {
        dispatch({ type: "DELETE_ITEM", payload: { itemID } });
    };

    const value = {
        isCartOpen: state.isCartOpen,
        cartItems: state.cartItems,
        setIsCartOpen,
        addItemToCart,
        decreaseItemQuantity,
        removeItemFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
