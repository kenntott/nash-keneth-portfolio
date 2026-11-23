import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-4 border-t transition-colors ${
        isDark ? "bg-[#080808] border-[#1c1c1c] text-[#71717A]" : "bg-[#F8F9FB] border-[#E4E4E7] text-[#52525B]"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-center sm:text-left">
          <div>
            © 2026 Nash Keneth. All rights reserved.
          </div>
          <div className={isDark ? "text-[#A1A1AA]" : "text-[#71717A]"}>
            Build. Learn. Grow.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
