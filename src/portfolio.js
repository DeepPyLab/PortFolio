/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "YashPortfolio",
  title: "Hi all, I'm Yashwanth Gowda Sathish",
  subTitle: emoji(
    `Experienced Software Test Engineer with a Master’s in Electrical Engineering and a strong background in software validation for electrical/electronic systems. Skilled in HIL/SIL testing, regression testing, and improving software efficiency. Proficient in Agile methodologies, CI/CD, and compliance with ASPICE. Expertise in Python, C/C++, Git, and requirements engineering. A proactive problem-solver focused on process improvement and test automation.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qH6pyr7JQoQPin_AnJQxIoFeYp8nDVs4/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DeepPyLab",
  linkedin: "https://www.linkedin.com/in/yashwanth-gowda-sathish-23842315a/",
  gmail: "yashwanthgowda.mys@gmail.com",
  YouTube: "https://www.youtube.com/@guideforgermanapplication6308",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Experienced System Integration and Test Automation Engineer",
  skills: [
    emoji("⚡ Developing and automating test cases for embedded and automotive systems"),
    emoji("⚡ Conducting manual and automated testing in simulation and hardware environments"),
    emoji("⚡ Creating detailed technical documentation, test plans, and bug reports"),
    emoji("⚡ Proficient in Python, Linux, shell scripting and debugging complex systems")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Shell Scripting", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Stuttgart",
      logo: require("./assets/images/unistuttgart_logo.png"),
      subHeader: "Master of Science in Electrical Engineering",
      duration: "April 2021 - October 2023",
      desc: "Specialized in Smart Systems, focusing on automation, communication systems, and software testing.",
      descBullets: [
        "Master Thesis: Basic Concepts for Automated Test Case Generation in OPC UA",
        "Research Project: Angular Antenna Calibration of Highly Directive Point-to-Point mmW Communication",
      ]
    },
    {
      schoolName: "Visvesvaraya Technological University (VTU)",
      logo: require("./assets/images/VTU_logo.png"),
      subHeader: "Bachelor in Electrical and Electronics Engineering",
      duration: "August 2016 - September 2020",
      desc: "Ranked top 10% in the program. Best-Outgoing Student Award in EEE Department - 2020",
      descBullets: [
        "Bachelor Thesis - Analyzing the Dynamic Performance of Distributed Generator in Micro-Grid Using Micro-Turbine.",
        "Internship - Developed a Two-Way Solar Panel Tracking System.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Quality Assurance (Expertise in validation, regression testing, and standards compliance)", // Your expertise in automation
      progressPercentage: "85%", // Reflecting high proficiency
    },
    {
      Stack: "Programming (Python, C & C++)", // Languages you're skilled in
      progressPercentage: "80%", // Indicating strong knowledge
    },
    {
      Stack: "System Integration (HIL/SIL testing and hardware/software integration)", // Debugging skills
      progressPercentage: "75%", // Reflecting solid proficiency
    },
    {
      Stack: "CI/CD pipelines & Agile Methodologies", // Agile and CI/CD practices
      progressPercentage: "70%", // Indicating good experience
    },
    {
      Stack: "Manual Testing & Test Automation", // Traditional testing experience
      progressPercentage: "70%", // Reflecting significant familiarity
    },
    {
      Stack: "SDLC & TDD Test-Driven Development", // Traditional testing experience
      progressPercentage: "75%", // Reflecting significant familiarity
    }
  ],
  displayCodersrank: false, // Keep false unless you want to integrate CodersRank badges
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Integration And Test Automation Developer (Full-Time)",
      company: "Volkswagen Infotainment GmbH",
      companylogo: require("./assets/images/vwif.png"),
      date: "September 2023 – Present",
      descBullets: [
        "Developed and executed automated test scripts using Python to enhance testing efficiency and accuracy.",
        "Tested new software deployments on ECUs within testbenches to ensure compatibility and functionality.",
        "Collaborated with cross-functional teams to identify testing requirements and implement effective testing strategies."
      ]
    },
    {
      role: "Working Student IT (Part-Time)",
      company: "Exyte GmBH",
      companylogo: require("./assets/images/exyte3.png"),
      date: "October 2021 – August 2023",
      descBullets: [
        "Transformed IT operations through automation using Python, Power Automate, SharePoint, and Power Apps to streamline processes and enhance collaboration.",
        "Increased efficiency and reduced manual errors, optimizing productivity for the team at Exyte in Stuttgart, Germany."
      ]
    },
    {
      role: "Research Assistant (Part-Time)",
      company: "ISW & IEW University of Stuttgart",
      companylogo: require("./assets/images/unistuttgart_logo.png"),
      date: "January 2022 – August 2023",
      descBullets: [
        "Developed GUIs for InfluxDB connectivity and hardware control, utilizing REST APIs to streamline automation.",
        "Proficient in STM32 microcontroller interfacing and optimization techniques like DMA, UART, and SPI communication.",
        "Controlled motors using Arduino and ESP8266, creating intuitive GUIs to enhance user experience and hardware interaction."
      ]
    },
    {
      role: "Wissenschaftliche Hilfskraft (Part-Time)",
      company: "Fraunhofer IPA",
      companylogo: require("./assets/images/fraunhofer_ipa.png"),
      date: "October 2021 – September 2022",
      descBullets: [
        "Developed a barcode system with Raspberry Pi, showcasing integrated system design and electronics expertise.",
        "Proficient in firmware design, code efficiency, and debugging.",
        "Managed high-volume data using InfluxDB, demonstrating strong database handling skills."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Key Projects Showcasing My Expertise",
  projects: [
    {
      projectName: "Master Thesis: Automated Test Case Generation in OPC UA",
      projectDesc: `Explored advanced testing methodologies for industrial automation using OPC UA standards. Developed a framework combining manual and automated testing for the "Machine Tools" Companion Specification.`
    },
    {
      projectName: "Bachelor Thesis: Analysing the dynamic performance of distributed generator in micro-grid using micro turbine",
      projectDesc: `Developed and analyzed a model describing the dynamic performance of a single-shaft micro-turbine. Evaluated its performance in standalone micro-grid conditions using MATLAB and Simulink.`,
      footerLink: [
        {name: "Project_Paper",url: "https://www.ijsiet.org/issue2020vol6.html" }
      ]
    },
    {
      projectName: "Smart Home Using IoT",
      projectDesc: `Controlled home devices remotely using IoT. Developed the system with Node-MCU and Arduino, utilizing C for coding.`
    },
    {
      projectName: "Two-Way Solar Panel Tracking System",
      projectDesc: `Designed and developed a cost-effective prototype to improve solar panel efficiency through multi-directional movement using Arduino Uno and servo motors.`,
      footerLink: [
        {name: "Project_Paper",url: "https://doi.org/10.1007/978-981-15-7961-5_86" }
      ]
    },
    {
      projectName: "Audio Assistance for the Blind Using GSM and GPS Modules",
      projectDesc: `Created a wearable device providing audio assistance for navigation, helping blind users move independently indoors.`,
      footerLink: [
        {name: "Project_Paper",url: "https://doi.org/10.1166/jctn.2020.9032" }
      ]
    },
    {
      projectName: "All GitHub Projects",
      projectDesc: `Explore all my projects, including personal and collaborative works, hosted on GitHub.`,
      footerLink: [
        { name: "View_GitHub", url: "https://github.com/DeepPyLab" }
      ] // Kept this because it's useful for GitHub
    }
  ],
  display: true, // Set false to hide this section
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters, and Publications that I have accomplished!",

  achievementsCards: [
    {
      title: "Google Cybersecurity Specialization",
      subtitle: `Earned the Google Cybersecurity Certificate, covering essential skills for entry-level cybersecurity roles. Proficient in Python, Linux, SQL, and SIEM tools. Developed skills in risk management, network security, and threat mitigation.`,
      image: require("./assets/images/google.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/specialization/92NBONJJXBZS"
        }
      ]
    },
    {
      title: "Google Advanced Data Analytics Specialization",
      subtitle: `Completed seven courses focused on advanced data analytics, including machine learning, predictive modeling, and statistical analysis. Developed proficiency in exploring large datasets and extracting actionable insights.`,
      image: require("./assets/images/google.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/specialization/7WY4L783ZQTU"
        }
      ]
    },
    {
      title: "Python for Everybody Specialization",
      subtitle: `Completed a specialization introducing fundamental programming concepts in Python, issued by the University of Michigan.`,
      image: require("./assets/images/uni_michigen.webp"),
      imageAlt: "University of Michigan Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/specialization/HA7ZXYEP9UPG"
        }
      ]
    },
    {
      title: "Google Data Analytics Specialization",
      subtitle: `Completed seven courses focused on advanced data analytics, including machine learning, predictive modeling, and statistical analysis. Developed proficiency in exploring large datasets and extracting actionable insights.`,
      image: require("./assets/images/google.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/specialization/AD3CGX66QHX2"
        }
      ]
    },
    {
      title: "Google IT Automation with Python",
      subtitle: `Earned a certificate covering Python, Git, and IT automation. Proficient in GitHub workflows, debugging complex problems, and applying automation at scale.`,
      image: require("./assets/images/google.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/specialization/8ZUDRFT7M8B4"
        }
      ]
    }
  ],
  display: true // Set false to hide this section
};




// Blogs Section

const blogSection = {
  title: "Paper Publications",
  subtitle:
    "my research and publications.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      title: "Published Paper: Design of Two-Way Solar Panel Tracking",
      subtitle: ``,
      description:
        "Presented at the 2nd International Conference (ICACCT-2019) on Nov 8, 2020.",
      url: "https://doi.org/10.1007/978-981-15-7961-5_86", // Add the URL to the paper or publication here
    },
    {
      title: "Published Paper: Analysing the dynamic performance of distributed generator in micro-grid using micro turbine",
      description:
        "Presented at the 10th International Conference (ICRET-2020) on June 20, 2020.",
      url: "https://www.ijsiet.org/issue2020vol6.html", // Add the URL to the paper or publication here
    },
    {
      title: "Published Paper: Audio Assistance for Blind People Using GSM Technology",
      subtitle: ``,
      description:
        "Presented at the 2nd International Conference (ICRITCSA-2019).",
      url: "https://doi.org/10.1166/jctn.2020.9032", // Add the URL to the paper or publication here
    },
    {
      title: "Published Paper: Smart Helmet Using GPS and GSM Modem",
      subtitle: ``,
      description:
        "Published in a Scopus-indexed journal, IJEAT.",
      url: "https://doi.org/10.35940/ijrte.b1384.0982s1119", // Add the URL to the paper or publication here
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 17697701815",
  email_address: "yashwanthgowda.mys@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
