'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';
import { useState, useEffect, useMemo } from 'react';
import {
  Palette,
  GitBranch,
  BarChart3
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };
  // Map skill categories to icons and labels
  const skillCategories = useMemo(() => ({
    data: { label: 'Data & Analytics', icon: BarChart3, color: 'text-blue-600' },
    tools: { label: 'Tools & Software', icon: GitBranch, color: 'text-green-600' },
    design: { label: 'Design & Creative', icon: Palette, color: 'text-purple-600' }
  }), []);

  // Group skills by category
  const skillsByCategory = useMemo(() => {
    const grouped: Record<string, typeof skills> = {};
    Object.keys(skillCategories).forEach(category => {
      grouped[category] = skills.filter(skill => skill.category === category);
    });
    return grouped;
  }, [skills, skillCategories]);

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-[#101010]' : 'bg-white'}`}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([categoryKey, categoryInfo], categoryIndex) => {
            const categorySkills = skillsByCategory[categoryKey];
            if (!categorySkills || categorySkills.length === 0) return null;

            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className={`${isDark ? 'bg-[var(--border-dark)]' : 'bg-white'} rounded-2xl p-8 shadow-sm border ${isDark ? 'border-gray-700' : 'border-gray-100'} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} flex items-center justify-center mr-4`}>
                    <categoryInfo.icon className={`w-6 h-6 ${categoryInfo.color}`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>
                    {categoryInfo.label}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className={`font-medium ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-3">
                        <div className={`w-24 ${isDark ? 'bg-[var(--text-muted-dark)]' : 'bg-gray-200'} rounded-full h-2`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: skillIndex * 0.1 }}
                            className={`h-2 rounded-full bg-gradient-to-r ${categoryInfo.color}`}
                          />
                        </div>
                        <span className={`text-sm font-medium ${isDark ? 'text-[var(--text-muted-dark)]' : 'text-[var(--text-muted-light)]'} w-8 text-right`}>
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
