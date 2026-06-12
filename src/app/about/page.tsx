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

const h2 = 'mb-3 mt-8 text-xl font-medium';
const body = 'text-[15px] leading-relaxed';

export default function AboutPage() {
  const dataResumeUrl = getDataResumeUrl();

  return (
    <DriveDoc backHref="/" backLabel="Charlie Vargas" fileName="README.md">
      <h1 className="mb-4 text-2xl font-medium sm:text-3xl" style={{ color: '#1f1f1f' }}>
        Charlie Vargas
      </h1>
      <p className={`${body} mb-3`} style={{ color: '#1f1f1f' }}>
        I&apos;m a BI and operations analyst. I work mostly in Power BI, SQL, and Python. The last
        2 years of my BI internship taught me what a working BI operation actually does, automating
        KPI dashboards across 20 schools, building enrollment forecasts, and turning messy data
        into something leadership can act on.
      </p>
      <p className={body} style={{ color: '#444746' }}>
        NYC, NJ &amp; CT · Hybrid local or remote ·{' '}
        <a
          href={dataResumeUrl}
          className="hover:underline"
          style={{ color: '#0b57d0' }}
          {...(dataResumeUrl.startsWith('/') ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
        >
          Resume.pdf
        </a>
      </p>

      <h2 className={h2} style={{ color: '#1f1f1f' }}>
        Skills
      </h2>
      <p className={`${body} mb-4`} style={{ color: '#444746' }}>
        Grouped by what I actually use each one for, not by where they end up on a resume.
      </p>
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-1 text-base font-medium" style={{ color: '#1f1f1f' }}>
              {group.title}
            </h3>
            <p className="mb-2 text-sm" style={{ color: '#444746' }}>
              {group.blurb}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border px-3 py-1 text-[13px]"
                  style={{ borderColor: '#c4c7c5', borderWidth: '0.5px', color: '#444746' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className={h2} style={{ color: '#1f1f1f' }}>
        References
      </h2>
      <p className={body} style={{ color: '#444746' }}>
        The written recommendations are on{' '}
        <a
          href="https://www.linkedin.com/in/charlie2bored/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: '#0b57d0' }}
        >
          LinkedIn
        </a>
        . If you&apos;re hiring, I&apos;m happy to share references once we&apos;ve actually had a
        conversation.
      </p>

      <h2 id="contact" className={h2} style={{ color: '#1f1f1f', scrollMarginTop: '80px' }}>
        Contact
      </h2>
      <p className={`${body} mb-2`} style={{ color: '#444746' }}>
        For hiring, collaborations, or anything else, email me. I usually get back within a few
        days.
      </p>
      <ul className={`${body} space-y-1`} style={{ color: '#444746' }}>
        <li>
          <a href="mailto:iamcharlesvargas@gmail.com" className="hover:underline" style={{ color: '#0b57d0' }}>
            iamcharlesvargas@gmail.com
          </a>
        </li>
        <li>New York City, NY</li>
        <li className="flex gap-4">
          <a href="https://github.com/charlie2bored" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#0b57d0' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/charlie2bored/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#0b57d0' }}>
            LinkedIn
          </a>
          <a href="https://x.com/charlie2bored" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#0b57d0' }}>
            Twitter
          </a>
        </li>
      </ul>
    </DriveDoc>
  );
}
