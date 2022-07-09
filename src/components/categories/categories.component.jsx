import React from "react";
import CategoryItem from "../category-item/category-item.component";

import { CategoriesContainer } from "./categories.styles.jsx";

const Categories = ({ categories }) => {
    return (
        <CategoriesContainer>
            {categories.map(category => (
                <CategoryItem key={category.id} {...category} />
            ))}
        </CategoriesContainer>
    );
};

export default Categories;
