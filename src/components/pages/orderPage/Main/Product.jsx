import React from "react";
import styled from "styled-components";

function Product({ imageSource, title, price }) {
    return (
        <ProductStyled className="produit">
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="info-text">
                <div className="title"> {title}</div>
                <div className="description">
                    <div className="price">{price}</div>
                    <button className="add-button">Ajouter</button>
                </div>
            </div>
        </ProductStyled>
    );
}
const ProductStyled = styled.div`
    background: red;
    width: 200px;
    height: 330px;
    padding: 20px;
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
    .info-text {
        border: 1px solid purple;
    }
`;

export default Product;
