import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Filter } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const { isDark } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "info-systems", label: "Information Systems" },
    { id: "management", label: "Business Management" },
    { id: "community", label: "Governance & Community" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "info-systems") return p.category.includes("Information System");
    if (selectedFilter === "management") return p.category.includes("Management") || p.category.includes("POS");
    if (selectedFilter === "community") return p.category.includes("Community") || p.category.includes("Governance");
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRODUCTION PORTFOLIO</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-extrabold font-heading mb-4 ${
              isDark ? "text-white" : "text-[#111827]"
            }`}
          >
            Featured Projects & Systems
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
            }`}
          >
            Real-world web applications and enterprise information systems engineered for operational accuracy, role-based workflows, and database integrity.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => {
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
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
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
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
    </section>
  );
};

export default Projects;
