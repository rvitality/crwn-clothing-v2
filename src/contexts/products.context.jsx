import React, { createContext, useContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

const ProductContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);

    const value = { products };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => useContext(ProductContext);
