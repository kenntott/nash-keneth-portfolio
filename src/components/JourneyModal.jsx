import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { journeyMilestones } from '../data/experience';

export const JourneyModal = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();

  if (!isOpen) return null;

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
          className={`relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border ${
            isDark ? "bg-[#101010] border-[#262626] text-white" : "bg-white border-[#E4E4E7] text-black"
          } p-6 sm:p-8 shadow-2xl z-10`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-[2px] bg-[#A78BFA]" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#A1A1AA]">
                  MY JOURNEY
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                Learning Through Building
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

          {/* Timeline Items */}
          <div className="relative border-l border-[#262626] ml-3 pl-6 space-y-6">
            {journeyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#141414] border-2 border-[#A78BFA]" />

                <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>{milestone.period}</span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-0.5">
                  {milestone.title}
                </h3>

                <p className="text-xs font-mono text-[#A78BFA] mb-2">
                  {milestone.role} • {milestone.institution}
                </p>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-3">
                  {milestone.description}
                </p>

                {milestone.highlights && (
                  <ul className="space-y-1">
                    {milestone.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs text-[#71717A] flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#22C55E] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default JourneyModal;
