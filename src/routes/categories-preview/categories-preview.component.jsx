import React from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { useCategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
    const { categories } = useCategoriesContext();

    const categoryItems = Object.keys(categories).map(titleKey => (
        <CategoryPreview key={titleKey} title={titleKey} items={categories[titleKey].slice(0, 4)} />
    ));

    return categoryItems;
};

export default CategoriesPreview;
