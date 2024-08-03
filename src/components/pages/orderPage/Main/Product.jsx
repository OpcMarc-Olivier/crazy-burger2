import React from "react";
import styled from "styled-components";
import { theme } from "../../../../assets/theme/index";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";

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
                    <PrimaryButton
                        className="primary-button"
                        label={"Ajouter"}
                    />
                </div>
            </div>
        </ProductStyled>
    );
}
const ProductStyled = styled.div`
    background: ${theme.colors.white};
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    padding: 20px;
    padding-bottom: 10px;
    display: grid;
    grid-template-rows: 65% 1fr;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    .image {
        width: 100%;
        height: auto;
        margin-top: 30px;
        margin-bottom: 20px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .text-info {
        display: grid;
        grid-template-rows: 40% 50%;
        padding: 5px;
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
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-weight: ${theme.fonts.weights.medium};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: ${theme.colors.primary};
            }
            .right-description {
                border: 1px solid green;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: ${theme.fonts.size.P1};
                cursor: pointer;

                .primary-button {
                    font-size: ${theme.fonts.size.XS};
                    cursor: pointer;
                    padding: 12px;
                }
            }
        }
    }
`;

export default Product;
