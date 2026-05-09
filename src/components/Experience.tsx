'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    year: 'March 2026 to Present',
    title: 'Digital Marketing',
    company: 'Medara',
    description: [
      'Manage and continuously optimize website content, structure, and user experience to improve clarity, engagement, and alignment with company objectives.',
      'Develop and execute social media strategy, including content planning, creation, and performance tracking to build brand presence and audience engagement.',
      'Design and refine marketing collateral and support UI/UX enhancements, translating company messaging into clear, visually compelling materials.',
    ],
    skills: ['Content Strategy', 'Web & UX', 'Social Media Marketing', 'Brand & Creative'],
  },
  {
    year: 'October 2023 to Present',
    title: 'Business Intelligence + Data Analytics Intern',
    company: 'Apple Montessori Schools',
    description: [
      'Automated KPI dashboards in Power BI integrating HR, Finance, and enrollment data across 20+ schools, reducing manual reporting time by 50% and saving leadership more than 15 hours monthly.',
      'Delivered real-time performance analytics that directly informed pricing strategy, staffing decisions, and market expansion planning.',
      'Integrated and cleaned 3+ years of data from multiple CRM systems and billing platforms, mapping full customer journey and identifying conversion bottlenecks that increased enrollment rates.',
      'Built predictive enrollment models tracking 20+ schools, improving forecasting accuracy by 50% and generating data-driven recommendations that reduced student attrition by 10%.',
      'Supported annual tuition and fee pricing analysis, organizing complex rate and policy data across 20+ sites, validating accuracy, and enabling timely updates for open enrollment.',
      'Streamlined the acquisition process across 150+ active targets, tightening pipeline review and go/no-go decisions for leadership.',
    ],
    skills: ['Power BI', 'SQL', 'Excel', 'Python', 'Tableau', 'PowerPoint', 'Word'],
  },
  {
    year: 'August 2025 to October 2025',
    title: 'UI/UX Designer',
    company: 'Rossitech LTD',
    description: [
      'Led end-to-end web design projects for clients launching their first digital presence, leveraging Figma, Framer, Sketch, and other design tools to create visually compelling, mobile-optimized, high-converting websites.',
      'Applied UI/UX best practices to develop design systems, wireframes, and interactive prototypes that balanced usability, accessibility, and aesthetic appeal across devices and platforms.',
      'Designed and developed web interfaces grounded in human creativity, using AI tools solely to refine visual layouts, optimize responsiveness, and enhance usability.',
      'Refined prototypes through multiple rounds of testing, evolving designs to improve user flow, reduce friction, and lift anticipated conversion rates.',
      'Maintained a disciplined design workflow, applying version control, component libraries, and structured handoffs to streamline development and accelerate delivery timelines.',
    ],
    skills: ['Figma', 'Framer', 'Sketch', 'Adobe Illustrator'],
  },
];

const additionalExperience = [
  {
    year: 'February 2026 to Present',
    title: 'Team Toro',
    company: 'NJ Devils',
    description: [
      'Coordinated in-arena activations that kept fans energized between periods, delivering scripted moments and live engagement tailored to each game-day theme.',
      'Collaborated with operations and creative partners to rehearse and refine movement cues, ensuring every activation stayed on-brand while meeting safety guidelines.',
    ],
    skills: ['Fan Engagement', 'Event Coordination', 'Team Collaboration'],
  },
  {
    year: 'September 2025 to Present',
    title: '"WOO!" Crew',
    company: 'NJ Devils',
    description: [
      'Drove engagement with 10,000+ Devils fans per game through on-ice events and game enhancement activities.',
      'Positively represented the brand in a public-facing role, fostering a welcoming atmosphere and demonstrating effective communication.',
    ],
    skills: ['Fan Engagement', 'Communication', 'Public Relations'],
  },
  {
    year: 'September 2020 to May 2024',
    title: 'Performance Ensemble Member',
    company: 'Academy for Performing Arts',
    description: [
      'Partnered with guest choreographers, stage managers, and production teams to execute juried showcases and mainstage performances.',
      'Balanced conservatory-style rehearsals in classical ballet, modern (Graham/Horton), and contemporary techniques while contributing to audience engagement efforts.',
    ],
    skills: ['Performance', 'Collaboration', 'Production Support'],
  },
  {
    year: 'Summer 2022 + 2023',
    title: 'Lifeguard',
    company: 'Lifetime Fitness',
    description: [
      'Demonstrated strong observational skills and quick decision-making in high-pressure situations to ensure patron safety.',
      'Enforced rules and responded quickly to emergencies, highlighting critical thinking and adherence to protocols.',
    ],
    skills: ['Event Coordination', 'Customer Service', 'Problem Solving'],
  },
  {
    year: 'December 2021 to September 2022',
    title: 'Head Instructor',
    company: 'Cesar-Kai Karate Academy',
    description: [
      'Ensured excellent customer service to families, promoting student engagement, motivation, and safety.',
      'Taught complex forms and sparring, mentoring students to develop strong personal traits and life lessons.',
    ],
    skills: ['Customer Service', 'Teaching', 'Leadership'],
  },
];

