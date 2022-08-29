import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { cardData } from "../../utils/cardData";
import { FAVOURITE_ADD_PRODUCT } from "../../contexts/constants";
import "./ProductPage.css";

export default function ProductPage() {
  const params = useParams();
  const props = cardData.find((item) => item.id === params.id);
  const { id, name, imgName, calori, details,category } = props;
  const { dispatch, favorites } = useContext(CartContext)
  return (
    <div>
      <div className="product-datails-title">Product Details</div>
      <div className="product-container">
        <div>
        <img className="product-img" alt={name} src={require(`../../assets/images/${imgName}.png`)} />
        <div className="product-name">{name}</div>
        <div className="product-category">{category}</div>
        </div>
        <div className="product-calories">
          <div className="product-category product-category-margin">
          Protein 
          <br/>
          <div className="product-category-calories">450g</div>
          </div>
          <div className="product-category product-category-margin">
          Calories
          <br/>
          <div className="product-category-calories">220g</div>
          </div>
          <div className="product-category product-category-margin">
          Fat
          <br/>
          <div className="product-category-calories">100g</div>
          </div>
          <div className="product-category product-category-margin">
          Carbs
          <br/>
          <div className="product-category-calories">49g</div>
          </div>
        </div>
        </div>
        <div className="product-details-container">
        <div className="favourite-details">Details</div>
        <div className="details">
          {details} <span className="highlight-colors">Read More... </span>
        </div>
      </div>
      <div className="product-ingrediants-container" >
        <div className="favourite-details">
          Ingrediants
      <div>
      <ul style={{paddingInlineStart:'20px'}}>
          <li className="product-ingrediants-description">Bread</li>
          <li className="product-ingrediants-description">Meat (Chicken)</li>
          <li className="product-ingrediants-description">Cacumber</li>
          <li className="product-ingrediants-description">Onion</li>
        </ul>
      </div>
        </div>
        <div className="see-all-color">
          See all 
          <ul style={{listStyle:'none', paddingInlineStart:'0px' }}>
            <li className="product-ingrediants-description" >20 cal</li>
            <li className="product-ingrediants-description" >40 cal</li>
            <li className="product-ingrediants-description" >30 cal</li>
            <li className="product-ingrediants-description" >20 cal</li>
          </ul>
        </div>
      </div>
      {favorites.find((item) => item.id === id)
        ? <button className="disabled-btn product-btn">Already in favorite list</button> 
        : < button className="add-btn product-btn"
          onClick={() => dispatch({
            type: FAVOURITE_ADD_PRODUCT,
            payload: {
              id,
              name,
              imgName,
              calori,
              details,
            },
          })}>
          Add to Favorites </button> }
    </div>
  );
}
