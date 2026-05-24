import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'I Tried to Save the Electoral College. The Math Wouldn’t Let Me.',
  description:
    'Every honest attempt to fix it collapses into the same answer.',
  alternates: { canonical: '/writing/electoral-college' },
  openGraph: {
    title: 'I Tried to Save the Electoral College | Charlie Vargas',
  },
};

const footnotes: { n: number; title: string; url: string }[] = [
  {
    n: 1,
    title: 'Congress.gov — Congressional Research Service explainer on Chiafalo v. Washington',
    url: 'https://www.congress.gov/crs-product/LSB10515',
  },
  {
    n: 2,
    title: 'Ballotpedia — Splits between the Electoral College and popular vote',
    url: 'https://ballotpedia.org/Splits_between_the_Electoral_College_and_popular_vote',
  },
  {
    n: 3,
    title: 'Brennan Center for Justice — The Electoral College’s Racist Origins',
    url: 'https://www.brennancenter.org/our-work/analysis-opinion/electoral-colleges-racist-origins',
  },
  {
    n: 4,
    title: 'PBS NewsHour — Electoral College is a ‘vestige’ of slavery',
    url: 'https://www.pbs.org/newshour/politics/electoral-college-slavery-constitution',
  },
  {
    n: 5,
    title: 'U.S. Census Bureau — 2020 Census results',
    url: 'https://en.wikipedia.org/wiki/2020_United_States_census',
  },
  {
    n: 6,
    title: 'USAFacts — Representation in the Electoral College by state',
    url: 'https://usafacts.org/visualizations/electoral-college-states-representation/',
  },
  {
    n: 7,
    title: 'Ballotpedia — Presidential battleground states, 2024',
    url: 'https://ballotpedia.org/Presidential_battleground_states,_2024',
  },
  {
    n: 8,
    title: 'Federal Election Commission — Official 2020 Presidential General Election Results',
    url: 'https://www.fec.gov/resources/cms-content/documents/2020presgeresults.pdf',
  },
  {
    n: 9,
    title: 'FairVote — Perot’s Contribution to Clinton’s 1992 Victory',
    url: 'https://archive.fairvote.org/plurality/perot.htm',
  },
  {
    n: 10,
    title: 'Wikipedia — National Popular Vote Interstate Compact',
    url: 'https://en.wikipedia.org/wiki/National_Popular_Vote_Interstate_Compact',
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

const Divider = () => (
  <div
    className="text-center py-4 tracking-[0.5em] text-sm"
    style={{ color: 'var(--text-secondary)' }}
    aria-hidden="true"
  >
    * * *
  </div>
);

export default function ElectoralCollegePage() {
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
      <main id="main-content">
        <article className="pt-[140px] pb-[120px]">
          <header className="max-w-3xl mx-auto px-5 mb-12 text-center">
            <p
              className="text-sm uppercase tracking-wider mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              May 2026 · Essay
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--text-color)' }}
            >
              I Tried to Save the Electoral College. The Math Wouldn’t Let Me.
            </h1>
            <p
              className="text-xl leading-relaxed italic"
              style={{ color: 'var(--text-secondary)' }}
            >
              Every honest attempt to fix it collapses into the same answer.
            </p>
          </header>

          <div
            className="max-w-2xl mx-auto px-5 space-y-6 text-lg leading-relaxed"
            style={{ color: 'var(--text-color)' }}
          >
            <p>
              Your vote may not count. Not because it wasn’t cast, not because it wasn’t counted,
              but because the person you trusted to cast it for you has opinions of their own.
            </p>
            <p>
              But a faithless elector is the rare case. It almost never happens, and ALL states can
              legally cancel or replace one.<Fn n={1} /> That version of the problem doesn’t really
              bother me. What bothers me is the quieter one, the system can screw you over while
              every single elector does their job perfectly and follows every rule. You vote. Your
              vote gets counted. Every official acts in good faith. And you still end up feeding a
              ballot into a system that was never built to let one vote out of 155 million be
              heard. The government works for the people. The people should be what decides who
              holds office, right?
            </p>
            <p>
              This is not hypothetical. Four times, the candidate more Americans voted for has
              lost the presidency anyway.<Fn n={2} /> Two of those four happened since 2000.
            </p>
            <p>
              The reason you’ll never hear for the Electoral College’s existence is slavery. The
              South wanted its enslaved population counted toward its political power without
              letting those people vote. A direct national popular vote would have counted only
              actual voters, which would have stripped the slave states of that advantage.<Fn n={3} /><Fn n={4} />{' '}
              The three-fifths compromise, and the Electoral College built alongside it, let the
              South inflate its weight in choosing the president. That is not a footnote. It is
              one of the load-bearing reasons the system took the shape it did.
            </p>
            <p>
              The practical reason is obsolete, and the original political reason was shameful.
              Neither one is a reason to keep it.
            </p>

            <Divider />

            <p>
              The system has decided that some votes are worth more than others, and it decided it
              by geography. Live in California and your vote is essentially worthless next to a
              vote cast two thousand miles away. Move to Wyoming (I wouldn’t wish that on my worst
              enemy) and your voice suddenly counts for more, because your single vote is a bigger
              slice of a smaller pie.
            </p>
            <p>
              Do the math. Wyoming has about 580,000 people and 3 electoral votes. Divide one by
              the other and each electoral vote there stands for roughly 193,000 people.
              California has about 39.5 million people and 54 electoral votes.<Fn n={5} /><Fn n={6} />{' '}
              Run the same division and each electoral vote stands for roughly 732,000 people. So a
              single vote in Wyoming carries about 3.8 times the weight of a single vote in
              California. Same country, same election, and the system has quietly decided that one
              of those people counts almost four times as much as the other.
            </p>
            <p>
              Now think about how a presidential campaign actually spends its final months. The
              candidates circle the same small group of states, over and over. Roughly seven of
              them, depending on the year, decide the whole election.<Fn n={7} /> The other
              forty-some are scenery.
            </p>
            <p>
              I couldn’t tell you the last time a presidential candidate tried to win my vote.
              Part of that is me. I turned 18 in New York City, voted in New Jersey by mail, and
              was not especially plugged into New Jersey politics. But part of it is that there
              was nothing to plug into. Neither New York nor New Jersey is a swing state. Neither
              one gets a visit, an ad, or a tailored promise. When you vote anywhere outside the
              seven states that matter, the system is telling you: it does not really matter
              whether you vote at all.
            </p>
            <p>
              This should make you angry! The Electoral College is defended, constantly, as the
              thing that protects small states from being ignored. Wyoming gets ignored. It is a
              guaranteed lock for one party, so no campaign spends a dollar there. New Jersey gets
              ignored for the same reason in the other direction. The system is publicly defended
              for doing the exact opposite of what it actually does. A system that is defended out
              loud and then quietly works against the people it claims to protect is not a
              mistake, it is a choice in design.
            </p>

            <Divider />

            <p>
              I did not start out wanting to abolish the Electoral College. I started out trying
              to save it. I spent time on a fix that kept the College intact, allocating its
              electoral votes proportionally instead of winner-take-all. I wanted to base it all
              off of the least populated state. For example, if the least populated state had
              100,000 voters, and your state has 150,000 voters, you’d have 1.5 votes towards the
              election. Now say a state voted 60/40 in favor of a blue candidate. That’s 90,000
              votes for the blue candidate and 60,000 for the red. Dividing by 100,000, you’d get
              0.9 votes for blue and 0.6 votes for red. At the end of collecting the votes, the
              national total for blue and red is just the national vote for each candidate divided
              by 100,000. That’s just the national vote. The divisor does nothing at all. Every
              honest attempt to keep the electoral college while also reallocating a proper amount
              of votes based on population lands back with the national popular vote.
            </p>
            <p>
              The real answer was simpler than the thing I was building, and it annoyed me that I
              hadn’t dug deep enough to find it the first time.
            </p>
            <p>Abolish the Electoral College. Count every vote in the country. Whoever gets the most wins.</p>
            <p>
              Having a one person, one vote policy means you do not have to hand your ballot to an
              intermediary you have never met and trust them to carry it for you. It means your
              vote matters on its own, regardless of whether a family member, or the person next
              to you, or a stranger two thousand miles away, disagrees with you. Voting is
              democracy’s life. It is the mechanism that turns a population into a government.
            </p>

            <Divider />

            <p>
              The first objection to a national popular vote is the one I raised against my own
              idea before anyone else could: doesn’t this just let big states dominate? California
              has 39 million people. Doesn’t counting every vote hand them the country?
            </p>
            <p>
              It doesn’t. A “big state” is not a thing that votes. 39 million Californians vote,
              and they do not vote as one bloc. In 2020, California split roughly 63/34.<Fn n={8} />{' '}
              About 6 million Californians voted for Trump. Under the system we have right now,
              every one of those 6 million produces exactly zero electoral votes. The state went
              blue, the bucket tipped entirely blue, and 6 million people were erased. Meanwhile
              580,000 people in Wyoming deliver three electoral votes, guaranteed. The current
              system is not protecting small voices. It is deleting six million of them in a
              single state.
            </p>
            <p>
              A national popular vote does not make California dominate. It makes Californians
              count, all of them, including the 6 million the current system silences. “California
              dominates” would require all 39 million to vote the same way. They never do. Nowhere
              does.
            </p>
            <p>
              The unit stops being the state and becomes the person. A voter in Wyoming and a
              voter in California each get one vote, the same weight. California has more total
              influence only because more people live there, and more people having more influence
              is not domination. It is the definition of the thing we keep saying we want.
            </p>
            <p>
              The system that causes the most neglect is the one we already have. Right now about
              seven swing states decide the presidency and the other forty-some are scenery. Under
              a popular vote, a vote in Wyoming is worth a vote in Pennsylvania, which gives a
              candidate more reason to show up in Wyoming, not less. The fear that small places
              get ignored describes the present, not the proposal.
            </p>
            <p>
              Two other defenses deserve a quick answer. The Electoral College is said to force
              candidates to build broad geographic coalitions. It does the opposite. It forces
              them to chase seven states, a narrower map than a popular vote would produce. It is
              also said to contain recounts, keeping a disputed result inside one state instead of
              triggering a national one. That one is partly true. It is a real cost, and I will
              come back to it honestly.
            </p>
            <p>
              I have to be honest about my own proposal, because doing anything else is the move I
              just spent an essay attacking.
            </p>
            <p>
              I will not tell you the national popular vote is flawless. But “isn’t flawless” is
              an empty thing to say. It is true of every voting system ever designed, and it
              carries no information. Flawless was never on the menu. So the real question is not
              flawed versus flawless. It is which specific flaws you would rather live with.
            </p>
            <p>
              The first is the serious one. A national plurality vote has no majority requirement.
              In a race with three or more real candidates, someone can win the presidency with
              well under half the country behind them. In 1992, Bill Clinton won with 43% of the
              popular vote, because Ross Perot pulled 19% of it.<Fn n={9} /> Under a pure national
              popular vote, you could seat a president on 38%. That is a genuine legitimacy
              problem. The Electoral College does not cleanly solve it either, but I am not
              grading my proposal on a curve. It is a flaw. The fix, a national runoff or
              ranked-choice voting, is its own redesign with its own tradeoffs.
            </p>
            <p>
              The second is practical. A genuinely close national race means a national recount,
              every precinct in the country rather than one state. Slower, messier, more open to
              litigation. Florida in 2000 was a disaster, but it was a contained one. A national
              popular vote does not contain it.
            </p>
            <p>
              These flaws are real, and I am not going to wave them away. But I’m not conceding
              either. Every system on offer is flawed. The only honest question left is which set
              you would choose.
            </p>

            <Divider />

            <p>
              So here is the choice. One system can seat a president the public was less inclined
              to back in the first place, and hold him up with structure instead of support. The
              other gives you a closer election, decided by where the general population actually
              landed. I will take the closer election every time. A president should be held up by
              the people who voted for him, not by the machinery that happened to count them.
            </p>
            <p>
              And wanting this should be easy, because it costs almost nothing. We are not
              building a new machine. We all already vote for the candidate we prefer. The popular
              vote does not add a single step to that. It removes one. It takes out the
              intermediary standing between your ballot and the outcome, and lets democracy do the
              plain thing it was always supposed to do.
            </p>
            <p>
              We aren’t far from this reality at all. It does not need a constitutional amendment
              that will never pass. The National Popular Vote Interstate Compact is already law in
              19 jurisdictions holding 222 electoral votes, and it takes effect at 270.<Fn n={10} />{' '}
              The fix is 48 electoral votes away from being real.
            </p>
            <p>
              That gives me hope. It should also come with urgency, because 48 votes do not close
              themselves. A government that actually works for the people is close enough to
              reach, but close is not the same as done. It still takes effort. It still takes us
              deciding, out loud, that we want it.
            </p>
            <p>Your vote may not be heard. But it can be.</p>
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
      </main>
      <Footer />
    </div>
  );
}
