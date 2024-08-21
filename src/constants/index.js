import { softtek } from "../images";
import {    
    contact,
    css,
    express,
    freelance,
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
        title: "Junior Full Stack Developer",
        company_name: "Softtek",
        icon: softtek,
        iconBg: "#accbe1",
        date: "Septiember 2022 - July 2024",
        points: [
            "Contributed to the development of an enterprise services platform. Worked with Angular 14+ for front-end development and used Spring Boot 3 for back-end services. Developed and improved platform components,contributing to a 30% improvement in page load times.",
            "Improving the efficiency and data management of the platform. Integrating RxJS to manage state and handle asynchronous operations effectively. Resulting in a reduction in errors related to state management, asynchronous data handling and memory leaks.",
            "Optimising the performance and maintainability of platform components. Refactoring and optimising legacy code components to improve performance. Leading to a 35% decrease in application load times and smoother platform performance overall.",
            "Ensured code reliability and functionality. Creating and maintaining unit and integration tests using Angular testing tools such as Jasmine. Leading to a 35% reduction in bugs found during QA and more stable platform.",
        ],
    },
    {
        title: "React.js/React Native Developer",
        company_name: "Freelance",
        icon: freelance,
        iconBg: "#fbc3bc",
        date: "November 2020 - March 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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

export const projects = [
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        // name: 'Amazon Price Tracker',
        // description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        // link: 'https://github.com/adrianhajdin/pricewise',
    },
    
];