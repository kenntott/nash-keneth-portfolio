import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { AllProjectsModal } from './AllProjectsModal';

export const Projects = () => {
  const { isDark } = useTheme();
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);

  // Featured projects: Card 1 = Barangay Kinilis, Card 2 = DesinioKoleksyon
  const kinilisProject = projects.find((p) => p.id === 'barangay-kinilis-portal') || projects[1];
  const desinioProject = projects.find((p) => p.id === 'desinio-koleksyon') || projects[0];

  const featured = [kinilisProject, desinioProject].filter(Boolean);

  return (
    <section
      id="projects"
      className={`border-b ${
        isDark ? "bg-[#080808] border-[#1c1c1c]" : "bg-[#F8F9FB] border-[#E4E4E7]"
      } py-4 lg:py-5 transition-colors duration-200`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">

          {/* Left Column: Introduction (approx 28% width) */}
          <div className="w-full lg:w-[28%] flex flex-col items-start pt-1">

            {/* Small Label */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#A78BFA] inline-block" />
              <span className={`text-[11px] font-mono font-bold tracking-widest uppercase ${
                isDark ? "text-[#A1A1AA]" : "text-[#71717A]"
              }`}>
                MY WORK
              </span>
            </div>

            {/* Main Heading */}
            <h2 className={`text-xl sm:text-2xl lg:text-[26px] font-sans font-black tracking-tight leading-tight mb-1.5 ${
              isDark ? "text-white" : "text-[#171717]"
            }`}>
              Things I've built<span className={isDark ? "text-[#A78BFA]" : "text-[#7C3AED]"}>.</span>
            </h2>

            {/* Description */}
            <p className={`text-xs leading-relaxed max-w-xs mb-3 ${
              isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
            }`}>
              A collection of projects that showcase my skills and passion for development.
            </p>

            {/* Explore Link */}
            <button
              onClick={() => setShowAllModal(true)}
              type="button"
              className={`text-xs font-mono font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer group ${
                isDark ? "text-white hover:text-[#A78BFA]" : "text-[#171717] hover:text-[#7C3AED]"
              }`}
            >
              <span>Explore all projects</span>
              <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${
                isDark ? "text-[#A78BFA]" : "text-[#7C3AED]"
              }`} />
            </button>

          </div>

          {/* Right Column: 2 Featured Cards in Horizontal Grid (approx 72% width) */}
          <div className="w-full lg:w-[72%] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {featured.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Case Study Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

      {/* Archive / All Projects Modal */}
      <AllProjectsModal
        isOpen={showAllModal}
        onClose={() => setShowAllModal(false)}
        onSelectProject={(proj) => setActiveModalProject(proj)}
      />
    </section>
  );
};

export default Projects;
