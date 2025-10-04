export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  outcome: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'data';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const portfolioData = {
  personalInfo: {
    name: "Charlie \"2bored\" Vargas",
    title: "Multidisciplinary Designer",
    email: "iamcharlesvargas@gmail.com",
    phone: "+1 (908) 510-5281",
    location: "New York, NY",
    bio: "I create digital experiences that blend beautiful design with technical excellence. Passionate about clean code, intuitive interfaces, and solving complex problems with elegant solutions.",
    socialLinks: {
      github: "https://github.com/charlie2bored",
      linkedin: "https://linkedin.com/in/charlie2bored",
      twitter: "https://twitter.com/charlie2bored"
    }
  },

  skills: [
    { name: "Data Analysis", level: 90, category: "data" },
    { name: "Business Operations", level: 85, category: "data" },
    { name: "Microsoft Office Suite", level: 95, category: "tools" },
    { name: "Data Visualization", level: 80, category: "data" },
    { name: "Figma", level: 90, category: "design" },
    { name: "Adobe Creative Suite", level: 85, category: "design" },
    { name: "Prototyping Tools", level: 80, category: "design" }
  ],

  projects: [
    {
      id: 1,
      title: "Portfolio for Bea Huppert",
      description: "Designed and developed a sophisticated portfolio website for acclaimed actress Bea Huppert, featuring an elegant dark theme with smooth animations and a focus on showcasing her extensive filmography and awards.",
      outcome: "Enhanced online presence and streamlined audition submissions",
      imageUrl: "https://placehold.co/600x400/1C504A/ffffff?text=BEA+HUPPERT+PORTFOLIO",
      caseStudyUrl: "/case-studies/bea-huppert",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS", "Vercel"],
      category: "Portfolio Design"
    },
    {
      id: 2,
      title: "Bath and Body Works Seasonal Revamp",
      description: "Led the complete redesign of Bath & Body Works seasonal product pages, implementing a mobile-first approach with improved product discovery and streamlined checkout process.",
      outcome: "35% increase in mobile conversion rates and improved user engagement",
      imageUrl: "https://placehold.co/600x400/E91E63/ffffff?text=BBW+SEASONAL",
      caseStudyUrl: "/case-studies/bath-body-works",
      technologies: ["React", "TypeScript", "Styled Components", "Adobe Analytics", "A/B Testing"],
      category: "E-commerce Design"
    },
    {
      id: 3,
      title: "KnectMe",
      description: "Co-founded and designed KnectMe, a social platform connecting professionals through shared interests and career goals, featuring real-time messaging and AI-powered matching algorithms.",
      outcome: "Successfully launched MVP with 10,000+ early adopters",
      imageUrl: "https://placehold.co/600x400/2196F3/ffffff?text=KNECTME",
      caseStudyUrl: "/case-studies/knectme",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS", "Machine Learning"],
      category: "Social Platform"
    }
  ],

  experiences: [
    {
      company: "Rossitech",
      position: "UI / UX Designer",
      period: "2025",
      description: [
        "Designed user interfaces for web applications, focusing on intuitive and engaging UX",
        "Developed wireframes, prototypes, and design systems for functionality and aesthetic appeal",
        "Collaborated with separate divisions to ensure design productivity and successful design solutions"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Prototyping Tools", "UI/UX Design"]
    },
    {
      company: "Apple Montessori Schools",
      position: "Business Operations + Data Analytics Intern",
      period: "2023 - Present",
      description: [
        "Assisted in operational processes, including enrollment management, data analytics and visualization",
        "Supported daily administrative tasks, such as contributing to efficient school management and future progression",
        "Analyzed operational data to identify areas for improvement, school expansion and presenting them to the CEO"
      ],
      technologies: ["Data Analysis", "Business Operations", "Microsoft Office Suite", "Data Visualization"]
    }
  ],

  education: [
    {
      institution: "Northeastern University",
      degree: "Bachelor of Social Entrepreneurship",
      period: "2024 - Present",
      description: "Core Courses: Marketing, Accounting, Visual Merchandizing, Legal Environment of Business"
    }
  ]
};
