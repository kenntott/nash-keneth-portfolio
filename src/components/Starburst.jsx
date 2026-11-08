import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Adelina-inspired 4-point starburst icon with optional subtle pulse or spin
 */
export const Starburst = ({ 
  className = "w-5 h-5 text-[#8B5CF6]", 
  animate = true, 
  rotate = false,
  delay = 0 
}) => {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      initial={animate ? { scale: 0.85, opacity: 0.8 } : undefined}
      animate={
        animate
          ? rotate
            ? { rotate: 360, scale: [0.9, 1.1, 0.9] }
            : { scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }
          : undefined
      }
      transition={{
        duration: rotate ? 16 : 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`inline-block flex-shrink-0 ${className}`}
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </motion.svg>
  );
};

export default Starburst;
