
export interface ResearchTheme {
  id: string;
  title: string;
  summary: string;
  methods: string;
  keywords: string[];
}

export interface Author {
  name: string;
  isMe?: boolean;
  isCollaborator?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  month: string;
  citations: number;
  thumbnail: string;
  abstract: string;
  bibtex: string;
  tags: string[];
  links: {
    pdf?: string;
    code?: string;
    project?: string;
    abs?: string;
    bib?: string;
  };
}

export interface Project {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  accentColor: string;
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  term: string;
  description: string;
  syllabus: string[];
}

export type SortOption = 'newest' | 'cited' | 'match';
