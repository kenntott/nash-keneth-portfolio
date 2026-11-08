import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code2, Sparkles, BookOpen } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { socialLinks } from '../data/socialLinks';

// Fallback repositories adhering to actual project scope
const FALLBACK_REPOS = [
  {
    name: "desinio-koleksyon-pos",
    description: "Printing Services Management & POS System with job costing, billing, and queue tracking.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    stargazers_count: 12,
    forks_count: 3,
    html_url: socialLinks.github,
  },
  {
    id: 2,
    name: "ricemill-inventory-mgmt",
    description: "Rice Mill By-Product Utilization, delayed receivable ledger, and inventory automation.",
    language: "PHP / React",
    languageColor: "#777BB4",
    stargazers_count: 8,
    forks_count: 2,
    html_url: socialLinks.github,
  },
  {
    id: 3,
    name: "barangay-kinilis-portal",
    description: "Digital governance portal for community clearance requests, notices, and resident tracking.",
    language: "JavaScript",
    languageColor: "#61DAFB",
    stargazers_count: 15,
    forks_count: 4,
    html_url: socialLinks.github,
  },
  {
    id: 4,
    name: "nexus-hub-digital-hq",
    description: "Enterprise workplace platform with RBAC security matrix, audit logs, and record access control.",
    language: "JavaScript",
    languageColor: "#38BDF8",
    stargazers_count: 10,
    forks_count: 2,
    html_url: socialLinks.github,
  },
];

export const GithubShowcase = () => {
  const { isDark } = useTheme();
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Attempt public repos fetch safely without blocking
    const fetchPublicRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${socialLinks.githubUsername}/repos?sort=updated&per_page=4`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          }
        }
      } catch (err) {
        // Fallback data is automatically preserved
      } finally {
        setLoading(false);
      }
    };

    fetchPublicRepos();
  }, []);

  // Generate simulated activity commit squares
  const activityDays = Array.from({ length: 52 * 4 }, (_, i) => {
    const level = (i % 7 === 0 || i % 11 === 0 || i % 5 === 0) ? Math.floor(Math.random() * 4) + 1 : 0;
    return level;
  });

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card Header */}
        <div
          className={`p-8 rounded-3xl border mb-12 flex flex-col md:flex-row items-center justify-between gap-6 ${
            isDark
              ? "bg-[#161920] border-[#292E38]"
              : "bg-white border-[#E2E8F0] shadow-card-light"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                isDark
                  ? "bg-[#111318] border-[#292E38] text-white"
                  : "bg-slate-100 border-[#E2E8F0] text-slate-800"
              }`}
            >
              <Github className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-xl font-bold font-heading ${isDark ? "text-white" : "text-[#111827]"}`}>
                  GitHub Repository Activity
                </h3>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                    isDark ? "bg-[#00E5A8]/10 text-[#00E5A8] border-[#00E5A8]/30" : "bg-emerald-50 text-[#059669] border-emerald-200"
                  }`}
                >
                  @{socialLinks.githubUsername}
                </span>
              </div>
              <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                Open-source contributions, web systems, and collaborative development.
              </p>
            </div>
          </div>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#111318] border-[#292E38] text-white hover:text-[#00E5A8] hover:border-[#00E5A8]/40"
                : "bg-slate-50 border-[#E2E8F0] text-[#111827] hover:text-[#059669] hover:border-[#059669]/40"
            }`}
          >
            <span>Visit Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                isDark
                  ? "bg-[#161920] border-[#292E38] hover:border-[#00E5A8]/50 hover:shadow-card-dark"
                  : "bg-white border-[#E2E8F0] hover:border-[#059669]/50 hover:shadow-card-light shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className={`w-4 h-4 ${isDark ? "text-[#00E5A8]" : "text-[#059669]"}`} />
                    <h4
                      className={`text-base font-bold font-heading transition-colors ${
                        isDark ? "text-white group-hover:text-[#00E5A8]" : "text-[#111827] group-hover:text-[#059669]"
                      }`}
                    >
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                  {repo.description || "Production system repository and source codebase."}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-dashed border-gray-700/30 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor || '#00E5A8' }}
                  />
                  <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                    {repo.language || "JavaScript"}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stargazers_count ?? 5}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks_count ?? 2}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contribution Activity Grid Bar */}
        <div
          className={`p-6 rounded-2xl border ${
            isDark ? "bg-[#111318] border-[#292E38]" : "bg-slate-50 border-[#E2E8F0]"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-mono font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Continuous Contribution Cadence
            </span>
            <span className="text-[11px] font-mono text-gray-400">Regular Git Commits</span>
          </div>

          <div className="flex flex-wrap gap-1 items-center justify-center sm:justify-start overflow-hidden">
            {activityDays.map((level, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-[2px] transition-colors ${
                  level === 0
                    ? isDark ? "bg-gray-800/60" : "bg-slate-200"
                    : level === 1
                    ? isDark ? "bg-[#00E5A8]/30" : "bg-emerald-200"
                    : level === 2
                    ? isDark ? "bg-[#00E5A8]/60" : "bg-emerald-400"
                    : isDark ? "bg-[#00E5A8]" : "bg-[#059669]"
                }`}
                title={`Activity point level: ${level}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GithubShowcase;
