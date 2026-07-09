export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}
