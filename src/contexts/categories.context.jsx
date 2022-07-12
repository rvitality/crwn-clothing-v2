import React, { createContext, useContext, useState, useEffect, useReducer } from "react";

// import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

const CategoriesContext = createContext({
    categories: {},
});

const categoriesReducer = (state, action) => {
    const { type, payload } = action;

    if (type === "SET_CATEGORIES") {
        return { ...state, categories: payload.categories };
    }

    return { categories: [] };
};

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categoriesReducer, { categories: [] });

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();

            dispatch({ type: "SET_CATEGORIES", payload: { categories: categoriesMap } });
        };

        getCategoriesMap();
    }, []);

    const value = { categories: state.categories };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export const useCategoriesContext = () => useContext(CategoriesContext);
