import React from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useProductContext } from "../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
    const { products } = useProductContext();

    return (
        <div className="products-container">
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Shop;
