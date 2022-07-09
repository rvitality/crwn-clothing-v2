import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useCategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";

import { ShopCategoriesContainer, Grid, Title } from "./category.styles.jsx";

const Category = () => {
    const { categories } = useCategoriesContext();
    const { category } = useParams();

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);

        const fetchProducts = categories[category];

        if (!fetchProducts) {
            setIsLoading(true);
        } else {
            setProducts(fetchProducts);
            setIsLoading(false);
        }
    }, [categories, category]);

    const productItems = products?.map(product => <ProductCard key={product.id} {...product} />);

    return (
        <ShopCategoriesContainer>
            {isLoading && <Title>Loading ...</Title>}
            {!isLoading && (
                <>
                    <Title>{category}</Title>
                    <Grid>{productItems}</Grid>
                </>
            )}
        </ShopCategoriesContainer>
    );
};

export default Category;
