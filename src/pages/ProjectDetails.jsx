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
  CheckCircle2,
  ArrowUpRight 
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../data/projects';
import { Starburst } from '../components/Starburst';
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
        <div className="max-w-xl mx-auto text-center px-4 py-36">
          <Starburst className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
          <h2 className="text-3xl font-display font-extrabold mb-4">Project Not Found</h2>
          <p className="text-sm text-gray-500 mb-8">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold text-sm shadow-md"
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

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <Link
            to="/#projects"
            className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase mb-10 px-5 py-2.5 rounded-2xl border transition-all ${
              isDark
                ? "bg-[#131322] border-[#242338] text-[#9E9EB8] hover:text-[#C084FC] hover:border-[#8B5CF6]"
                : "bg-white border-[#E4E4F2] text-[#64748B] hover:text-[#7C3AED] hover:border-[#7C3AED] shadow-sm"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects Showcase</span>
          </Link>

          {/* Header Banner */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Starburst className="w-4 h-4 text-[#8B5CF6]" animate={false} />
              <span
                className={`text-xs font-mono font-bold uppercase tracking-wider ${
                  isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
                }`}
              >
                {project.category}
              </span>
            </div>

            <h1 className="text-[clamp(1.65rem,5.2vw,3.5rem)] font-display font-extrabold tracking-tight mb-6 leading-tight break-normal">
              {project.fullTitle || project.title}
            </h1>

            <p className={`text-base sm:text-xl leading-relaxed ${isDark ? "text-[#9E9EB8]" : "text-[#475569]"}`}>
              {project.description}
            </p>
          </div>

          {/* Main Visual Thumbnail */}
          <div className="rounded-3xl overflow-hidden border aspect-[16/9] w-full bg-slate-900 mb-14 shadow-2xl relative">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-5 left-5 flex gap-2">
              <span
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold backdrop-blur-md border ${
                  isDark
                    ? "bg-[#07070B]/85 text-[#C084FC] border-[#8B5CF6]/40"
                    : "bg-white/95 text-[#7C3AED] border-[#7C3AED]/40 shadow-sm"
                }`}
              >
                Status: {project.status}
              </span>
            </div>
          </div>

          {/* Case Study Details */}
          <div className="space-y-12">
            
            {/* Problem & Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`p-7 rounded-3xl border ${
                  isDark ? "bg-[#131322] border-[#242338]" : "bg-violet-50/40 border-violet-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-rose-500 font-display font-bold text-base">
                  <AlertCircle className="w-5 h-5" />
                  <span>Problems Addressed</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? "text-[#9E9EB8]" : "text-[#475569]"}`}>
                  {project.problemStatement}
                </p>
              </div>

              <div
                className={`p-7 rounded-3xl border ${
                  isDark ? "bg-[#131322] border-[#242338]" : "bg-violet-50/40 border-violet-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-[#C084FC] font-display font-bold text-base">
                  <Target className="w-5 h-5 text-[#8B5CF6]" />
                  <span>Purpose &amp; Objectives</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {project.objectives?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Starburst className="w-3.5 h-3.5 text-[#8B5CF6] mt-0.5" animate={false} />
                      <span className={isDark ? "text-gray-300" : "text-gray-700 font-medium"}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* In-depth Operational Context */}
            <div
              className={`p-8 sm:p-10 rounded-3xl border ${
                isDark ? "bg-[#131322] border-[#242338]" : "bg-white border-[#E4E4F2] shadow-sm"
              }`}
            >
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[#8B5CF6]" />
                <span>Operational Context &amp; Architecture</span>
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? "text-[#9E9EB8]" : "text-[#475569]"}`}>
                {project.longDescription}
              </p>
              <p className={`text-xs sm:text-sm font-mono p-4 rounded-2xl border ${
                isDark ? "bg-[#0E0E18] border-[#242338] text-[#C084FC]" : "bg-violet-50 border-violet-100 text-[#7C3AED]"
              }`}>
                Architecture: {project.architecture}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-5 flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-[#EC4899]" />
                <span>Implemented Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border flex items-center gap-3.5 ${
                      isDark ? "bg-[#131322] border-[#242338]" : "bg-white border-[#E4E4F2] shadow-sm"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className="text-sm font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stakeholders & Roles */}
            {project.roles && (
              <div>
                <h3 className="text-2xl font-display font-bold mb-5 flex items-center gap-2.5">
                  <Users className="w-6 h-6 text-[#38BDF8]" />
                  <span>Stakeholders &amp; User Roles</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {project.roles.map((r, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl border ${
                        isDark ? "bg-[#131322] border-[#242338]" : "bg-white border-[#E4E4F2] shadow-sm"
                      }`}
                    >
                      <h4 className="text-base font-bold font-heading mb-2 text-[#8B5CF6]">
                        {r.role}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                        {r.responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider mb-3 text-gray-500">
                Technology Stack:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-mono px-4 py-2 rounded-xl border font-bold ${
                      isDark
                        ? "bg-[#131322] border-[#242338] text-[#C084FC]"
                        : "bg-white border-[#E4E4F2] text-[#7C3AED] shadow-sm"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-10 border-t border-gray-700/20 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/#projects"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold border transition-colors ${
                  isDark
                    ? "bg-[#131322] border-[#242338] text-white hover:border-[#8B5CF6]"
                    : "bg-white border-[#E4E4F2] text-[#0F172A] hover:border-[#7C3AED]"
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-md hover:shadow-glow-purple"
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
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold border ${
                      isDark
                        ? "bg-[#131322] border-[#242338] text-white hover:text-[#C084FC]"
                        : "bg-white border-[#E4E4F2] text-[#0F172A] hover:text-[#7C3AED]"
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
