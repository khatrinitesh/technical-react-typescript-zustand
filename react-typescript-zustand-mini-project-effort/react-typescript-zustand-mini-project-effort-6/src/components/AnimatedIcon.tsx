import React from "react";
import { motion } from "framer-motion";
import { useAnimationStore } from "../store/useAnimationStore";

const AnimatedIcon = () => {
  const { isHovered, toggleHover, resetHover } = useAnimationStore();
  return (
    <>
      <motion.div
        className="relative inline-block"
        onMouseEnter={toggleHover} // Trigger hover state when mouse enters
        onMouseLeave={resetHover} // Reset hover state when mouse leaves
        whileHover={{
          scale: 1.2, // Scale up on hover
          rotate: 15, // Slight rotation for effect
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        animate={{
          opacity: isHovered ? 1 : 0.7, // Adjust opacity when hovered
          scale: isHovered ? 1.2 : 1, // Scale up when hovered
        }}
      >
        {/* Example Icon - You can replace this with any icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="6" x2="12" y2="12" />
          <line x1="12" y1="12" x2="16" y2="12" />
        </svg>
      </motion.div>
    </>
  );
};

export default AnimatedIcon;
