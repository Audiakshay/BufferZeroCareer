import React from "react";
import { Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-16 w-auto"
        src={require("../../assets/bufferzeroLogo.png")}
        alt="Your Company"
      />
    </div>
    <Outlet />
  </div>
  );
};

export default Dash;
