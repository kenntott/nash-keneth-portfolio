import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Target, 
  AlertCircle, 
  Users, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  FileCode2 
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ProjectModal = ({ project, onClose }) => {
  const { isDark } = useTheme();

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 my-auto ${
            isDark
              ? "bg-[#111318] border-[#292E38] text-white shadow-black/80"
              : "bg-white border-[#E2E8F0] text-[#111827] shadow-2xl"
          }`}
        >
          {/* Modal Header */}
          <div
            className={`sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 border-b backdrop-blur-md ${
              isDark
                ? "bg-[#111318]/90 border-[#292E38]"
                : "bg-white/90 border-[#E2E8F0]"
            }`}
          >
            <div>
              <span
                className={`text-xs font-mono font-medium uppercase tracking-wider ${
                  isDark ? "text-[#00E5A8]" : "text-[#059669]"
                }`}
              >
                {project.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading">
                {project.fullTitle || project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className={`p-2 rounded-xl border transition-colors ${
                isDark
                  ? "bg-[#161920] border-[#292E38] text-[#A1A1AA] hover:text-white hover:border-[#00E5A8]"
                  : "bg-slate-100 border-[#E2E8F0] text-[#64748B] hover:text-[#111827] hover:border-[#059669]"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Visual Header / Thumbnail Banner */}
            <div className="rounded-2xl overflow-hidden border aspect-[16/9] w-full bg-slate-900 relative">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md border ${
                    isDark
                      ? "bg-[#08090C]/85 text-[#00E5A8] border-[#00E5A8]/40"
                      : "bg-white/90 text-[#059669] border-[#059669]/40 shadow-sm"
                  }`}
                >
                  Status: {project.status}
                </span>
              </div>
            </div>

            {/* Quick Summary / Problem & Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Problem Statement */}
              <div
                className={`p-5 rounded-2xl border ${
                  isDark
                    ? "bg-[#161920] border-[#292E38]"
                    : "bg-slate-50 border-[#E2E8F0]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-rose-500 font-heading font-semibold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Problem Statement</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                  {project.problemStatement}
                </p>
              </div>

              {/* Objectives */}
              <div
                className={`p-5 rounded-2xl border ${
                  isDark
                    ? "bg-[#161920] border-[#292E38]"
                    : "bg-slate-50 border-[#E2E8F0]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-emerald-500 font-heading font-semibold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Core Objectives</span>
                </div>
                <ul className="space-y-1.5">
                  {project.objectives?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                      <span className="text-[#00E5A8] mt-1 font-bold">•</span>
                      <span className={isDark ? "text-[#E4E4E7]" : "text-[#334155]"}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* In-depth Overview */}
            <div>
              <h3 className="text-lg font-bold font-heading mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#00E5A8]" />
                <span>Project Overview & Operational Scope</span>
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Main Features */}
            <div>
              <h3 className="text-lg font-bold font-heading mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#61DAFB]" />
                <span>Key System Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                      isDark
                        ? "bg-[#161920] border-[#292E38]"
                        : "bg-slate-50 border-[#E2E8F0]"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00E5A8] flex-shrink-0" />
                    <span className={`text-xs sm:text-sm font-medium ${isDark ? "text-white" : "text-[#111827]"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Users & Role Breakdown */}
            {project.roles && project.roles.length > 0 && (
              <div>
                <h3 className="text-lg font-bold font-heading mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>System Users & Role-Based Permissions</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.roles.map((r, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border ${
                        isDark
                          ? "bg-[#161920] border-[#292E38]"
                          : "bg-slate-50 border-[#E2E8F0]"
                      }`}
                    >
                      <h4 className={`text-sm font-bold mb-1 ${isDark ? "text-[#00E5A8]" : "text-[#059669]"}`}>
                        {r.role}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                        {r.responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Highlights & Architecture */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark
                  ? "bg-[#161920] border-[#292E38]"
                  : "bg-slate-50 border-[#E2E8F0]"
              }`}
            >
              <h3 className="text-base font-bold font-heading mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00E5A8]" />
                <span>Architecture & Engineering Highlights</span>
              </h3>
              <p className={`text-xs sm:text-sm mb-4 ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                {project.architecture}
              </p>

              <div className="space-y-2">
                {project.highlights?.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A8]" />
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <p className={`text-xs font-mono uppercase tracking-wider mb-2.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Applied Technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-mono px-3 py-1.5 rounded-xl border font-medium ${
                      isDark
                        ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                        : "bg-white border-[#E2E8F0] text-[#059669] shadow-sm"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-gray-700/20 dark:border-gray-800 flex flex-wrap items-center justify-end gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold ${
                    isDark
                      ? "bg-[#00E5A8] text-[#08090C] hover:bg-[#00E5A8]/90"
                      : "bg-[#059669] text-white hover:bg-[#047857]"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Demo</span>
                </a>
              )}

              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border ${
                    isDark
                      ? "bg-[#161920] border-[#292E38] text-white hover:text-[#00E5A8]"
                      : "bg-white border-[#E2E8F0] text-[#111827] hover:text-[#059669]"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              <button
                onClick={onClose}
                type="button"
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${
                  isDark
                    ? "bg-[#161920] border-[#292E38] text-gray-300 hover:text-white"
                    : "bg-slate-100 border-[#E2E8F0] text-gray-600 hover:text-black"
                }`}
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
