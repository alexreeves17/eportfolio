import type { Extracurricular } from '../types/extracurricular';

export const extracurriculars: Extracurricular[] = [
  {
    title: 'Portfolio Manager, Technology/Media/Telecom Group',
    organization: 'Bauer Capital Group',
    period: '2020 - Present',
    description:
      'Led a team of four analysts to research and present stock pitches to the group using fundamental analysis and Discounted Cash Flow modeling. Managed share of portfolio fund via voting to add stocks to the group portfolio and determined the weight of the allocation for those stocks.',
    skills: ['Leadership', 'Excel'],
    media: [],
  },
  {
    title: 'Participant',
    organization: 'NASA Moon-to-Mars Hackathon',
    period: 'Oct 2019',
    description:
      'Collaborated with a cross-functional team of employees to develop a recommendation for a mobile-based medical solution for deep-space Orion missions using commercial-off-the-shelf products. Presented findings to high-level NASA leadership panel and followed up with Orion team for further discussion of findings',
    skills: [],
    media: [
      {
        type: 'image',
        url: '',
        thumbnail: '',
        caption: 'Presenting to panel',
      },
    ],
  },
];
