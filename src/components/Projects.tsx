'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    number: '(01)',
    slug: 'nyc-fare',
    title: 'NYC Distance-Based Pricing',
    description: 'Analyzed MTA ridership data to demonstrate that replacing flat fares ($2.90) with distance-based pricing ($2.00 + $0.24/mile) could increase annual revenue by $277M while reducing costs for 29% of riders.',
    image: '/projects/nyc-fare-systems.jpg',
    tech: ['Python', 'SQL', 'Data Analytics', 'Business Operations'],
    links: { github: 'https://github.com/charlie2bored/NYC-Fare-Systems', demo: 'https://nyc-fare-systems-website.vercel.app/' }
  },
  {
    number: '(02)',
    slug: 'speedreader',
    title: 'SpeedReader',
    description: 'A high-performance web application that utilizes Rapid Serial Visual Presentation (RSVP) and Optimal Recognition Point (ORP) highlighting to enable distraction-free reading at speeds of up to 1000 words per minute.',
    image: '/projects/speedreader.png',
    tech: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    links: { github: 'https://github.com/charlie2bored/SpeedReader', demo: 'https://speed-reader-weld.vercel.app/' }
  },
  {
    number: '(03)',
    slug: 'data-viz-dashboard',
    title: 'Data Visualization Dashboard',
    description:
      'In-progress build: interactive dashboard explorations with D3-style visuals and filterable datasets. Repo and demo links go live once the deployment is finalized.',
    image: '/projects/data-viz-dashboard.jpg',
    tech: ['D3.js', 'Python', 'Flask'],
    links: { github: '#', demo: '#' }
  }
];

type Project = (typeof projects)[number];

function isLiveOutboundUrl(url: string) {
  return /^https?:\/\//i.test(url.trim());
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [imageError, setImageError] = useState(false);
  const githubLive = isLiveOutboundUrl(project.links.github);
  const demoLive = isLiveOutboundUrl(project.links.demo);

  return (
    <motion.div
      id={project.slug}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[100px_minmax(0,1fr)] lg:gap-16 hover:-translate-y-2 transition-transform duration-300 min-w-0 scroll-mt-28"
    >
      <div className="text-lg sm:text-xl font-medium sm:pt-3 shrink-0" style={{ color: 'var(--text-color)' }}>
        {project.number}
      </div>

      <div className="min-w-0">
        {/* Project Image */}
        <div className="aspect-video rounded-2xl mb-8 overflow-hidden border-2 relative" style={{ borderColor: 'var(--text-secondary)' }}>
          {!imageError ? (
            <Image
              src={project.image}
              alt={`Preview image for ${project.title} project`}
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundColor: 'var(--bg-color)',
                border: '2px solid var(--text-secondary)'
              }}
            >
              <span className="text-6xl" aria-hidden="true">
                🖼️
              </span>
            </div>
          )}
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight break-words" style={{ color: 'var(--text-color)' }}>
          {project.title}
        </h3>
        <p className="text-base sm:text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-6 mb-10">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-lg px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--text-secondary)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-10">
          {githubLive ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg transition-all duration-300 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation w-full sm:w-auto text-center"
              style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
            >
              GitHub
            </a>
          ) : (
            <span
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-base sm:text-lg font-medium w-full sm:w-auto text-center opacity-60 border-2 border-dashed"
              style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}
              aria-disabled="true"
            >
              GitHub · coming soon
            </span>
          )}
          {demoLive ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg transition-all duration-300 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation w-full sm:w-auto text-center"
              style={{
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-color)',
                border: '2px solid var(--text-color)'
              }}
            >
              Live Demo
            </a>
          ) : (
            <span
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-base sm:text-lg font-medium w-full sm:w-auto text-center opacity-60 border-2 border-dashed"
              style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}
              aria-disabled="true"
            >
              Live demo · coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

type ProjectsProps = {
  /** When false, hides the redundant “See all projects” link (e.g. on `/projects`). */
  showSeeAllLink?: boolean;
};

const Projects = ({ showSeeAllLink = true }: ProjectsProps) => {
  return (
    <section className="py-16 md:py-28 lg:py-[150px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-[100px]"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>Featured Work</h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-1" style={{ color: 'var(--text-secondary)' }}>
            Design, data, and frontend work: case studies with code, demos, and context.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24 lg:space-y-[100px]">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.number}-${project.title}`} project={project} index={index} />
          ))}
        </div>

        {showSeeAllLink ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 md:mt-[100px]"
          >
            <Link
              href="/projects"
              className="inline-block transition-colors duration-300 text-xl font-medium hover:opacity-70 touch-manipulation min-h-[44px] px-2 py-2"
              style={{ color: 'var(--text-color)' }}
            >
              Browse all projects →
            </Link>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
