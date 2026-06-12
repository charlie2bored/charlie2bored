import type { Metadata } from 'next';
import DriveDoc from '@/components/drive/DriveDoc';
import { getDataResumeUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'README',
  description:
    'Charlie Vargas: BI and operations analyst in New York. Power BI, SQL, and Python. Skills, references, and how to reach me.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'README | Charlie Vargas',
  },
};

const skillGroups = [
  {
    title: 'Data & analytics',
    items: ['SQL', 'Python', 'pandas', 'NumPy', 'matplotlib', 'Excel (advanced)', 'Data cleaning & ETL', 'Statistical analysis'],
  },
  {
    title: 'BI & dashboards',
    items: ['Power BI', 'Tableau', 'KPI design', 'Executive reporting', 'Dashboard automation', 'Predictive / forecasting models'],
  },
  {
    title: 'Operations & analysis',
    items: ['Pricing analysis', 'Pipeline & go/no-go review', 'Multi-source data integration', 'Process automation', 'Stakeholder communication', 'Data storytelling'],
  },
  {
    title: 'Engineering (supporting)',
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Git / GitHub', 'Vercel'],
  },
];

const h2 = 'mb-3 mt-8 text-xl font-medium';
const body = 'text-[15px] leading-relaxed';

export default function AboutPage() {
  const dataResumeUrl = getDataResumeUrl();

  return (
    <DriveDoc backHref="/" backLabel="Charlie Vargas" fileName="README.md">
      <h1 className="mb-4 text-2xl font-medium sm:text-3xl" style={{ color: 'var(--gd-text)' }}>
        Charlie Vargas
      </h1>
      <p className={`${body} mb-3`} style={{ color: 'var(--gd-text)' }}>
        I&apos;m a BI and operations analyst. I work mostly in Power BI, SQL, and Python. My
        multi-year BI internship taught me what a working BI operation actually does, automating
        KPI dashboards across 20+ schools, building enrollment forecasts, and turning messy data
        into something leadership can act on.
      </p>
      <p className={body} style={{ color: 'var(--gd-text-2)' }}>
        NYC, NJ &amp; CT · Hybrid local or remote ·{' '}
        <a
          href={dataResumeUrl}
          className="hover:underline"
          style={{ color: 'var(--gd-link)' }}
          {...(dataResumeUrl.startsWith('/') ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
        >
          Resume.pdf
        </a>
      </p>

      <h2 className={h2} style={{ color: 'var(--gd-text)' }}>
        Skills
      </h2>
      <p className={`${body} mb-4`} style={{ color: 'var(--gd-text-2)' }}>
        Grouped by what I actually use each one for.
      </p>
      <ul className="space-y-2">
        {skillGroups.map((group) => (
          <li key={group.title} className={body} style={{ color: 'var(--gd-text-2)' }}>
            <span className="font-medium" style={{ color: 'var(--gd-text)' }}>
              {group.title}:
            </span>{' '}
            {group.items.join(', ')}
          </li>
        ))}
      </ul>

      <h2 className={h2} style={{ color: 'var(--gd-text)' }}>
        References
      </h2>
      <p className={body} style={{ color: 'var(--gd-text-2)' }}>
        The written recommendations are on{' '}
        <a
          href="https://www.linkedin.com/in/charlie2bored/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: 'var(--gd-link)' }}
        >
          LinkedIn
        </a>
        . If you&apos;re hiring, I&apos;m happy to share references once we&apos;ve actually had a
        conversation.
      </p>

      <h2 id="contact" className={h2} style={{ color: 'var(--gd-text)', scrollMarginTop: '80px' }}>
        Contact
      </h2>
      <p className={`${body} mb-2`} style={{ color: 'var(--gd-text-2)' }}>
        For hiring, collaborations, or anything else, email me. I usually get back within a few
        days.
      </p>
      <ul className={`${body} space-y-1`} style={{ color: 'var(--gd-text-2)' }}>
        <li>
          <a href="mailto:iamcharlesvargas@gmail.com" className="hover:underline" style={{ color: 'var(--gd-link)' }}>
            iamcharlesvargas@gmail.com
          </a>
        </li>
        <li>New York City, NY</li>
        <li className="flex gap-4">
          <a href="https://github.com/charlie2bored" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--gd-link)' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/charlie2bored/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--gd-link)' }}>
            LinkedIn
          </a>
          <a href="https://x.com/charlie2bored" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--gd-link)' }}>
            Twitter
          </a>
        </li>
      </ul>
    </DriveDoc>
  );
}
