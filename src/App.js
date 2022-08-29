import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import LoginPage from "./containers/LoginPage/LoginPage";
import Applayout from "./layout/Applayout";
import HomePage from "./containers/HomePage/HomePage";
import { AuthRoute } from "./components/AuthRoute/AuthRoute";
import FavouritePage from "./containers/FavouritePage/FavouritePage";
import ProductPage from "./containers/ProductPage/ProductPage";
import { cardData } from "../src/utils/cardData";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <Applayout />
          </AuthRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<div>EROR 404</div>} />
    </Routes>
  );
}

export default App;
