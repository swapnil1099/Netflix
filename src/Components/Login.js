import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [isLoginFrom, SetLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  let handelButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //Singup and Singin Logic
    if (!isLoginFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-", errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-", errorMessage);
        });
    }
  };
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute mx-auto left-0 right-0 my-36 w-3/12 text-white bg-opacity-80 rounded-xl"
      >
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
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-medium text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg "
          onClick={handelButtonClick}
        >
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
