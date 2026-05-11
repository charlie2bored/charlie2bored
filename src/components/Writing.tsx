'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Essay {
  title: string;
  description: string;
  date: string;
  href: string;
  external?: boolean;
}

const essays: Essay[] = [
  {
    title: 'The Paper Schedule',
    description:
      'There’s a printed train schedule on the wall of every Tokyo station, and the trains come when it says they will. The MTA has the money to do the same; what’s broken is who answers when they don’t.',
    date: 'May 2026',
    href: '/writing/paper-schedule',
  },
];

const Writing = () => {
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
            Thoughts on data, design, and whatever else I’ve been chewing on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {essays.map((essay, index) => {
            const cardInner = (
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
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                {essay.external ? (
                  <a href={essay.href} target="_blank" rel="noopener noreferrer">
                    {cardInner}
                  </a>
                ) : (
                  <Link href={essay.href}>{cardInner}</Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Writing;
