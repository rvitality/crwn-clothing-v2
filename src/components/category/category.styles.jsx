import styled from "styled-components";

export const ShopCategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: capitalize;
    font-size: 40px;
    margin-top: 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    row-gap: 40px;
`;
