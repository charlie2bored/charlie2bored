import {
  boardColumn,
  experienceColumns,
  experienceHeading,
  type ExperienceEntry,
} from '@/lib/experienceSection';

/**
 * Three-column experience board from the Figma frame EXPERIENCE (2003:95).
 *
 * Built as a grid rather than the absolute coordinates the export gives, so
 * it survives viewport changes. Type scales off the frame's own ratios:
 * headings 256/3572 = 7.17vw, entries 32/3572 = 0.9vw.
 *
 * Each entry reserves vertical room for its descriptor line whether or not
 * one is written yet, so filling them in later cannot reflow the board.
 */

function Entry({ entry }: { entry: ExperienceEntry }) {
  return (
    <li>
      <p className="text-[clamp(0.85rem,0.9vw,1.4rem)] font-bold leading-snug text-black">
        {entry.title}
      </p>
      {/*
        Reserved slot. Renders empty until the descriptor copy is confirmed;
        min-height keeps the rhythm identical either way.
      */}
      <p
        className="mt-2 min-h-[3.2em] max-w-[34ch] text-[clamp(0.72rem,0.72vw,1.05rem)] font-normal leading-relaxed text-black/70 sm:min-h-[2.6em]"
        data-slot="descriptor"
      >
        {entry.line ?? ''}
      </p>
    </li>
  );
}

export default function ExperienceBoard() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative scroll-mt-16 bg-white py-14 lg:py-0"
    >
      <p className="text-center text-[clamp(0.9rem,1.35vw,2rem)] font-bold text-black lg:pt-[3.9%]">
        {experienceHeading}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-px lg:mt-[2%] lg:grid-cols-3" style={{ backgroundColor: '#000' }}>
        {experienceColumns.map((column) => (
          <div
            key={column.key}
            className="px-6 pb-14 pt-8 sm:px-8 lg:px-[3%] lg:pb-[6%] lg:pt-0"
            style={{ backgroundColor: boardColumn }}
          >
            <h2 className="text-center text-[clamp(3rem,7.17vw,10rem)] font-bold leading-none tracking-[-0.02em] text-black lg:pt-[7%]">
              {column.heading}
            </h2>

            <ul className="mt-10 list-none space-y-10 lg:mt-[14%] lg:space-y-[12%]">
              {column.entries.map((entry) => (
                <Entry key={entry.title} entry={entry} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
