import React from 'react';
import ScrollableImageGallery from '../components/ScrollableImageGallery';
import '../assets/styles/camera.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';

const Camera = () => {
  return (
    <motion.div
      className="camera-container"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="camera">
        <ScrollableImageGallery />
      </div>
    </motion.div>
  );
};

export default Camera;
