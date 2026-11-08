import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from '../components/Starburst';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const NotFound = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex flex-col justify-between transition-colors duration-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-36 px-4">
        <div className="max-w-md w-full text-center">
          <div
            className={`w-24 h-24 rounded-3xl mx-auto flex items-center justify-center font-display font-black text-4xl border mb-6 relative ${
              isDark
                ? "bg-[#131322] border-[#242338] text-[#C084FC] shadow-glow-purple-sm"
                : "bg-violet-50 border-violet-200 text-[#7C3AED]"
            }`}
          >
            404
            <span className="absolute -top-2 -right-2">
              <Starburst className="w-5 h-5 text-[#8B5CF6]" />
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-extrabold mb-3 break-normal">
            PAGE NOT FOUND
          </h1>

          <p className={`text-sm mb-8 ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
            The requested page does not exist or has been relocated.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] shadow-md hover:shadow-glow-purple"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
