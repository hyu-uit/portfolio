import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  techjdi,
  wala,
  android,
  uit,
  petforest,
  kiwivine,
  imental,
  antd,
  cognisian,
  caresa,
  freelancer,
  zustand,
  tanstack,
} from '../assets';

interface NavLink {
  id: string;
  title: string;
}

interface Service {
  title: string;
  icon: string;
}

interface Technology {
  name: string;
  icon: string;
}

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  contributions: string[];
  tags: ProjectTag[];
  image: string;
  source_code_link?: string;
}

export const navLinks: NavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services: Service[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Android Developer',
    icon: backend,
  },
  {
    title: 'Designer',
    icon: creator,
  },
];

export const technologies: Technology[] = [
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Zustand',
    icon: zustand,
  },
  {
    name: 'Tanstack',
    icon: tanstack,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Ant Design',
    icon: antd,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

export const experiences: Experience[] = [
  {
    title: 'Frontend / Mobile Engineer',
    company_name: 'WALA ICT',
    icon: wala,
    iconBg: '#383E56',
    date: 'September 2023 - May 2025',
    points: [
      'Directed front-end development for iOS, Android, and an Admin website, launching apps on Google Play Store and App Store while leading a team to achieve on-time delivery.',
      'Engineered in-app purchases, dynamic SVG charts with animations, and parallel audio playback, increasing user engagement and enhancing app functionality.',
      'Deployed Firebase push notifications, RESTful APIs, and backend integrations, improving data handling efficiency.',
      'Enhanced application performance by optimizing API response times, reducing table re-rendering time.',
      'Partnered with clients and designers to refine product requirements, integrating KCP Payment Gateway and Kakao Talk API.',
    ],
  },
  {
    title: 'Frontend Engineer - Side Projects',
    company_name: 'Cognisian',
    icon: cognisian,
    iconBg: '#fff',
    date: 'May 2025 - Present',
    points: [
      'Built high-performance Progressive Web Apps (PWAs) customized to client workflows and business needs.',
      'Conducted in-depth research on existing platforms and proposed actionable enhancements to optimize product performance and user experience.',
      'Collaborated directly with clients to identify workflow inefficiencies, then designed and delivered tailored modules or full-system solutions.',
    ],
  },
  {
    title: 'Mobile Developer ',
    company_name: 'Tech JDI',
    icon: techjdi,
    iconBg: '#E6DEDD',
    date: 'July 2023 - September 2023',
    points: [
      'Conducted in-depth research on Android Open Source Project (AOSP), analyzing core components to identify optimization opportunities and improve system functionality.',
      'Developed and customized AOSP modules, enhancing features such as system UI, notifications, and app integrations to meet specific project requirements.',
      'Documented findings and created technical guides, enabling easier adoption of customized AOSP features for future projects.',
    ],
  },
  {
    title: 'Freelancer Developer ',
    company_name: 'Freelancer',
    icon: freelancer,
    iconBg: '#E6DEDD',
    date: '2022 - Present',
    points: [
      'Delivered 3 mobile and web apps for startups in car detailing, spa, and pet care industries.',
      'Implemented features like push notifications, YouTube integration, and multi-language support.',
      'Provided end-to-end solutions including UI design, development, deployment, and maintenance.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

export const projects: Project[] = [
  {
    name: 'Pet Forest',
    description:
      'Pet Forest offers a convenient web-based solution for pet service bookings. Users can effortlessly find and book services through a dedicated site, while administrators utilize a separate site to effectively manage operations.',
    contributions: [
      'Led a <b>4-member development team</b>, managing tasks and code reviews',
      'Collaborated with stakeholders to <b>gather requirements and implement feedback</b>',
      'Integrated <b>KCP Payment Gateway</b> with responsive UI design',
      'Optimized <b>CMS performance</b> and API response times',
      'Implemented <b>Kakao Talk API</b> for messaging and social sharing features',
    ],
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'kakaotalk',
        color: 'green-text-gradient',
      },
      {
        name: 'kcp-payment',
        color: 'pink-text-gradient',
      },
      {
        name: 'ant-design',
        color: 'blue-text-gradient',
      },
    ],
    image: petforest,
    source_code_link: 'https://petforest.co.kr/',
  },
{
    name: 'Caresa & Chanakya',
    description:
      'Caresa manages the entire patient journey—from appointment to follow-up—while Chanakya provides real-time clinical decision support and advanced analytics to improve treatment outcomes and operational efficiency. Together, they enable smarter, data-informed care.',
    contributions: [
      'Built responsive web interfaces for <b>patients and healthcare staff</b> to streamline digital interactions.',
      'Developed modular components and <b>export as libraries</b> using React, ShadCN/UI, and Tailwind CSS for rapid scalability.',
      '<b>Worked closely with clients</b> to understand hospital workflows; proposed UX enhancements that aligned with real-world usage.',
    ],
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'shadcn/ui',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'tanstack router',
        color: 'green-text-gradient',
      },
    ],
    image: caresa,
    source_code_link: '',
  },
  {
    name: 'iMental',
    description:
      'iMental is a mobile application and accompanying landing page designed to empower individuals with scientifically-backed mental coaching. The platform offers a comprehensive suite of features, including mental state analysis, customized affirmations, and self-management tools, all accessible through a user-friendly mobile app and informative landing page.',
    contributions: [
      'Took responsibility for iOS & Android app development, <b>successfully publishing to both app stores</b>',
      'Implemented secure <b>in-app purchases</b> for content access',
      'Integrated dual audio libraries for <b>synchronized playback</b>',
      'Created <b>SVG charts</b> with animations for data visualization',
      'Set up Firebase for <b>cross-platform push notifications</b> and user engagement',
    ],
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'pink-text-gradient',
      },
      {
        name: 'rn-reanimated',
        color: 'pink-text-gradient',
      },
      {
        name: 'i18n',
        color: 'green-text-gradient',
      },
    ],
    image: imental,
    source_code_link: 'https://www.imental.co.kr/',
  },
  {
    name: 'Kiwivine',
    description:
      'Kiwivine serves as an internal PMS, empowering a translation company to efficiently manage its operations. Key features include task management for members, branch oversight, comprehensive reporting, and statistical analysis for informed decision-making',
    contributions: [
      'Mentored new backend developer, <b>resolving integration challenges</b> and streamlining processes',
      'Enhanced core features including <b>Firebase notifications, invoices, and reporting systems</b>',
      'Optimized table performance for <b>100+ rows and 50+ columns</b> using React hooks',
    ],
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'apexcharts',
        color: 'pink-text-gradient',
      },
    ],
    image: kiwivine,
  },
];

export const schoolActivities = [
  {
    title: 'Google Developer Student Clubs - UIT',
    company_name: 'University of Information Technology',
    icon: uit,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - Jan 2023',
    points: [
      'Led the design and media team for GDSC community',
      'Created visual content and branding materials for tech events',
      'Managed social media presence and community engagement',
    ],
  },
  {
    title: 'Game UIT Hackathon 2022 Contest',
    company_name: 'Faculty of Software Engineering - UIT',
    icon: uit,
    iconBg: '#383E56',
    date: 'Nov 2022 - Dec 2022',
    points: [
      'Led design team for university-wide hackathon event',
      'Developed event branding and promotional materials',
      'Coordinated with organizers to ensure consistent visual identity',
    ],
  },
];
