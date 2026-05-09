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
    hoverMetric: '↑ ~$277M annual revenue opportunity modeled',
    tech: ['Python', 'SQL', 'Data Analytics', 'Business Operations'],
    links: { github: 'https://github.com/charlie2bored/NYC-Fare-Systems', demo: 'https://nyc-fare-systems-website.vercel.app/' }
  },
  {
    number: '(02)',
    slug: 'speedreader',
    title: 'SpeedReader',
    description: 'A high-performance web application that utilizes Rapid Serial Visual Presentation (RSVP) and Optimal Recognition Point (ORP) highlighting to enable distraction-free reading at speeds of up to 1000 words per minute.',
    image: '/projects/speedreader.png',
    hoverMetric: '↑ 1,000 WPM RSVP reading with ORP emphasis',
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
    hoverMetric: 'Interactivity underway · filtered D3-style views',
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
      className="group/card grid grid-cols-1 gap-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[100px_minmax(0,1fr)] lg:gap-16 min-w-0 scroll-mt-28 motion-safe:transition-transform motion-safe:duration-300 motion-safe:[@media(hover:hover)]:hover:-translate-y-1"
    >
      <div className="text-lg sm:text-xl font-medium sm:pt-3 shrink-0" style={{ color: 'var(--text-color)' }}>
        {project.number}
      </div>

      <div className="min-w-0">
        <div className="mb-8 rounded-2xl overflow-hidden border-2" style={{ borderColor: 'var(--text-secondary)' }}>
          <div className="group/media relative aspect-video w-full overflow-hidden isolate bg-neutral-900">
            {!imageError ? (
              <Image
                src={project.image}
                alt={`Preview image for ${project.title} project`}
                fill
                className="object-cover motion-safe:duration-500 motion-safe:transition-transform motion-safe:[@media(hover:hover)]:[@media(prefers-reduced-motion:no-preference)]:group-hover/media:scale-[1.025]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                onError={() => setImageError(true)}
              />
            ) : (
              <div
                className="w-full h-full min-h-[12rem] flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-color)' }}
              >
                <span className="text-6xl" aria-hidden="true">
                  🖼️
                </span>
              </div>
            )}

            <div
              aria-hidden="true"
              className="hidden md:flex pointer-events-none absolute inset-0 flex-col justify-end opacity-0 translate-y-1 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 [@media(hover:hover)_and_(pointer:fine)]:group-hover/media:opacity-100 [@media(hover:hover)_and_(pointer:fine)]:group-hover/media:translate-y-0"
              style={{
                backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, transparent 78%)',
              }}
            >
              <p className="px-6 sm:px-8 pb-6 sm:pb-7 text-lg sm:text-2xl font-semibold tracking-tight text-white drop-shadow-md">
                {project.hoverMetric}
              </p>
            </div>
          </div>

          <div
            className="md:hidden border-t px-4 py-4"
            style={{ borderColor: 'var(--text-secondary)', backgroundColor: 'var(--bg-color)' }}
          >
            <p className="text-base font-semibold tracking-tight leading-snug" style={{ color: 'var(--text-color)' }}>
              {project.hoverMetric}
            </p>
          </div>
        </div>

        <p className="sr-only">Highlight: {project.hoverMetric}</p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight break-words" style={{ color: 'var(--text-color)' }}>
          {project.title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
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
              {project.slug === 'nyc-fare' ? 'Case Study' : 'Live Demo'}
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
          <h2 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 px-2" style={{ color: 'var(--text-color)' }}>
            Featured work
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-3 font-normal leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
