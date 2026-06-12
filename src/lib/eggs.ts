export type EggAction =
  | { kind: 'confetti-contact' }
  | { kind: 'bored-toy' }
  | { kind: 'profile-card' }
  | { kind: 'link-card'; label: string; href: string | null; note: string };

export type SearchEgg = {
  triggers: string[];
  label: string;
  action: EggAction;
};

// The single editable trigger -> action map for search-box easter eggs.
// Triggers are matched against the normalized (lowercased, trimmed) query.
export const searchEggs: SearchEgg[] = [
  {
    triggers: ['hire me', 'hire charlie', 'hire'],
    label: 'Excellent decision. Opening contact…',
    action: { kind: 'confetti-contact' },
  },
  {
    triggers: ['fortnite'],
    label: 'Fortnite stats',
    action: {
      kind: 'link-card',
      label: 'Fortnite stats',
      href: 'https://fortnitetracker.com/profile/all/charlie2bored',
      note: 'charlie2bored on Fortnite Tracker.',
    },
  },
  {
    triggers: ['bored', '2bored', 'im bored', "i'm bored"],
    label: 'Boredom cure (beta)',
    action: { kind: 'bored-toy' },
  },
  {
    triggers: ['charlie', 'charlie vargas', 'charles', 'charles vargas', 'cv'],
    label: 'Charlie Vargas',
    action: { kind: 'profile-card' },
  },
];

export function matchSearchEgg(query: string): SearchEgg | undefined {
  const q = query.trim().toLowerCase();
  return searchEggs.find((egg) => egg.triggers.includes(q));
}

// Details panel (info button): Charlie as the selected file. Facts from the repo.
export const detailsFile = {
  fields: [
    { label: 'Type', value: 'BI and operations analyst' },
    { label: 'Owner', value: 'Charlie Vargas' },
    { label: 'Location', value: 'New York City, NY' },
    { label: 'Modified', value: 'Jun 2026' },
    { label: 'Size', value: '5 projects · 2 essays · 1 resume' },
  ],
  activity: [
    { when: 'Jun 2026', what: 'Rebuilt this site as the Drive you are looking at' },
    { when: 'Jun 2026', what: 'Shipped the June resume revision (Resume.pdf)' },
    { when: 'May 2026', what: 'Published “The Divisor” and “The Paper Schedule” on Substack' },
    { when: 'May 2026', what: 'Surfaced a $913M MTA revenue gap in the fare analysis' },
    { when: 'May 2026', what: 'Subway-events detector hit 96.5% recall on 513 events' },
    { when: 'Mar 2026', what: 'Joined Medara as Product Designer' },
    { when: 'Feb 2026', what: 'Joined Team Toro at the New York Red Bulls' },
  ],
};

// Help center (question-mark button). Charlie's own copy.
export const helpArticles = [
  {
    q: 'How do I hire Charlie?',
    a: 'Email iamcharlesvargas@gmail.com with the role attached. Resume is available in resume.pdf. Emails that include a job description will be read as received, those with offer letters skip the queue!',
  },
  {
    q: 'Is he available?',
    a: 'Yes! I’m available for remote-based in NJ, NYC, and CT, with on-site and hybrid availability in NYC!',
  },
  {
    q: 'What does 2bored mean?',
    a: 'I made a minecraft account called “charlie2poor” and then lost the account due to some malware when I was 13. Since then, I’ve used the “2bored” ending because I was bored of making new emails.',
  },
  {
    q: 'Why does this look like Google Drive?',
    a: 'Many of us use Google Drive everyday! It’s a friendly design format that is easily accessible and serves the same purpose of getting to know me!',
  },
];

export const feedbackMailto =
  'mailto:iamcharlesvargas@gmail.com?subject=Drive%20feedback';

// Keyboard shortcuts overlay. Every entry here is actually implemented.
export const shortcuts = [
  { keys: '/', does: 'Focus search' },
  { keys: '?', does: 'Open keyboard shortcuts' },
  { keys: 'v', does: 'Toggle list / grid view' },
  { keys: 'Esc', does: 'Close panels and menus' },
];

// Stage reveal (hidden file in Experience). Caption facts from the repo.
export const stageReveal = {
  fileName: 'IMG_4821.MOV',
  caption:
    'Charlie performs with the “WOO!” Crew (NJ Devils) and Team Toro (New York Red Bulls), after four years of conservatory training at the Academy for Performing Arts.',
  // TODO(charlie): provide the clip and/or photos for this preview (file paths or
  // links). Until then the modal shows a pending-media state and the caption above.
  media: null as null | { type: 'video' | 'image'; src: string }[],
};

export const offTheClockTagline =
  'Devils & Red Bulls · dance floors · books · games — currently off the clock';
