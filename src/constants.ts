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

// ===========================================
// User Info
// ===========================================

export const USER_INFO = {
  username: 'htet_thu',
  displayName: 'Htet Thu',
  status: 'active',
  host: 'portfolio-v1.0.4',
  linkedin: 'https://www.linkedin.com/in/htet-thu-ya-a411471b5/',
} as const

// ===========================================
// Contact Information
// ===========================================

export const CONTACT_INFO: ContactItem[] = [
  { label: 'User', value: 'htet_thu', icon: '👤', href: USER_INFO.linkedin },
  { label: '/Email', value: 'htetthuya.htya@gmail.com', icon: '📧', href: 'https://mail.google.com/mail/?view=cm&to=htetthuya.htya@gmail.com' },
  { label: 'GitHub', value: '/github.com/htethu', icon: '💻', href: 'https://github.com/HtetThuYaAungg' },
  { label: 'LinkedIn', value: '/linkedin.com/in/htethu', icon: '🔗', href: USER_INFO.linkedin },
]

// ===========================================
// Boot Sequence Messages
// ===========================================

export const BOOT_MESSAGES = [
  '> INITIALIZING SYSTEM...',
  '> LOADING PORTFOLIO v1.0.4...',
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
// Terminal / Career History
// ===========================================

export const TERMINAL_LINES: TerminalLine[] = [
  { type: 'comment', text: '// Career History v1.0' },
  { type: 'command', text: '$ cat history.log' },
  { type: 'divider', text: '─────────────────────' },
  { type: 'date', text: '[ 2026 - Present ]' },
  { type: 'output', text: '> Software Engineer' },
  { type: 'output', text: '  @ Dai-ichi-Life' },
  { type: 'divider', text: '─────────────────────' },
  { type: 'date', text: '[ 2024 - Present ]' },
  { type: 'output', text: '> Full-Stack Developer' },
  { type: 'output', text: '  @ archivo-devspace' },
  { type: 'divider', text: '─────────────────────' },
  { type: 'date', text: '[ 2025 - 2026 ]' },
  { type: 'output', text: '> Full-Stack Developer' },
  { type: 'output', text: '  @ AYA Bank' },
  { type: 'divider', text: '─────────────────────' },
  { type: 'date', text: '[ 2023 to 2025 ]' },
  { type: 'output', text: '> React & Next.js Dev' },
  { type: 'output', text: '  @ A Bank' },
  { type: 'divider', text: '─────────────────────' },
  { type: 'date', text: '[ 2022 to 2023 ]' },
  { type: 'output', text: '> Frontend Developer' },
  { type: 'output', text: '  @ Freelance' },
  { type: 'divider', text: '─────────────────────' },
  { type: 'date', text: '[ Earlier ]' },
  { type: 'output', text: '> Started as a Frontend Developer' },
  { type: 'output', text: '  📍 Yangon, Myanmar' },
  { type: 'divider', text: '─────────────────────' },
  { type: 'command', text: '$ echo $STATUS' },
  { type: 'success', text: 'OPEN TO WORK' },
]

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

