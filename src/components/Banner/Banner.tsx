//https://medium.com/frontend-digest/progressively-loading-images-in-react-107cb075417a
// https://stackoverflow.com/questions/43115246/how-to-detect-when-a-image-is-loaded-that-is-provided-via-props-and-change-sta

import React, { useState } from 'react';
import './Banner.css';

const getRandomId = () => (
  Math.floor(Math.random() * 1000)
);

const Banner = () => {
  const [randomId, setRandomId] = useState(getRandomId());
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishedLoading = () => {
    setIsLoading(false);
  }

  const handleClick = () => {
    setIsLoading(true);
    setRandomId(getRandomId());
  };

  return (
    <div className='banner__main--wrapper'>
      <section className='banner__info'>
        <h1 className='banner__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
        <div className='banner__buttons--wrapper'>
          <button 
            className='button' 
            type='button'
            onClick={handleClick}
          >
            Load new image
          </button>
        </div>
      </section>
      {isLoading && <div className='banner__loading'/>}
      <img 
        style={isLoading ? {display: 'none'} : {}}
        className='banner__img' 
        src={`https://source.unsplash.com/collection/${randomId}/1600x900`} 
        alt='random feature' 
        onLoad={handleFinishedLoading}
      />
    </div>
  );
};

export default Banner;