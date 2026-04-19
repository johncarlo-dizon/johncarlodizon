export const personalInfo = {
  name: "John Carlo Victoria Dizon",
  shortName: "JC Dizon",
  initials: "JC",
  title: "Junior Developer",
  subtitle: "Web · Mobile · Desktop",
  tagline: "Building scalable web apps and mobile experiences — from backend APIs to Play Store deployments.",
  location: "Pampanga, Philippines",
  email: "johncarlovdizon@gmail.com",
  github: "https://github.com/johncarlo-dizon",
  linkedin: "https://www.linkedin.com/in/john-carlo-dizon-b18064395/",
  portfolio: "https://johncarlodizon-silk.vercel.app/",
  available: true,
  about: [
    "I'm a junior developer specializing in building scalable web apps, mobile experiences, and desktop systems — from backend APIs to Play Store deployments. I work on full-stack web, cross-platform mobile, and biometric-integrated enterprise systems.",
    "I've contributed to real company workflows during my internship at BMware Business Solutions, building and maintaining systems used for HR, payroll, and attendance tracking.",
    "Currently finishing my BS in Information Technology at Holy Cross College. I'm continuously learning and improving my skills, and I'm eager to grow as a developer while gaining more real-world experience.",
  ],
};

export const forteItems = [
  "Java", "Flutter", "Laravel", "React.js", "Node.js", "Git / GitHub", "Express.js", "Postman", "MySQL", "MongoDB", "PostgreSQL", "Tailwind CSS", "Bootstrap","PHP (native)","CodeIgniter 4","Java"
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "PHP (native)", "Java Swing", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "CodeIgniter 4", "Spring Boot", "Express.js", "REST API Development","Java"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    category: "DevOps & Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Docker", "Vercel"],
  },
  {
    category: "Tools",
    items: ["Postman", "Git / GitHub", "n8n"],
  },
];

export const projects = [
  {
    title: "Intern Attendance Management System",
    description:
      "Desktop system that integrates with biometric devices via LAN to pull real-time OJT attendance data. Automatically generates TDR (Time and Daily Reports) and detailed attendance reports for intern monitoring and compliance.",
    tags: ["Java", "Java Swing", "PostgreSQL", "Biometrics / LAN"],
    category: "Desktop",
    featured: true,
  },
  {
    title: "SyncSpace — Workspace Collaboration System",
    description:
      "Full-stack workspace collaboration system with a Kanban board (similar to Trello) for task and project management. Built with Next.js and Supabase, containerized with Docker, and deployed on Vercel.",
    tags: ["Next.js", "Supabase", "Docker", "Vercel"],
    category: "Web",
    featured: true,
  },
  {
    title: "Research Management & Title Verification System",
    description:
      "Full-stack Laravel system for managing research documents and verifying title originality. Features plagiarism detection, document versioning, research workflow management, and RESTful APIs consumed by the frontend.",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    category: "Web",
    featured: true,
  },
  {
    title: "HR, Timekeeping & Payroll System",
    description:
      "Comprehensive desktop system for managing employee records, daily time tracking, and automated payroll computation. Maintained and enhanced for company-wide use, covering leave management, overtime calculation, and payslip generation.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    featured: true,
  },
  {
    title: "Head Office POS Maintenance System",
    description:
      "Desktop point-of-sale maintenance system developed for the company head office. Handles product catalog management, sales transactions, receipt generation, and inventory tracking.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    featured: false,
  },
  {
    title: "Kids Cancervive — Blood Donation Management",
    description:
      "Desktop application for managing blood donation drives and bloodletting events. Tracks donor records, blood type inventory, donation history, and generates reports for health coordinators.",
    tags: ["Java", "Java Swing", "PostgreSQL"],
    category: "Desktop",
    featured: false,
  },
  {
    title: "Clinic Management System",
    description:
      "Web-based clinic management system developed for a school health clinic. Manages patient consultations, medical records, appointment scheduling, and health inventory for school staff and students.",
    tags: ["Laravel", "MySQL", "REST API"],
    category: "Web",
    featured: false,
  },
  {
    title: "Point of Sale System",
    description:
      "Native PHP web-based POS system for retail operations. Handles product catalog management, sales transactions, receipt generation, inventory tracking, and daily sales reporting.",
    tags: ["PHP", "MySQL", "JavaScript"],
    category: "Web",
    featured: false,
  },
  {
    title: "Ordering App",
    description:
      "Flutter mobile application for placing and managing orders. Features product browsing, cart management, order tracking, and a clean checkout flow with real-time order status updates.",
    tags: ["Flutter", "Dart", "REST API", "MySQL"],
    category: "Mobile",
    featured: false,
  },
  {
    title: "Recipe App",
    description:
      "Flutter app for browsing, saving, and sharing recipes. Includes ingredient lists, step-by-step cooking instructions, category filtering, and a favorites feature with local storage.",
    tags: ["Flutter", "Dart", "REST API"],
    category: "Mobile",
    featured: false,
  },
  {
    title: "Note App",
    description:
      "Feature-rich Flutter notes application with create, edit, delete, and search functionality. Supports color-coded notes, local SQLite storage, and a responsive grid/list layout.",
    tags: ["Flutter", "Dart", "SQLite"],
    category: "Mobile",
    featured: false,
  },
  {
    title: "Contacts App",
    description:
      "Flutter contacts manager app with full CRUD operations, contact grouping, search and filter, and local device storage integration for seamless contact management.",
    tags: ["Flutter", "Dart", "SQLite"],
    category: "Mobile",
    featured: false,
  },
  {
    title: "Quote App",
    description:
      "Flutter mobile app that displays inspirational quotes with category filtering, share functionality, and a daily quote notification feature. Clean UI with smooth animations.",
    tags: ["Flutter", "Dart", "REST API"],
    category: "Mobile",
    featured: false,
  },
];

