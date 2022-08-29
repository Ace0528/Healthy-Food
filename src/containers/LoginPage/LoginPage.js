import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UPDATE_USER } from "../../contexts/constants";
import "./LoginPage.css";
import "../../App.scss";
import { AppContext } from "../../contexts/AppContextProvider";
export default function LoginPage() {
  const { backendUsers, appUser, dispatch } = useContext(AppContext);
  const isNavigated = useRef(false);
  const nav = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("USER", appUser);
    if (appUser) {
      nav("/home");
      isNavigated.current = true;
    }
  }, [appUser]);

  const formHasError = useRef(false);
  const initFormErrorMsgs = {
    email: "",
    password: "",
  };
  const [formError, setFormError] = useState(initFormErrorMsgs);

  const handleInputChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    console.log(e.target.value);
    setUser(newUser);
  };
  const validate = () => {
    formHasError.current = false;
    const errorMsgs = { ...initFormErrorMsgs };

    if (user.email.trim().length === 0) {
      errorMsgs.email = "Please enter email";
      formHasError.current = true;
    }

    if (user.password.trim().length === 0) {
      errorMsgs.password = "Please enter password";
      formHasError.current = true;
    }
    const foundUser = backendUsers.find(
      (bUser) => bUser.email === user.email && bUser.password === user.password
    );

    if (!foundUser) {
      errorMsgs.password = "Invalid email or invalid password";
      formHasError.current = true;
    }

    setFormError({ ...errorMsgs });
  };
  const handleFormSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    validate();
    console.log("validate", formHasError.current);
    if (formHasError.current) {
      return;
    }
    dispatch({
      type: UPDATE_USER,
      payload: user,
    });
  };
  return (
    <div>
      <div className="login-pattern"></div>
      <div className="center">
        <img src={require("../../assets/images/logo.png")} />
        <h1 className="login-title"> LAOMICA </h1>
      </div>
      <div className="center">
        <h2> Login to your account </h2>
        <form>
          <label className="label"> Email </label>
          <span className="inp-error">{formError.email}</span>
          <br />
          <input
            className="login-input"
            type="email"
            onChange={(e) => handleInputChange(e)}
            name="email"
          />
          <br />
          <label className="label"> Password </label>
          <span className="inp-error">{formError.password}</span>
          <br />
          <input
            className="login-input"
            type="password"
            onChange={(e) => handleInputChange(e)}
            name="password"
          />
          <br />

          <button className="login-btn" onClick={(e) => handleFormSubmit(e)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
