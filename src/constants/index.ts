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
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
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
    icon: mobile,
  },
  {
    title: 'Designer',
    icon: creator,
  },
];

export const technologies: Technology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
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
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'android / java',
    icon: figma,
  },
];

export const experiences: Experience[] = [
  {
    title: 'Frontend / Mobile Developer',
    company_name: 'WALA ICT',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'September 2023 - Present',
    points: [
      'Directed front-end development for iOS, Android, and an Admin website, launching apps on Google Play Store and App Store while leading a team to achieve on-time delivery.',
      'Engineered in-app purchases, dynamic SVG charts with animations, and parallel audio playback, increasing user engagement and enhancing app functionality.',
      'Deployed Firebase push notifications, RESTful APIs, and backend integrations, improving data handling efficiency.',
      'Enhanced application performance by optimizing API response times, reducing table re-rendering time.',
      'Partnered with clients and designers to refine product requirements, integrating KCP Payment Gateway and Kakao Talk API.',
    ],
  },
  {
    title: 'Mobile Developer ',
    company_name: 'Tech JDI',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'July 2023 - September 2023',
    points: [
      'Conducted in-depth research on Android Open Source Project (AOSP), analyzing core components to identify optimization opportunities and improve system functionality.',
      'Developed and customized AOSP modules, enhancing features such as system UI, notifications, and app integrations to meet specific project requirements.',
      'Documented findings and created technical guides, enabling easier adoption of customized AOSP features for future projects.',
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
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Kiwivine',
    description:
      'Kiwivine serves as an internal CMS, empowering a translation company to efficiently manage its operations. Key features include task management for members, branch oversight, comprehensive reporting, and statistical analysis for informed decision-making',
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
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'iMental',
    description:
      'iMental is a mobile application and accompanying landing page designed to empower individuals with scientifically-backed mental coaching. The platform offers a comprehensive suite of features, including mental state analysis, customized affirmations, and self-management tools, all accessible through a user-friendly mobile app and informative landing page.',
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
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];
