'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const LINKEDIN = 'https://www.linkedin.com/in/charlie2bored/';

const highlights = [
  'Cross-functional work across analytics ops, dashboards, and product-minded design.',
  'Comfortable translating messy data into decisions stakeholders can trust.',
];

const Collaboration = () => {
  return (
    <section className="py-16 md:py-28 lg:py-[150px]" aria-labelledby="collaboration-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-[100px]"
        >
          <h2
            id="collaboration-heading"
            className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 px-2"
            style={{ color: 'var(--text-color)' }}
          >
            Collaboration and references
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-3 font-normal leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Detailed written recommendations live on LinkedIn. For hiring teams,
            references are available on request once we&apos;ve spoken.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-6"
          style={{ backgroundColor: 'var(--bg-color)' }}
        >
          <ul className="text-base sm:text-lg leading-relaxed space-y-4 list-disc ps-6" style={{ color: 'var(--text-secondary)' }}>
            {highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
            <Link
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-lg font-medium touch-manipulation w-full sm:w-auto text-center"
              style={{
                backgroundColor: 'var(--text-color)',
                color: 'var(--bg-color)',
              }}
            >
              View LinkedIn profile
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-lg font-medium border-2 touch-manipulation w-full sm:w-auto text-center"
              style={{
                borderColor: 'var(--text-color)',
                color: 'var(--text-color)',
              }}
            >
              Contact for references
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
