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
    name: "Charlie Bored",
    title: "Creative Developer & Designer",
    email: "charlie@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
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
      description: "A sleek full-stack e-commerce solution with seamless user experience and robust functionality.",
      outcome: "Boosted conversion rate by 27% through optimized UX and streamlined checkout flow",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      category: "Web Development",
      githubUrl: "https://github.com/charlie2bored/ecommerce-platform",
      liveUrl: "https://ecommerce-charlie.vercel.app"
    },
    {
      id: 2,
      title: "Data Visualization Suite",
      description: "Interactive dashboard for complex data visualization with real-time analytics.",
      outcome: "Reduced data analysis time by 60% for 200+ users through intuitive filtering",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "Data Science",
      githubUrl: "https://github.com/charlie2bored/data-dashboard",
      liveUrl: "https://data-viz-charlie.vercel.app"
    },
    {
      id: 3,
      title: "Portfolio Design System",
      description: "Comprehensive design system for modern portfolio websites with reusable components.",
      outcome: "Standardized design language across 15+ projects, reducing design time by 40%",
      technologies: ["Figma", "CSS", "JavaScript"],
      category: "Design",
      githubUrl: "https://github.com/charlie2bored/portfolio-design"
    }
  ],

  experiences: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: [
        "Lead development of responsive web applications using modern frameworks",
        "Implement design systems and maintain code quality standards",
        "Mentor junior developers and conduct code reviews"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      company: "Creative Studio",
      position: "UI/UX Designer & Developer",
      period: "2020 - 2022",
      description: [
        "Designed and implemented user interfaces for various clients",
        "Collaborated with cross-functional teams on product development",
        "Created interactive prototypes and design systems"
      ],
      technologies: ["Figma", "React", "CSS", "JavaScript"]
    }
  ],

  education: [
    {
      institution: "Stanford University",
      degree: "Bachelor of Science in Computer Science",
      period: "2016 - 2020",
      description: "Focus on human-computer interaction and web technologies"
    }
  ]
};
