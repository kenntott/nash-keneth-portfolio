import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Calendar, GitCommit } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { experienceTimeline } from '../data/experience';

export const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-3 border ${
              isDark
                ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                : "bg-emerald-50 border-emerald-200 text-[#059669]"
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>PROGRESSION & MILESTONES</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-extrabold font-heading mb-4 ${
              isDark ? "text-white" : "text-[#111827]"
            }`}
          >
            Development Journey & Experience
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
            }`}
          >
            Chronological milestones representing my evolution in frontend engineering, database architectures, and production information systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Center Line */}
          <div
            className={`absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 hidden sm:block ${
              isDark ? "bg-[#292E38]" : "bg-[#E2E8F0]"
            }`}
          />

          <div className="space-y-12">
            {experienceTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full border-4 hidden sm:flex items-center justify-center z-10 transition-colors ${
                      isDark
                        ? "bg-[#08090C] border-[#00E5A8] text-[#00E5A8]"
                        : "bg-white border-[#059669] text-[#059669]"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isDark ? "bg-[#00E5A8]" : "bg-[#059669]"
                      }`}
                    />
                  </div>

                  {/* Content Card (Half Width) */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? "md:pl-0 md:pr-4" : "md:pr-0 md:pl-4"}`}>
                    <div
                      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${
                        isDark
                          ? "bg-[#161920] border-[#292E38] hover:border-[#00E5A8]/50 hover:shadow-card-dark"
                          : "bg-white border-[#E2E8F0] hover:border-[#059669]/50 hover:shadow-card-light shadow-sm"
                      }`}
                    >
                      {/* Period Badge & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                            isDark
                              ? "bg-[#111318] text-[#00E5A8] border-[#00E5A8]/30"
                              : "bg-emerald-50 text-[#059669] border-emerald-200"
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>

                        <span
                          className={`text-xs font-mono ${
                            isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Title & Role */}
                      <h3
                        className={`text-xl font-bold font-heading mb-1 transition-colors ${
                          isDark ? "text-white group-hover:text-[#00E5A8]" : "text-[#111827] group-hover:text-[#059669]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`text-xs font-mono font-medium mb-3 ${
                          isDark ? "text-[#61DAFB]" : "text-[#0891B2]"
                        }`}
                      >
                        {item.role}
                      </p>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                          isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 mb-5">
                        {item.keyPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                                isDark ? "text-[#00E5A8]" : "text-[#059669]"
                              }`}
                            />
                            <span className={isDark ? "text-[#E4E4E7]" : "text-[#334155]"}>
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-gray-700/30 dark:border-gray-800">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                              isDark
                                ? "bg-[#111318] border-[#292E38] text-gray-400"
                                : "bg-slate-100 border-[#E2E8F0] text-gray-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
