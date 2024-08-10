import React from 'react';
import ScrollableImageGallery from '../components/ScrollableImageGallery';
import '../assets/styles/camera.css';

const Camera = () => {
  return (
    <div className="camera-container">
      <div className="camera">
        <ScrollableImageGallery />
      </div>
    </div>
  );
};

export default Camera;
