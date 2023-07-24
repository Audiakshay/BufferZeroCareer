import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src={require("../../assets/bufferzeroLogo.png")}
            alt="Your Company"
          />
          <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Outlet />
      </div>
  );
};

export default Auth;
