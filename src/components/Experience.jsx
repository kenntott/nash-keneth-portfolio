import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { AnimatedSection } from './AnimatedSection';
import { journeyMilestones } from '../data/experience';

export const Experience = () => {
  const { isDark } = useTheme();

  return (
    <AnimatedSection
      id="journey"
      className={`py-8 lg:py-10 border-b relative transition-colors duration-200 ${
        isDark ? "bg-[#080808] border-[#1c1c1c]" : "bg-[#F8F9FB] border-[#E4E4E7]"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-14 max-w-2xl">
          <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
            <span className="w-6 h-[2px] bg-[#A78BFA]" />
            <span className={`text-xs font-mono font-bold tracking-widest uppercase ${
              isDark ? "text-[#A1A1AA]" : "text-[#71717A]"
            }`}>
              MY JOURNEY
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-[#171717]"
            }`}
          >
            Learning through building<span className={isDark ? "text-[#A78BFA]" : "text-[#7C3AED]"}>.</span>
          </h2>

          <p
            className={`text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 leading-relaxed ${
              isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
            }`}
          >
            A timeline of milestones, academic progress, and software systems I've developed.
          </p>
        </div>

        {/* Minimalist Vertical Timeline */}
        <div className={`relative border-l ml-2.5 sm:ml-6 pl-5 sm:pl-10 space-y-8 sm:space-y-12 transition-colors ${
          isDark ? "border-[#262626]" : "border-[#E4E4E7]"
        }`}>
          {journeyMilestones.map((milestone, idx) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className={`absolute -left-[27px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full border-2 group-hover:scale-125 transition-transform ${
                isDark ? "bg-[#141414] border-[#A78BFA]" : "bg-white border-[#7C3AED] shadow-sm"
              }`} />

              {/* Milestone Content Card */}
              <div
                className={`p-4 sm:p-7 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? "bg-[#141414] border-[#262626] group-hover:border-[#404040] shadow-card-dark"
                    : "bg-white border-[#E4E4E7] group-hover:border-[#A1A1AA] shadow-sm"
                }`}
              >
                {/* Period & Institution Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`text-xs font-mono font-bold ${
                    isDark ? "text-[#A78BFA]" : "text-[#7C3AED]"
                  }`}>
                    {milestone.period}
                  </span>
                  <span className={`text-xs font-mono ${
                    isDark ? "text-[#A1A1AA]" : "text-[#71717A]"
                  }`}>
                    {milestone.institution}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3
                  className={`text-lg sm:text-xl font-display font-bold mb-3 ${
                    isDark ? "text-white" : "text-[#171717]"
                  }`}
                >
                  {milestone.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
                  }`}
                >
                  {milestone.description}
                </p>

                {/* Relevant Project & Technologies */}
                <div className={`flex flex-wrap items-center justify-between gap-2 pt-3 border-t transition-colors ${
                  isDark ? "border-[#262626]/60" : "border-[#E4E4E7]"
                }`}>
                  <span className={`text-xs font-mono font-medium ${
                    isDark ? "text-[#E4E4E7]" : "text-[#27272A]"
                  }`}>
                    Project: <span className={isDark ? "text-[#A78BFA]" : "text-[#7C3AED]"}>{milestone.project}</span>
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {milestone.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded border transition-colors ${
                          isDark
                            ? "bg-[#101010] border-[#262626] text-[#A1A1AA]"
                            : "bg-[#F1F3F5] border-[#E4E4E7] text-[#27272A]"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
};

export default Experience;
