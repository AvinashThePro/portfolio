// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import svietLogo from './assets/education_logo/sviet.jpeg';
import stjgLogo from './assets/education_logo/stjg.jpeg';

// Project Section Logo's
import jobPortalLogo from './assets/work_logo/jobportal.jpeg';
import quizLogo from './assets/work_logo/quizApp.jpeg';
import atmLogo from './assets/work_logo/atm_Img.jpeg';
import llLogo from './assets/work_logo/languageLearning.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  // Education Section Data
  export const education = [
  {
    id: 0,
    img: svietLogo, // Replace with actual image path or import
    school: "SVIET, Rajpura, Punjab",
    date: "June 2022 - Sept 2026 (Expected)",
    grade: "Pursuing",
    desc: "Currently pursuing B.Tech in Computer Science from SVIET, Rajpura. Gained a strong foundation in core computer science concepts such as Data Structures, Algorithms, Web Development, Mobile App Development, and Software Engineering. Actively participated in workshops and technical events related to MERN stack and Flutter.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: stjgLogo, // Replace with actual image path or import
    school: "St. Jagat Gyan Public School, Ranchi",
    date: "March 2020 - April 2022",
    grade: "74.8%",
    desc: "Completed Intermediate education with Physics, Chemistry, and Mathematics (PCM) along with Computer Science under the CBSE Board. Actively participated in science exhibitions and coding challenges at the school level.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: stjgLogo, // Replace with actual image path or import
    school: "St. Jagat Gyan Public School, Ranchi",
    date: "March 2019 - March 2020",
    grade: "79.8%",
    desc: "Completed Matriculation with Science and Computer Applications under the CBSE Board. Developed basic problem-solving and logical thinking skills during this period.",
    degree: "CBSE (X) - Science with Computer Applications",
  },
];

  
  export const projects = [
    {
       id: 0,
    title: "ATM Machine Simulation",
    description:
      "A console-based ATM simulation system developed using C++. Includes core banking features like balance inquiry, withdrawals, deposits, and secure PIN authentication. Designed for learning basic banking operations and object-oriented programming.",
    image: atmLogo, // Replace with actual image path or import
    tags: ["C++", "OOP", "Console App", "Banking Logic"],
    github: "https://github.com/Afnanmir8/ATM-Machine-Simulation",
    webapp: "",
    },
    {
      id: 1,
      title: "Job Portal System",
      description:
        "A MERN stack-based job portal featuring user authentication, role-based access control, job posting by companies, and job application by seekers. Includes secure APIs, responsive UI, and a MongoDB-powered database..",
      image: jobPortalLogo,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Authentication"],
      github: "https://github.com/Afnanmir8/Job-Portal-System",
      webapp: "",
    },
    {
      id: 2,
    title: "Quiz App",
    description:
      "A mobile quiz application built with Flutter and Firebase. Users can select quiz categories, receive real-time scores, and view leaderboards. Firebase handles authentication and real-time database updates.",
    image: quizLogo, // Replace with actual image path or import
    tags: ["Flutter", "Firebase", "Mobile App", "Quiz App"],
    github: "https://github.com/Afnanmir8/Quiz-App-Flutter",
    webapp: "",
    },
    {
      id: 3,
    title: "Language Learning App",
    description:
      "A gamified language learning app built with Flutter and AI features. Includes interactive lessons, speech recognition for pronunciation practice, and AI-generated feedback to enhance user learning.",
    image: llLogo, // Replace with actual image path or import
    tags: ["Flutter", "AI", "Speech Recognition", "Mobile App"],
    github: "https://github.com/Afnanmir8/Language-Learning-App",
    webapp: "",
    },
    
  ];  