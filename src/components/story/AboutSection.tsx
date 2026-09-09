import CropLabel from '@/components/story/CropLabel';
import {
  availability,
  email,
  intro,
  linkedin,
  skillsByCategory,
  socials,
  supporting,
} from '@/lib/about';
import { getCategory } from '@/lib/story';
import { getDataResumeUrl } from '@/lib/site';

const linkClass = 'underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70';

/**
 * The About, folded into the scroll story ahead of the selector. Skills are
 * grouped by Dance / Design / Data so this section makes the same argument
 * the rest of the page does.
 */
export default function AboutSection() {
  const dataResumeUrl = getDataResumeUrl();

  return (
    <section id="about" className="scroll-mt-16 px-6 py-24 sm:px-10 lg:px-16">
      <div className="max-w-5xl">
        <CropLabel>About</CropLabel>

        <p
          className="mt-6 max-w-3xl text-[clamp(1.25rem,3vw,1.9rem)] font-medium leading-[1.3] tracking-[-0.015em]"
          style={{ color: 'var(--paper)' }}
        >
          {intro[0]}
        </p>

        {intro.slice(1).map((para) => (
          <p
            key={para.slice(0, 24)}
            className="mt-6 max-w-2xl text-[15px] leading-relaxed sm:text-[16px]"
            style={{ color: 'var(--paper-dim)' }}
          >
            {para}
          </p>
        ))}

        <p
          className="font-mono-label mt-8 text-[10px] uppercase tracking-[0.16em]"
          style={{ color: 'var(--paper-dim)' }}
        >
          {availability} ·{' '}
          <a
            href={dataResumeUrl}
            className={linkClass}
            style={{ color: 'var(--paper)' }}
            {...(dataResumeUrl.startsWith('/')
              ? { download: true }
              : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            Résumé
          </a>
        </p>

        <div className="mt-16">
          <CropLabel>Skills</CropLabel>
          <ul className="mt-6 grid list-none gap-8 sm:grid-cols-3">
            {skillsByCategory.map((group) => {
              const category = getCategory(group.key);
              if (!category) return null;
              return (
                <li key={group.key} className="border-t pt-4" style={{ borderColor: 'var(--rule)' }}>
                  <p
                    className="font-display text-[13px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: category.accent }}
                  >
                    {category.label}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
                    {group.items.join(', ')}
                  </p>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed" style={{ color: 'var(--paper-faint)' }}>
            {supporting}
          </p>
        </div>

        <div className="mt-16 grid gap-12 border-t pt-10 md:grid-cols-2" style={{ borderColor: 'var(--rule)' }}>
          <div>
            <CropLabel>References</CropLabel>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
              The written recommendations are on{' '}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                style={{ color: 'var(--paper)' }}
              >
                LinkedIn
              </a>
              . If you&apos;re hiring, I&apos;m happy to share references once we&apos;ve actually had a
              conversation.
            </p>
          </div>

          <div>
            <CropLabel>Contact</CropLabel>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
              For hiring, collaborations, or anything else, email me. I usually get back within a few
              days.
            </p>
            <p className="mt-5">
              <a
                href={`mailto:${email}`}
                className="text-[clamp(1rem,2.2vw,1.35rem)] font-semibold underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-70"
                style={{ color: 'var(--paper)' }}
              >
                {email}
              </a>
            </p>
            <p
              className="font-mono-label mt-3 text-[10px] uppercase tracking-[0.16em]"
              style={{ color: 'var(--paper-faint)' }}
            >
              New York City, NY
            </p>
            <ul className="mt-5 flex list-none flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-mono-label text-[10px] uppercase tracking-[0.16em] ${linkClass}`}
                    style={{ color: 'var(--paper-dim)' }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
