import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Applayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
