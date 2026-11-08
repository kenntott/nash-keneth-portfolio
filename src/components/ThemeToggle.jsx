import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative p-2.5 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 ${
        isDark
          ? "bg-[#131322]/90 border-[#242338] text-[#C084FC] hover:border-[#8B5CF6]/60 hover:bg-[#18182B] hover:shadow-glow-purple-sm"
          : "bg-white border-[#E4E4F2] text-[#7C3AED] hover:border-[#7C3AED]/50 hover:bg-violet-50/50 shadow-sm"
      } ${className}`}
      title={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      <div className="w-5 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Moon className="w-4 h-4 fill-[#8B5CF6]/20 text-[#C084FC]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Sun className="w-4 h-4 fill-amber-400 text-amber-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

export default ThemeToggle;
