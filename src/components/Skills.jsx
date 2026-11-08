import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileCode2, 
  Paintbrush, 
  Layout, 
  Palette, 
  Database, 
  Server, 
  Cpu, 
  Terminal, 
  Network, 
  Monitor, 
  GitBranch, 
  Github, 
  Send, 
  Package, 
  CloudUpload, 
  Globe, 
  Workflow, 
  Layers,
  Zap,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { AnimatedSection } from './AnimatedSection';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2,
  FileCode2,
  Paintbrush,
  Layout,
  Palette,
  Database,
  Server,
  Cpu,
  Terminal,
  Network,
  Monitor,
  GitBranch,
  Github,
  Send,
  Package,
  CloudUpload,
  Globe,
  Workflow,
  Layers,
  Zap,
  Sparkles,
};

export const Skills = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", title: "All Technologies" },
    ...skillCategories.map(c => ({ id: c.id, title: c.title }))
  ];

  const displayedCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <AnimatedSection id="skills" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-4 border ${
              isDark
                ? "bg-[#131322] border-[#242338] text-[#C084FC]"
                : "bg-violet-50 border-violet-200 text-[#7C3AED]"
            }`}
          >
            <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>ARSENAL &amp; CAPABILITIES</span>
          </div>

          <h2
            className={`text-[clamp(1.65rem,5.2vw,3.5rem)] font-display font-extrabold tracking-tight mb-4 break-normal ${
              isDark ? "text-white" : "text-[#0F172A]"
            }`}
          >
            SKILLS? <span className="text-gradient-purple italic pr-2">I'VE GOT SOME.</span>
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              isDark ? "text-[#9E9EB8]" : "text-[#64748B]"
            }`}
          >
            From modern responsive frontends to relational database schemas and edge deployment pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-heading font-bold transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-glow-purple-sm scale-105"
                      : "bg-[#7C3AED] text-white shadow-md scale-105"
                    : isDark
                    ? "bg-[#131322] border border-[#242338] text-[#9E9EB8] hover:text-white hover:border-[#8B5CF6]/50"
                    : "bg-white border border-[#E4E4F2] text-[#64748B] hover:text-[#0F172A] hover:border-[#7C3AED]/40 shadow-sm"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Categorized Showcase */}
        <div className="space-y-16">
          {displayedCategories.map((cat, cIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cIdx * 0.1 }}
              className="space-y-6"
            >
              {/* Category Subheading */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-gray-700/20 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <Starburst className="w-4 h-4 text-[#C084FC]" animate={false} />
                  <h3
                    className={`text-2xl font-display font-bold ${
                      isDark ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {cat.title}
                  </h3>
                </div>
                <p className={`text-xs font-mono ${isDark ? "text-[#C084FC]" : "text-[#7C3AED]"}`}>
                  {cat.subtitle}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
                {cat.skills.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -6, rotate: sIdx % 2 === 0 ? 1 : -1 }}
                      transition={{ duration: 0.2 }}
                      className={`p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col items-center text-center justify-between group ${
                        isDark
                          ? "bg-[#131322] border-[#242338] hover:border-[#8B5CF6]/60 hover:shadow-glow-purple-sm hover:bg-[#18182B]"
                          : "bg-white border-[#E4E4F2] hover:border-[#7C3AED]/50 hover:shadow-card-light shadow-sm"
                      }`}
                    >
                      <div
                        className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 ${
                          isDark
                            ? "bg-[#0E0E18] border border-[#242338] group-hover:border-[#8B5CF6]/50"
                            : "bg-violet-50/60 border border-violet-100 group-hover:border-violet-300"
                        }`}
                      >
                        <Icon
                          className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-6"
                          style={{ color: skill.color || '#8B5CF6' }}
                        />
                      </div>

                      <h4
                        className={`text-xs sm:text-sm font-heading font-bold transition-colors break-words max-w-full ${
                          isDark ? "text-white group-hover:text-[#C084FC]" : "text-[#0F172A] group-hover:text-[#7C3AED]"
                        }`}
                      >
                        {skill.name}
                      </h4>

                      <span
                        className={`text-[9px] sm:text-[10px] font-mono mt-2 px-2 sm:px-2.5 py-0.5 rounded-full border ${
                          isDark
                            ? "bg-[#07070B] text-[#9E9EB8] border-[#242338]"
                            : "bg-slate-50 text-[#64748B] border-[#E4E4F2]"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
};

export default Skills;
