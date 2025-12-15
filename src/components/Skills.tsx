'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Data & Analytics',
    skills: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Excel']
  },
  {
    category: 'Web Development',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'HTML/CSS']
  },
  {
    category: 'Design & UX',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'UI/UX Design']
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL']
  }
];

const Skills = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[80px]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>Skills & Technologies</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A comprehensive toolkit for data analysis, web development, and creative design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
              style={{ backgroundColor: 'var(--bg-color)' }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-color)' }}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: 'var(--bg-color)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
