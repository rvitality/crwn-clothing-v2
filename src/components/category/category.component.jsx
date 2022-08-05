import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    selectCategoriesMap,
    selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component";

import { ShopCategoriesContainer, Grid, Title } from "./category.styles.jsx";

const Category = () => {
    const { category } = useParams();
    // console.log("render / re-rendering category component");

    const categories = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = categories[category];

        if (!fetchProducts) {
        } else {
            setProducts(fetchProducts);
        }
    }, [categories, category]);

    const productItems = products?.map(product => <ProductCard key={product.id} {...product} />);

    return (
        <ShopCategoriesContainer>
            {isLoading && <Spinner />}
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
