'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { categories, projects, type Category, type Project } from '@/lib/projects';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const githubLive = /^https?:\/\//i.test(project.links.github.trim());
  const demoLive = /^https?:\/\//i.test(project.links.demo.trim());

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
            <Image
              src={project.image}
              alt={`Preview image for ${project.title} project`}
              fill
              className="object-cover motion-safe:duration-500 motion-safe:transition-transform motion-safe:[@media(hover:hover)]:[@media(prefers-reduced-motion:no-preference)]:group-hover/media:scale-[1.025]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
            />

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
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight break-words" style={{ color: 'var(--text-color)' }}>
          {project.title}
        </h3>
        <p
          className="text-xs sm:text-sm mb-6 font-semibold uppercase tracking-[0.18em]"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.role}
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        <div
          className="mb-10 max-w-2xl border-l-2 ps-5 sm:ps-6"
          style={{ borderColor: 'var(--text-secondary)' }}
        >
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            Approach
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed mb-4 font-medium"
            style={{ color: 'var(--text-color)' }}
          >
            {project.approach.problem}
          </p>
          <ul
            className="text-base sm:text-lg leading-relaxed space-y-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.approach.decisions.map((decision, decisionIndex) => (
              <li key={decisionIndex} className="flex items-start">
                <span className="mr-3 mt-1 shrink-0" aria-hidden="true">
                  →
                </span>
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </div>

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
          {project.caseStudy ? (
            <Link
              href={project.caseStudy}
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg transition-all duration-300 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation w-full sm:w-auto text-center"
              style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
            >
              Read case study
            </Link>
          ) : null}
          {githubLive ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg transition-all duration-300 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation w-full sm:w-auto text-center"
              style={{
                backgroundColor: project.caseStudy ? 'var(--bg-color)' : 'var(--text-color)',
                color: project.caseStudy ? 'var(--text-color)' : 'var(--bg-color)',
                border: project.caseStudy ? '2px solid var(--text-color)' : undefined,
              }}
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
              Live demo
            </a>
          ) : project.links.demo ? (
            <span
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-base sm:text-lg font-medium w-full sm:w-auto text-center opacity-60 border-2 border-dashed"
              style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}
              aria-disabled="true"
            >
              Live demo · coming soon
            </span>
          ) : null}
        </div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('data');
  const visible = projects.filter((p) => p.category === activeCategory);
  const subhead =
    'Analyses I ran and things I built. Each one tries to leave a trail of why I made the calls I did. Source, demos, and the parts I cut are all linked.';

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
            {subhead}
          </p>
        </motion.div>

        <div
          role="tablist"
            aria-label="Project categories"
            className="flex justify-center flex-wrap gap-x-2 sm:gap-x-6 gap-y-2 mb-12 md:mb-20"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  id={`tab-${cat.key}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.key}`}
                  onClick={() => setActiveCategory(cat.key)}
                  className="px-4 py-2 text-base sm:text-lg font-medium transition-colors duration-200 touch-manipulation min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-t"
                  style={{
                    color: isActive ? 'var(--text-color)' : 'var(--text-secondary)',
                    borderBottom: `2px solid ${isActive ? 'var(--text-color)' : 'transparent'}`,
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
          className="space-y-16 md:space-y-24 lg:space-y-[100px]"
        >
          {visible.map((project, index) => (
            <ProjectCard key={`${project.number}-${project.title}`} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
