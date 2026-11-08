import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown, CheckCircle2, MapPin } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { socialLinks } from '../data/socialLinks';

export const ProfileCard = ({ variant = "full" }) => {
  const { isDark } = useTheme();
  const [imageError, setImageError] = useState(false);
  const [fallbackAttempted, setFallbackAttempted] = useState(false);

  // Profile image paths as requested in Section 5
  const darkImage = "/images/profile-dark.png";
  const lightImage = "/images/profile-light.png";
  
  // Decide active image source
  let currentSrc = isDark ? darkImage : lightImage;
  if (imageError && !fallbackAttempted) {
    // Graceful fallback to the alternate image if current is missing
    currentSrc = isDark ? lightImage : darkImage;
  }

  const handleImageError = () => {
    if (!fallbackAttempted) {
      setFallbackAttempted(true);
    } else {
      setImageError(true);
    }
  };

  return (
    <div
      className={`relative rounded-3xl transition-all duration-300 overflow-hidden ${
        isDark
          ? "bg-[#161920]/90 border border-[#292E38] shadow-card-dark shadow-[#00E5A8]/5"
          : "bg-white border border-[#E2E8F0] shadow-card-light shadow-slate-200/50"
      }`}
    >
      {/* Decorative accent glow */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isDark ? "bg-[#00E5A8]/10" : "bg-[#059669]/10"
        }`}
      />

      <div className="p-6 md:p-8 relative z-10 flex flex-col items-center text-center">
        {/* Profile Picture Frame with Emerald Accent Ring */}
        <div className="relative mb-5 group">
          <div
            className={`absolute -inset-1 rounded-2xl blur-md transition duration-500 ${
              isDark
                ? "bg-gradient-to-r from-[#00E5A8]/40 to-[#61DAFB]/40 group-hover:from-[#00E5A8]/60 group-hover:to-[#61DAFB]/60"
                : "bg-gradient-to-r from-[#059669]/30 to-[#0891B2]/30 group-hover:from-[#059669]/50 group-hover:to-[#0891B2]/50"
            }`}
          />
          
          <div
            className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
              isDark
                ? "border-[#00E5A8]/60 bg-[#111318]"
                : "border-[#059669]/60 bg-slate-100"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={isDark ? "dark-avatar" : "light-avatar"}
                src={currentSrc}
                alt={`${socialLinks.fullName} - ${isDark ? "Dark Theme Profile" : "Light Theme Profile"}`}
                onError={handleImageError}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full h-full object-cover object-center select-none"
                loading="eager"
              />
            </AnimatePresence>

            {/* Active theme badge indicator in corner */}
            <div
              className={`absolute bottom-2 right-2 px-2 py-0.5 text-[10px] font-mono font-medium rounded-full border shadow-sm backdrop-blur-md ${
                isDark
                  ? "bg-[#08090C]/80 text-[#00E5A8] border-[#00E5A8]/40"
                  : "bg-white/90 text-[#059669] border-[#059669]/40"
              }`}
            >
              {isDark ? "DARK" : "LIGHT"}
            </div>
          </div>
        </div>

        {/* Availability Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 transition-colors ${
            isDark
              ? "bg-[#00E5A8]/10 text-[#00E5A8] border border-[#00E5A8]/20"
              : "bg-emerald-50 text-[#059669] border border-emerald-200"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isDark ? "bg-[#00E5A8]" : "bg-[#059669]"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isDark ? "bg-[#00E5A8]" : "bg-[#059669]"
              }`}
            />
          </span>
          {socialLinks.status}
        </div>

        {/* Identity Details */}
        <h3
          className={`text-2xl font-bold font-heading mb-1 transition-colors ${
            isDark ? "text-white" : "text-[#111827]"
          }`}
        >
          {socialLinks.fullName}
        </h3>

        <p
          className={`text-sm font-medium mb-3 max-w-xs transition-colors ${
            isDark ? "text-[#00E5A8]" : "text-[#059669]"
          }`}
        >
          {socialLinks.title}
        </p>

        {socialLinks.location && (
          <div
            className={`inline-flex items-center gap-1.5 text-xs mb-4 ${
              isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{socialLinks.location}</span>
          </div>
        )}

        <p
          className={`text-xs sm:text-sm leading-relaxed mb-6 max-w-sm transition-colors ${
            isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
          }`}
        >
          {socialLinks.tagline}
        </p>

        {/* Social and Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full pt-2 border-t border-dashed border-gray-700/20 dark:border-gray-800">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#111318] border-[#292E38] text-white hover:text-[#00E5A8] hover:border-[#00E5A8]/40"
                : "bg-slate-50 border-[#E2E8F0] text-[#111827] hover:text-[#059669] hover:border-[#059669]/40 shadow-sm"
            }`}
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#111318] border-[#292E38] text-white hover:text-[#61DAFB] hover:border-[#61DAFB]/40"
                : "bg-slate-50 border-[#E2E8F0] text-[#111827] hover:text-[#0891B2] hover:border-[#0891B2]/40 shadow-sm"
            }`}
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${socialLinks.email}`}
            aria-label="Send Email"
            className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#111318] border-[#292E38] text-white hover:text-[#00E5A8] hover:border-[#00E5A8]/40"
                : "bg-slate-50 border-[#E2E8F0] text-[#111827] hover:text-[#059669] hover:border-[#059669]/40 shadow-sm"
            }`}
            title="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={socialLinks.resumePath}
            download="Nash_Resume.pdf"
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#00E5A8]/10 text-[#00E5A8] border-[#00E5A8]/30 hover:bg-[#00E5A8]/20"
                : "bg-emerald-50 text-[#059669] border-emerald-300 hover:bg-emerald-100"
            }`}
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
