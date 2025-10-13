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
    organization: 'WW+P Architects',
    role: 'Architectural Assistant',
    dates: 'Year V Placement, 2024',
    achievements: [
      'Developed ten route-wide design principles for East West Rail (Oxford–Cambridge)',
      'Conducted site analysis of major infrastructure assets',
      'Coordinated main project report, integrating multi-stakeholder feedback',
      'Updated technical drawings and sketches for viaducts, overbridges, tunnels, and headhouses',
      'Collaborated with directors, clients, and senior architects on principles refinement',
    ],
  },
  {
    id: '2',
    organization: 'Weston Williamson and Partners',
    role: 'Architectural Assistant',
    dates: 'Year III Placement, 2022',
    achievements: [
      'Worked on HS2, Qiddiya, and Sohar infrastructure projects',
      'Conducted Rhino option testing and MicroStation drawing updates',
      'Produced V-Ray and Photoshop visualisations for client presentations',
      'Created physical abutment detail model using laser cutting and 3D printing',
      'Developed client workshop materials and technical coordination drawings',
    ],
  },
  {
    id: '3',
    organization: 'LT Studio',
    role: 'Architectural Assistant',
    dates: 'Year II Placement, 2021',
    achievements: [
      'Produced public consultation visuals for Octagon Theatre Stage 5',
      'Created rendered masterplan for Design and Access Statement',
      'Developed sections and level diagrams for stakeholder communication',
      'Supported community engagement through clear, accessible visualisations',
    ],
  },
  {
    id: '4',
    organization: 'Paperspace Magazine',
    role: 'Editor-in-Chief',
    dates: '2020–2023',
    achievements: [
      'Led creative direction and editorial strategy for biannual architecture magazine',
      'Managed editorial team and production workflow',
      'Oversaw finance and budget management',
      'Designed sample spreads and layout templates',
    ],
  },
];
