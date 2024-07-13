import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  let [isLoginFrom, SetLoginForm] = useState(true);
  let toggleSingInForm = () => {
    SetLoginForm(!isLoginFrom);
  };
  return (
    <div className="h-4">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
          alt="background"
        />
      </div>

      <form className="p-12 bg-black absolute mx-auto left-0 right-0 my-36 w-3/12 text-white bg-opacity-80 rounded-xl">
        <h1 className="font-bold text-3xl py-4">
          {isLoginFrom ? "Sing In" : "Sing Up"}
        </h1>
        {!isLoginFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isLoginFrom ? "Sing In" : "Sing Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSingInForm}>
          {isLoginFrom
            ? "New to Netflix? Sign up now"
            : "Already Registered ?Sing In Now... "}
        </p>
      </form>
    </div>
  );
};

export default Login;
