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
  jslogo,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cognizant,
  sterlite,
  twoDots,
  bslogo,  
  threejs,
  bootstrap,
  letseat,
  ecom
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "JavaScript",
    icon: jslogo,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  //  {
  //   name: "Next JS",
  //   icon: threejs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];


const experiences = [
  {
    title: "SDE-1 Frontend Developer",
    company_name: "Bombay Softwares",
    icon: bslogo,
    date: "August 2023  - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Two Dots",
    icon: twoDots,
    date: "Jul 2023 - Aug 2023",
    points: [
      "Worked as a full stack developer, building an agriculture-related service for IOT irrigation mechanism",
      "Developed the frontend using vanilla JavaScript and the backend with Node.js.",    ],
  },
  {
    title: "Full Stack Developer GET",
    company_name: "Sterlite Technologies Ltd.",
    icon:   sterlite,
    date: "Oct 2022 - Apr 2023",
    points: [
      "Served as graduate engineer trainee as a Full Stack Java Developer, specializing in the React and Java domain.",
      "Acquired proficiency in Core Java and Spring Boot, enhancing backend development skills.",
      "Worked with MySQL, gaining experience in database management and querying.",
      "Collaborated with a team to deliver a library management software project, utilizing React for the frontend development, demonstrating full-stack development capabilities.",
    ],
  },
  {
    title: "Programmer Analyst Intern",
    company_name: "Cognizant",
    icon: cognizant,
    date: "Jan 2022 - Aug 2022",
    points: [
      "Completed an internship at Cognizant Technology Solution, gaining hands-on experience with databases and data warehouses.",
      "Trained in Informatica PowerCenter, enhancing skills in data integration and transformation.",
      "Worked on ETL processes using Informatica, demonstrating expertise in extracting, transforming, and loading data.",
      "Developed understanding of data management and warehousing principles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "A eesponsive web-based platform that allows users to search, manage and order their selected products. This application is scalable to add authentication/authroization flow and payment gateway",
    tags: [
       {
        name: "html/jsx",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
       {
        name: "javascript",
        color: "green-text-gradient",
      },
      
    ],
    image: ecom,
    deployed_site_link: "https://ecommerce-website-frontend-p2ma.onrender.com",
    source_code_link_backend: "https://github.com/Ashish04Kumar/ecommerce_backend",
    source_code_link_frontend: "https://github.com/Ashish04Kumar/ecommerce_frontend",

  },
  {
    name: "Let's Eat Food Ordering WebApp",
    description: "An enterprise-level web application designed to manage restaurant operations and facilitate food ordering. This dual-purpose application features both a customer interface and an admin panel. Customers can order and track their food, while restaurant owners can efficiently manage orders and overall restaurant operations",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
        {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: letseat,
    deployed_site_link: "https://lets-eat-food-ordering-webapp-frontend.onrender.com",
    source_code_link_backend: "https://github.com/Ashish04Kumar/lets-Eat-food-ordering-webapp-backend",
    source_code_link_frontend: "https://github.com/Ashish04Kumar/lets-eat-food-ordering-webapp-frontend",

  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };