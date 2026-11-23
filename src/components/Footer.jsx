import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-4 transition-colors ${
        isDark ? "bg-[#080808] text-[#71717A]" : "bg-[#FAFAFA] text-[#71717A]"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-center sm:text-left">
          <div>
            © 2026 Nash Keneth. All rights reserved.
          </div>
          <div className="text-[#A1A1AA]">
            Build. Learn. Grow.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
