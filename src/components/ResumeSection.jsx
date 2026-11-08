import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  Mail, 
  MapPin, 
  Github, 
  Facebook, 
  Instagram, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Database, 
  Terminal, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { AnimatedSection } from './AnimatedSection';
import { cvData } from '../data/cvData';
import { socialLinks } from '../data/socialLinks';

export const ResumeSection = () => {
  const { isDark } = useTheme();

  return (
    <AnimatedSection id="resume" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-4 border ${
                isDark
                  ? "bg-[#131322] border-[#242338] text-[#C084FC]"
                  : "bg-violet-50 border-violet-200 text-[#7C3AED]"
              }`}
            >
              <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>CURRICULUM VITAE</span>
            </div>

            <h2
              className={`text-[clamp(1.75rem,5vw,3.5rem)] font-display font-extrabold tracking-tight mb-4 break-normal ${
                isDark ? "text-white" : "text-[#0F172A]"
              }`}
            >
              PROFESSIONAL <span className="text-gradient-purple italic pr-2">CV &amp; RESUME.</span>
            </h2>

            <p
              className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
                isDark ? "text-[#9E9EB8]" : "text-[#64748B]"
              }`}
            >
              Fourth-year IT student with practical academic and client-based full-stack development experience, a growing technical skill set, and a commitment to building clean, functional systems.
            </p>
          </div>

          <div className="w-full sm:w-auto flex-shrink-0">
            <a
              href={socialLinks.resumePath}
              download="Nash_Keneth_Barzo_CV.pdf"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-heading font-bold text-sm text-white transition-all duration-300 shadow-md hover:-translate-y-1 ${
                isDark
                  ? "bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#EC4899] hover:shadow-glow-purple"
                  : "bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:bg-[#6D28D9] hover:shadow-lg"
              }`}
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official CV (A4 PDF)</span>
            </a>
          </div>
        </div>

        {/* ATS-Clean Resume Container */}
        <div
          className={`rounded-3xl border p-4 sm:p-8 md:p-12 transition-all duration-300 relative shadow-xl overflow-hidden ${
            isDark
              ? "bg-[#0E0E18] border-[#242338] shadow-black/40"
              : "bg-white border-[#E4E4F2] shadow-card-light"
          }`}
        >
          {/* Top Decorative Starburst */}
          <div className="absolute top-6 right-6 hidden sm:block">
            <Starburst className="w-6 h-6 text-[#8B5CF6]/40" animate={false} />
          </div>

          {/* 1. Resume Header */}
          <div className="border-b border-gray-700/20 dark:border-gray-800 pb-8 mb-10">
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight ${
                isDark ? "text-white" : "text-[#0F172A]"
              }`}
            >
              {cvData.personalInfo.fullName}
            </h3>

            <p className="text-base sm:text-lg font-heading font-bold text-gradient-purple mt-1 mb-4">
              {cvData.personalInfo.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-mono max-w-full">
              <span className={`flex items-center gap-1.5 break-words max-w-full ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" />
                <span className="break-words">{cvData.personalInfo.address}</span>
              </span>

              <span className={`hidden sm:inline ${isDark ? "text-gray-700" : "text-gray-300"}`}>•</span>

              <a
                href={`mailto:${cvData.personalInfo.email}`}
                className="flex items-center gap-1.5 text-[#38BDF8] hover:underline break-all"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{cvData.personalInfo.email}</span>
              </a>

              <span className={`hidden sm:inline ${isDark ? "text-gray-700" : "text-gray-300"}`}>•</span>

              <a
                href={cvData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#A855F7] hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                github.com/{cvData.personalInfo.githubUsername}
              </a>

              <span className={`hidden sm:inline ${isDark ? "text-gray-700" : "text-gray-300"}`}>•</span>

              <a
                href={cvData.personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#60A5FA] hover:underline"
              >
                <Facebook className="w-3.5 h-3.5" />
                Facebook Profile
              </a>

              <span className={`hidden sm:inline ${isDark ? "text-gray-700" : "text-gray-300"}`}>•</span>

              <a
                href={cvData.personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#F472B6] hover:underline"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram Profile
              </a>
            </div>
          </div>

          {/* 2. Professional Summary */}
          <div className="mb-10">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
              }`}
            >
              <span>01.</span>
              <span>Professional Summary</span>
            </h4>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? "text-[#C8C8DC]" : "text-[#334155]"
              }`}
            >
              {cvData.summary}
            </p>
          </div>

          {/* 3. Technical Skills */}
          <div className="mb-10">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${
                isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
              }`}
            >
              <span>02.</span>
              <span>Technical Skills</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cvData.technicalSkills.map((category) => (
                <div
                  key={category.category}
                  className={`p-4 rounded-2xl border ${
                    isDark
                      ? "bg-[#131322] border-[#242338]"
                      : "bg-slate-50 border-[#E4E4F2]"
                  }`}
                >
                  <p className={`text-xs font-mono font-bold mb-2 ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                    {category.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-mono ${
                          isDark
                            ? "bg-[#0A0A12] border-[#2A2A40] text-[#9E9EB8]"
                            : "bg-white border-gray-200 text-[#475569]"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Key Academic & System Development Projects */}
          <div className="mb-10">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${
                isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
              }`}
            >
              <span>03.</span>
              <span>Key Academic &amp; System Development Projects</span>
            </h4>

            <div className="space-y-4">
              {cvData.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    isDark
                      ? "bg-[#131322] border-[#242338] hover:border-[#8B5CF6]/50"
                      : "bg-slate-50 border-[#E4E4F2] hover:border-[#7C3AED]/40"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h5 className={`font-display font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                        {proj.title}
                      </h5>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Live App</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8B5CF6]/15 text-[#C084FC] border border-[#8B5CF6]/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Education */}
          <div className="mb-10">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${
                isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
              }`}
            >
              <span>04.</span>
              <span>Education</span>
            </h4>

            <div
              className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isDark
                  ? "bg-[#131322] border-[#242338]"
                  : "bg-slate-50 border-[#E4E4F2]"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-[#0E0E18] text-[#C084FC]" : "bg-violet-100 text-[#7C3AED]"
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className={`font-display font-bold text-base ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                    {cvData.education.institution}
                  </h5>
                  <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                    {cvData.education.degree}
                  </p>
                </div>
              </div>

              <span className="self-start sm:self-auto text-[11px] sm:text-xs font-mono font-bold px-3 py-1 rounded-xl sm:rounded-full border bg-emerald-500/10 text-emerald-400 border-emerald-500/30 max-w-full break-words">
                {cvData.education.level} • {cvData.education.status}
              </span>
            </div>
          </div>

          {/* 6. Practical Development Experience */}
          <div className="mb-10">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${
                isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
              }`}
            >
              <span>05.</span>
              <span>Practical Development Experience</span>
            </h4>

            <div className="space-y-3.5">
              {cvData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border ${
                    isDark
                      ? "bg-[#131322] border-[#242338]"
                      : "bg-slate-50 border-[#E4E4F2]"
                  }`}
                >
                  <p className={`font-display font-bold text-sm sm:text-base mb-1.5 ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                    • {exp.title}
                  </p>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-2.5 ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                    {exp.description}
                  </p>
                  <ul className="space-y-1 pl-4">
                    {exp.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className={`text-xs list-disc ${isDark ? "text-[#C8C8DC]" : "text-[#475569]"}`}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Career Objective */}
          <div className="border-t border-gray-700/20 dark:border-gray-800 pt-8">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
              }`}
            >
              <span>06.</span>
              <span>Career Objective</span>
            </h4>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? "text-[#C8C8DC]" : "text-[#334155]"
              }`}
            >
              {cvData.careerObjective}
            </p>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-10 pt-6 border-t border-gray-700/20 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={`text-xs font-mono ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
              ATS-Friendly Layout • Formatted for Standard A4 Paper
            </p>

            <a
              href={socialLinks.resumePath}
              download="Nash_Keneth_Barzo_CV.pdf"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-2xl text-xs font-heading font-bold text-white transition-all duration-300 shadow-sm hover:-translate-y-0.5 ${
                isDark
                  ? "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:shadow-glow-purple"
                  : "bg-[#7C3AED] hover:bg-[#6D28D9]"
              }`}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF Version</span>
            </a>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};

export default ResumeSection;
