export interface Project {
  id: string;
  title: string;
  slug: string;
  year: string;
  location: string;
  type: 'Infrastructure' | 'Community' | 'Education' | 'Culture';
  role: string;
  status: string;
  overview: string;
  contributions: string;
  sustainability: string;
  outcomes: string;
  heroImage: string;
  heroAlt: string;
  gallery: { src: string; alt: string }[];
  tags: string[];
  featured?: boolean;
  impact?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Route-Wide Design Principles',
    slug: 'east-west-rail',
    year: '2024',
    location: 'Oxford–Cambridge, UK',
    type: 'Infrastructure',
    role: 'Design Principles Development',
    status: 'Industrial Placement',
    overview: 'I helped develop ten route-wide design principles to guide assets from viaducts to headhouses across the Oxford–Cambridge route.',
    contributions: 'I conducted extensive site analysis of major assets along the route, evaluating their constraints, opportunities, and context. I compiled findings into a cohesive report and coordinated the main project document, developing its structure and integrating feedback from directors, clients, stakeholders, and senior architects. I also updated accompanying sketches and technical drawings to align with the latest design requirements.',
    sustainability: 'The principles embed environmental responsibility and carbon consciousness at their core, ensuring every asset type considers lifecycle impact, climate resilience, and biodiversity connectivity. We prioritized passive-first strategies and material clarity across the entire route.',
    outcomes: 'The ten principles now form the foundation of East West Rail design approach, ensuring consistency and quality across hundreds of assets. The framework supports multi-stakeholder decision-making and sets a new benchmark for large-scale infrastructure design in the UK.',
    heroImage: '/src/assets/projects/ewr-map.jpg',
    heroAlt: 'Route-wide principles diagram for East West Rail showing asset typologies and constraints',
    gallery: [
      { src: '/src/assets/projects/ewr-map.jpg', alt: 'Illustrative mapping of assets along the EWR route' },
      { src: '/src/assets/projects/ewr-overbridge.jpg', alt: 'Illustrative depiction of overbridge key interfaces and main structural components' },
    ],
    tags: ['Infrastructure', 'Principles-Led', 'Sustainability', 'Stakeholder Engagement'],
    featured: true,
    impact: 'Principles-led framework for major UK infrastructure',
  },
  {
    id: '2',
    title: 'Healthier Futures',
    slug: 'healthier-futures-swindon',
    year: '2024',
    location: 'Swindon, UK',
    type: 'Community',
    role: 'Lead Designer',
    status: 'Individual Project',
    overview: 'A community-centred sports and wellbeing hub with pools, flexible sports hall and market space, studio and therapy rooms, and generous glazing that connects activity to the street.',
    contributions: 'I designed the full scheme from concept to detail, integrating a complex mixed-use programme that includes adult and children pool depths, a sports hall that converts to market space, café, community rooms, yoga and pilates studios, and therapy spaces. I developed a clear hierarchy of large volumes and cellular spaces, ensuring intuitive circulation and strong connections to the street.',
    sustainability: 'The building employs north lights and stack ventilation via roof lights, supplemented by photovoltaics and ground-source heat pumps for the pool. Shading includes brise-soleil and vertical fins. Green roof terraces support biodiversity corridors, and planting is integrated throughout to enhance air quality and user wellbeing.',
    outcomes: 'The project demonstrates how community sports facilities can serve multiple functions while achieving rigorous environmental performance. The design prioritizes accessibility, intergenerational use, and long-term health outcomes.',
    heroImage: '/src/assets/projects/healthier-futures-plan.jpg',
    heroAlt: 'Community sports centre plan with swimming pool, sports hall, and cafe',
    gallery: [
      { src: '/src/assets/projects/healthier-futures-plan.jpg', alt: 'Ground floor plan showing pool, sports hall, and community spaces' },
    ],
    tags: ['Community', 'Wellbeing', 'Passive Design', 'Mixed-Use'],
    featured: true,
    impact: 'Community wellbeing hub with pool and flexible halls',
  },
  {
    id: '3',
    title: 'Plant & Climate Science Institute',
    slug: 'plant-climate-science-institute',
    year: '2024',
    location: 'Swindon, UK',
    type: 'Education',
    role: 'Lead Designer',
    status: 'TED Project',
    overview: 'An education and innovation campus showcasing visible labs and greenhouse, winter gardens, algae facade panels, and biodiversity-rich courtyards.',
    contributions: 'I designed a higher education institute and innovation hub with visible research labs and greenhouse, winter gardens for year-round learning, and public realm upgrades. The scheme includes algae facade panels as both a renewable energy source and a learning device, alongside thermal labyrinth, geothermal systems, and solar arrays.',
    sustainability: 'The project foregrounds climate science through its architectural expression: algae panels generate energy while demonstrating biological processes, thermal labyrinth and geothermal systems provide passive heating and cooling, and biodiverse courtyards support research and urban ecology. The design makes environmental systems visible and educational.',
    outcomes: 'The institute positions Swindon as a hub for climate research and innovation, integrating higher education with public engagement. The building itself becomes a teaching tool, demonstrating sustainable technologies in action and fostering collaboration between researchers, students, and the community.',
    heroImage: '/src/assets/projects/ewr-map.jpg',
    heroAlt: 'Institute section with winter gardens, visible labs, and greenhouse on roof',
    gallery: [
      { src: '/src/assets/projects/ewr-map.jpg', alt: 'Building section showing winter gardens, learning labs, and rooftop greenhouse' },
    ],
    tags: ['Education', 'Innovation', 'Climate Science', 'Algae Facade'],
    featured: true,
    impact: 'HE and innovation hub with visible labs and greenhouse',
  },
  {
    id: '4',
    title: 'Octagon Theatre Public Consultation',
    slug: 'octagon-theatre',
    year: '2023',
    location: 'Bolton, UK',
    type: 'Culture',
    role: 'Visualisation & Communication',
    status: 'Industrial Placement',
    overview: 'I produced strategy diagrams, rendered masterplan for the Design and Access Statement, and clear sections and levels communication for public consultation on the Octagon Theatre redevelopment.',
    contributions: 'I created a suite of public consultation visuals, including strategy diagrams that clarified design intent, a fully rendered masterplan for the DAS, and sectional and level-by-level drawings that communicated complex spatial relationships to non-specialist audiences.',
    sustainability: 'The project prioritized heritage retention, sustainable refurbishment, and community access, ensuring the theatre remains a cultural anchor for Bolton while reducing embodied carbon through adaptive reuse.',
    outcomes: 'The visuals supported successful public engagement, helping stakeholders and the community understand the design proposals and their benefits. The project advanced to Stage 5 with strong community support.',
    heroImage: '/src/assets/projects/octagon-theatre.jpg',
    heroAlt: 'Rendered masterplan for Octagon Theatre showing public realm and theatre entrance',
    gallery: [
      { src: '/src/assets/projects/octagon-theatre.jpg', alt: 'Masterplan visualisation for public consultation' },
    ],
    tags: ['Culture', 'Heritage', 'Public Consultation', 'Visualisation'],
  },
  {
    id: '5',
    title: 'HS2 Aston Church Overbridge',
    slug: 'hs2-aston-church-overbridge',
    year: '2022',
    location: 'Birmingham, UK',
    type: 'Infrastructure',
    role: 'Design Development & Visualisation',
    status: 'Industrial Placement',
    overview: 'I tested design options in Rhino, updated drawings in MicroStation, produced V-Ray and Enscape renders, and created a physical abutment model using laser cutting and 3D printing.',
    contributions: 'I conducted Rhino-based option testing to refine the overbridge design, updated technical drawings in MicroStation, and produced high-quality visualisations using V-Ray and Photoshop. I also fabricated a detailed physical model of the abutment using laser cutting and 3D printing, which was used in client workshops.',
    sustainability: 'The design prioritized material efficiency, climate resilience, and visual integration with the surrounding urban context, ensuring the overbridge supports long-term performance while minimizing environmental impact.',
    outcomes: 'The design options and visualisations informed client decision-making, and the physical model facilitated productive workshops with stakeholders. The project demonstrated the value of mixed-media communication in large-scale infrastructure design.',
    heroImage: '/src/assets/projects/ewr-overbridge.jpg',
    heroAlt: 'HS2 Aston Church Overbridge visualisation showing structural components',
    gallery: [],
    tags: ['Infrastructure', 'HS2', 'Rhino', 'Physical Modelling'],
  },
];
