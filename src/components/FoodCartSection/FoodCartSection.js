import React from "react";
import "./FoodCartSection.css";
import FoodCard from "../FoodCart/FoodCard";

export default function FoodCartSection({ cardData}) {
  const renderAllFoods = () => {
    return cardData.map((food) => {
      return <FoodCard key={food.id} {...food} />;
    });
  };

  return <div className="foods">{renderAllFoods()}</div>;
}
