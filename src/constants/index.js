import { softtek } from "../images";
import { inetum } from "../images";
import { overonyx } from "../images";

import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js/Node.js Full Stack Developer",
        company_name: "Inetum Norte",
        icon: inetum,
        iconBg: "#accbe1",
        date: "April 2025 - October 2025",
        points: [
            "Developed and maintained scalable, responsive web applications as measured by a 20% reduction in page load times, by doing detailed component-based architecture using React and TypeScript, and integrating with RESTful APIs.",
            "Cut memory consumption and accelerated page load speeds, measured via performance profiling tools, by deploying code splitting, lazy loading, memoization, and pruning re-renders with useCallback and useMem",
            "Slashed QA defect rates, tracked directly in defect logs, by authoring comprehensive Jest unit tests for React components to catch logic flaw",
            "Enabled synchronous SAP data exchange, confirmed through reduced API latency, by architecting Node.js and Express.js REST endpoints to replace legacy database queries.",
            "Lowered CI/CD integration errors by 40%, measured through failed pipeline logs, by standardizing pull request documentation and automating Jenkins deployments across dev and QA branches."
        ],
    },
    {
        title: "React.js/Node.js Full Stack Developer",
        company_name: "Softtek",
        icon: softtek,
        iconBg: "#accbe1",
        date: "January 2022 - July 2024",
        points: [
          "Shortened feature development cycles, measured by sprint velocity tracking, by engineering reusable custom hooks and HOCs while stabilizing global state through Redux.",
          "Improved application stability as measured by a reduction in runtime crashes, by implementing the Observer Pattern and robust state management using Redux.",
          "Boosted platform reliability, tracked through QA bug reports, by authoring and sustaining Jest test suites for core React components to catch regressions early.",
          "Increased data retrieval efficiency as measured by API response times, by developing optimized RESTful endpoints and middleware using Node.js and Express.js.",
          "Decreased database bottlenecking as measured by query execution time, by designing and optimizing complex relational queries in MySQL"
        ],
    },
    {
        title: "Jr Front-End Developer Developed React Native & Web UI",
        company_name: "Overonix Technologies",
        icon: overonyx,
        iconBg: "#fbc3bc",
        date: "September 2019 - December 2021",
        points: [
          "Accelerated app startup by 30%, measured via Cold Start Time benchmarks, through refined React Native rendering pipelines, strategic code-splitting, and optimized native module bridges.",
          "Drove higher dashboard engagement, tracked in user session analytics, by crafting responsive TradingView charts, balance trackers, and asset visualizers in React for pixel-perfect cross-device rendering.",
          "Cut feature delivery timelines by 25%, measured against original sprint estimates, by unifying iOS and Android workflows through React Native’s shared architecture and tight cross-functional alignment.",
          "Expanded platform reach across iOS and Android as measured by an increase in mobile app installs, by developing cross-platform mobile features using React Native.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];
