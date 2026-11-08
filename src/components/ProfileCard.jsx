import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Facebook, Instagram, Mail, FileDown, Sparkles, Code2, Database } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { socialLinks } from '../data/socialLinks';

export const ProfileCard = ({ variant = "full" }) => {
  const { isDark } = useTheme();
  const [imageError, setImageError] = useState(false);
  const [fallbackAttempted, setFallbackAttempted] = useState(false);

  // Exact mapped personal profile photos
  const darkImage = "/images/nash1.jpg";
  const lightImage = "/images/nash2.jpg";

  let currentSrc = isDark ? darkImage : lightImage;
  if (imageError) {
    if (!fallbackAttempted) {
      currentSrc = isDark ? lightImage : darkImage;
    } else {
      currentSrc = isDark ? "/images/profile-dark.png" : "/images/profile-light.png";
    }
  }

  const handleImageError = () => {
    if (!fallbackAttempted) {
      setFallbackAttempted(true);
    } else {
      setImageError(true);
    }
  };

  return (
    <div className="relative group w-full max-w-[380px] mx-auto">
      
      {/* Decorative Starbursts around the profile (constrained on mobile to prevent overflow) */}
      <div className="absolute -top-3 left-0 sm:-left-3 z-20 pointer-events-none">
        <Starburst className="w-6 h-6 sm:w-8 sm:h-8 text-[#C084FC] drop-shadow-[0_0_12px_rgba(192,132,252,0.8)]" rotate={true} />
      </div>

      <div className="absolute -bottom-3 right-0 sm:-right-2 z-20 pointer-events-none">
        <Starburst className="w-5 h-5 sm:w-6 sm:h-6 text-[#EC4899] drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" animate={true} delay={1} />
      </div>

      {/* Floating Sticker 1: Top Right */}
      <motion.div
        animate={{ y: [-3, 3, -3], rotate: [2, 4, 2] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className={`absolute -top-4 right-1 sm:right-2 z-30 px-3 py-1 rounded-full text-[11px] sm:text-xs font-heading font-bold shadow-lg border backdrop-blur-md ${
          isDark
            ? "bg-[#18182B]/95 border-[#8B5CF6]/50 text-[#C084FC] shadow-purple-500/20"
            : "bg-white/95 border-[#7C3AED]/40 text-[#7C3AED] shadow-violet-500/10"
        }`}
      >
        ✦ Full-Stack Developer
      </motion.div>

      {/* Floating Sticker 2: Bottom Left (safely inside bounds on mobile) */}
      <motion.div
        animate={{ y: [3, -3, 3], rotate: [-3, 0, -3] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className={`absolute -bottom-3 left-1 sm:-left-2 z-30 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium shadow-lg border backdrop-blur-md flex items-center gap-1.5 ${
          isDark
            ? "bg-[#18182B]/95 border-[#242338] text-white shadow-black/40"
            : "bg-white/95 border-[#E4E4F2] text-[#0F172A] shadow-slate-200"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Building Solutions</span>
      </motion.div>

      {/* Main Profile Container */}
      <div
        className={`relative rounded-3xl p-5 sm:p-7 border transition-all duration-300 overflow-hidden ${
          isDark
            ? "bg-gradient-to-b from-[#131322] to-[#0A0A10] border-[#242338] shadow-card-dark"
            : "bg-white border-[#E4E4F2] shadow-card-light"
        }`}
      >
        {/* Ambient Glow */}
        <div
          className={`absolute -top-20 -right-20 w-48 h-48 sm:w-52 sm:h-52 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
            isDark ? "bg-[#8B5CF6]/20" : "bg-[#7C3AED]/12"
          }`}
        />

        <div className="flex flex-col items-center text-center relative z-10">
          
          {/* Framed Profile Image with Smooth Transition and Proper Face Framing */}
          <div className="relative mb-5 group/avatar">
            <div
              className={`absolute -inset-1.5 rounded-3xl blur-md transition duration-500 ${
                isDark
                  ? "bg-gradient-to-tr from-[#8B5CF6] via-[#EC4899] to-[#38BDF8] opacity-50 group-hover/avatar:opacity-80"
                  : "bg-gradient-to-tr from-[#7C3AED] via-[#DB2777] to-[#0284C7] opacity-40 group-hover/avatar:opacity-70"
              }`}
            />

            <div
              className={`relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                isDark
                  ? "border-[#8B5CF6]/60 bg-[#0E0E18]"
                  : "border-[#7C3AED]/50 bg-slate-100"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={isDark ? "dark-avatar-nash1" : "light-avatar-nash2"}
                  src={currentSrc}
                  alt={`${socialLinks.fullName} - ${isDark ? "Dark Theme Profile (nash1)" : "Light Theme Profile (nash2)"}`}
                  onError={handleImageError}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full h-full object-cover object-[center_20%] select-none"
                  loading="eager"
                />
              </AnimatePresence>

              {/* Theme Pill in Corner */}
              <div
                className={`absolute bottom-2 right-2 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold rounded-full border shadow-sm backdrop-blur-md ${
                  isDark
                    ? "bg-[#07070B]/85 text-[#C084FC] border-[#8B5CF6]/50"
                    : "bg-white/95 text-[#7C3AED] border-[#7C3AED]/40"
                }`}
              >
                {isDark ? "DARK MODE" : "LIGHT MODE"}
              </div>
            </div>
          </div>

          {/* Availability Pill */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 border ${
              isDark
                ? "bg-[#18182B] text-[#C084FC] border-[#8B5CF6]/30"
                : "bg-violet-50 text-[#7C3AED] border-[#7C3AED]/20"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>{socialLinks.status}</span>
          </div>

          {/* Name & Title */}
          <h3
            className={`text-2xl sm:text-3xl font-display font-extrabold mb-1 tracking-tight ${
              isDark ? "text-white" : "text-[#0F172A]"
            }`}
          >
            {socialLinks.fullName}
          </h3>

          <p className="text-sm font-semibold font-heading mb-4 text-gradient-purple">
            {socialLinks.title}
          </p>

          <p
            className={`text-xs sm:text-sm leading-relaxed mb-6 max-w-sm ${
              isDark ? "text-[#9E9EB8]" : "text-[#64748B]"
            }`}
          >
            {socialLinks.tagline}
          </p>

          {/* Social Links & Resume */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full pt-4 border-t border-dashed border-gray-700/20 dark:border-gray-800">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#0E0E18] border-[#242338] text-white hover:text-[#C084FC] hover:border-[#8B5CF6]/50"
                  : "bg-slate-50 border-[#E4E4F2] text-[#0F172A] hover:text-[#7C3AED] hover:border-[#7C3AED]/40 shadow-sm"
              }`}
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#0E0E18] border-[#242338] text-white hover:text-[#3B82F6] hover:border-[#3B82F6]/50"
                  : "bg-slate-50 border-[#E4E4F2] text-[#0F172A] hover:text-[#2563EB] hover:border-[#2563EB]/40 shadow-sm"
              }`}
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#0E0E18] border-[#242338] text-white hover:text-[#EC4899] hover:border-[#EC4899]/50"
                  : "bg-slate-50 border-[#E4E4F2] text-[#0F172A] hover:text-[#DB2777] hover:border-[#DB2777]/40 shadow-sm"
              }`}
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email Me"
              className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#0E0E18] border-[#242338] text-white hover:text-[#EC4899] hover:border-[#EC4899]/50"
                  : "bg-slate-50 border-[#E4E4F2] text-[#0F172A] hover:text-[#DB2777] hover:border-[#DB2777]/40 shadow-sm"
              }`}
              title="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.resumePath}
              download="Nash_Kenneth_CV.pdf"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold font-heading rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#8B5CF6]/15 text-[#C084FC] border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/25"
                  : "bg-violet-50 text-[#7C3AED] border-violet-300 hover:bg-violet-100"
              }`}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
