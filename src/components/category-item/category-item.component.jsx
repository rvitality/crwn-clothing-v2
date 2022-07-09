import React from "react";
import { useNavigate } from "react-router-dom";

import {
    BackgroundImage,
    CategoryBodyContainer,
    CategoryContainer,
} from "./category-item.styles.jsx";

const CategoryItem = ({ title, imageUrl }) => {
    const navigate = useNavigate();

    const goToCategoryHandler = () => {
        navigate(`/shop/${title}`);
    };

    return (
        <CategoryContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer onClick={goToCategoryHandler}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    );
};

export default CategoryItem;
