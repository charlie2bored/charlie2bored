'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    number: '(01)',
    slug: 'nyc-fare',
    title: 'NYC Distance-Based Fare',
    role: 'Solo: research, modeling, and frontend',
    description:
      'I treated MTA ridership data as a policy question. Would a distance-based fare actually change who pays and who saves? I modeled the math in Python off the open OD pairings, fare structures, and station metadata. Then I built a small site so a non-technical reader could test the tradeoff for their own commute.',
    approach: {
      problem:
        'Fare debates usually live in spreadsheets and op-eds. Riders can’t see how a policy change would actually affect their own trip.',
      decisions: [
        'Built the analysis in pandas and NumPy off the open MTA OD pairings, fare structures, and station metadata. The whole thing is reproducible, so the model can be re-run when the data changes.',
        'Reported the loss as well as the gain. About 29% of riders in the model pay less, and the rest pay more. Hiding that would have been a worse choice than reporting a worse number.',
        'Framed the page around a single comparison, your trip today versus the proposed model, so the reader is the one driving the page and not the agency.',
      ],
    },
    image: '/projects/nyc-fare-systems.jpg',
    hoverMetric: 'Modeled a fare policy on real MTA data, then built the page that explains the tradeoff',
    tech: ['Python', 'pandas', 'NumPy', 'matplotlib', 'TypeScript', 'Vite', 'Tailwind', 'Data storytelling'],
    links: { github: 'https://github.com/charlie2bored/NYC-Fare-Systems', demo: 'https://nyc-fare-systems-website.vercel.app/' },
  },
  {
    number: '(02)',
    slug: 'clearcore-protein',
    title: 'ClearCore Protein',
    role: 'Solo build, end to end',
    description:
      'A multi-page React site I built for a fictional CPG brand. I owned the information architecture, the component system, and the frontend. It has real routes for the store locator, flavor pages, and contact, with Framer Motion and GSAP handling the motion. The stack is Vite, TypeScript, and Tailwind v4.',
    approach: {
      problem: 'A new CPG brand needs a site that reads as confident and shoppable before there’s actually anything to ship.',
      decisions: [
        'Built a small token-driven system first, so the flavor pages, the locator, and the marketing pages could share the same rhythm instead of reinventing components for each.',
        'Split the flavor pages out of the catalog. Each SKU has its own URL, image set, and ingredient story, instead of a single overloaded grid.',
        'Used motion to reinforce hierarchy on entry, then quieted it on scroll so the secondary content reads without anything competing for attention.',
      ],
    },
    image: '/projects/clearcore-protein.png',
    hoverMetric: 'Built the whole thing solo: information architecture, components, and the frontend',
    tech: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind v4', 'Framer Motion', 'GSAP'],
    caseStudy: '/projects/clearcore',
    links: {
      github: 'https://github.com/charlie2bored/clearcore',
      demo: 'https://clearcore-tau.vercel.app/',
    },
  },
  {
    number: '(03)',
    slug: 'speedreader',
    title: 'SpeedReader',
    role: 'Solo build, end to end',
    description:
      'A reading tool that uses Rapid Serial Visual Presentation with an Optimal Recognition Point cue so the eye stays anchored. The real question wasn’t about speed. It was about attention. How much of the UI can you strip away before the reader loses their place?',
    approach: {
      problem: 'Long-form reading on the web is hostile to focus. Most "speed reader" UIs end up adding controls until the controls become the distraction.',
      decisions: [
        'Stripped the interface down to one fixation point and the controls you need to recover from a misread. Everything else is keyboard.',
        'Tuned the ORP highlight contrast so the focal letter reads as the anchor and doesn’t flicker between words.',
        'Sized the reading column for what’s actually readable at high WPM, not for what fills the screen.',
      ],
    },
    image: '/projects/speedreader.png',
    hoverMetric: 'Built for focus, not for feature count',
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind'],
    links: { github: 'https://github.com/charlie2bored/SpeedReader', demo: 'https://speed-reader-weld.vercel.app/' },
  },
];

type Project = (typeof projects)[number] & {
  role?: string;
  caseStudy?: string;
  approach?: { problem: string; decisions: string[] };
};

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
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight break-words" style={{ color: 'var(--text-color)' }}>
          {project.title}
        </h3>
        {project.role ? (
          <p
            className="text-xs sm:text-sm mb-6 font-semibold uppercase tracking-[0.18em]"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.role}
          </p>
        ) : null}
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {project.approach ? (
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
        ) : null}

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
  /** When false, hides the redundant "See all projects" link (e.g. on `/projects`). */
  showSeeAllLink?: boolean;
  /** When true, only render the featured (lead) project (used on the home page). */
  featuredOnly?: boolean;
};

const Projects = ({ showSeeAllLink = true, featuredOnly = false }: ProjectsProps) => {
  const visible = featuredOnly ? projects.slice(0, 1) : projects;
  const subhead = featuredOnly
    ? 'The piece I’d lead with is a fare-policy analysis I ran on real MTA data. The rest of what I’ve worked on is on the projects page.'
    : 'Analyses I ran and things I built. Each one tries to leave a trail of why I made the calls I did. Source, demos, and the parts I cut are all linked.';

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

        <div className="space-y-16 md:space-y-24 lg:space-y-[100px]">
          {visible.map((project, index) => (
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
