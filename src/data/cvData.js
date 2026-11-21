import { socialLinks } from './socialLinks';

export const cvData = {
  personalInfo: {
    fullName: "Nash Keneth Q. Barzo",
    title: "Aspiring Full-Stack Web Developer",
    email: socialLinks.email, // barzonashkenneth@gmail.com
    address: "Tuyac Village, Cannery Site, Polomolok, South Cotabato, Philippines",
    github: socialLinks.github, // https://github.com/kenntott
    githubUsername: socialLinks.githubUsername,
    facebook: socialLinks.facebook, // https://www.facebook.com/share/1AFFXqztJw/
    instagram: socialLinks.instagram, // https://www.instagram.com/nshkenn?rpxt=Y2djMHFzOWpyOXZ1
    instagramHandle: "@nshkenn",
  },

  summary:
    "Fourth-year Bachelor of Science in Information Technology student at South East Institute of Technology with practical experience in developing web-based applications through academic and client-based projects. Knowledgeable in frontend development, backend integration, database management, and responsive user interface development. Passionate about building functional, user-friendly, and efficient digital solutions while continuously improving technical and problem-solving skills. Aspiring to become a Full-Stack Web Developer.",

  careerObjective:
    "To pursue opportunities in web development where I can apply my technical knowledge, gain professional experience, contribute to meaningful projects, and grow into a skilled Full-Stack Web Developer.",

  technicalSkills: [
    {
      category: "Frontend Development",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      skills: ["PHP", "Supabase"],
    },
    {
      category: "Database Management",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      category: "Development Tools and Platforms",
      skills: ["Visual Studio Code", "Git", "GitHub", "Vercel"],
    },
  ],

  projects: [
    {
      title: "DesinioKoleksyon — Printing Services Management and POS System",
      description:
        "Developed a printing shop management and Point of Sale system designed to manage printing orders, cost estimation, payments, production monitoring, and sales reports.",
      technologies: ["React.js", "JavaScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://desinio-koleksyon.vercel.app/",
    },
    {
      title: "Rice Mill By-Product Utilization Management System",
      description:
        "Developed a management system for monitoring rice mill by-products, inventory, delayed transactions, financial records, payments, and automated reports.",
      technologies: ["PHP", "MySQL", "React.js", "Tailwind CSS"],
    },
    {
      title: "Barangay Kinilis Digital Governance Portal",
      description:
        "Developed a web-based governance portal designed to improve barangay services, digital transactions, complaint tracking, and communication between residents and administrators.",
      technologies: ["React.js", "JavaScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://barangay-kinilis-digital-governance.vercel.app/",
    },
    {
      title: "Nexus Hub — Digital HQ System",
      description:
        "Developed a centralized digital management platform for organizing business operations, employee records, projects, communication, and organizational activities, with an emphasis on security and access control.",
      technologies: ["React.js", "JavaScript", "Supabase", "Tailwind CSS"],
    },
  ],

  education: {
    institution: "South East Institute of Technology",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    level: "Fourth-Year College Student",
    status: "Currently Pursuing",
  },

  experience: [
    {
      title: "Student-Based Web Development Projects",
      description:
        "Worked on web development projects for fellow students, helping create and improve functional systems based on their academic and project requirements.",
      highlights: [
        "Constructed intuitive user interfaces and backend structures adhering to student specification requirements.",
        "Assisted colleagues with debugging, database schema design, and modular code refactoring.",
      ],
    },
    {
      title: "Freelance / Client-Based Development",
      description:
        "Gained practical experience working with clients on website and system development tasks, translating their requirements into functional and user-friendly applications.",
      highlights: [
        "Gathered client workflow requirements and converted operational logic into responsive digital interfaces.",
        "Implemented secure authentication, CRUD controllers, and automated reporting formats.",
      ],
    },
    {
      title: "Academic System Development",
      description:
        "Collaborated on academic software projects involving system planning, database management, frontend development, backend integration, and application testing.",
      highlights: [
        "Participated across full development lifecycle from ERD modeling to live deployment.",
        "Conducted cross-browser usability and form injection boundary testing.",
      ],
    },
  ],
};
