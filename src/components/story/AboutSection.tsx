import CropLabel from '@/components/story/CropLabel';
import { availability, bio, email, linkedin, skillGroups, socials } from '@/lib/about';
import { getDataResumeUrl } from '@/lib/site';

const linkClass = 'underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70';

/**
 * The README, folded into the scroll story. This is the last thing read
 * before the selector, so it closes the narrative with the concrete facts:
 * what he does, what he uses, and how to reach him.
 */
export default function AboutSection() {
  const dataResumeUrl = getDataResumeUrl();

  return (
    <section id="about" className="scroll-mt-16 px-6 py-24 sm:px-10 lg:px-16">
      <div className="max-w-5xl">
        <CropLabel>About</CropLabel>

        <p
          className="mt-6 max-w-3xl text-[clamp(1.15rem,2.6vw,1.6rem)] leading-[1.45]"
          style={{ color: 'var(--paper)' }}
        >
          {bio}
        </p>

        <p className="font-mono-label mt-6 text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--paper-dim)' }}>
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

        <div className="mt-16 grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div>
            <CropLabel>Skills</CropLabel>
            <p className="mt-4 text-[13px]" style={{ color: 'var(--paper-faint)' }}>
              Grouped by what I actually use each one for.
            </p>
            <ul className="mt-6 list-none space-y-4">
              {skillGroups.map((group) => (
                <li
                  key={group.title}
                  className="border-t pt-3 text-[14px] leading-relaxed"
                  style={{ borderColor: 'var(--rule)', color: 'var(--paper-dim)' }}
                >
                  <span className="font-semibold" style={{ color: 'var(--paper)' }}>
                    {group.title}
                  </span>
                  <br />
                  {group.items.join(', ')}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <CropLabel>References</CropLabel>
            <p className="mt-4 text-[14px] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
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

            <div className="mt-12">
              <CropLabel>Contact</CropLabel>
              <p className="mt-4 text-[14px] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
                For hiring, collaborations, or anything else, email me. I usually get back within a
                few days.
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
              <p className="font-mono-label mt-3 text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--paper-faint)' }}>
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
      </div>
    </section>
  );
}
