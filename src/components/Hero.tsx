'use client';

import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getUxResumeUrl, getDataResumeUrl } from '@/lib/site';

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
  const uxResumeUrl = getUxResumeUrl();
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
            I design product interfaces in Figma and ship the frontend that follows. A BI internship in Power BI, SQL, and Python taught me to think in numbers, so the design decisions are grounded in data instead of decorated with it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-sm sm:text-base mb-12 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Start with{' '}
            <Link href="/#clearcore-protein" className="underline underline-offset-4 hover:opacity-80">
              ClearCore Protein
            </Link>
            , a multi-page React site I built end to end.
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
                  href={uxResumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonOutline}
                  style={outlineButtonStyle}
                  {...outlineButtonHoverHandlers}
                  {...(uxResumeUrl.startsWith('/') ? { download: true } : {})}
                >
                  Design Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 1.06 }}>
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
                  Data Resume
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
                  All Projects
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
