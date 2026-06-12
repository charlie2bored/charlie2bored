export type Essay = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  description: string;
  url: string;
};

export const essays: Essay[] = [
  {
    slug: 'electoral-college',
    title: 'The Divisor',
    date: 'May 2026',
    readingTime: '9 min read',
    description: 'Every honest attempt to fix the Electoral College collapses into the same answer.',
    url: 'https://charlie2bored.substack.com/p/i-tried-to-save-the-electoral-college',
  },
  {
    slug: 'paper-schedule',
    title: 'The Paper Schedule',
    date: 'May 2026',
    readingTime: '12 min read',
    description:
      'There’s a paper schedule on the wall of every train station in Tokyo, and the trains come when it says they will. The MTA has the money to do the same. What’s broken is who answers when they don’t.',
    url: 'https://charlie2bored.substack.com/p/the-paper-schedule',
  },
];
