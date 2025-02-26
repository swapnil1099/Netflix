import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName ,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);
  const handelSingOut=()=>{
    
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <div>
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="flex p-2">
        <img className="w-12 h-12"
          src="data:image/png;base64,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"
          alt="user icon"
        />
        <button className="font-bold text-white mx-2" onClick={handelSingOut}>(Sing Out)</button>
      </div>
    </div>
  );
};

export default Header;
