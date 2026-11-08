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
  Sparkles, 
  CheckCircle2 
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
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="max-w-xl mx-auto text-center px-4 py-32">
          <h2 className="text-3xl font-bold font-heading mb-4">Project Not Found</h2>
          <p className="text-sm text-gray-500 mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00E5A8] text-black font-semibold text-sm"
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
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <Link
            to="/#projects"
            className={`inline-flex items-center gap-2 text-xs font-mono mb-8 px-4 py-2 rounded-xl border transition-all ${
              isDark
                ? "bg-[#161920] border-[#292E38] text-[#A1A1AA] hover:text-[#00E5A8] hover:border-[#00E5A8]/50"
                : "bg-white border-[#E2E8F0] text-[#64748B] hover:text-[#059669] hover:border-[#059669]/50 shadow-sm"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects Showcase</span>
          </Link>

          {/* Header Banner */}
          <div className="mb-10">
            <span
              className={`text-xs font-mono font-medium uppercase tracking-wider ${
                isDark ? "text-[#00E5A8]" : "text-[#059669]"
              }`}
            >
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading mt-2 mb-4">
              {project.fullTitle || project.title}
            </h1>
            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
              {project.description}
            </p>
          </div>

          {/* Main Visual */}
          <div className="rounded-3xl overflow-hidden border aspect-[16/9] w-full bg-slate-900 mb-12 shadow-2xl relative">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md border ${
                  isDark
                    ? "bg-[#08090C]/85 text-[#00E5A8] border-[#00E5A8]/40"
                    : "bg-white/90 text-[#059669] border-[#059669]/40"
                }`}
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
                  isDark ? "bg-[#161920] border-[#292E38]" : "bg-white border-[#E2E8F0] shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-rose-500 font-heading font-semibold">
                  <AlertCircle className="w-5 h-5" />
                  <span>Problem Statement</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                  {project.problemStatement}
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? "bg-[#161920] border-[#292E38]" : "bg-white border-[#E2E8F0] shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-emerald-500 font-heading font-semibold">
                  <Target className="w-5 h-5" />
                  <span>Core Objectives</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {project.objectives?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00E5A8] font-bold">•</span>
                      <span className={isDark ? "text-[#E4E4E7]" : "text-[#334155]"}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* In-depth narrative */}
            <div
              className={`p-8 rounded-3xl border ${
                isDark ? "bg-[#161920] border-[#292E38]" : "bg-white border-[#E2E8F0] shadow-sm"
              }`}
            >
              <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#00E5A8]" />
                <span>Operational Context & System Workflow</span>
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#61DAFB]" />
                <span>Implemented Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border flex items-center gap-3 ${
                      isDark ? "bg-[#161920] border-[#292E38]" : "bg-white border-[#E2E8F0] shadow-sm"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00E5A8] flex-shrink-0" />
                    <span className="text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Role-based permissions */}
            {project.roles && (
              <div>
                <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>Stakeholders & User Roles</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.roles.map((r, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border ${
                        isDark ? "bg-[#161920] border-[#292E38]" : "bg-white border-[#E2E8F0] shadow-sm"
                      }`}
                    >
                      <h4 className={`text-sm font-bold mb-1.5 ${isDark ? "text-[#00E5A8]" : "text-[#059669]"}`}>
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

            {/* Architecture Highlights */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border ${
                isDark ? "bg-[#161920] border-[#292E38]" : "bg-white border-[#E2E8F0] shadow-sm"
              }`}
            >
              <h3 className="text-lg font-bold font-heading mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#00E5A8]" />
                <span>System Architecture</span>
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                {project.architecture}
              </p>
              <div className="space-y-2">
                {project.highlights?.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A8]" />
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider mb-3 text-gray-500">
                Technology Stack:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-mono px-3.5 py-1.5 rounded-xl border font-medium ${
                      isDark
                        ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                        : "bg-white border-[#E2E8F0] text-[#059669] shadow-sm"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-gray-700/20 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/#projects"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border ${
                  isDark
                    ? "bg-[#161920] border-[#292E38] text-white hover:border-[#00E5A8]"
                    : "bg-white border-[#E2E8F0] text-[#111827] hover:border-[#059669]"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Showcase</span>
              </Link>

              <div className="flex items-center gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#00E5A8] text-black"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border ${
                      isDark
                        ? "bg-[#161920] border-[#292E38] text-white hover:text-[#00E5A8]"
                        : "bg-white border-[#E2E8F0] text-[#111827] hover:text-[#059669]"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
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
