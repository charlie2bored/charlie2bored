'use client';

import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HiringLinks = () => {
  const resumeUrl =
    typeof process.env.NEXT_PUBLIC_RESUME_URL === 'string'
      ? process.env.NEXT_PUBLIC_RESUME_URL.trim()
      : '';

  if (!resumeUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.75 }}
    >
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base sm:text-lg underline underline-offset-[5px] decoration-2 hover:opacity-80 touch-manipulation min-h-[44px] inline-flex items-center"
        style={{ color: 'var(--text-secondary)' }}
      >
        Résumé (PDF)
      </a>
    </motion.div>
  );
};

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
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 leading-[1.1] sm:leading-tight"
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
            className="text-lg sm:text-xl md:text-2xl mb-6 font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            Also known as &quot;2bored&quot; online
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-xl sm:text-2xl md:text-3xl mb-8 leading-relaxed font-light"
            style={{ color: 'var(--text-secondary)' }}
          >
            Product design, social media, and UI/UX: grounded in BI and analytics when outcomes hinge on data.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-xl mb-4 max-w-2xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Team leadership from sports and live events; design thinking from UI, web, and marketing; analytical rigor from data and BI internships. I gravitate toward{' '}
            <strong className="font-semibold" style={{ color: 'var(--text-color)' }}>
              Figma and shipping interfaces
            </strong>
            , with the rest in SQL, reporting, and narrative. Open to{' '}
            <strong className="font-semibold" style={{ color: 'var(--text-color)' }}>
              internships and junior-track roles
            </strong>{' '}
            in product design, social, and UX.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.92 }}
            className="text-sm sm:text-base mb-12 max-w-2xl italic"
            style={{ color: 'var(--text-secondary)' }}
          >
            Best sample to open first: NYC distance-based fare analysis (data story and shipped site).
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
            className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10"
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.25 }}
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
                <Link
                  href="/projects"
                  className={buttonOutline}
                  style={outlineButtonStyle}
                  {...outlineButtonHoverHandlers}
                >
                  All Projects
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
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
                <Link
                  href="/contact"
                  className={buttonOutline}
                  style={outlineButtonStyle}
                  {...outlineButtonHoverHandlers}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="mt-10 empty:hidden">
            <HiringLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
