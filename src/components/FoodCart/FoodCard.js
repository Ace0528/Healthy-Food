import React from "react";
import "./FoodCard.css";
import "../../App.scss";
import { cardData } from "../../utils/cardData";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { FAVOURITE_ADD_PRODUCT } from "../../contexts/constants";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FoodCard(props) {
  const navigate = useNavigate();
  // const handleNavigate = (id) => {
  //   navigate(`/product/${id}`);
  // za navigiranje na ProductPage };
  const { id, name, imgName, title, calori, foodSearch, details } = props;
  // console.log(id);
  const { dispatch, favorites } = useContext(CartContext);
  return (
    <div>
      <div className="cart">
        <img
          className="image-margin"
          alt={name}
          src={require(`../../assets/images/${imgName}.png`)}
        />
        <Link
          to={`/product/${id}`}
          key={props.id}
          style={{ textDecoration: "none" }}
        >
          <div className="home-card-title">{name}</div>
        </Link>
        <div className="home-card-description">{calori}</div>
        {favorites.find((item) => item.id === id) ?
          <img className="favourite-heart" src={require("../../assets/icons/heart/Heart-active-red.png")}/>
            : <img className="favourite-heart" src={require("../../assets/icons/heart/Heart.png")} 
          /// da se importnat slikite
          onClick={() =>
            dispatch({
              type: FAVOURITE_ADD_PRODUCT,
              payload: {
                id,
                name,
                imgName,
                title,
                calori,
                details,
              },
            })
          }
          
        />}
      </div>
    </div>
  );
}
