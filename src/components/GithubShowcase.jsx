import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, BookOpen, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { AnimatedSection } from './AnimatedSection';
import { socialLinks } from '../data/socialLinks';

const FALLBACK_REPOS = [
  {
    name: "desinio-koleksyon-pos",
    description: "Printing Services Management & POS System with job costing, billing, and queue tracking.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    stargazers_count: 14,
    forks_count: 4,
    html_url: socialLinks.github,
  },
  {
    name: "ricemill-inventory-mgmt",
    description: "Rice Mill By-Product Utilization, delayed receivable ledger, and inventory automation.",
    language: "PHP / React",
    languageColor: "#777BB4",
    stargazers_count: 9,
    forks_count: 3,
    html_url: socialLinks.github,
  },
  {
    name: "barangay-kinilis-portal",
    description: "Digital governance portal for community clearance requests, notices, and resident tracking.",
    language: "JavaScript",
    languageColor: "#61DAFB",
    stargazers_count: 18,
    forks_count: 5,
    html_url: socialLinks.github,
  },
  {
    name: "nexus-hub-digital-hq",
    description: "Enterprise workplace platform with RBAC security matrix, audit logs, and record access control.",
    language: "JavaScript",
    languageColor: "#A855F7",
    stargazers_count: 12,
    forks_count: 3,
    html_url: socialLinks.github,
  },
];

export const GithubShowcase = () => {
  const { isDark } = useTheme();
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [repoCount, setRepoCount] = useState(4);

  useEffect(() => {
    const fetchPublicRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${socialLinks.githubUsername}/repos?sort=updated&per_page=4`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
            setRepoCount(data.length);
          }
        }
      } catch (err) {
        // Fallback preserved
      }
    };

    fetchPublicRepos();
  }, []);

  // Simulated GitHub commit activity map
  const activityDays = Array.from({ length: 52 * 4 }, (_, i) => {
    return (i % 6 === 0 || i % 9 === 0 || i % 4 === 0) ? Math.floor(Math.random() * 4) + 1 : 0;
  });

  return (
    <AnimatedSection className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card Header */}
        <div
          className={`p-6 sm:p-8 md:p-10 rounded-3xl border mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden ${
            isDark
              ? "bg-[#131322] border-[#242338]"
              : "bg-white border-[#E4E4F2] shadow-card-light"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                isDark
                  ? "bg-[#0E0E18] border-[#242338] text-white"
                  : "bg-violet-50 border-violet-100 text-[#7C3AED]"
              }`}
            >
              <Github className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className={`text-xl sm:text-2xl font-display font-extrabold break-words ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                  GitHub Repository Activity
                </h3>
                <span className="text-[11px] sm:text-xs font-mono font-bold px-2.5 sm:px-3 py-0.5 rounded-full border bg-gradient-to-r from-[#8B5CF6]/15 to-[#EC4899]/15 border-[#8B5CF6]/40 text-[#C084FC]">
                  @{socialLinks.githubUsername}
                </span>
              </div>
              <p className={`text-xs sm:text-sm ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                Open-source codebases, management systems, and collaborative web platforms.
              </p>
            </div>
          </div>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#0E0E18] border-[#242338] text-white hover:text-[#C084FC] hover:border-[#8B5CF6]"
                : "bg-slate-50 border-[#E4E4F2] text-[#0F172A] hover:text-[#7C3AED] hover:border-[#7C3AED]/40"
            }`}
          >
            <span>Visit Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {repos.slice(0, 4).map((repo, idx) => (
            <motion.a
              key={repo.name || idx}
              href={repo.html_url || socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className={`p-5 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                isDark
                  ? "bg-[#131322] border-[#242338] hover:border-[#8B5CF6]/60 hover:shadow-glow-purple-sm hover:bg-[#18182B]"
                  : "bg-white border-[#E4E4F2] hover:border-[#7C3AED]/50 hover:shadow-card-light shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className={`w-4 h-4 ${isDark ? "text-[#C084FC]" : "text-[#7C3AED]"}`} />
                    <h4
                      className={`text-base sm:text-lg font-display font-bold transition-colors break-words ${
                        isDark ? "text-white group-hover:text-[#C084FC]" : "text-[#0F172A] group-hover:text-[#7C3AED]"
                      }`}
                    >
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                  {repo.description || "Production system repository and source codebase."}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs pt-4 border-t border-dashed border-gray-700/20 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor || '#8B5CF6' }}
                  />
                  <span className={isDark ? "text-gray-300" : "text-gray-700 font-medium"}>
                    {repo.language || "JavaScript"}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-gray-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stargazers_count ?? 8}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks_count ?? 3}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contribution Activity Grid */}
        <div
          className={`p-5 sm:p-7 rounded-3xl border overflow-hidden ${
            isDark ? "bg-[#0E0E18] border-[#242338]" : "bg-violet-50/40 border-violet-100"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" animate={false} />
              <span className={`text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Continuous Git Cadence
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-gray-400">Public Sprints</span>
          </div>

          <div className="overflow-x-auto pb-1 max-w-full">
            <div className="flex flex-wrap gap-1 items-center justify-start min-w-[280px]">
              {activityDays.map((level, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-[2px] transition-colors ${
                    level === 0
                      ? isDark ? "bg-[#18182B]" : "bg-slate-200"
                      : level === 1
                      ? isDark ? "bg-[#8B5CF6]/30" : "bg-violet-200"
                      : level === 2
                      ? isDark ? "bg-[#8B5CF6]/60" : "bg-violet-400"
                      : isDark ? "bg-[#C084FC]" : "bg-[#7C3AED]"
                  }`}
                  title={`Activity point level: ${level}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
};

export default GithubShowcase;
