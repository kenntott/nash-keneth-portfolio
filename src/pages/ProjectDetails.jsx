import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Layers, 
  Target, 
  AlertCircle, 
  Users, 
  Cpu, 
  CheckCircle2,
  ArrowUpRight 
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA] dark:bg-[#080808] text-[#09090B] dark:text-white">
        <Navbar />
        <div className="max-w-xl mx-auto text-center px-4 py-36">
          <h2 className="text-3xl font-display font-extrabold mb-4">Project Not Found</h2>
          <p className="text-sm text-[#A1A1AA] mb-8">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#080808] text-[#09090B] dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <Link
            to="/#projects"
            className={`inline-flex items-center gap-2 text-xs font-mono font-medium mb-10 px-4 py-2 rounded-full border transition-all ${
              isDark
                ? "bg-[#141414] border-[#262626] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                : "bg-white border-[#E4E4E7] text-[#71717A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Header Banner */}
          <div className="mb-12">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#A78BFA] block mb-2"
            >
              {project.category}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-4 leading-tight">
              {project.fullTitle || project.title}
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#52525B]"}`}>
              {project.description}
            </p>
          </div>

          {/* Main Visual Thumbnail */}
          <div className="rounded-2xl overflow-hidden border border-[#262626] aspect-[16/9] w-full bg-[#101010] mb-12 relative shadow-card-dark">
            <img
              src={project.exploreImage || project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <span
                className="px-3.5 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md border bg-[#080808]/85 text-white border-[#262626]"
              >
                Status: {project.status}
              </span>
            </div>
          </div>

          {/* Case Study Details */}
          <div className="space-y-10">
            
            {/* Problem & Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? "bg-[#141414] border-[#262626]" : "bg-[#F4F4F5] border-[#E4E4E7]"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-red-400 font-display font-bold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Problems Addressed</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#52525B]"}`}>
                  {project.problemStatement}
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? "bg-[#141414] border-[#262626]" : "bg-[#F4F4F5] border-[#E4E4E7]"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-[#A78BFA] font-display font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Key Objectives</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {project.objectives?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#A78BFA] mt-0.5">•</span>
                      <span className={isDark ? "text-[#D4D4D8]" : "text-[#3F3F46]"}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* In-depth Operational Context */}
            <div
              className={`p-8 rounded-2xl border ${
                isDark ? "bg-[#141414] border-[#262626]" : "bg-white border-[#E4E4E7] shadow-sm"
              }`}
            >
              <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#A78BFA]" />
                <span>Operational Context &amp; Architecture</span>
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-[#A1A1AA]" : "text-[#52525B]"}`}>
                {project.longDescription}
              </p>
              <p className={`text-xs font-mono p-3 rounded-xl border ${
                isDark ? "bg-[#101010] border-[#262626] text-[#A78BFA]" : "bg-[#F4F4F5] border-[#E4E4E7] text-[#7C3AED]"
              }`}>
                Architecture: {project.architecture}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                <span>Implemented Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border flex items-center gap-3 ${
                      isDark ? "bg-[#141414] border-[#262626]" : "bg-white border-[#E4E4E7]"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stakeholders & Roles */}
            {project.roles && (
              <div>
                <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#38BDF8]" />
                  <span>Stakeholders &amp; User Roles</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.roles.map((r, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-xl border ${
                        isDark ? "bg-[#141414] border-[#262626]" : "bg-white border-[#E4E4E7]"
                      }`}
                    >
                      <h4 className="text-sm font-mono font-bold uppercase mb-1 text-[#A78BFA]">
                        {r.role}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                        {r.responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <p className="text-xs font-mono font-medium text-[#A1A1AA] uppercase tracking-wider mb-2.5">
                Technology Stack:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-mono px-3 py-1.5 rounded-md border ${
                      isDark
                        ? "bg-[#141414] border-[#262626] text-white"
                        : "bg-white border-[#E4E4E7] text-black"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-[#262626] flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/#projects"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium border transition-colors ${
                  isDark
                    ? "bg-[#141414] border-[#262626] text-white hover:border-[#404040]"
                    : "bg-white border-[#E4E4E7] text-black hover:border-[#A1A1AA]"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>

              <div className="flex items-center gap-3">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium border transition-colors ${
                      isDark
                        ? "bg-[#141414] border-[#262626] text-white hover:border-[#404040]"
                        : "bg-white border-[#E4E4E7] text-black hover:border-[#A1A1AA]"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-medium bg-white text-black hover:bg-[#F4F4F5] transition-colors"
                  >
                    <span>Visit Live App</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
