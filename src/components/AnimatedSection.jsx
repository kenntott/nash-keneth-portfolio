import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedSection = ({
  children,
  className = "",
  id = "",
  delay = 0,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`scroll-mt-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
