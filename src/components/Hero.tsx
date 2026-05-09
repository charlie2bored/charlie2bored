'use client';

import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getPublicResumeUrl } from '@/lib/site';

const outlineButtonStyle = {
  borderColor: 'var(--text-color)',
  color: 'var(--text-color)',
  backgroundColor: 'transparent' as const,
};

const outlineButtonHoverHandlers = {
  onMouseEnter: (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = 'var(--text-color)';
    e.currentTarget.style.color = 'var(--bg-color)';
  },
  onMouseLeave: (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = 'var(--text-color)';
  },
};

const buttonPrimary =
  'px-8 py-4 min-h-[48px] inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-lg sm:text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center touch-manipulation';

const buttonOutline =
  'px-8 py-4 min-h-[48px] inline-flex items-center justify-center border-2 rounded-lg transition-all duration-300 text-lg sm:text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center touch-manipulation';

const Hero = () => {
  const resumeUrl = getPublicResumeUrl();

  return (
    <section
      className="pt-[calc(6.5rem+env(safe-area-inset-top,0px))] pb-24 md:pb-[150px] min-h-[100dvh] md:min-h-screen flex items-center"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className="mb-8"
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
              style={{
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--text-secondary)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                transition: { duration: 0.2 },
              }}
            >
              NYC &amp; NJ · Hybrid local or remote
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
            className="text-[2.75rem] sm:text-7xl md:text-8xl lg:text-[6.85rem] font-extrabold mb-4 leading-[1.02] tracking-[-0.035em]"
            style={{ color: 'var(--text-color)' }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            Charlie Vargas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-xs sm:text-sm mb-8 font-semibold uppercase tracking-[0.22em]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Also known as &quot;2bored&quot; online
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.85rem] mb-5 leading-[1.08] font-extrabold tracking-tight"
            style={{ color: 'var(--text-color)' }}
          >
            Product designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="text-base sm:text-lg md:text-xl mb-7 max-w-2xl leading-relaxed font-normal"
            style={{ color: 'var(--text-secondary)' }}
          >
            UX and web work in Figma, with a measurable analytics track record from BI internships (Power BI, SQL, Python). Open to{' '}
            <strong className="font-semibold" style={{ color: 'var(--text-color)' }}>
              product design, UX, and junior data roles
            </strong>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="mb-8 max-w-2xl rounded-xl border-2 px-5 py-4 sm:px-6 sm:py-5"
            style={{
              borderColor: 'var(--text-secondary)',
              backgroundColor: 'var(--bg-color)',
            }}
          >
            <p className="text-sm font-medium uppercase tracking-wide mb-2" style={{ color: 'var(--text-secondary)' }}>
              Recent internship impact
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-color)' }}>
              Cut <strong className="font-semibold">manual reporting by about 50%</strong> across a 20+ school network with Power BI dashboards, and contributed to actions that{' '}
              <strong className="font-semibold">reduced student attrition by about 10%</strong> (forecasting and enrollment modeling).
            </p>
            <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
              Apple Montessori Schools, Business Intelligence internship
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm sm:text-base mb-12 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            For a self-contained data story and shipped frontend, start with{' '}
            <Link href="/#nyc-fare" className="underline underline-offset-4 hover:opacity-80">
              NYC distance-based fare analysis
            </Link>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              type: 'spring',
              stiffness: 80,
              damping: 25,
            }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5"
          >
            {resumeUrl ? (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.12 }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonPrimary}
                    {...(resumeUrl.startsWith('/') ? { download: true } : {})}
                  >
                    Download résumé (PDF)
                  </a>
                </motion.div>
              </motion.div>
            ) : null}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: resumeUrl ? 1.2 : 1.12 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/#speedreader" className={buttonOutline} style={outlineButtonStyle} {...outlineButtonHoverHandlers}>
                  Here for design work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: resumeUrl ? 1.28 : 1.2 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/#nyc-fare" className={buttonOutline} style={outlineButtonStyle} {...outlineButtonHoverHandlers}>
                  Here for data work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: resumeUrl ? 1.36 : 1.28 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/projects" className={buttonOutline} style={outlineButtonStyle} {...outlineButtonHoverHandlers}>
                  All projects
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: resumeUrl ? 1.44 : 1.36 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" className={buttonOutline} style={outlineButtonStyle} {...outlineButtonHoverHandlers}>
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
