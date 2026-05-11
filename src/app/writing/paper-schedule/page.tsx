import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Paper Schedule',
  description:
    'There’s a printed train schedule on the wall of every Tokyo station, and the trains come when it says they will. The MTA has the money to do the same; what’s broken is who answers when they don’t.',
  alternates: { canonical: '/writing/paper-schedule' },
  openGraph: {
    title: 'The Paper Schedule | Charlie Vargas',
  },
};

const footnotes: { n: number; title: string; url: string }[] = [
  { n: 1, title: 'MTA — Operating Budget', url: 'https://www.mta.info/budget' },
  {
    n: 2,
    title: 'NYC Fare Systems (own project)',
    url: 'https://nyc-fare-systems-website.vercel.app/',
  },
  {
    n: 3,
    title: 'Bloomberg — Runaway Transit Construction Costs',
    url: 'https://www.bloomberg.com/news/articles/2023-02-23/in-nyc-subway-a-case-study-in-runaway-transit-construction-costs/',
  },
  {
    n: 4,
    title: 'AOL — MTA Greenlights $250M for Consultants',
    url: 'https://www.aol.com/mta-greenlights-250m-consultants-expand-230748047.html',
  },
  { n: 5, title: 'Transit Costs Project', url: 'https://transitcosts.com/' },
  {
    n: 6,
    title: 'Transit Costs Project — Final Report',
    url: 'https://transitcosts.com/transit-costs-study-final-report/',
  },
  {
    n: 7,
    title: 'Pedestrian Observations — Transit Costs Conclusion',
    url: 'https://pedestrianobservations.com/2022/10/24/the-transit-costs-project-conclusion-is-out/',
  },
  {
    n: 8,
    title: 'Eno Center — Transit Construction Costs',
    url: 'https://enotrans.org/article/shining-more-lights-on-a-multi-billion-dollar-problem-high-costs-for-transit-construction/',
  },
  {
    n: 9,
    title: 'MTA — Board Members',
    url: 'https://www.mta.info/transparency/leadership/board-members',
  },
  {
    n: 10,
    title: 'City Limits — L Train Shutdown Reversal',
    url: 'https://citylimits.org/2019/01/04/abrupt-reversal-on-L-train-shutdown-raises-credibility-issues-for-mta-experts-say/',
  },
  {
    n: 11,
    title: 'NBC New York — L Train Consultant Costs',
    url: 'https://www.nbcnewyork.com/news/local/L-train-shutdown-consultant-cost-investigation-nyc-mta-pay-expert-cuomo-504487782.html',
  },
];

const Fn = ({ n }: { n: number }) => (
  <sup>
    <a
      href={`#fn-${n}`}
      className="ml-0.5 text-sm hover:underline"
      style={{ color: 'var(--text-secondary)' }}
      aria-label={`Footnote ${n}`}
    >
      [{n}]
    </a>
  </sup>
);

