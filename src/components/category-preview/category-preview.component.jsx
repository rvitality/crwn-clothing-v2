import React from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, items }) => {
    const navigate = useNavigate();

    const goToCategoryHandler = category => {
        navigate(`${category}`);
    };

    return (
        <CategoryPreviewContainer>
            <Title onClick={goToCategoryHandler.bind(null, title)}>{title}</Title>
            <Preview>
                {items.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
