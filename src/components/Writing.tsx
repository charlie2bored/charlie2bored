'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { essays } from '@/lib/essays';
import { SUBSTACK_URL } from '@/lib/site';

const Writing = () => {
  const featured = essays.slice(0, 2);

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
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>
            Writing + Essays
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Thoughts on data, transit, operations, and whatever else I’ve been chewing on.
          </p>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-5 text-base font-medium underline underline-offset-4 hover:opacity-80"
            style={{ color: 'var(--text-color)' }}
          >
            Subscribe on Substack →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((essay, index) => (
            <motion.div
              key={essay.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={essay.href}>
                <article
                  className="p-8 rounded-2xl h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
                  style={{
                    backgroundColor: 'var(--bg-color)',
                    border: '2px solid var(--text-secondary)',
                  }}
                >
                  <p
                    className="text-sm uppercase tracking-wider mb-3"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {essay.date}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    style={{ color: 'var(--text-color)' }}
                  >
                    {essay.title}
                  </h3>
                  <p
                    className="text-lg leading-relaxed mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {essay.description}
                  </p>
                  <span className="text-base font-medium" style={{ color: 'var(--text-color)' }}>
                    Read essay →
                  </span>
                </article>
              </Link>
              {essay.substackHref && (
                <a
                  href={essay.substackHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Also on Substack →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
