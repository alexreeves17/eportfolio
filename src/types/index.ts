export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  link: string;
  skills: string[];
  images?: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}