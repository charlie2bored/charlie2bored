'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'E-Commerce Analytics Dashboard',
    description: 'Comprehensive data visualization platform that increased conversion rates by 35%',
    image: '📊',
    link: '/projects'
  },
  {
    title: 'Brand Identity System',
    description: 'Complete visual identity design for a tech startup, from logo to marketing materials',
    image: '🎨',
    link: '/projects'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio showcasing data analysis and design work',
    image: '💻',
    link: '/projects'
  }
];

const FeaturedWork = () => {
  return (
    <section className="py-[150px]">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[100px]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>
            Featured Work
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
            A selection of projects that showcase the intersection of data analysis, design, and development.
          </p>
          <Link
            href="/projects"
            className="px-8 py-4 rounded-lg transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', border: '2px solid var(--text-color)' }}
          >
            View All Projects
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => window.location.href = project.link}
            >
              <div className="aspect-square rounded-2xl mb-6 flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-300" style={{
                backgroundColor: 'var(--bg-color)',
                border: '2px solid var(--text-secondary)'
              }}>
                {project.image}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" style={{ color: 'var(--text-color)' }}>
                {project.title}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
