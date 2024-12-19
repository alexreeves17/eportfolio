export interface Extracurricular {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  media?: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
    caption: string;
  }[];
}