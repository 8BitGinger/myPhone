import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import pic1 from '../assets/images/photos/pic1.png';
import pic2 from '../assets/images/photos/pic2.png';
import pic3 from '../assets/images/photos/pic3.png';
import pic4 from '../assets/images/photos/pic4.png';

function ScrollableImageGallery() {
  const photos = [pic1, pic2, pic3, pic4];
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
