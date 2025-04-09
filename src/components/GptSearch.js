import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div >
        <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full"
          src={BG_URL}
          alt="logo"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch