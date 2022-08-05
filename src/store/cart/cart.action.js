import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = () => createAction(CART_ACTION_TYPES.SET_IS_OPEN_CART);

export const addItemToCart = item => createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, item);

export const decreaseItemQuantity = itemID =>
    createAction(CART_ACTION_TYPES.DECREASE_ITEM_QUANTITY, itemID);

export const removeItemFromCart = itemID => createAction(CART_ACTION_TYPES.DELETE_ITEM, itemID);
