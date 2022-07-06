import { createContext, useContext, useState } from "react";

const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: item => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCartHandler = item => {
        setCartItems(prevCartItems => {
            // const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.id === item.id);
            // const existingItem = prevCartItems[existingItemIndex];
            const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);

            // push item to arr
            if (!existingItem) {
                return [{ ...item, quantity: 1 }, ...prevCartItems];
            }
            // increase item quantity
            else {
                // prevCartItems[existingItemIndex].quantity += 1;
                // return prevCartItems;

                return prevCartItems.map(cartItem => {
                    if (cartItem.id === existingItem.id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }

                    return cartItem;
                });
            }
        });
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart: addItemToCartHandler };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
