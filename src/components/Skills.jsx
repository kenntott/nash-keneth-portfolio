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
  Figma, 
  Sparkles,
  Layers
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { skillCategories } from '../data/skills';

// Map icon names from skill data to Lucide React components
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
  Figma,
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

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case "Experienced":
        return isDark
          ? "bg-[#00E5A8]/10 text-[#00E5A8] border-[#00E5A8]/30"
          : "bg-emerald-50 text-[#059669] border-emerald-200";
      case "Familiar":
        return isDark
          ? "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/30"
          : "bg-cyan-50 text-[#0891B2] border-cyan-200";
      case "Currently Learning":
        return isDark
          ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
          : "bg-amber-50 text-amber-600 border-amber-200";
      default:
        return isDark
          ? "bg-gray-800 text-gray-300 border-gray-700"
          : "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-3 border ${
              isDark
                ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                : "bg-emerald-50 border-emerald-200 text-[#059669]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>TECH STACK & CAPABILITIES</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-extrabold font-heading mb-4 ${
              isDark ? "text-white" : "text-[#111827]"
            }`}
          >
            Technical Skills & Tools
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
            }`}
          >
            A clear and honest breakdown of my primary development tools, frameworks, and system stacks categorized by proficiency.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? "bg-[#00E5A8] text-[#08090C] font-semibold shadow-glow-green-sm"
                      : "bg-[#059669] text-white font-semibold shadow-sm"
                    : isDark
                    ? "bg-[#161920] border border-[#292E38] text-[#A1A1AA] hover:text-white hover:border-[#00E5A8]/40"
                    : "bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#111827] hover:border-[#059669]/40 shadow-sm"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b pb-3 border-gray-700/20 dark:border-gray-800">
                <h3
                  className={`text-xl font-bold font-heading ${
                    isDark ? "text-white" : "text-[#111827]"
                  }`}
                >
                  {cat.title}
                </h3>
                <p
                  className={`text-xs ${
                    isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
                  }`}
                >
                  {cat.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                      whileHover={{ y: -4 }}
                      className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                        isDark
                          ? "bg-[#161920] border-[#292E38] hover:border-[#00E5A8]/50 hover:shadow-card-dark"
                          : "bg-white border-[#E2E8F0] hover:border-[#059669]/50 hover:shadow-card-light shadow-sm"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                            isDark
                              ? "bg-[#111318] border-[#292E38] group-hover:border-[#00E5A8]/40"
                              : "bg-slate-50 border-[#E2E8F0] group-hover:border-[#059669]/40"
                          }`}
                        >
                          <Icon
                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: skill.color || (isDark ? '#00E5A8' : '#059669') }}
                          />
                        </div>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <div>
                        <h4
                          className={`text-sm font-semibold mb-1 transition-colors ${
                            isDark ? "text-white" : "text-[#111827]"
                          }`}
                        >
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 pt-6 border-t border-gray-700/20 dark:border-gray-800 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A1A1AA]">
          <span className="font-mono uppercase text-[11px] text-gray-400">Proficiency Key:</span>
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-[#00E5A8]" : "bg-[#059669]"}`} />
            <span>Experienced (Production-proven)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-[#61DAFB]" : "bg-[#0891B2]"}`} />
            <span>Familiar (Active usage & integration)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>Currently Learning (Expanding skillset)</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
