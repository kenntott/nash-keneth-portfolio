import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Server, 
  ShieldCheck, 
  Workflow, 
  GitBranch,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const highlightCards = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "React.js & Modern UI",
    icon: Code2,
    accentColor: "#61DAFB",
    description: "Crafting modular, clean, and reactive single-page applications with React.js, Tailwind CSS, and custom animations that adapt effortlessly to any screen size.",
    bullets: ["Component Reusability", "Responsive Grid/Flexbox", "Modern State Management"],
  },
  {
    id: "info-systems",
    title: "Information Systems Development",
    subtitle: "Operations & Workflows",
    icon: Layers,
    accentColor: "#00E5A8",
    description: "Architecting end-to-end information systems such as POS, inventory trackers, and municipal portals, converting intricate organizational logic into fluid digital workflows.",
    bullets: ["Role-Based Dashboards", "Operational Accounting", "Real-Time Status Monitoring"],
  },
  {
    id: "db-management",
    title: "Database Management",
    subtitle: "PostgreSQL & MySQL",
    icon: Database,
    accentColor: "#3ECF8E",
    description: "Designing normalized relational databases, data schemas, foreign-key constraints, and secure access policies utilizing PostgreSQL, MySQL, and Supabase.",
    bullets: ["Schema Normalization", "Row-Level Security (RLS)", "Automated Transactions"],
  },
  {
    id: "deployment-vcs",
    title: "Deployment & Version Control",
    subtitle: "Git, Vercel & CI/CD",
    icon: GitBranch,
    accentColor: "#A855F7",
    description: "Employing disciplined Git branching conventions, collaborative GitHub workflows, and zero-configuration production deployments on Vercel and Netlify.",
    bullets: ["Branching & Pull Requests", "Instant Edge Hosting", "Environment Protection"],
  },
];

export const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-3 border ${
              isDark
                ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                : "bg-emerald-50 border-emerald-200 text-[#059669]"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-extrabold font-heading mb-4 ${
              isDark ? "text-white" : "text-[#111827]"
            }`}
          >
            About Me & My Development Journey
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
            }`}
          >
            I am a dedicated developer focused on frontend engineering and practical information systems.
            I transform operational bottlenecks into streamlined, intuitive, and secure digital software.
          </p>
        </div>

        {/* Narrative & Focus Area */}
        <div
          className={`p-8 md:p-10 rounded-3xl border mb-16 relative overflow-hidden ${
            isDark
              ? "bg-[#161920]/70 border-[#292E38] text-[#E4E4E7]"
              : "bg-white border-[#E2E8F0] text-[#334155] shadow-card-light"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                My passion lies at the intersection of <strong className={isDark ? "text-white" : "text-black"}>clean user interfaces</strong> and <strong className={isDark ? "text-white" : "text-black"}>functional business systems</strong>. Rather than building purely static landing pages, I thrive on engineering applications that solve daily operational problems.
              </p>
              <p>
                From custom printing POS cost-calculators (<em>DesinioKoleksyon</em>) to bulk rice mill agricultural inventory tracking and local digital governance portals (<em>Barangay Kinilis</em>), I focus on building role-based dashboards, secure data inputs, and responsive workflows.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                I prioritize clean modular React architectures, predictable state management, and reusable components. On the data tier, I integrate relational databases like PostgreSQL and MySQL through Supabase and RESTful APIs, securing records with role-based policies.
              </p>
              <p>
                Every project is managed with disciplined Git version control, organized documentation, and configured for seamless continuous deployment on platforms like Vercel and Netlify.
              </p>
            </div>
          </div>
        </div>

        {/* Four Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#161920] border-[#292E38] hover:border-[#00E5A8]/50 hover:shadow-card-dark"
                    : "bg-white border-[#E2E8F0] hover:border-[#059669]/50 hover:shadow-card-light shadow-sm"
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                      isDark
                        ? "bg-[#111318] border border-[#292E38] text-[#00E5A8]"
                        : "bg-slate-100 border border-[#E2E8F0] text-[#059669]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className={`text-lg font-bold font-heading mb-1 transition-colors ${
                      isDark ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-xs font-mono font-medium mb-3 ${
                      isDark ? "text-[#00E5A8]" : "text-[#059669]"
                    }`}
                  >
                    {card.subtitle}
                  </p>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-dashed border-gray-700/30 dark:border-gray-800 space-y-2">
                  {card.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 flex-shrink-0 ${
                          isDark ? "text-[#00E5A8]" : "text-[#059669]"
                        }`}
                      />
                      <span className={isDark ? "text-[#E4E4E7]" : "text-[#334155]"}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
