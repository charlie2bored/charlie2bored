export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
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
    name: "Your Name",
    title: "Web Developer & Designer",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "City, Country",
    bio: "Passionate developer with expertise in modern web technologies. I create beautiful, functional websites and applications that deliver exceptional user experiences.",
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername"
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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      category: "Web Development",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce.vercel.app"
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time updates and filtering capabilities.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "Data Science",
      githubUrl: "https://github.com/yourusername/data-dashboard",
      liveUrl: "https://your-dashboard.vercel.app"
    },
    {
      id: 3,
      title: "Portfolio Website Design",
      description: "Modern portfolio design with smooth animations and responsive layout for creative professionals.",
      technologies: ["Figma", "CSS", "JavaScript"],
      category: "Design",
      githubUrl: "https://github.com/yourusername/portfolio-design"
    },
    {
      id: 4,
      title: "Marketing Analytics Tool",
      description: "Tool for tracking and analyzing marketing campaign performance across multiple channels.",
      technologies: ["Next.js", "Chart.js", "Google Analytics API"],
      category: "Marketing",
      githubUrl: "https://github.com/yourusername/marketing-analytics",
      liveUrl: "https://marketing-tool.vercel.app"
    }
  ],

  experiences: [
    {
      company: "Tech Company Inc.",
      position: "Frontend Developer",
      period: "2022 - Present",
      description: [
        "Developed responsive web applications using React and Next.js",
        "Implemented modern UI/UX designs with Tailwind CSS",
        "Collaborated with backend team on API integration"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      company: "Data Analytics Firm",
      position: "Data Analyst Intern",
      period: "2021 - 2022",
      description: [
        "Analyzed large datasets to extract actionable insights",
        "Created data visualizations and reports for stakeholders",
        "Automated data processing workflows using Python"
      ],
      technologies: ["Python", "SQL", "Tableau", "Excel"]
    }
  ],

  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2018 - 2022",
      description: "Specialized in web development and data science"
    }
  ]
};
