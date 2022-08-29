import React, { createContext, useReducer } from "react";
import { FAVORITE_REMOVE_PRODUCT, FAVOURITE_ADD_PRODUCT } from "./constants";

const INIT_DATA = {
  favorites: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FAVOURITE_ADD_PRODUCT:
      console.log(FAVOURITE_ADD_PRODUCT, { type, payload });
      const newFavoritesList = [...state.favorites];
      const foundFavoriteProduct = newFavoritesList.find(
        (product) => product.id === payload.id
      );

      if (foundFavoriteProduct) {
        return state;
      }
      return { ...state, favorites: [...newFavoritesList, { ...payload }] };
    case FAVORITE_REMOVE_PRODUCT:
      const newFavorites = state.favorites.filter(
        (product) => product.id !== payload.id
      );
      return { ...state, favorites: [...newFavorites] };
    default:
      return state;
  }
};

export const CartContext = createContext(INIT_DATA);
export function CartContextProvider({ children }) {
  const [cartData, dispatch] = useReducer(reducer, INIT_DATA);

  return (
    <CartContext.Provider value={{ ...cartData, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
