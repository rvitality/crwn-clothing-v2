import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = { categories: [], isLoading: false, error: null };

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    if (type === CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START) {
        return { ...state, isLoading: true };
    }

    if (type === CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED) {
        return { ...state, error: payload, isLoading: false };
    }

    if (type === CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS) {
        return { ...state, categories: payload, isLoading: false };
    }

    return state;
};
