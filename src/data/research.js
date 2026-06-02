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

export const papers = [
  {
    authors: [{ ...chaeyoung, eq: true }, { ...chaeri, eq: true }, seonghoon],
    title: 'DRIFT: Drift-Resilient Invariant-Feature Transformer for DGA Detection',
    venue: '56th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN 2026)',
    year: '2026',
    note: '',
    href: '',
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
  },
];

export const patents = [
  {
    authors: [seonghoon, chaeyoung, chaeri],
    title: '강건한 DGA 생성 도메인 탐지를 위한 모델 사전 학습 기술 및 분류 방법',
    venue: 'Korean Intellectual Property Office (KIPO)',
    year: '2026',
    note: 'filed · 관리번호 2026-1-052-KR',
    href: '',
  },
];

// Home page shows the papers as "Selected publications".
export const selectedPublications = papers;
