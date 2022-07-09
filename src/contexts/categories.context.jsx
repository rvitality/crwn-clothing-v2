import React, { createContext, useContext, useState, useEffect } from "react";

// import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

const CategoriesContext = createContext({
    categories: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            setCategories(categoriesMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categories };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export const useCategoriesContext = () => useContext(CategoriesContext);
