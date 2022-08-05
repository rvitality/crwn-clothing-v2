import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import {
    selectCategoriesMap,
    selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    const categoryItems = Object.keys(categories).map(titleKey => (
        <CategoryPreview key={titleKey} title={titleKey} items={categories[titleKey].slice(0, 4)} />
    ));

    return <>{isLoading ? <Spinner /> : categoryItems}</>;
};

export default CategoriesPreview;