export default function PaperSchedulePage() {
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
        <header className="max-w-3xl mx-auto px-5 mb-12 text-center">
          <p
            className="text-sm uppercase tracking-wider mb-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            May 2026 · Essay
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: 'var(--text-color)' }}
          >
            The Paper Schedule
          </h1>
          <p
            className="text-xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            There’s a printed train schedule on the wall of every Tokyo station, and the trains
            come when it says they will. The MTA has the money to do the same; what’s broken is
            who answers when they don’t.
          </p>
        </header>

        <div
          className="max-w-2xl mx-auto px-5 space-y-6 text-lg leading-relaxed"
          style={{ color: 'var(--text-color)' }}
        >
          <p>
            There’s a paper on the wall of every train station in Tokyo. It tells you when the next
            train will come. Not “in 4 minutes” or “delayed” or “cancelled” on a digital display,
            that updates whenever it feels like it. An actual, printed schedule, with actual times,
            down to the minute.
          </p>
          <p>Best part, the trains come when the paper says it will.</p>
          <p>
            I moved to New York for school about 2 years ago. I take the subway every day. The first
            time I came home from Tokyo and stood on a platform waiting for the Q, I started
            thinking about something I’d had wrong for a long time.
          </p>
          <p>
            For most of my life I assumed the difference between New York’s subway and Tokyo’s was
            money, and that if the MTA was willing to spend more money to put into its own service,
            the trains would work the same way. I really hate being wrong about this, but I was.
          </p>
          <p>
            The MTA has a $21.3 billion operating budget<Fn n={1} />. It is one of the most-funded
            transit agencies on the planet, per rider. New York pays for its subways many times
            over, whether in fares, in dedicated taxes, in federal grants, or in the congestion
            pricing fight that took most of a decade to settle. Only 39%<Fn n={1} /> of that budget
            actually comes from fares and tolls, while the rest comes from taxes and government
            contributions. That means the entire region has been quietly subsidizing the system for
            years. The money is there. The problem is what happens after we hand it over.
          </p>
          <p>
            I’ve spent some time looking at the MTA up close. I built a fare analysis<Fn n={2} />{' '}
            project last year showing that New York’s flat $2.90 fare (Now $3) could be replaced
            with a distance-based model that would generate around $277 million in additional annual
            revenue, while lowering costs for nearly a third of trips. The deeper I went into the
            data, the clearer it became that the system’s problems aren’t hiding at all. The numbers
            are fine and have always been fine.
          </p>
          <p>
            What’s broken is harder to see, because it doesn’t show up on a balance sheet. It shows
            up in who answers for the trains when they don’t run. It shows up in how much it costs
            us to build a single new mile of track.
          </p>

          <h2
            className="text-2xl md:text-3xl font-bold pt-8"
            style={{ color: 'var(--text-color)' }}
          >
            Who actually answers when the trains don’t run?
          </h2>

          <p>The answer? It depends, and that’s the problem.</p>
          <p>
            A 17-member board governs the MTA, and every single one of them is technically appointed
            by the Governor of New York. The state Senate confirms them. Of those 17 members, 6 are
            nominated directly by the governor, including the Chair, who runs the entire agency.
            Four more are nominated by the Governor on the recommendation of the Mayor of New York
            City. Three are recommended by the county executives of Nassau, Suffolk, and
            Westchester. The remaining four are recommended by executives from Dutchess, Orange,
            Putnam, and Rockland counties, and together they cast a single collective vote
            <Fn n={9} />.
          </p>
          <p>
            The numbers are worth sitting with. New York City Transit handles roughly 2.4 billion
            rides a year. Metro-North and the Long Island Rail Road, combined, handle about 175
            million. Riders in New York City are close to 90% of the MTA’s customers. They have, in
            formal terms, four seats on the board, all of which are technically still appointed by
            the Governor, who is elected by the entire state. The suburban counties, which carry a
            small fraction of the ridership, get more representation per rider than the city does.
            The actual people getting on the subway in the morning have no one who directly answers
            to them.
          </p>
          <p>This is what governance looks like in practice.</p>
          <p>
            In late 2018, Governor Andrew Cuomo personally took control of an MTA decision.
            <Fn n={10} /> The agency had spent years preparing for a 15-month shutdown of the L
            train so it could repair the Canarsie Tunnel, which had been flooded with salt water
            during Hurricane Sandy in 2012. The plan had gone through extensive public hearings.
            Businesses had relocated and commuters had built workarounds. The MTA’s paid consultants
            (WSP and Jacobs Engineering, on contracts worth hundreds of millions) had explicitly
            endorsed the full shutdown as the “preferred approach.”<Fn n={11} />
          </p>
          <p>
            Then, three months before the shutdown was supposed to begin, Cuomo called the
            engineering deans of Cornell and Columbia and asked them to take a look at the plan.
            They worked unpaid over winter break. Three weeks later, they came back with a different
            proposal: wrap the corroding bench wall in fiberglass instead of rebuilding it, and run
            new cables along the tunnel walls instead of encasing them in concrete. On January 3,
            2019, Cuomo held a press conference announcing the shutdown was canceled. The MTA
            chairman stood next to him and endorsed the new plan. No MTA officials publicly raised
            any objections. The shutdown never happened, and the new plan actually worked.
          </p>
          <p>
            The detail that haunts me about this story is what was on the MTA’s payroll while it was
            unfolding: 173 civil engineers, 107 project managers, 73 architects.<Fn n={11} /> None
            of them had proposed the academic plan. The hundreds of millions in consultants couldn’t
            see what two unpaid deans saw in three weeks. The Riders Alliance called it “a
            last-minute Hail Mary idea cooked up over Christmas,” and they meant it as an insult,
            but it stuck precisely because it was true.
          </p>
          <p>
            You can read the L train story two ways at once, and both are correct. One reading is
            that the MTA is so dysfunctional that years of expert planning could be improved by free
            academic labor over a holiday break. The other reading is that one elected politician
            unilaterally overruled years of public process with a plan invented in three weeks by
            people accountable to no one. Whether or not it worked this time, the next time it might
            not. There is no functional system between the people running the trains and the people
            riding them.
          </p>
          <p>
            This is the structural answer to who is in charge of the subway. The Governor is in
            charge. The Governor has always been in charge. The Governor is elected by people who,
            for the most part, don’t ride. The people who do ride get to elect a Mayor who
            recommends four members to a board controlled by the Governor. The accountability gap is
            not an accident. It was built into the agency at its founding.
          </p>
          <p>
            A single mile of a new subway track in New York costs about $2.5 billion<Fn n={3} />.
            Phase 2 of the Second Avenue Subway, still waiting for the rest of its funding, is
            projected at around $4.3 billion per mile<Fn n={4} />. The global average (Data from 900
            projects in 60 countries) is closer to $350 million per mile. Similar projects in Italy,
            Sweden, Spain, Turkey, France and Germany typically come in between $250–$450 million.
            Seoul builds at roughly one-twentieth<Fn n={5} /> of New York’s per-kilometer cost.
          </p>
          <p>
            It’s incredibly hard to defend such a deficit in efficiency given our advantages. We
            have dense populations, existing rights of way, a century of engineering experience and
            one of the largest transit budgets on Earth. We should be one of the cheapest, most
            efficient places in the world to build a new track. Instead, we are routinely the most
            expensive, and by a large margin.
          </p>
          <p>
            Researchers at NYU’s Marron Institute have spent the better part of a decade trying to
            figure out why. Their work, called the Transit Costs Project<Fn n={6} />, points to 3
            clear pain points. Physical structures, labor and procurement.
          </p>
          <p>I’ll start with the stations.</p>
          <p>
            The Second Avenue Subway’s mined stations are roughly twice as long as the trains that
            run through them. The 96th Street Q station is closer to three times longer. By
            comparison, Italian and French subway stations are 5–10% longer than their trains.
            Stockholm’s Odenplan is 17%. Stand on the 72nd Street platform at some point. The
            station feels luxurious and grand with high ceilings, mosaics, a vast tunnel-like feel
            and the steepest escalators known to man that beat most of the system. But the train
            pulls in and there’s more space on the platform than there is for trains to be operating
            there. By no means am I saying the station isn’t beautiful. It’s just way larger than it
            needs to be. Phase 1 of the Second Avenue Subway used two different escalator vendors
            across three stations<Fn n={7} />, with each station essentially custom-built, even when
            standardization would’ve been cheaper and faster.
          </p>
          <p>
            Next, labor. In Turkey, Italy and Sweden, labor costs are roughly 20–30% of the total
            construction<Fn n={6} />. In the Northeast US, labor is about 40–60%. That difference
            doesn’t come from American workers being paid more. At most a quarter of the gap is
            wages. The rest is headcount, sending more people to do the same job. During Phase 1 of
            the Second Avenue Subway, the tunnel boring machine was operated by 46 workers per
            8-hour shift, with another 29 managers overseeing them across the day. The Transit Costs
            Project’s interviewees said the same machine could have been run with 30 workers per
            shift, and that the number of supervisors exceeded any international norm. We are
            sending 2.5 times the amount of labor required to get the work done.
          </p>
          <p>
            Finally, procurement. Different agencies that share a worksite (utilities, transit
            operators, the city, the state) each insist on sending their own supervisor into the
            tunnel to watch the contractor. Each set of supervisors gets paid out of the project
            budget. The Transit Costs Project describes the broader pattern as “a pervasive culture
            of secrecy and adversarialism between agencies and contractors,” combined with a lack of
            capacity at the MTA to manage the consultants it hires. The result is a system in which
            paying for oversight has become a major cost driver, and the oversight itself doesn’t
            seem to make the work any better.
          </p>
          <p>
            It is important to me that I tell you what is important about this argument and what
            isn’t. It isn’t an argument that MTA workers are overpaid. The research is explicit that
            pay differences account for at most a quarter of the gap<Fn n={7} />. It isn’t an
            argument that unions are the problem; white-collar overstaffing is just as severe. And
            it’s not an argument that New York has caught some uniquely American disease that can’t
            be cured. Alon Levy, one of the Transit Costs Project’s lead researchers, has given it
            to us straight<Fn n={8} />. “The causes of high American (especially New York) costs are
            institutional, and fixable, without a revolutionary upending of any legal or social
            system.”
          </p>
          <p>
            The important piece is that we aren’t fixing them. In late 2024, the MTA approved
            roughly $250 million in new consulting contracts for Phase 2 of the Second Avenue
            Subway. The same project the Transit Costs Project used as its case study for
            procurement dysfunction. The pattern the researchers identified as a primary cost driver
            is being repeated, on the same line, in plain sight.
          </p>
          <p>
            None of what I’ve said today is mysterious. The Transit Costs Project has spent years
            documenting it. Reporters have spent decades on it. The MTA itself publishes most of the
            relevant numbers in its annual reports. The diagnosis isn’t hidden. The governance
            structure that lets a governor override years of expert planning is written into the
            public authorities law. The construction costs are public record. The procurement
            dysfunction is named in a published academic report whose authors will happily give you
            a tour.
          </p>
          <p>
            What we don’t have is a political incentive to fix any of it. The governor isn’t
            punished by NYC riders for bad decisions, because most of his voters don’t ride. The MTA
            isn’t punished by the public, because the public can’t tell whether their delay is the
            agency’s fault or someone else’s. And the consultants keep getting hired because the
            people doing the hiring don’t have the internal capacity to do the work themselves,
            which is the same problem the consultants were hired to solve.
          </p>
          <p>
            I think about the paper schedule in Tokyo a lot. Not because the United States is going
            to become Japan, but because the paper schedule is evidence. It is evidence that a
            transit system can be built with the goal of working, and succeeding. We do not need to
            copy Tokyo. We need to want this for ourselves.
          </p>
        </div>

        <footer
          className="max-w-2xl mx-auto px-5 mt-16 pt-8 border-t"
          style={{ borderColor: 'var(--text-secondary)' }}
        >
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>
            Footnotes
          </h2>
          <ol className="space-y-3 text-base">
            {footnotes.map(({ n, title, url }) => (
              <li
                key={n}
                id={`fn-${n}`}
                className="flex gap-3"
                style={{ scrollMarginTop: '140px' }}
              >
                <span style={{ color: 'var(--text-secondary)' }}>{n}.</span>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {title}
                </a>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link
              href="/writing"
              className="text-base sm:text-lg font-medium hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text-color)' }}
            >
              ← All writing
            </Link>
          </div>
        </footer>
      </article>
      <Footer />
    </div>
  );
}
