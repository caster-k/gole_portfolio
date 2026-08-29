export interface Skill {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  videoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Certification {
  id: string;
  title: string;
  category: string;
  year: string;
  description?: string;
}

export interface NavLink {
  label: string;
  path: string;
}