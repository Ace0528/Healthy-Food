import React, { useContext } from "react";
import FoodCard from "../FoodCart/FoodCard";
import { cardData } from "../../utils/cardData";
import "./FavouriteProduct.css";
import { CartContext } from "../../contexts/CartContextProvider";
import { FAVORITE_REMOVE_PRODUCT } from "../../contexts/constants";

export default function FavouriteProduct(props) {
  const { dispatch } = useContext(CartContext);
  const { id, name, imgName, calori, details } = props;
  return (
    <div className="favourite-cart-container">
      <div>
        <div className="cart">
          <img
            className="image-margin"
            alt={name}
            src={require(`../../assets/images/${imgName}.png`)}
          />
          <div className="home-card-title">{name}</div>
          <div className="home-card-description">{calori}</div>
        </div>
      </div>
      <div className="details-container">
        <div className="favourite-details">Details</div>
        <div className="details">
          {details} <span className="highlight-colors">Read More... </span>
        </div>
      </div>
      <img
        src={require("../../assets/icons/bin.png")}
        onClick={() =>
          dispatch({
            type: FAVORITE_REMOVE_PRODUCT,
            payload: {
              id,
              name,
              imgName,
              calori,
              details,
            },
          })
        }
      />
    </div>
  );
}