const education = [
  {
    year: 'August 2024 to Present',
    degree: 'Bachelor of Arts in Social Entrepreneurship',
    institution: 'Northeastern University',
    location: 'New York, NY',
    description: [
      'Relevant Coursework: Marketing, Accounting, Legal Environment of Business, Visual Merchandising, and more.',
      'Served as Treasurer for the Fashion Organization, efficiently managing fundraising and revenue, and creating informative and engaging digital media.',
    ],
  },
  {
    year: 'September 2020 to May 2024',
    degree: 'High School Diploma',
    institution: 'Academy for Performing Arts',
    location: 'Scotch Plains, NJ',
    description: [
      'Performed in over 8 showcases and mainstage productions, collaborating with guest choreographers to master complex repertoire and refine stage presence, spatial awareness, and ensemble synchronization.',
      'Completed four years of intensive, conservatory-style training in classical ballet, modern (Graham/Horton), and contemporary techniques, maintaining a rigorous daily rehearsal schedule alongside a full academic load.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-16 md:py-28 lg:py-[150px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-[100px]"
          style={{ color: 'var(--text-color)' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Experience</h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-1" style={{ color: 'var(--text-secondary)' }}>
            Leadership from live events and sports; design from UI, web, and marketing; depth from data and BI, unified in one timeline.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-20 lg:space-y-[80px]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16 min-w-0"
            >
              <div className="text-base sm:text-lg md:text-xl font-medium md:pt-3 shrink-0" style={{ color: 'var(--text-color)' }}>
                {exp.year}
              </div>

              <div className="min-w-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text-color)' }}>{exp.title}</h3>
                <h4 className="text-xl sm:text-2xl mb-6" style={{ color: 'var(--text-color)' }}>{exp.company}</h4>
                <ul className="text-base sm:text-lg mb-8 max-w-2xl leading-relaxed space-y-3 ps-1" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="mr-3 mt-1" style={{ color: 'var(--text-secondary)' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{ color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-[100px] mt-24 md:mt-[150px]"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Education</h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-1" style={{ color: 'var(--text-secondary)' }}>
            Academic foundation and continuous learning
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-20 lg:space-y-[80px]">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16 min-w-0"
            >
              <div className="text-base sm:text-lg md:text-xl font-medium md:pt-3 shrink-0" style={{ color: 'var(--text-color)' }}>
                {edu.year}
              </div>

              <div className="min-w-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text-color)' }}>{edu.degree}</h3>
                <h4 className="text-xl sm:text-2xl mb-2" style={{ color: 'var(--text-color)' }}>{edu.institution}</h4>
                <p className="text-base sm:text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>{edu.location}</p>
                <ul className="text-base sm:text-lg mb-6 max-w-2xl leading-relaxed space-y-3 ps-1" style={{ color: 'var(--text-secondary)' }}>
                  {edu.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="mr-3 mt-1" style={{ color: 'var(--text-secondary)' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-[100px] mt-24 md:mt-[150px]"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Additional Experience</h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-1" style={{ color: 'var(--text-secondary)' }}>
            Other professional roles and experiences
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-20 lg:space-y-[80px]">
          {additionalExperience.map((exp, index) => (
            <motion.div
              key={`additional-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16 min-w-0"
            >
              <div className="text-base sm:text-lg md:text-xl font-medium md:pt-3 shrink-0" style={{ color: 'var(--text-color)' }}>
                {exp.year}
              </div>

              <div className="min-w-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text-color)' }}>{exp.title}</h3>
                <h4 className="text-xl sm:text-2xl mb-6" style={{ color: 'var(--text-color)' }}>{exp.company}</h4>
                <ul className="text-base sm:text-lg mb-8 max-w-2xl leading-relaxed space-y-3 ps-1" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="mr-3 mt-1" style={{ color: 'var(--text-secondary)' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{ color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
