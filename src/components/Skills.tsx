'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';
import { useState, useEffect, useMemo } from 'react';

export default function Skills() {
  const { skills } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };
  const [randomValues, setRandomValues] = useState<{[key: string]: {x: number, y: number}}>({});

  // Group skills by category - memoized to prevent unnecessary recalculations
  const skillsByCategory = useMemo(() => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, typeof skills>);
  }, [skills]);

  // Generate random values only on client side to avoid hydration mismatch
  useEffect(() => {
    const values: {[key: string]: {x: number, y: number}} = {};
    Object.keys(skillsByCategory).forEach(category => {
      values[category] = {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100
      };
    });
    setRandomValues(values);
  }, [skillsByCategory]);

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    tools: 'Tools',
    data: 'Data & Analytics'
  };

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-[#101010]' : 'bg-[var(--off-white-text)]'}`}>
      {/* Content wrapper with left margin to account for sticky sidebar */}
      <div className="sm:ml-64 md:ml-72 lg:ml-80 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 animate-particle-assembly"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 junge ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg max-w-2xl mx-auto montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
            Technologies and tools I use to bring ideas to life
          </p>
          <p className={`text-sm max-w-2xl mx-auto montserrat mt-2 ${isDark ? 'text-[var(--text-muted-dark)]' : 'text-[var(--text-muted-light)]'}`}>
            Skill proficiency based on years of experience and project complexity
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`${isDark ? 'bg-[var(--border-dark)] border-[var(--border-dark)]' : 'bg-white border-[var(--border-light)]'} rounded-xl p-6 shadow-sm text-center animate-neural-network`}
              style={{
                '--random-x': randomValues[category]?.x || 0,
                '--random-y': randomValues[category]?.y || 0
              } as React.CSSProperties}
            >
              <h3 className={`text-xl font-semibold mb-6 junge ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>

              <div className="space-y-4 text-center">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="text-center">
                    <div className="flex justify-center items-center mb-2 gap-4">
                      <span className={`text-sm font-medium montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm montserrat ${isDark ? 'text-[var(--text-muted-dark)]' : 'text-[var(--text-muted-light)]'}`}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className={`w-full ${isDark ? 'bg-[var(--text-muted-dark)]' : 'bg-[var(--border-light)]'} rounded-full h-2`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-2 rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-yellow-600"
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
          className="mt-12 text-center animate-cosmic-ripple animate-delay-400"
        >
          <p className={`montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
            Continuously learning and expanding my skill set to stay current with industry trends
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
