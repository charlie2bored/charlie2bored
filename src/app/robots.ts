import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

/**
 * Assistant and training crawlers, named one by one.
 *
 * A bare `User-agent: *` already allows them, but several of these bots — and
 * the tools that audit a site for AI visibility — look for their own name
 * before they trust the wildcard, and Google-Extended and Applebot-Extended
 * are *only* read as named records. Naming them is also the place where a
 * future "no, not that one" gets written: flip a name's `allow` to `disallow`
 * and nothing else about the file changes.
 */
const assistantAgents = [
  'GPTBot', // OpenAI, training
  'OAI-SearchBot', // OpenAI, search index
  'ChatGPT-User', // OpenAI, a user asked ChatGPT to open the page
  'ClaudeBot', // Anthropic, training
  'Claude-User', // Anthropic, a user asked Claude to open the page
  'Claude-SearchBot', // Anthropic, search index
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended', // Gemini and AI Overviews grounding
  'Applebot',
  'Applebot-Extended', // Apple Intelligence
  'Amazonbot',
  'meta-externalagent', // Meta AI
  'Bytespider',
  'DuckAssistBot',
  'cohere-ai',
  'MistralAI-User',
  'CCBot', // Common Crawl, which most of the rest are trained on
];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...assistantAgents.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
