import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  GitBranch, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Cpu,
  Server
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { AnimatedSection } from './AnimatedSection';

const highlightCards = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    subtitle: "Building modern & responsive web applications",
    icon: Code2,
    gradient: "from-[#8B5CF6] to-[#38BDF8]",
    description: "Crafting modern, accessible, and reactive single-page applications with React.js, Tailwind CSS, and custom Framer Motion animations that adapt seamlessly to any device.",
    bullets: ["Modern React Architecture", "Mobile-First Fluid Interfaces", "Clean Component Modularity"],
  },
  {
    id: "info-systems",
    number: "02",
    title: "Information Systems",
    subtitle: "Designing & developing management systems",
    icon: Layers,
    gradient: "from-[#EC4899] to-[#8B5CF6]",
    description: "Engineering complete operational information platforms (such as POS, agricultural inventory trackers, and municipal portals), transforming complex business logic into intuitive workflows.",
    bullets: ["Role-Based Access Dashboards", "Operational Accounting & POS", "Real-Time Transaction Logging"],
  },
  {
    id: "db-management",
    number: "03",
    title: "Database Management",
    subtitle: "Working with SQL & modern database technologies",
    icon: Database,
    gradient: "from-[#38BDF8] to-[#8B5CF6]",
    description: "Architecting normalized relational schemas, data models, referential constraints, and security policies utilizing PostgreSQL, MySQL, and Supabase.",
    bullets: ["Relational Schema Normalization", "Row-Level Security (RLS)", "High-Integrity Queries & Triggers"],
  },
  {
    id: "deployment-vcs",
    number: "04",
    title: "Deployment & Version Control",
    subtitle: "Deploying & maintaining via GitHub & Vercel",
    icon: GitBranch,
    gradient: "from-[#C084FC] to-[#EC4899]",
    description: "Maintaining disciplined Git version control, collaborative branch workflows, and zero-configuration continuous deployments on Vercel and Netlify.",
    bullets: ["Git Feature Branching", "Instant Edge Hosting on Vercel", "Production Environment Security"],
  },
];

export const About = () => {
  const { isDark } = useTheme();

  return (
    <AnimatedSection id="about" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-4 border ${
              isDark
                ? "bg-[#131322] border-[#242338] text-[#C084FC]"
                : "bg-violet-50 border-violet-200 text-[#7C3AED]"
            }`}
          >
            <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>ABOUT MY APPROACH</span>
          </div>

          <h2
            className={`text-[clamp(1.65rem,5.2vw,3.75rem)] font-display font-extrabold tracking-tight leading-tight mb-6 break-normal max-w-full ${
              isDark ? "text-white" : "text-[#0F172A]"
            }`}
          >
            TURNING IDEAS INTO <span className="text-gradient-purple italic">DIGITAL SOLUTIONS</span>
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              isDark ? "text-[#9E9EB8]" : "text-[#475569]"
            }`}
          >
            I'm a passionate full-stack developer with an interest in modern web technologies and information systems. I enjoy building clean, scalable, and user-friendly applications that solve real problems and create value.
          </p>
        </div>

        {/* Asymmetrical Adelina 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative p-5 sm:p-8 md:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                  isDark
                    ? "bg-[#131322] border-[#242338] hover:border-[#8B5CF6]/60 hover:shadow-glow-purple-sm hover:bg-[#18182B]"
                    : "bg-white border-[#E4E4F2] hover:border-[#7C3AED]/50 hover:shadow-card-light shadow-sm"
                }`}
              >
                {/* Decorative background glow */}
                <div
                  className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${card.gradient}`}
                />

                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                        isDark
                          ? "bg-[#0E0E18] border-[#242338] text-[#C084FC] group-hover:border-[#8B5CF6]"
                          : "bg-violet-50 border-violet-100 text-[#7C3AED] group-hover:border-[#7C3AED]"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span
                      className={`text-3xl sm:text-4xl font-display font-extrabold opacity-30 group-hover:opacity-60 transition-opacity ${
                        isDark ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`text-2xl font-display font-bold mb-2 transition-colors ${
                      isDark ? "text-white group-hover:text-[#C084FC]" : "text-[#0F172A] group-hover:text-[#7C3AED]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6] mb-4">
                    {card.subtitle}
                  </p>

                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-8 ${
                      isDark ? "text-[#9E9EB8]" : "text-[#64748B]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-6 border-t border-dashed border-gray-700/20 dark:border-gray-800 space-y-2.5">
                  {card.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" animate={false} />
                      <span className={isDark ? "text-gray-300" : "text-gray-700 font-medium"}>
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
    </AnimatedSection>
  );
};

export default About;
