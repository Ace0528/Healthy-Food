import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContextProvider";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import "../../App.scss";

function Header() {
  const { dispatch, backendUsers } = useContext(AppContext);
  const location = useLocation();
  return (
    <div className="header">
      <div className="left-container">
        <img
          className="header-logo"
          src={require("../../assets/images/logo.png")}
        />
        <Link to={"/home"}>
          <img
            className="header-icon"
            src={
              location.pathname === "/home"
                ? require("../../assets/icons/home/Home-active.png")
                : require("../../assets/icons/home/Home.png")
            }
          />
        </Link>
      </div>
      <div className="rignt-container">
        <Link to={"/favourite"}>
          <img
            src={
              location.pathname === "/favourite"
                ? require("../../assets/icons/heart/Heart-active.png")
                : require("../../assets/icons/heart/Heart.png")
            }
          />
        </Link>
        <img
          className="profile-icon margin-header-icon"
          src={require("../../assets/icons/Profile.png")}
        />
        <div className="username margin-header-icon">
          {backendUsers[0].name}
        </div>
        <div
          className="margin-header-icon log-out"
          onClick={() => {
            dispatch({ type: "SING_OUT" });   
          }}
        >
          LogOut
        </div>
      </div>
    </div>
  );
}

export default Header;
