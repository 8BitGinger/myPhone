import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import couple from '../assets/images/photos/couple.jpg';
import gym from '../assets/images/photos/gym.jpg';
import pier from '../assets/images/photos/pier.jpg';
import pillowFight from '../assets/images/photos/pillowFight.jpg';

function ScrollableImageGallery() {
  const photos = [couple, gym, pier, pillowFight];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <div className="image-gallery">
      <img src={photos[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <div className="gallery-controls">
        <button onClick={handlePrev} className="left-gallery">
          <MdKeyboardArrowLeft />
        </button>
        <div className="image-counter">
          {currentIndex + 1} / {photos.length}
        </div>
        <button onClick={handleNext} className="right-gallery">
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ScrollableImageGallery;
