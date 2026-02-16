// ===========================================
// Types
// ===========================================

export interface ContactItem {
  label: string
  value: string
    icon: string
    href: string
}

export interface TerminalLine {
  type: 'comment' | 'command' | 'divider' | 'date' | 'output' | 'success'
  text: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface CareerProject {
  name: string
  description: string
  bullets: string[]
}

export interface CareerEntry {
  id: string
  company: string
  role: string
  fullRole: string
  dateRange: string
  projects: CareerProject[]
}

// ===========================================
// User Info
// ===========================================

export const USER_INFO = {
  username: 'htet_thu',
  displayName: 'Htet Thu',
  status: 'active',
  host: 'portfolio-',
  linkedin: 'https://www.linkedin.com/in/htet-thu-ya-a411471b5/',
} as const

// ===========================================
// Education
// ===========================================

export interface EducationItem {
  dateRange: string
  school: string
  degree: string
}

export const EDUCATION: EducationItem[] = [
  {
    dateRange: '2016 – 2020',
    school: 'University of Computer Studies Maubin',
    degree: 'Bachelor of Computer Science',
  },
]

// ===========================================
// Contact Information
// ===========================================

export const CONTACT_INFO: ContactItem[] = [
  { label: 'User', value: 'htet_thu', icon: '⟩', href: USER_INFO.linkedin },
  { label: '/Email', value: 'htetthuya.htya@gmail.com', icon: '@', href: 'https://mail.google.com/mail/?view=cm&to=htetthuya.htya@gmail.com' },
  { label: 'GitHub', value: '/github.com/htethu', icon: '◈', href: 'https://github.com/HtetThuYaAungg' },
  { label: 'LinkedIn', value: '/linkedin.com/in/htethu', icon: '◉', href: USER_INFO.linkedin },
]

// ===========================================
// Boot Sequence Messages
// ===========================================

export const BOOT_MESSAGES = [
  '> INITIALIZING SYSTEM...',
  '> LOADING PORTFOLIO v1.0.5...',
  '> ESTABLISHING CONNECTION...',
  '> ACCESS GRANTED_',
] as const

export const FOOTER_MESSAGE = 'Portfolio loaded successfully. System ready for interaction. All modules operational. @copyright ' + new Date().getFullYear() + ' HtetThu. All rights reserved.'

// ===========================================
// About Section
// ===========================================

export interface AboutParagraph {
  prefix: string
  highlights: string[]
  suffix: string
}

export const ABOUT_PARAGRAPHS: AboutParagraph[] = [
  {
    prefix: "I'm a passionate",
    highlights: ['Full-Stack Developer'],
    suffix: 'who loves building innovative digital solutions. With expertise in modern web technologies, I transform complex problems into elegant, user-friendly applications.',
  },
  {
    prefix: 'Specializing in',
    highlights: ['React', 'Next.js', 'Node.js', 'React Native', 'Cloud Architecture'],
    suffix: ". Always exploring new technologies and pushing the boundaries of what's possible on the web.",
  },
]

export const SKILLS: SkillCategory[] = [
  {
    title: '// FRONTEND',
    skills: ['Next.js', 'React', 'React Native', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: '// BACKEND',
    skills: ['Node.js', 'Nest.js', 'Express', 'PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
  },
  {
    title: '// DEVOPS',
    skills: ['Docker', 'AWS', 'CI/CD Pipelines'],
  },
]

// ===========================================
// Terminal / Career History (from CV)
// ===========================================

export const CAREER_ENTRIES: CareerEntry[] = [
  {
    id: "dai-ichi-life",
    company: "Dai-ichi-Life-Insurance",
    role: "Software Engineer",
    fullRole: "Software Engineer (ReactNative/ReactJs)",
    dateRange: "January 2026 – Present",
    projects: [
      {
        name: "Dai-ichi-Life Insurance App",
        description:
          "The Dai-ichi-Life Insurance App is a mobile application that allows users to manage their insurance policies and claims. I led the development the whole app from scratch to production.",
        bullets: ["current development status – in progress"],
      },
    ],
  },
  {
    id: "aya-bank",
    company: "Ayeyarwady Bank (AYA Bank)",
    role: "Full Stack Developer",
    fullRole: "Full Stack Developer (ReactJs/NextJs, NestJs/Postgresql)",
    dateRange: "January 2025 – December 2025",
    projects: [
      {
        name: "Treasury Banking System",
        description:
          "Automates and streamlines treasury operations, reducing manual effort and improving efficiency. I led the development of key forms and workflows to bring the system live successfully.",
        bullets: [
          "Dynamic Interest Calculations – Supports rule-based and market-linked computations configurable by products (e.g., Money Market, Fixed Deposit).",
          "Scheduled Financial Processing – Executes daily, monthly, and year-end settlements via cron jobs, including accruals and disbursements.",
          "Secure Authentication & Role-Based Access - Enforces multi-level access for admin, staff, and users.",
          "Robust GL Mapping – Ensures accurate financial postings and compliance with accounting rules.",
          "Posting to Core Banking – Handles Value, Daily, Due, and Adjustment postings directly to the core banking system.",
          "Transaction Tracking & Multi-Step Approvals – Monitors transactions end-to-end with configurable approval workflows.",
          "Audit Logging & Data Integrity – Maintains detailed logs, error handling, and full traceability.",
        ],
      },
      {
        name: "Telco-top-up",
        description:
          "Developed a multi-operator recharge platform supporting MPT, Telenor, Ooredoo, and Mytel. The system connects to billers via SOAP requests, ensuring reliable and real-time top-up processing.",
        bullets: [
          "Operational Features – Supports bulk top-ups, transaction history tracking, and configurable limits per user or role.",
          "Reliability & Error Handling – Implements a retry mechanism for failed top-ups, with transaction logging to ensure accuracy and traceability.",
          "Monitoring & Audit – Maintains detailed logs for all top-ups and system interactions to facilitate auditing and troubleshooting.",
        ],
      },
    ],
  },
  {
    id: "a-bank",
    company: "Ayeyarwaddy Farmers Development Bank (A Bank)",
    role: "Frontend Developer",
    fullRole: "Frontend Developer (ReactJs/NextJs)",
    dateRange: "January 2023 – January 2025",
    projects: [
      {
        name: "Consumer Portal",
        description:
          "The Consumer Portal manages real-time information related to users currently using the released A-plus mobile wallet. The project involves adding new features and performing maintenance tasks.",
        bullets: [
          "Mobile wallet management – Manage users' mobile wallet and perform transactions.",
          "Dashboard analytics – Monitor users' dashboard and perform transactions.",
          "Approval workflows – Approve or reject requests based on roles and needs.",
        ],
      },
      {
        name: "BPA",
        description:
          "The BPA system is integrated as a dynamic web view within the A-Plus Wallet app, providing users with a seamless way to top up their wallets and pay bills for all telcos and other service providers.",
        bullets: [
          "Dynamic web view – Developed dynamic UI that adapts based on API-driven configuration, allowing flexible feature updates without app redeployment.",
          "Bill payment – Enabled bill payments for all telcos and other service providers with real-time transaction communication to the mobile app.",
        ],
      },
      {
        name: "Ticketing",
        description:
          "The Ticketing system allows departments and employees to submit and manage requests based on their roles and needs. The project focuses on leading the frontend development and providing a seamless, user-friendly experience.",
        bullets: [
          "Role-based request submission for employees and departments.",
          "Ticket tracking with status updates and priority management.",
          "Approval workflows and collaboration tools like comments and attachments.",
          "Real-time notifications for updates and changes.",
          "Dashboard analytics for administrators to monitor ticket resolution efficiency.",
        ],
      },
    ],
  },
  {
    id: "twinkle",
    company: "Twinkle University",
    role: "Front-End Developer",
    fullRole: "Front-End Developer (ReactJs)",
    dateRange: "June 2022 – November 2022",
    projects: [
      {
        name: "Role Base Admin Portal",
        description:
          "At Twinkle SE Group, I served as a React Developer, where I led the front-end development of the admin panel for a key project. Over a six-month period, I successfully completed the project, delivering a robust and user-friendly interface for the admin panel.",
        bullets: [],
      },
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Frontend Developer",
    fullRole: "Frontend Developer (ReactJs/ReactNative)",
    dateRange: "Earlier",
    projects: [
      {
        name: "Dhammaransi Mobile Application",
        description:
          "Dhammaransi is a free, user-friendly app built with React Native CLI, featuring Async Storage for offline access, a smooth UI/UX, religious books, audio teachings, customizable themes, and multiple languages. Donated as a meritorious act. Available on Play Store and App Store.",
        bullets: [
          "play store link: https://play.google.com/store/apps/details?id=com.archivo.dhammaransiapp&hl=en",
          "app store link: https://apps.apple.com/us/app/dhammaransi/id6741844078",
        ],
      },
      {
        name: "Myanmar OCC Company",
        description:
          "For the admin panel's dashboard and shipping management features, I utilized Next.js and Material UI over a two-month period for a freelance project, successfully delivering an efficient and responsive interface that met the client's needs.",
        bullets: [],
      },
      {
        name: "Circles-X Company",
        description:
          "I worked on fixing authentication and UI issues while also handling API integration for their seeker portal, ensuring a smooth and seamless user experience throughout the platform.",
        bullets: [],
      },
    ],
  },
  {
    id: "bizsoft",
    company: "Bizsoft",
    role: "Internship",
    fullRole: "Internship (AngularJs)",
    dateRange: "July 2020 – October 2020",
    projects: [
      {
        name: "Web development & design",
        description:
          "Comprehensive study of the web development life cycle process, acquired proficiency in UI/UX design utilizing Figma, and sound understanding of both business principles and software testing methodologies. Commenced exposure to real-world projects.",
        bullets: [],
      },
    ],
  },
];


// ===========================================
// Animation / Timing
// ===========================================

export const TIMING = {
  bootDuration: 2000,
  terminalLineDelay: 300,
  terminalStartDelay: 2500,
  clockInterval: 1000,
} as const

// ===========================================
// Server Rack Configuration
// ===========================================

export const SERVER_RACK_UNITS = 4

export const INACTIVITY_DELAY = 120000 
