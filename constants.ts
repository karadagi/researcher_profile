
import { ResearchTheme, Publication, Course, Project } from './types';

export const RESEARCH_THEMES: ResearchTheme[] = [
  {
    id: 'urban-mobility',
    title: 'Equitable Urban Mobility',
    summary: 'Investigating how multi-modal transportation networks can be optimized for low-income populations using graph theory.',
    methods: 'GIS, NetworkX, Python, Agent-based Modeling',
    keywords: ['Urban Design', 'Social Justice', 'Transportation']
  },
  {
    id: 'carbon-sequestration',
    title: 'High-Fidelity Carbon Modeling',
    summary: 'Developing novel CFD simulations to predict atmospheric carbon uptake in urban forest canopies.',
    methods: 'OpenFOAM, CFD, Atmospheric Physics',
    keywords: ['Sustainable Design', 'CFD', 'Climate']
  },
  {
    id: 'ai-urbanism',
    title: 'Generative AI in Spatial Planning',
    summary: 'Exploring the use of LLMs and Diffusion models to assist urban designers in generating sustainable block topologies.',
    methods: 'PyTorch, Stable Diffusion, Spatial Statistics',
    keywords: ['AI/ML', 'Urban Design', 'Generative Design']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    name: 'Proplanify',
    description: 'Strategic urban planning platform',
    url: 'https://example.com/proplanify',
    logo: 'https://cdn-icons-png.flaticon.com/512/3663/3663004.png', // Placeholder for "Green F" style
    accentColor: '#4ade80'
  },
  {
    id: 'proj2',
    name: 'Horizons Publishing',
    description: 'Academic knowledge dissemination',
    url: 'https://example.com/horizons',
    logo: 'https://cdn-icons-png.flaticon.com/512/3429/3429153.png', // Placeholder for "Books" style
    accentColor: '#38bdf8'
  },
  {
    id: 'proj3',
    name: 'Signature Tours',
    description: 'Curated sporting experiences',
    url: 'https://example.com/signature',
    logo: 'https://cdn-icons-png.flaticon.com/512/10411/10411603.png', // Placeholder for "Signature" style
    accentColor: '#ef4444'
  },
  {
    id: 'proj4',
    name: 'Healthpoint Physio',
    description: 'Integrated health informatics',
    url: 'https://example.com/healthpoint',
    logo: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png', // Placeholder for "Human icons" style
    accentColor: '#1e40af'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'EDU-AI: A twofold machine learning model to support classroom layout generation',
    authors: [
      { name: 'I Karadag', isMe: true },
      { name: 'OZ Guzelci' },
      { name: 'S Alacam' }
    ],
    venue: 'Construction Innovation 23 (4), 898-914',
    year: 2023,
    month: '',
    citations: 42,
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=300',
    abstract: 'This paper presents a twofold machine learning model, EDU-AI, designed to support the generation of classroom layouts.',
    bibtex: '@article{karadag2023edu,\n  title={EDU-AI: A twofold machine learning model to support classroom layout generation},\n  author={Karadag, I and Guzelci, OZ and Alacam, S},\n  journal={Construction Innovation},\n  volume={23},\n  number={4},\n  pages={898--914},\n  year={2023}\n}',
    tags: ['Machine Learning', 'Generative Design'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:9yKSN-GCB0IC' }
  },
  {
    id: 'p2',
    title: 'Machine learning for conservation of architectural heritage',
    authors: [
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Open House International 48 (1), 23-37',
    year: 2023,
    month: '',
    citations: 41,
    thumbnail: 'https://images.unsplash.com/photo-1599639668353-8d07cae51f5c?auto=format&fit=crop&q=80&w=300',
    abstract: 'Investigating the application of machine learning techniques in the conservation and preservation of architectural heritage.',
    bibtex: '@article{karadag2023machine,\n  title={Machine learning for conservation of architectural heritage},\n  author={Karadag, I},\n  journal={Open House International},\n  volume={48},\n  number={1},\n  pages={23--37},\n  year={2023}\n}',
    tags: ['Heritage', 'Conservation', 'ML'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:MXK_kJrjxJIC' }
  },
  {
    id: 'p3',
    title: 'Design for improving pedestrian wind comfort: a case study on a courtyard around a tall building',
    authors: [
      { name: 'N Serteser' },
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Architectural Science Review 61 (6), 492-499',
    year: 2018,
    month: '',
    citations: 27,
    thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=300',
    abstract: 'A case study analyzing pedestrian wind comfort around tall buildings using CFD simulations and design interventions.',
    bibtex: '@article{serteser2018design,\n  title={Design for improving pedestrian wind comfort: a case study on a courtyard around a tall building},\n  author={Serteser, N and Karadag, I},\n  journal={Architectural Science Review},\n  volume={61},\n  number={6},\n  pages={492--499},\n  year={2018}\n}',
    tags: ['Wind Comfort', 'CFD', 'Urban Design'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:hqOjcs7Dif8C' }
  },
  {
    id: 'p4',
    title: 'Use of renewable energy in buildings',
    authors: [
      { name: 'I Yuksek' },
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Renewable Energy-Technologies and Applications 23',
    year: 2021,
    month: '',
    citations: 22,
    thumbnail: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=300',
    abstract: 'Comprehensive review of renewable energy technologies and their integration into modern building systems.',
    bibtex: '@incollection{yuksek2021use,\n  title={Use of renewable energy in buildings},\n  author={Y{\\\"u}ksek, {\\.I} and Karada{\\u{g}}, {\\.I}},\n  booktitle={Renewable Energy-Technologies and Applications},\n  volume={23},\n  year={2021}\n}',
    tags: ['Renewable Energy', 'Sustainability'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:eQOLeE2rZwMC' }
  },
  {
    id: 'p5',
    title: 'A machine learning-based prediction model for architectural heritage: The case of domed Sinan mosques',
    authors: [
      { name: 'OZ Guzelci' },
      { name: 'S Alacam' },
      { name: 'B Bekiroglu' },
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Digital Applications in Archaeology and Cultural Heritage 35, e00370',
    year: 2024,
    month: '',
    citations: 13,
    thumbnail: 'https://images.unsplash.com/photo-1548625361-bd80c058c49e?auto=format&fit=crop&q=80&w=300',
    abstract: 'Developing a predictive model for the structural analysis of domed Sinan mosques using machine learning algorithms.',
    bibtex: '@article{guzelci2024machine,\n  title={A machine learning-based prediction model for architectural heritage: The case of domed Sinan mosques},\n  author={G{\\\"u}zelci, OZ and Ala{\\c{c}}am, S and Bekiro{\\u{g}}lu, B and Karadag, I},\n  journal={Digital Applications in Archaeology and Cultural Heritage},\n  volume={35},\n  pages={e00370},\n  year={2024}\n}',
    tags: ['Heritage', 'Prediction', 'Mosques'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:aqlVkmm33-oC' }
  },
  {
    id: 'p6',
    title: 'Machine Learning for Pedestrian-Level Wind Comfort Analysis',
    authors: [
      { name: 'M Gur' },
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Buildings 14 (6), 1845',
    year: 2024,
    month: '',
    citations: 13,
    thumbnail: 'https://images.unsplash.com/photo-1454694220579-9d6672b1ec2a?auto=format&fit=crop&q=80&w=300',
    abstract: 'Applying ML to predict and analyze pedestrian-level wind comfort in complex urban environments.',
    bibtex: '@article{gur2024machine,\n  title={Machine Learning for Pedestrian-Level Wind Comfort Analysis},\n  author={G{\\\"u}r, M and Karadag, I},\n  journal={Buildings},\n  volume={14},\n  number={6},\n  pages={1845},\n  year={2024}\n}',
    tags: ['Wind Comfort', 'ML', 'Urban Physics'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:M3ejUd6NZC8C' }
  },
  {
    id: 'p7',
    title: 'Wind turbine integration to tall buildings',
    authors: [
      { name: 'I Karadag', isMe: true },
      { name: 'I Yuksek' }
    ],
    venue: 'Renewable Energy-Resources, Challenges and Applications',
    year: 2020,
    month: '',
    citations: 13,
    thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=300',
    abstract: 'Exploring the feasibility and design integration of wind turbines within tall building structures.',
    bibtex: '@incollection{karadag2020wind,\n  title={Wind turbine integration to tall buildings},\n  author={Karadag, I and Yuksek, I},\n  booktitle={Renewable Energy-Resources, Challenges and Applications},\n  year={2020}\n}',
    tags: ['Wind Energy', 'Tall Buildings'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:Tyk-4Ss8FVUC' }
  },
  {
    id: 'p8',
    title: 'Reciprocal style and information transfer between historical Istanbul Pervititch Maps and satellite views using machine learning',
    authors: [
      { name: 'S Alacam' },
      { name: 'I Karadag', isMe: true },
      { name: 'OZ Guzelci' }
    ],
    venue: 'Estoa 11 (21), 116-127',
    year: 2022,
    month: '',
    citations: 12,
    thumbnail: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=300',
    abstract: 'Using CycleGANs to translate between historical maps and modern satellite imagery of Istanbul.',
    bibtex: '@article{alacam2022reciprocal,\n  title={Reciprocal style and information transfer between historical Istanbul Pervititch Maps and satellite views using machine learning},\n  author={Ala{\\c{c}}am, S and Karadag, I and G{\\\"u}zelci, OZ},\n  journal={Estoa},\n  volume={11},\n  number={21},\n  pages={116--127},\n  year={2022}\n}',
    tags: ['Style Transfer', 'GIS', 'History'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:YsMSGLbcyi4C' }
  },
  {
    id: 'p9',
    title: 'Noise emission from building integrated wind turbines: A case study of a tall building',
    authors: [
      { name: 'I Karadag', isMe: true },
      { name: 'E Kurucay' }
    ],
    venue: 'Sakarya University Journal of Science 25 (2), 563-570',
    year: 2021,
    month: '',
    citations: 9,
    thumbnail: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=300',
    abstract: 'Analyzing the acoustic impact of building-integrated wind turbines on occupants and the surrounding environment.',
    bibtex: '@article{karadag2021noise,\n  title={Noise emission from building integrated wind turbines: A case study of a tall building},\n  author={Karada{\\u{g}}, {\\.I} and Kuru{\\c{c}}ay, E},\n  journal={Sakarya University Journal of Science},\n  volume={25},\n  number={2},\n  pages={563--570},\n  year={2021}\n}',
    tags: ['Acoustics', 'Wind Energy'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:UebtZRa9Y70C' }
  },
  {
    id: 'p10',
    title: 'Computational Approaches in 21st Century Architectural Design: Defining Digital Representation Methods',
    authors: [
      { name: 'E Kurucay' },
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Duzce University Journal of Science and Technology 10 (3), 1201-1217',
    year: 2022,
    month: '',
    citations: 7,
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=300',
    abstract: 'A theoretical exploration of digital representation methods and their role in contemporary architectural design practice.',
    bibtex: '@article{kurucay2022computational,\n  title={Computational Approaches in 21st Century Architectural Design: Defining Digital Representation Methods},\n  author={Kuru{\\c{c}}ay, E and Karada{\\u{g}}, {\\.I}},\n  journal={Duzce University Journal of Science and Technology},\n  volume={10},\n  number={3},\n  pages={1201--1217},\n  year={2022}\n}',
    tags: ['Computation', 'Design Theory'],
    links: { pdf: 'https://scholar.google.com/citations?view_op=view_citation&hl=tr&user=pMVv_ewAAAAJ&citation_for_view=pMVv_ewAAAAJ:u-x6o8ySG0sC' }
  },
];

export const WEB_TOOLS: Publication[] = [
  {
    id: 'p11',
    title: 'Archidynamics',
    authors: [
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Website',
    year: 2024,
    month: '',
    citations: 0,
    thumbnail: 'placeholder',
    abstract: 'Archidynamics website.',
    bibtex: '',
    tags: ['Architecture', 'Design'],
    links: { pdf: 'https://www.archidynamics.com' }
  },
  {
    id: 'p12',
    title: 'MetaMAP',
    authors: [
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Food4Rhino',
    year: 2024,
    month: '',
    citations: 0,
    thumbnail: 'placeholder',
    abstract: 'MetaMAP application on Food4Rhino.',
    bibtex: '',
    tags: ['Architecture', 'Tools'],
    links: { pdf: 'https://www.food4rhino.com/en/app/metamap' }
  },
  {
    id: 'p13',
    title: 'Eddy3D Visualizer',
    authors: [
      { name: 'I Karadag', isMe: true }
    ],
    venue: 'Web Tool',
    year: 2025,
    month: '',
    citations: 0,
    thumbnail: 'placeholder',
    abstract: 'Web-based visualizer for Eddy3D simulation results.',
    bibtex: '',
    tags: ['Web Tool', 'Visualization', 'CFD'],
    links: { pdf: 'https://eddy3d-dev.github.io/Eddy3D-Visualizer/' }
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Computational Urbanism 101',
    institution: 'University of Design',
    term: 'Fall 2023',
    description: 'An introduction to using data science and simulation in architectural and urban planning.',
    syllabus: ['Data Visualization for Cities', 'Spatial Analysis with QGIS', 'Parametric Modeling (Grasshopper)', 'Simulating Movement']
  },
  {
    id: 'c2',
    title: 'Ethics in AI Planning',
    institution: 'Institute of Technology',
    term: 'Spring 2024',
    description: 'Critically examining the role of algorithms in shaping our built environment.',
    syllabus: ['History of Planning Algorithms', 'Algorithmic Bias Case Studies', 'Fairness Frameworks', 'Democratic Tool Design']
  }
];
