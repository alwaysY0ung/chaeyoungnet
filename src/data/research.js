// Single source of truth for publications / datasets / patents.
// Shared by the home "Selected publications" section and the
// /papers, /datasets, /patents pages so everything stays in sync.
//
// Author objects carry an ORCID URL (for the iD icon link). Add more
// co-author ORCIDs here as they become available.
// `eq: true` marks an equal-contribution author (rendered with *).

const chaeyoung = { name: 'Chaeyoung Lee', orcid: 'https://orcid.org/0009-0006-8907-6504' };
const chaeri = { name: 'Chaeri Jung', orcid: 'https://orcid.org/0009-0006-0247-5167' };
const seonghoon = { name: 'Seonghoon Jeong', orcid: 'https://orcid.org/0000-0001-5638-2851' };

// --- Image assets (auto-discovered via glob) --------------------------------
// Drop files into the matching folder and they appear automatically:
//   papers/drift/*    → DRIFT paper page images (hover flips through them, sorted by filename)
//   datasets/longitudinal-dga/* → IEEE DataPort dataset thumbnail (first file used)
//   patents/drift/*   → DRIFT patent architecture figure (first file used)

// Sorted list of ImageMetadata for a glob (sorted by file path so 01,02,03… order)
const sortedImgs = (mods) =>
  Object.entries(mods)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, m]) => m.default);

const driftPaperPages = sortedImgs(
  import.meta.glob('../assets/images/papers/drift/*.{png,jpg,jpeg,webp,avif}', { eager: true })
);
const longitudinalDatasetThumb = sortedImgs(
  import.meta.glob('../assets/images/datasets/longitudinal-dga/*.{png,jpg,jpeg,webp,avif}', { eager: true })
)[0];
const driftPatentFigure = sortedImgs(
  import.meta.glob('../assets/images/patents/drift/*.{png,jpg,jpeg,webp,avif}', { eager: true })
)[0];

export const papers = [
  {
    authors: [{ ...chaeyoung, eq: true }, { ...chaeri, eq: true }, seonghoon],
    title: 'DRIFT: Drift-Resilient Invariant-Feature Transformer for DGA Detection',
    venue: '56th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN 2026)',
    year: '2026',
    note: '',
    href: 'https://arxiv.org/abs/2605.10436',
    cta: 'Visit arXiv',
    pages: driftPaperPages, // hover flips through the paper's pages
  },
];

export const datasets = [
  {
    authors: [chaeyoung, chaeri, seonghoon],
    title: 'Longitudinal Benign and DGA Domain Name Dataset',
    venue: 'IEEE DataPort',
    year: '2026',
    note: '',
    href: 'https://ieee-dataport.org/documents/longitudinal-benign-and-dga-domain-name-dataset',
    img: longitudinalDatasetThumb, // IEEE DataPort dataset thumbnail
  },
];

export const patents = [
  {
    authors: [seonghoon, chaeyoung, chaeri],
    title: '강건한 DGA 생성 도메인 탐지를 위한 모델 사전 학습 기술 및 분류 방법',
    venue: 'Ministry of Intellectual Property (formerly KIPO), Republic of Korea',
    year: '2026',
    note: 'filed · Appl. No. 10-2026-0092483',
    href: '',
    img: driftPatentFigure, // architecture figure
  },
];

// Home page shows the papers as "Selected publications".
export const selectedPublications = papers;
