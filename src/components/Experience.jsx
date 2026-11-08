import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Code2, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  CloudUpload,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { AnimatedSection } from './AnimatedSection';
import { experienceTimeline } from '../data/experience';

const iconMap = {
  Target,
  Code2,
  Database,
  Sparkles,
  ShieldCheck,
  CloudUpload,
};

export const Experience = () => {
  const { isDark } = useTheme();

  return (
    <AnimatedSection id="experience" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-4 border ${
              isDark
                ? "bg-[#131322] border-[#242338] text-[#C084FC]"
                : "bg-violet-50 border-violet-200 text-[#7C3AED]"
            }`}
          >
            <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>ENGINEERING PROCESS</span>
          </div>

          <h2
            className={`text-[clamp(1.9rem,6vw,3.75rem)] font-display font-extrabold tracking-tight mb-4 break-words ${
              isDark ? "text-white" : "text-[#0F172A]"
            }`}
          >
            MY DEVELOPMENT <span className="text-gradient-purple italic">JOURNEY.</span>
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              isDark ? "text-[#9E9EB8]" : "text-[#64748B]"
            }`}
          >
            How I transform project requirements into production-ready web applications and robust information systems.
          </p>
        </div>

        {/* Timeline Grid (6 Lifecycle Stages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experienceTimeline.map((item, idx) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`p-5 sm:p-7 md:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isDark
                    ? "bg-[#131322] border-[#242338] hover:border-[#8B5CF6]/70 hover:shadow-glow-purple-sm hover:bg-[#18182B]"
                    : "bg-white border-[#E4E4F2] hover:border-[#7C3AED]/50 hover:shadow-card-light shadow-sm"
                }`}
              >
                <div>
                  {/* Step Badge and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${
                        isDark
                          ? "bg-[#0E0E18] border-[#242338] text-[#C084FC] group-hover:border-[#8B5CF6]"
                          : "bg-violet-50 border-violet-100 text-[#7C3AED] group-hover:border-[#7C3AED]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full border bg-gradient-to-r from-[#8B5CF6]/15 to-[#EC4899]/15 border-[#8B5CF6]/40 text-[#C084FC]">
                      STAGE {item.step}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3
                    className={`text-xl sm:text-2xl font-display font-bold mb-1 transition-colors ${
                      isDark ? "text-white group-hover:text-[#C084FC]" : "text-[#0F172A] group-hover:text-[#7C3AED]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono font-bold text-[#8B5CF6] mb-3">
                    {item.role}
                  </p>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isDark ? "text-[#9E9EB8]" : "text-[#64748B]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverables & Tech */}
                <div>
                  <div className="space-y-2 pt-4 border-t border-dashed border-gray-700/20 dark:border-gray-800 mb-4">
                    {item.deliverables?.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs">
                        <Starburst className="w-3 h-3 text-[#8B5CF6]" animate={false} />
                        <span className={isDark ? "text-gray-300" : "text-gray-700 font-medium"}>
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          isDark
                            ? "bg-[#07070B] border-[#242338] text-gray-400"
                            : "bg-slate-100 border-[#E4E4F2] text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
};

export default Experience;
