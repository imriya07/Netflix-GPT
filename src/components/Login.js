import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVTAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid:uid,
                  email:email,
                  displayName:displayName,
                  photoURL:photoURL,
                })
              )
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    //sign /signup
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full"
          src={BG_URL}
          alt="logo"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative flex justify-center items-center min-h-screen px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-75 text-white p-8 md:p-12 rounded-lg w-full max-w-md"
        >
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 mb-4 w-full rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white-600"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 mb-4 w-full rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white-600"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-6 w-full rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white-600"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="w-full bg-red-700 hover:bg-red-800 p-3 rounded font-semibold transition-colors cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign UP Now"
              : "Alreday registered Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
