import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    tripguide,
    threejs,
    github,
    java,
    postgres,
    bootstrap,
    python,
    csharp,
    springboot,
    maria,
    ability,
    thembi,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Technologies",
    },
    {
      id: "contact",
      title: "Contact Me",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
      icon: creator,
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
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: threejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: springboot,
    },
    {
      name: "MongoDB",
      icon: python,
    },
    {
      name: "Three JS",
      icon: csharp,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: maria,
    },
    {
      name: "docker",
      icon: postgres,
    },
  ];
  
  const experiences = [
    {
      title: "Java And Python ",
      company_name: "Fundamentals Of Programming",
      icon: java,
      iconBg: "#383E56",
      date: "January 2022 - June 2022",
      points: [
        "Gained proficiency in basic and advanced programming concepts using both Java and Python, focusing on data structures, control structures, syntax, and semantics.",
        "Developed console-based applications to understand object-oriented programming principles such as encapsulation, inheritance, and polymorphism.",
        "Implemented various algorithms in Python and Java, including sorting and searching algorithms, to solve computational problems efficiently.",
        "Participated in peer programming exercises, enhancing problem-solving skills and understanding of algorithmic design.",
      ],
    },
    {
      title: "HMTL, CSS, and JavaScript",
      company_name: "Web Computing and Design",
      icon: html,
      iconBg: "#E6DEDD",
      date: "July 2022 - December 2022",
      points: [
        "Designed and developed responsive websites using HTML5, CSS3, and JavaScript, focusing on user interface design principles and web standards.",
        "Utilized JavaScript to create dynamic and interactive web pages, including form validations and DOM manipulations.",
        "Applied modern CSS rulings for layout design and UI components, improving the aesthetic and functional aspects of web projects.",
      ],
    },
    {
      title: "SQL, PostgresSQL, and MariaDB",
      company_name: "Database Management",
      icon: postgres,
      iconBg: "#383E56",
      date: "Jan 2023 - June 2023",
      points: [
        "Acquired a solid understanding of relational database management systems (RDBMS) and SQL syntax for querying, updating, and managing databases.",
        "Designed and normalized database schemas for various projects, ensuring data integrity and efficiency in data retrieval.",
        "Performed CRUD (Create, Read, Update, Delete) operations using SQL on PostgreSQL and MariaDB platforms to manipulate and maintain data.",
        "Explored advanced database concepts, including stored procedures, functions, and views, to optimize database performance and security.",
      ],
    },
    {
      title: "C#, APIs and Deployment",
      company_name: "C# Fundamentals and Full Stack Development",
      icon: github,
      iconBg: "#383E56",
      date: "July 2023 - February 2023",
      points: [
        "Mastered the fundamentals of C# programming, including data types, control structures, exception handling, and file I/O operations.",
        "Developed and consumed RESTful APIs using ASP.NET Core to facilitate communication between client-side and server-side applications.",
        "Deployed web applications to cloud platforms, gaining experience with GitHub, continuous integration, and continuous deployment (CI/CD) pipelines.",
        "Engaged in a group project that involved building a full-stack application using Django, demonstrating the ability to integrate with various web technologies..",
      ],
    },
    {
      title: "React, Bootstrap, Tailwindcss, and ThreeJS ",
      company_name: "Frontend Frameworks",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developed single-page applications (SPAs) using React.js, leveraging state management, component lifecycle methods, and React hooks for dynamic user interfaces.",
        "Utilized Bootstrap and TailwindCSS for designing responsive and modern web interfaces.",
        "Incorporated ThreeJS for creating 3D graphics and visualizations in web applications, enhancing interactive and immersive web experiences.",
        "Conducted usability testing and optimized web applications for performance and accessibility, adhering to web standards and best practices.",
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
      name: "Ability Assist",
      description:
        "Web-based platform that allows users to navigate around the hotspots or important locations in Tshwane University of Technology with some voice functionalities. Visit the demo : <a href='https://ability-assist-347e4e772fc7.herokuapp.com/AbilityAssistWebApp'><b>Click here</b></a>.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Google Maps JavaScript API",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: ability,
      source_code_link: "https://github.com/tjrapodile/AbilityAssist",
    },
    {
      name: "Thembi's Bold Bite Bazaar",
      description:
        "Ecommerce Web application that allows users to view, and buy Atchar and Chilli products after a successful login or sign up process A school project.Visit the demo: <a href='https://664868b77f95c971c1dc063b--thembis-bazaar.netlify.app/home'><b>Click here</b></a>",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "RestApi",
          color: "green-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "pink-text-gradient",
        },
        {
          name: "MariaDB",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        }
      ],
      image: thembi,
      source_code_link: "https://github.com/tjrapodile/ecommerce-web-app",
    },
    {
      name: "E-Medicine Store",
      description:
        "A ccomprehensive medicine booking application that allows users to order medicine and view their medicine inventory.Visit the demo: <a href='#'><b>Click here</b></a>",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };