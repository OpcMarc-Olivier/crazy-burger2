import React from "react";
import styled from "styled-components";
import { theme } from "../../../../assets/theme/index";

function Product({ imageSource, title, price }) {
    return (
        <ProductStyled className="produit">
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="text-info">
                <div className="title"> {title}</div>
                <div className="description">
                    <div className="left-description">{price}</div>
                    <button className="right-description">Ajouter</button>
                </div>
            </div>
        </ProductStyled>
    );
}
const ProductStyled = styled.div`
    background: red;
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    display: grid;
    grid-template-rows: 65% 1fr;
    .image {
        border: 1px solid fuchsia;
        width: 100%;
        height: auto;
        margin-top: 30px;
        border: 1px solid yellow;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .text-info {
        border: 3px solid fuchsia;
        display: grid;
        grid-template-rows: 30% 70%;
        .title {
            margin: auto 0;
            font-size: ${theme.fonts.size.P4};
            position: relative;
            bottom: 10px;
            font-weight: ${theme.fonts.weights.bold};
            color: ${theme.colors.dark};
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            font-family: "Amatic SC", cursive;
        }
        .description {
            display: grid;
            grid-template-columns: 1fr 1fr;
            .left-description {
                border: 1px solid blue;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-weight: ${theme.fonts.weights.medium};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: ${theme.fonts.weights.medium};
                color: ${theme.colors.primary};
            }
            .right-description {
                border: 1px solid green;
                cursor: pointer;
                border: 1px solid green;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: ${theme.fonts.size.P1};
                cursor: pointer;
            }
        }
    }
`;

export default Product;
