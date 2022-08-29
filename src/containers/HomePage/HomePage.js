import React,{useState} from "react";
import "./HomePage.css";
import "../../App.scss";
import { cardData } from "../../utils/cardData";
import FoodCartSection from "../../components/FoodCartSection/FoodCartSection";
import FoodCard from "../../components/FoodCart/FoodCard";
import SearchInput from "../../components/SearchInput/SearchInput";

export default function HomePage() {


   const handleSearchChange  = (e) => {
      const name = e.target.value
     const filteredData = cardData.filter(
      (item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    console.log( filteredData )
    }
  return (
    <div>
      <div className="container-title margin-title-container">
        <div className="home-title">Want to eat healthy Food?</div>
        <img src={require("../../assets/icons/quastionnaire.png")} />
      </div>
      <div className="home-search">
        <SearchInput handleSearchChange={handleSearchChange} />
      </div>
      <div className=" foods-category-container ">
        <span className="foods-category-title foods-category">Breakfast</span>
        <span className="foods-category-title foods-category">Lunch</span>
        <span className="foods-category-title foods-category">Dinner</span>
        <span className="foods-category-title foods-category">Fruits</span>
        <span className="foods-category-title foods-category active-category">
          Vegetables
        </span>
        <span className="foods-category-title foods-category">Dry fruits</span>
        <span className="foods-category-title foods-category ">Non-Veg</span>
        <span className="foods-category-title foods-category">Greenish</span>
        <span className="foods-category-title foods-category">Fast Food</span>
      </div>
      <div> 
        <FoodCartSection cardData={cardData} />
        
      </div>
    </div>
  );
}
