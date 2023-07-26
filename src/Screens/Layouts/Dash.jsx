import React from "react";
import { Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-44 sm:h-16 sm:w-auto mb-4"
          src={require("../../assets/bufferzeroLogo.png")}
          alt="Your Company"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Dash;
