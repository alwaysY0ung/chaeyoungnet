// Single source of truth for News — shared by the home preview and /news.
// Newest first. `href` is optional: only items with a related write-up get a
// "read on blog" link.
import SiteLayout from '../layouts/SiteLayout.astro';
export const news = [
  {
    date: 'Jun 3, 2026',
    text: 'Awarded an IEEE/IFIP DSN 2026 Student Travel Grant — supporting travel to present “DRIFT: Drift-Resilient Invariant-Feature Transformer for DGA Detection” at the conference in Charlotte, North Carolina. <a href="https://chaeri.net" target="_blank" rel="noopener noreferrer" style="color: var(--link); font-weight: 600; text-decoration: none;">Chaeri Jung</a> and I were each selected by the DSN’26 Student Travel Grant Committee, co-chaired by Meera Sridhar and Domenico Cotroneo.',
  },
  {
    date: 'Jun 3, 2026',
    text: 'Launched this personal website at chaeyoung.net (built June 1–3).',
  },
  {
    date: 'May 11, 2026',
    text: 'Registered the chaeyoung.net domain.',
  },
  {
    date: 'Apr 27, 2026',
    text: 'Our paper “DRIFT: Drift-Resilient Invariant-Feature Transformer for DGA Detection” (Chaeyoung Lee and Chaeri Jung, equal contribution) was accepted to IEEE/IFIP DSN’26.',
  },
];
