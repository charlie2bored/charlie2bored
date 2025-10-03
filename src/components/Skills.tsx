'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';

export default function Skills() {
  const { skills } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    tools: 'Tools',
    data: 'Data & Analytics'
  };

  return (
    <section id="skills" className={`py-20 bg-[var(--background)]`}>
      {/* Content wrapper with left margin to account for sticky sidebar */}
      <div className="sm:ml-64 md:ml-72 lg:ml-80 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg max-w-2xl mx-auto montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Technologies and tools I use to bring ideas to life
          </p>
          <p className={`text-sm max-w-2xl mx-auto montserrat mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Skill proficiency based on years of experience and project complexity
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-6 shadow-sm`}
            >
              <h3 className={`text-xl font-semibold mb-6 junge ${isDark ? 'text-white' : 'text-black'}`}>
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>

              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium montserrat ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className={`montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Continuously learning and expanding my skill set to stay current with industry trends
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
