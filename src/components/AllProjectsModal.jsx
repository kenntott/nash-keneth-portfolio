import React, { useState } from 'react';
import { X, ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../data/projects';

export const AllProjectsModal = ({ isOpen, onClose, onSelectProject }) => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');

  if (!isOpen) return null;

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'business') return p.category.toLowerCase().includes('pos') || p.category.toLowerCase().includes('business');
    if (filter === 'governance') return p.category.toLowerCase().includes('governance');
    if (filter === 'interactive') return p.category.toLowerCase().includes('game') || p.category.toLowerCase().includes('interactive');
    return true;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border ${
            isDark ? "bg-[#101010] border-[#262626] text-white" : "bg-white border-[#E4E4E7] text-black"
          } p-4 sm:p-8 shadow-2xl z-10`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#222222] mb-5 sm:mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-[2px] bg-[#A78BFA]" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#A1A1AA]">
                  PORTFOLIO ARCHIVE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                All Projects & Applications
              </h2>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg border border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'business', label: 'POS & Business Systems' },
              { id: 'governance', label: 'Digital Governance' },
              { id: 'interactive', label: '3D & Arcade Games' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  filter === tab.id
                    ? "bg-white text-black font-semibold"
                    : "border border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-[#222222] bg-[#141414] overflow-hidden flex flex-col justify-between hover:border-[#383838] transition-colors"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#0d0d0d] relative">
                  <img
                    src={project.exploreImage || project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#080808]/85 text-white border border-[#262626]">
                    {project.badge || "Project"}
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base font-display font-bold text-white mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#A1A1AA] mb-2">
                      {project.subtitle || project.category}
                    </p>
                    <p className="text-xs text-[#71717A] leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#1f1f1f]">
                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectProject) onSelectProject(project);
                      }}
                      type="button"
                      className="text-xs font-mono font-medium text-[#A78BFA] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.sourceCode && (
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md border border-[#262626] bg-[#0d0d0d] text-[#A1A1AA] hover:text-white"
                          title="Source Code"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white text-black font-semibold hover:bg-zinc-200"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AllProjectsModal;
