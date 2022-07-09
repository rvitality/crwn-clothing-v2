import styled from "styled-components";

export const ProductCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
        transition: all 0.25s;
        position: relative;
        display: block;
    }

    button {
        width: 80%;
        opacity: 0;
        position: absolute;
        top: 255px;
        display: flex;
        transition: all 0.25s;
    }

    &:hover {
        img {
            filter: brightness(0.85);
        }

        button {
            opacity: 0.85;
        }
    }
`;

export const ProductCardFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const Price = styled.span`
    width: 10%;
`;
