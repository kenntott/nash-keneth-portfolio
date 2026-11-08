import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const NotFound = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex flex-col justify-between transition-colors duration-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-32 px-4">
        <div className="max-w-md w-full text-center">
          <div
            className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center font-mono font-bold text-3xl border mb-6 ${
              isDark
                ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                : "bg-emerald-50 border-emerald-200 text-[#059669]"
            }`}
          >
            404
          </div>

          <h1 className="text-3xl font-extrabold font-heading mb-3">
            Page Not Found
          </h1>

          <p className={`text-sm mb-8 ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
            The requested page does not exist or has been relocated.
          </p>

          <Link
            to="/"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm ${
              isDark
                ? "bg-[#00E5A8] text-[#08090C] hover:bg-[#00E5A8]/90"
                : "bg-[#059669] text-white hover:bg-[#047857]"
            }`}
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
