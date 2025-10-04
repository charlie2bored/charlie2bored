'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';
import { useState, useEffect, useMemo } from 'react';
import {
  Code2,
  Palette,
  GitBranch,
  BarChart3,
  Server,
  type LucideIcon
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };
  const [randomValues, setRandomValues] = useState<{[key: string]: {x: number, y: number}}>({});

  // Map skill categories to icons and labels
  const skillCategories: Record<string, { label: string; icon: LucideIcon; color: string }> = {
    frontend: { label: 'Frontend Development', icon: Code2, color: 'text-blue-500' },
    backend: { label: 'Backend Development', icon: Server, color: 'text-green-500' },
    design: { label: 'Design & UI/UX', icon: Palette, color: 'text-purple-500' },
    tools: { label: 'Development Tools', icon: GitBranch, color: 'text-orange-500' },
    data: { label: 'Data & Analytics', icon: BarChart3, color: 'text-red-500' }
  };

  // Group skills by category
  const skillsByCategory = useMemo(() => {
    const grouped: Record<string, typeof skills> = {};
    Object.keys(skillCategories).forEach(category => {
      grouped[category] = skills.filter(skill => skill.category === category);
    });
    return grouped;
  }, [skills, skillCategories]);

  // Generate random values only on client side to avoid hydration mismatch
  useEffect(() => {
    const values: {[key: string]: {x: number, y: number}} = {};
    Object.keys(skillCategories).forEach(category => {
      values[category] = {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100
      };
    });
    setRandomValues(values);
  }, [skillCategories]);

  // Flatten skills for display order
  const displaySkills = useMemo(() => {
    const skillOrder = ['frontend', 'backend', 'design', 'tools', 'data'];
    return skillOrder.flatMap(category => skillsByCategory[category as keyof typeof skillsByCategory] || []);
  }, [skillsByCategory]);

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {displaySkills.map((skill, skillIndex) => {
            const categoryInfo = skillCategories[skill.category as keyof typeof skillCategories];
            const IconComponent = categoryInfo.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                className={`${isDark ? 'bg-[var(--border-dark)] border-[var(--border-dark)]' : 'bg-white border-[var(--border-light)]'} rounded-2xl p-6 shadow-sm text-center hover:shadow-lg transition-shadow duration-300`}
                style={{
                  '--random-x': randomValues[skill.category as keyof typeof randomValues]?.x || 0,
                  '--random-y': randomValues[skill.category as keyof typeof randomValues]?.y || 0
                } as React.CSSProperties}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} flex items-center justify-center`}>
                  <IconComponent className={`w-8 h-8 ${categoryInfo.color}`} />
                </div>

                <h3 className={`font-semibold text-sm ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>
                  {skill.name}
                </h3>

                <div className="mt-3">
                  <div className={`w-full ${isDark ? 'bg-[var(--text-muted-dark)]' : 'bg-[var(--border-light)]'} rounded-full h-1.5`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      className={`h-1.5 rounded-full bg-gradient-to-r ${categoryInfo.color.replace('500', '400')}`}
                    />
                  </div>
                  <span className={`text-xs mt-1 block ${isDark ? 'text-[var(--text-muted-dark)]' : 'text-[var(--text-muted-light)]'}`}>
                    {skill.level}%
                  </span>
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
