import React from 'react';

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video px-4 py-16 md:px-12 md:py-36 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>
        {title}
      </h1>
      <p className='py-4 md:py-6 text-base md:text-lg max-w-md md:max-w-lg lg:max-w-xl'>
        {overview}
      </p>
      <div className='flex flex-wrap gap-4 mt-4'>
        <button className='bg-white hover:bg-opacity-80 text-black px-6 py-3 text-base md:text-lg  rounded-lg'>
          ▶ Play
        </button>
        <button className='bg-gray-700 hover:bg-opacity-80 text-white px-6 py-3 text-base md:text-lg  bg-opacity-50 rounded-lg'>
         ⓘ More Info
        </button>
      </div>
    </div>
  );
};
