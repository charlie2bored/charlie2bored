import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ClearCore Protein — Case Study',
  description:
    'How I designed and shipped ClearCore Protein: a multi-page React marketing site for a fictional CPG brand. Brief, research, decisions, what got cut, and what I would do differently.',
  alternates: { canonical: '/projects/clearcore' },
  openGraph: {
    title: 'ClearCore Protein — Case Study | Charlie Vargas',
  },
};

const facts: { label: string; value: string }[] = [
  { label: 'Role', value: 'Solo designer and developer' },
  { label: 'Timeline', value: 'Three weeks, evenings and weekends' },
  { label: 'Scope', value: 'Brand IA, design system, frontend' },
  { label: 'Stack', value: 'React, TypeScript, Vite, Tailwind v4, Framer Motion, GSAP' },
];

const decisions: { title: string; body: string }[] = [
  {
    title: 'A token-driven system before any page',
    body: 'I started in tokens, not in screens. Color, type ramp, spacing, and motion timing all live in Tailwind v4 theme tokens so the flavor pages, locator, and home all share the same rhythm. Building the system first felt slower for two days and saved a week after that — visual decisions stopped being one-offs.',
  },
  {
    title: 'A real route for every flavor, not a single grid',
    body: 'The instinct was to put every SKU on one shop page. That collapses three different stories — ingredients, taste, and use case — into a row of cards. I gave each flavor its own URL, hero, ingredient breakdown, and pairing notes. The trade-off is more pages to maintain. The win is that each flavor reads like a product, not a thumbnail.',
  },
  {
    title: 'A store locator that lies less',
    body: 'For a fictional brand, the lazy move is a fake map with fake pins. I built the locator UI assuming the data layer would arrive later, with empty, loading, and zero-result states designed before the happy path. The page tells the truth about availability instead of pretending coverage I do not have.',
  },
  {
    title: 'Motion that points at hierarchy, then gets out of the way',
    body: 'Framer Motion handles entrance reveals to set hierarchy on first paint; GSAP handles pinned scroll moments on the home page where the story benefits from a beat. Everywhere else, motion is opt-in to prefers-reduced-motion and stops at the fold. The rule I used: if the animation does not change what the reader understands, it should not be there.',
  },
  {
    title: 'Contact form designed as a real conversion, not a placeholder',
    body: 'Even for a fictional brand, the contact form was treated as a primary path. Real labels, real validation states, error copy written in plain English, and a success state that closes the loop instead of redirecting to a wall. It is the cheapest page on the site to take seriously and the one that signals everything about how the team behind it would treat a customer.',
  },
];

const cuts: { title: string; body: string }[] = [
  {
    title: 'Cart and checkout',
    body: 'I scoped a cart, mini-cart, and a Stripe-style checkout in the first sketch. I cut it. With no real inventory, fulfillment, or payment partner, building checkout would have meant designing a lie. The contact form became the conversion, and the brand reads as honest instead of overreaching.',
  },
  {
    title: 'A custom 3D bar renderer',
    body: 'The first concept had a WebGL hero with a rotating bar. It looked great in isolation and felt like a tax everywhere else: load time, motion accessibility, and a hero that fought the headline for attention. I replaced it with a photographic hero and put the saved week into the flavor pages.',
  },
  {
    title: 'An on-site blog',
    body: 'I drafted an IA with a Journal section for recipes and ingredient deep-dives. It was a content commitment I could not honor solo, and an empty blog dated the site immediately. Cut. If the brand were real, I would design the blog when there were three real posts ready, not before.',
  },
];

const differently: { title: string; body: string }[] = [
  {
    title: 'Test the hero on a phone first',
    body: 'I designed the desktop hero first and adapted down. The mobile version works, but it is a translation, not a native composition. Next time I want to compose the small-screen hero first and let it pressure-test the desktop layout.',
  },
  {
    title: 'Write the brand voice document before the headlines',
    body: 'I wrote headlines and discovered the voice. That is fine for one page; by page four, I was reverse-engineering rules. A one-page voice doc — what we sound like, what we never say, three reference brands — would have saved hours of copy rewrites.',
  },
  {
    title: 'Set a real motion budget',
    body: 'I added motion as I went, then pulled some of it back at the end. A motion budget written up front — number of animated elements per viewport, max duration, reduced-motion fallbacks — would have stopped me from cutting things I had already polished.',
  },
  {
    title: 'Treat the locator as a real product flow',
    body: 'I designed states for the locator, but I never wrote the empty-state copy as carefully as I wrote the home page copy. If a real user hit zero results, the page would feel like a dead end. Next time the page that fails most often gets the best writing pass.',
  },
];

