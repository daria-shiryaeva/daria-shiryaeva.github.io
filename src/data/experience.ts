export interface Experience {
  id: string;
  organization: string;
  role: string;
  dates: string;
  achievements: string[];
  image?: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    organization: 'TFT Consultants, London',
    role: 'Intern',
    dates: 'Summer 2025',
    achievements: [
      'Developed an Excel performance tracker to evidence cost savings and improve financial reporting',
      'Produced cost reports and valuations under JCT contracts',
      'Delivered progress reports for the £430m 10 Spring Gardens project, supporting programme and handover',
    ],
  },
  {
    id: '2',
    organization: 'Am Märchenbrunnen 911, Germany',
    role: 'Real Estate Analyst Intern',
    dates: 'Summer 2025',
    achievements: [
      'Built financial models and conducted site analysis for a Berlin serviced apartment scheme',
      'Proposed design changes aligned with sustainability, cost, and market requirements',
    ],
  },
  {
    id: '3',
    organization: 'WW+P Architects, London',
    role: 'Part I Architectural Assistant',
    dates: '2024–2025',
    achievements: [
      'Produced a strategic planning report for East West Rail (RIBA Stage 1), informing land-use and asset design',
      'Conducted site analysis of key infrastructure assets',
      'Coordinated project report and integrated stakeholder feedback',
      'Developed drawings and diagrams for viaducts, bridges, tunnels, and headhouses',
    ],
  },
];
