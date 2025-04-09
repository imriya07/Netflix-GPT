import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import "../index.css"

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] hover:scale-105 transition-transform duration-300">
      <img
        alt="Movie poster"
        className="rounded-lg w-full h-auto object-cover shadow-md"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
