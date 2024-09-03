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
        title: "React.js/Node.js Full Stack Developer",
        company_name: "Softtek",
        icon: softtek,
        iconBg: "#accbe1",
        date: "Septiember 2022 - July 2024",
        points: [
            "Developed and maintained scalable, responsive web applications as measured by a 20% reduction in page load times, by doing detailed component-based architecture using React and TypeScript, and integrating with RESTful APIs.",
            "Was optimizing the performance and maintainability of React components as measured by reduced development time and improved code quality by implementing reusable custom hooks, HOC’s, utilizing state management libraries like Redux. Leading to a 30% decrease in application load times and smoother platform performance overall.",
            "Ensured code reliability and functionality. Creating and maintaining tests using JavaScript test runners such as Jest. Leading to a 20% reduction in bugs found during QA and a more stable platform.",
            "Assisted in the creation and integration of RESTful APIs. I was using Node.js to develop API endpoints and manage data flow. I also used ExpressJS middleware and services like Axios for efficient API communication. Was managing and creating queries for the relational database MySQL. Improved system efficiency, contributing to a reduction in data recovery times by 10%. ",
            "Worked in one team with senior developers, designers and QA teams. Participated in code reviews, and agile sprints by Scrum methodology. Helped maintain a high standard of code quality by contributing to code reviews, following established coding standards and conventions, writing clear and concise code, and staying updated with the latest React trends and best practices."
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