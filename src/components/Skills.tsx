'use client';

import { motion } from 'framer-motion';

type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: 'Data & analytics',
    blurb: 'What I use day to day to get from raw rows to a defensible answer.',
    items: ['SQL', 'Python', 'pandas', 'NumPy', 'matplotlib', 'Excel (advanced)', 'Data cleaning & ETL', 'Statistical analysis'],
  },
  {
    title: 'BI & dashboards',
    blurb: 'Reports leadership actually opens, and trusts because the math is shown.',
    items: ['Power BI', 'Tableau', 'KPI design', 'Executive reporting', 'Dashboard automation', 'Predictive / forecasting models'],
  },
  {
    title: 'Operations & analysis',
    blurb: 'The numbers, sitting next to the decisions they’re supposed to inform.',
    items: ['Pricing analysis', 'Pipeline & go/no-go review', 'Multi-source data integration', 'Process automation', 'Stakeholder communication', 'Data storytelling'],
  },
  {
    title: 'Engineering (supporting)',
    blurb: 'What I use to ship the work somewhere the audience will actually read it.',
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Git / GitHub', 'Vercel'],
  },
];

const Skills = () => {
  return (
    <section className="py-16 md:py-28 lg:py-[150px]" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-[80px]"
        >
          <h2
            id="skills-heading"
            className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 px-2"
            style={{ color: 'var(--text-color)' }}
          >
            Skills
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-3 font-normal leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Grouped by what I actually use each one for, not by where they end up on a resume.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-7 sm:p-8 rounded-2xl"
              style={{
                backgroundColor: 'var(--bg-color)',
                border: '2px solid var(--text-secondary)',
              }}
            >
              <h3
                className="text-xl sm:text-2xl font-bold tracking-tight mb-2"
                style={{ color: 'var(--text-color)' }}
              >
                {group.title}
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)' }}
              >
                {group.blurb}
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm sm:text-base px-3 py-1 rounded-full"
                    style={{
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--text-secondary)',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