export default function ClearCoreCaseStudyPage() {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        minHeight: '100vh',
      }}
    >
      <Navigation />
      <article className="pt-[140px] pb-[120px]">
        <header className="max-w-3xl mx-auto px-5 mb-12">
          <p
            className="text-sm uppercase tracking-[0.22em] mb-3 font-semibold"
            style={{ color: 'var(--text-secondary)' }}
          >
            Case study · 2025
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            style={{ color: 'var(--text-color)' }}
          >
            ClearCore Protein
          </h1>
          <p
            className="text-xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            A marketing site for a fictional gluten-free protein bar brand. I owned the design
            system, IA, and frontend end to end. This is how the decisions were made — including
            the ones I cut and the ones I would change next time.
          </p>
        </header>

        <div className="max-w-3xl mx-auto px-5 mb-16">
          <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: 'var(--text-secondary)' }}>
            <div className="relative aspect-video w-full bg-neutral-900">
              <Image
                src="/projects/clearcore-protein.png"
                alt="ClearCore Protein homepage hero"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://clearcore-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-lg text-sm sm:text-base font-medium"
              style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
            >
              Visit live site
            </a>
            <a
              href="https://github.com/charlie2bored/clearcore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-lg text-sm sm:text-base font-medium border-2"
              style={{ borderColor: 'var(--text-color)', color: 'var(--text-color)' }}
            >
              View source
            </a>
          </div>
        </div>

        <section
          className="max-w-3xl mx-auto px-5 mb-20 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-b py-10"
          style={{ borderColor: 'var(--text-secondary)' }}
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <p
                className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                {fact.label}
              </p>
              <p className="text-base sm:text-lg" style={{ color: 'var(--text-color)' }}>
                {fact.value}
              </p>
            </div>
          ))}
        </section>

        <section className="max-w-2xl mx-auto px-5 mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: 'var(--text-color)' }}
          >
            The brief I gave myself
          </h2>
          <div
            className="space-y-5 text-lg leading-relaxed"
            style={{ color: 'var(--text-color)' }}
          >
            <p>
              The premise: a new CPG brand needs a site that feels confident and shoppable before
              there is anything to actually ship. No inventory, no warehouse, no retail partners —
              just the kind of marketing surface that a real brand uses to earn its first
              wholesale meeting.
            </p>
            <p>
              That framing is harder than it sounds. A real brand site can lean on real product
              photography, real testimonials, real store locations. A fictional one has to build
              all of that scaffolding without crossing into make-believe. The design challenge was
              to make the site read as a serious early-stage brand without faking proof it had
              not earned.
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-5 mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: 'var(--text-color)' }}
          >
            Research, briefly
          </h2>
          <div
            className="space-y-5 text-lg leading-relaxed"
            style={{ color: 'var(--text-color)' }}
          >
            <p>
              I audited a dozen protein-bar and adjacent CPG sites — RXBAR, Aloha, David, Built,
              Magic Spoon, Olipop, and a handful of indie brands. Three patterns kept showing up.
            </p>
            <p>
              First, the homepage usually overstuffs the hero. Brands try to land a tagline, a
              flavor lineup, social proof, and a primary CTA in one viewport. The pages that read
              best treat the hero as a single argument and trust the next scroll to do the rest.
            </p>
            <p>
              Second, ingredient transparency is a real differentiator and a real design problem.
              Most brands list ingredients in a way that reads as legal copy. The brands that win
              on trust make the ingredient panel feel like the front of the package, not the
              back.
            </p>
            <p>
              Third, store locators are almost always disappointing. They load slowly, return zero
              results in obvious zip codes, and rarely tell you when data was last updated. There
              is a small but real opportunity to design honestly here.
            </p>
            <p>
              I also leaned on what I had learned from internship work in BI and analytics:
              decisions stick when they connect to a number the team can defend. So even on a
              fictional brand, every IA call had to answer the question — what would a real
              founder measure to know this worked?
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-5 mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8"
            style={{ color: 'var(--text-color)' }}
          >
            Decisions
          </h2>
          <ol className="space-y-10">
            {decisions.map((decision, index) => (
              <li key={decision.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
                <span
                  className="text-base sm:text-lg font-semibold pt-1"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-3 leading-tight"
                    style={{ color: 'var(--text-color)' }}
                  >
                    {decision.title}
                  </h3>
                  <p
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {decision.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-2xl mx-auto px-5 mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: 'var(--text-color)' }}
          >
            What got cut
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Cuts are part of the work. These were the three biggest, and the reasons hold up
            better than the original scope did.
          </p>
          <div className="space-y-8">
            {cuts.map((cut) => (
              <div
                key={cut.title}
                className="border-l-2 ps-5"
                style={{ borderColor: 'var(--text-secondary)' }}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
                  style={{ color: 'var(--text-color)' }}
                >
                  {cut.title}
                </h3>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {cut.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-5 mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: 'var(--text-color)' }}
          >
            What I would do differently
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Four honest notes. The site shipped; these are the things I want to fix before the
            next one starts.
          </p>
          <ol className="space-y-8 list-decimal pl-6">
            {differently.map((item) => (
              <li
                key={item.title}
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
                  style={{ color: 'var(--text-color)' }}
                >
                  {item.title}
                </h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-2xl mx-auto px-5 mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: 'var(--text-color)' }}
          >
            What shipped
          </h2>
          <ul
            className="space-y-3 text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--text-color)' }}
          >
            <li>A multi-page React + TypeScript app on Vite, with real routes and code-split entry points.</li>
            <li>A Tailwind v4 token system covering color, type, spacing, radius, and motion timing.</li>
            <li>Dedicated flavor detail pages with ingredient breakdowns and pairing notes.</li>
            <li>A store locator UI with deliberate empty, loading, and zero-result states.</li>
            <li>A contact form designed as a primary conversion, with real validation and success states.</li>
            <li>Framer Motion entrance choreography and GSAP scroll moments, both with reduced-motion fallbacks.</li>
          </ul>
        </section>

        <footer
          className="max-w-2xl mx-auto px-5 pt-10 border-t flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between"
          style={{ borderColor: 'var(--text-secondary)' }}
        >
          <Link
            href="/projects"
            className="text-base sm:text-lg font-medium hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-color)' }}
          >
            ← All projects
          </Link>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://clearcore-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-lg text-sm sm:text-base font-medium"
              style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
            >
              Visit live site
            </a>
            <a
              href="https://github.com/charlie2bored/clearcore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-lg text-sm sm:text-base font-medium border-2"
              style={{ borderColor: 'var(--text-color)', color: 'var(--text-color)' }}
            >
              View source
            </a>
          </div>
        </footer>
      </article>
      <Footer />
    </div>
  );
}
