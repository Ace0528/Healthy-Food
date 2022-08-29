import React, { useState, useContext } from "react";
import FavouriteProduct from "../../components/FavouriteProduct/FavouriteProduct";
import "./FavouritePage.css";
import { cardData } from "../../utils/cardData";
import { CartContext } from "../../contexts/CartContextProvider";

export default function FavouritePage() {
  const { favorites } = useContext(CartContext);

  const renderAllFavoriteProducts = () => {
    return favorites.map((favorite) => {
      return <FavouriteProduct key={favorite.id} {...favorite} />;
    });    

  };

  return (
    <div>
      <div className="title-container">
        <img
          className="m-r"
          src={require("../../assets/icons/heart/Heart.png")}
        />
        <div className="favourite-title ">Favourite Foods</div>
      </div>
      {/* <FavouriteProduct {...cardData[0]} /> */}
      
      {favorites.length === 0 && 
      <div className="empty-favourites">
        <img className="empty-fav-img" src={require("../../assets/images/Vector.png")}/> 
       <div className="empty-heading">No Foods Found</div>
       <div className="empty-title">You don’t save any food. Go ahead, search and save your favorite food</div>
      </div>}
       <div>{renderAllFavoriteProducts()}</div>
    </div>
  );
}
