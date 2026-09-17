/**
 * /llms.txt — the llmstxt.org index file. Served as UTF-8 plain text so it
 * renders in a browser rather than downloading, and cached at the edge: the
 * content only changes when the site is rebuilt.
 */
import { buildLlmsTxt } from '@/lib/llms';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
