import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Facebook, Instagram, Mail, FileDown, Sparkles, Code2, Database, ZoomIn, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { socialLinks } from '../data/socialLinks';

export const ProfileCard = ({ variant = "full" }) => {
  const { isDark } = useTheme();
  const [imageError, setImageError] = useState(false);
  const [fallbackAttempted, setFallbackAttempted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Exact mapped personal profile photos
  const darkImage = "/images/nash1.jpg";
  const lightImage = "/images/nash2.jpg";

  useEffect(() => {
    // Gracefully pre-cache alternate theme photo in memory without triggering Chrome preload warnings
    const p1 = new Image();
    p1.src = darkImage;
    const p2 = new Image();
    p2.src = lightImage;
  }, []);

  // Lock background scroll and listen for Escape key when lightbox is open
  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsZoomed(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomed]);

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
              onClick={() => setIsZoomed(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsZoomed(true);
                }
              }}
              aria-label="Click to zoom in on profile photo"
              className={`relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer group/zoom ${
                isDark
                  ? "border-[#8B5CF6]/60 bg-[#0E0E18] hover:border-[#C084FC] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)]"
                  : "border-[#7C3AED]/50 bg-slate-100 hover:border-[#7C3AED] hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]"
              }`}
              title="Click to zoom in on profile picture"
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
                  className="w-full h-full object-cover object-[center_20%] select-none transition-transform duration-500 group-hover/zoom:scale-105"
                  loading="eager"
                />
              </AnimatePresence>

              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                <div className="px-3 py-1.5 rounded-full bg-black/85 border border-white/20 text-white text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-lg scale-90 group-hover/zoom:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-3.5 h-3.5 text-[#C084FC]" />
                  <span>Click to Zoom</span>
                </div>
              </div>

              {/* Theme Pill in Corner */}
              <div
                className={`absolute bottom-2 right-2 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold rounded-full border shadow-sm backdrop-blur-md pointer-events-none z-10 ${
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
              download="Nash_Keneth_Barzo_CV.pdf"
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

      {/* Full-Screen Click-to-Zoom Lightbox Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsZoomed(false)}
            className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-8 select-none ${
              isDark ? "bg-black/85 backdrop-blur-md" : "bg-slate-950/80 backdrop-blur-md"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged profile photo"
          >
            {/* Close Button (top-right of screen) */}
            <button
              onClick={() => setIsZoomed(false)}
              type="button"
              aria-label="Close enlarged photo"
              className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full border shadow-2xl transition-all duration-200 hover:scale-110 ${
                isDark
                  ? "bg-[#131322]/90 border-[#8B5CF6]/50 text-white hover:bg-[#8B5CF6] hover:border-[#C084FC]"
                  : "bg-white/95 border-violet-200 text-[#0F172A] hover:bg-[#7C3AED] hover:text-white"
              }`}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Enlarged Image Card (stops close click propagation) */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-[92vw] sm:max-w-[85vw] md:max-w-[560px] max-h-[88vh] rounded-3xl p-3 sm:p-4 border-2 shadow-2xl flex flex-col items-center justify-center ${
                isDark
                  ? "bg-[#0E0E18] border-[#8B5CF6]/70 shadow-[0_0_60px_rgba(139,92,246,0.4)]"
                  : "bg-white border-[#7C3AED]/60 shadow-[0_0_50px_rgba(124,58,237,0.3)]"
              }`}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-black/20 flex items-center justify-center">
                <img
                  src={currentSrc}
                  alt={`${socialLinks.fullName} - Enlarged Profile`}
                  className="w-full h-auto max-h-[72vh] object-contain rounded-2xl"
                />
              </div>

              {/* Bottom Caption Strip */}
              <div className="w-full pt-3 pb-1 px-2 flex items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className={`font-bold ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                    {socialLinks.fullName}
                  </span>
                </div>
                <span className={`text-[11px] ${isDark ? "text-[#C084FC]" : "text-[#7C3AED]"}`}>
                  {isDark ? "Dark Theme Photo (nash1.jpg)" : "Light Theme Photo (nash2.jpg)"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;
