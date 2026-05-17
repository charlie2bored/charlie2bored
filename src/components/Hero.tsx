'use client';

import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getDataResumeUrl } from '@/lib/site';

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

const buttonOutline =
  'px-8 py-4 min-h-[48px] inline-flex items-center justify-center border-2 rounded-lg transition-all duration-300 text-lg sm:text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center touch-manipulation';

const Hero = () => {
  const dataResumeUrl = getDataResumeUrl();

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
              NYC, NJ &amp; CT · Hybrid local or remote
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="text-base sm:text-lg md:text-xl mb-7 max-w-2xl leading-relaxed font-normal"
            style={{ color: 'var(--text-secondary)' }}
          >
            I&apos;m a BI and operations analyst. I work mostly in Power BI, SQL, and Python. The last 2 years of my BI internship taught me what a working BI operation actually does, automating KPI dashboards across 20 schools, building enrollment forecasts, and turning messy data into something leadership can act on.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-sm sm:text-base mb-6 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            If you&apos;re going to look at one thing, look at the{' '}
            <Link href="/#nyc-fare" className="underline underline-offset-4 hover:opacity-80">
              NYC fare analysis
            </Link>
            . I modeled MTA ridership data to ask a question I couldn&apos;t find a clean answer to: who would actually pay more under a distance-based fare, and who would pay less.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm sm:text-base mb-12 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Latest essay:{' '}
            <a
              href="https://open.substack.com/pub/charlie2bored/p/the-paper-schedule?r=6ajw00&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              The Paper Schedule
            </a>{' '}
            on Substack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.92,
              type: 'spring',
              stiffness: 80,
              damping: 25,
            }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5"
          >
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 1 }}>
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
                  href={dataResumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonOutline}
                  style={outlineButtonStyle}
                  {...outlineButtonHoverHandlers}
                  {...(dataResumeUrl.startsWith('/') ? { download: true } : {})}
                >
                  Resume
                </a>
              </motion.div>
            </motion.div>

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
                <Link href="/projects" className={buttonOutline} style={outlineButtonStyle} {...outlineButtonHoverHandlers}>
                  Projects
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.18 }}
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