export const experience = [
  {
    role: "Desktop Application Developer (Intern)",
    company: "BMware Business Solutions Enterprises Inc.",
    type: "Internship",
    period: "Dec 2025 – Mar 2026",
    location: "Pampanga, Philippines",
    points: [
      "Developed an Intern Attendance Management System that integrates with biometric devices via LAN to automatically pull and manage OJT attendance data.",
      "Maintained and enhanced the Kids Cancervive System, a blood donation management application used for tracking donor records and donation history.",
      "Maintained and improved the company's Human Resource, Time Keeping and Payroll System for internal operations.",
      "Developed a Head Office POS Maintenance System for point-of-sale management at the company head office.",
    ],
  },
 
];

export const education = {
  degree: "BS Information Technology",
  school: "Holy Cross College",
  address: "Sta. Ana, Pampanga",
  period: "2022 – Present",
};

export const softSkills = [
  "Problem-Solving", "Team Collaboration", "Adaptability",
  "Initiative", "Critical Thinking", "Accountability", "Self-directed Learning",
];

// images: array — if multiple, lightbox shows them side by side
// featured: true = shown by default
export const certificates = [
  {
    title: "Rank 9 Overall in the College",
    period: "SY 2024–2025",
    images: ["/certificates/overallrank9.jpeg"],
    featured: true,
  },
  {
    title: "4th Place — CodeChum National Programming Challenge 2025, Season 2",
    period: "2025",
    images: ["/certificates/4th Place — CodeChum National Programming Challenge 2025, Season 2.png"],
    featured: true,
  },
  {
    title: "Top 1 Performer in the Department",
    period: "SY 2024–2025",
    images: ["/certificates/seclstop1.jpeg"],
    featured: true,
  },
  {
    title: "Top 3 Performer in the Department",
    period: "SY 2022–2023",
    images: ["/certificates/top3bestperformerindepartment.jpeg"],
    featured: true,
  },
  {
    title: "Overall Best Project",
    period: "SY 2021–2022",
    images: ["/certificates/overallbestproject.jpeg"],
    featured: true,
  },
  {
    title: "Best Project for Community Extension",
    period: "SY 2021–2022",
    images: ["/certificates/bestprojectforcommunityextension.jpeg"],
    featured: false,
  },
  {
    title: "Best in System",
    period: "SY 2021–2022",
    images: ["/certificates/bestinsystem.jpeg"],
    featured: false,
  },
  {
    title: "Best Presenter",
    period: "SY 2021–2022",
    images: ["/certificates/bestpresenter.jpeg"],
    featured: false,
  },
  {
    title: "Best in Research Paper",
    period: "SY 2021–2022",
    images: ["/certificates/bestinresearchpaper.jpeg"],
    featured: false,
  },
  {
    title: "President's Lister — 2023–2024, 1st Sem",
    period: "2023–2024",
    images: ["/certificates/pl2023-2024firstsem.jpeg"],
    featured: false,
  },
  {
    title: "President's Lister — 2023–2024, 2nd Sem",
    period: "2023–2024",
    images: ["/certificates/pl2023-2024secondsem.jpeg"],
    featured: false,
  },
  {
    title: "President's Lister — 2024–2025, 1st Sem",
    period: "2024–2025",
    // two certificates for same award — shown side by side in lightbox
    images: [
      "/certificates/pl2024-2025firstsem.jpeg",
      "/certificates/pl2024-2025firstsemv2.jpeg",
    ],
    featured: false,
  },
  {
    title: "President's Lister — 2024–2025, 2nd Sem",
    period: "2024–2025",
    images: [
      "/certificates/pl2024-2025secondsem.jpeg",
      "/certificates/pl2024-2025secondsemv2.jpeg",
    ],
    featured: false,
  },
  {
    title: "Certificate of Recognition — Embracing the Light of Innovation",
    period: "2024",
    images: ["/certificates/cerofrecog_embracingthelightofinnovation.jpeg"],
    featured: false,
  },
];

export const chatbotContext = `
You are JC Dizon himself. Respond in first person as JC — friendly, casual but professional, like a real developer chatting. Use "I", "my", "me".

About me:
- I'm John Carlo Victoria Dizon, goes by JC
- Junior Developer: Web, Mobile, Desktop — Pampanga, Philippines
- Open to work and new opportunities
- Email: johncarlovdizon@gmail.com

My forte: Java, Flutter, Laravel, Next.js, Node.js, TypeScript, Git/GitHub, Postman

Tech I work with: React, Next.js, TypeScript, JavaScript, PHP, Java Swing, Node.js, Laravel, CodeIgniter 4, Spring Boot, Flutter, Dart, MySQL, PostgreSQL, Supabase, Docker, Vercel

My projects: Intern Attendance System (biometrics/LAN), HR & Payroll System, POS System, SyncSpace (Next.js+Supabase), Research Management System (Laravel), Clinic System, 5 Flutter apps

Experience: Interned at BMware Business Solutions (Dec 2025–Mar 2026) building real enterprise systems. Academic full-stack dev at Holy Cross College (2022–Present).

Education: BS Information Technology, Holy Cross College — Top 1 in Department, President's Lister, Rank 9 overall, 4th Place CodeChum National Programming Challenge 2025 Season 2.

Keep replies short and conversational (2-4 sentences). Sound like a real person, not a bot. For hiring or contact, say to use the contact form or email me at johncarlovdizon@gmail.com.
`;