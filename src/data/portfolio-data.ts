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
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "I create digital experiences that blend beautiful design with technical excellence. Passionate about clean code, intuitive interfaces, and solving complex problems with elegant solutions.",
    socialLinks: {
      github: "https://github.com/charlie2bored",
      linkedin: "https://linkedin.com/in/charlie2bored",
      twitter: "https://twitter.com/charlie2bored"
    }
  },

  skills: [
    { name: "React", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Python", level: 70, category: "backend" },
    { name: "Figma", level: 85, category: "design" },
    { name: "Git", level: 90, category: "tools" },
    { name: "SQL", level: 75, category: "data" },
    { name: "Data Analysis", level: 70, category: "data" }
  ],

  projects: [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      description: "Rebuilding a full-stack retail solution to handle peak traffic, focusing on speed and intuitive UX across all devices.",
      outcome: "27% Increase in mobile conversion rate",
      imageUrl: "https://placehold.co/600x400/1C504A/ffffff?text=E-COMMERCE+PLATFORM",
      githubUrl: "https://github.com/charlie2bored/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.charlie2bored.dev",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "Data Visualization Suite",
      description: "Interactive internal dashboard for complex data reporting, reducing analysis time for 200+ users via intuitive filtering.",
      outcome: "60% Reduction in monthly data analysis time",
      imageUrl: "https://placehold.co/600x400/3A3D51/ffffff?text=DATA+DASHBOARD",
      githubUrl: "https://github.com/charlie2bored/data-viz-suite",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
      category: "Data Science"
    },
    {
      id: 3,
      title: "Portfolio Design System",
      description: "Comprehensive design language applied across all personal and client projects, ensuring component reusability and brand cohesion.",
      outcome: "40% Reduction in project design and frontend setup time",
      imageUrl: "https://placehold.co/600x400/9C543A/ffffff?text=DESIGN+SYSTEM+MOCKUP",
      githubUrl: "https://github.com/charlie2bored/design-system",
      liveUrl: "https://design-system.charlie2bored.dev",
      technologies: ["Figma", "React", "TypeScript", "Storybook", "CSS-in-JS", "Design Tokens"],
      category: "Design"
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
