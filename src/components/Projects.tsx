'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    number: '(01)',
    title: 'NYC Distance Based Pricing',
    description: 'Analyzed MTA ridership data to demonstrate that replacing flat fares ($2.90) with distance-based pricing ($2.00 + $0.24/mile) could increase annual revenue by $277M while reducing costs for 29% of riders.',
    image: '/projects/nyc-fare-systems.jpg',
    tech: ['Python', 'SQL', 'Data Analytics', 'Business Operations'],
    links: { github: 'https://github.com/charlie2bored/NYC-Fare-Systems', demo: 'https://nyc-fare-systems-website.vercel.app/' }
  },
  {
    number: '(02)',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: '/projects/task-management-app.jpg',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    links: { github: '', demo: '#' }
  },
  {
    number: '(03)',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for data analysis and visualization with customizable charts and filters.',
    image: '/projects/data-viz-dashboard.jpg',
    tech: ['D3.js', 'Python', 'Flask'],
    links: { github: '#', demo: '#' }
  }
];

const Projects = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>Featured Works</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Every project is a chance to blend design and development, shaping bold interactive ideas into sleek digital realities
          </p>
        </motion.div>

        <div className="space-y-[100px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-[100px_1fr] gap-16 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              <div className="text-xl font-medium pt-3" style={{ color: 'var(--text-color)' }}>
                {project.number}
              </div>

              <div>
                {/* Project Image */}
                <div className="aspect-video rounded-2xl mb-8 overflow-hidden border-2" style={{ borderColor: 'var(--text-secondary)' }}>
                  <img
                    src={project.image}
                    alt={`Preview image for ${project.title} project`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center" style="background-color: var(--bg-color); border: 2px solid var(--text-secondary);">
                          <span class="text-6xl" aria-hidden="true">🖼️</span>
                        </div>
                      `;
                    }}
                  />
                </div>

                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-color)' }}>
                  {project.title}
                </h3>
                <p className="text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-6 mb-10">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-lg px-3 py-1 rounded-full" style={{
                      backgroundColor: 'var(--bg-color)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--text-secondary)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-10">
                  <a
                    href={project.links.github}
                    className="px-6 py-3 rounded-lg transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.links.demo}
                    className="px-6 py-3 rounded-lg transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', border: '2px solid var(--text-color)' }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-[100px]"
        >
          <Link
            href="/projects"
            className="inline-block transition-colors duration-300 text-xl font-medium hover:opacity-70"
            style={{ color: 'var(--text-color)' }}
          >
            See All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
