import React, { useState } from 'react';
import { Briefcase, Sparkles, Filter } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Starburst } from './Starburst';
import { AnimatedSection } from './AnimatedSection';

export const Projects = () => {
  const { isDark } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { id: "all", label: "All Work" },
    { id: "info-systems", label: "Information Systems" },
    { id: "management", label: "Business Management / POS" },
    { id: "community", label: "Governance & Security" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "info-systems") return p.category.includes("Information System");
    if (selectedFilter === "management") return p.category.includes("Management") || p.category.includes("POS");
    if (selectedFilter === "community") return p.category.includes("Governance") || p.category.includes("Security");
    return true;
  });

  return (
    <AnimatedSection id="projects" className="py-24 md:py-36 relative">
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
            <span>FEATURED CASE STUDIES</span>
          </div>

          <h2
            className={`text-[clamp(1.65rem,5.2vw,3.5rem)] font-display font-extrabold tracking-tight mb-4 break-normal ${
              isDark ? "text-white" : "text-[#0F172A]"
            }`}
          >
            MY WORK, <span className="text-gradient-purple italic">MY PROJECTS.</span>
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              isDark ? "text-[#9E9EB8]" : "text-[#64748B]"
            }`}
          >
            Here are some of the projects I've worked on. Explore the systems and digital solutions I've developed.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {filters.map((f) => {
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
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
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Adelina Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onViewDetails={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

      </div>
    </AnimatedSection>
  );
};

export default Projects;
