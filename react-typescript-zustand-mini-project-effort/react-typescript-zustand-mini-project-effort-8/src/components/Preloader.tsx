import React from 'react';
import './Preloader.css';
import { motion } from 'framer-motion';

const Preloader:React.FC = () => {
  return (
    <>
     <div className="spinner-container">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }} // Rotating animation
        transition={{
          repeat: Infinity, // Repeat the animation infinitely
          duration: 1, // Duration for one full rotation (1 second)
          ease: 'linear', // Linear easing for continuous rotation
        }}
      />
    </div> 
    </>
  );
}

export default Preloader;
