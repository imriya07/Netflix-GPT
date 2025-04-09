import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-24 md:w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-3">
         {showGptSearch && (
           <select
           className="p-2 m-2 bg-gray-900 text-white"
           onChange={handleLanguageChange}
         >
           {SUPPORTED_LANGUAGES.map((lang) => (
             <option key={lang.identifier} value={lang.identifier}>
               {lang.name}
             </option>
           ))}
         </select>
         )}
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="text-white text-sm md:text-base font-bold"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
