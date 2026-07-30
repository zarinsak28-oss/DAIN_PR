export type CategoryKey =
  | 'achievements'
  | 'success-stories'
  | 'research'
  | 'community'
  | 'good-news';

export type CategoryFilter = 'All' | CategoryKey;

export interface Category {
  key: CategoryKey;
  label: string;
  bengaliLabel: string;
  emoji: string;
  description: string;
  storyCount: number;
  color: string;
  bg: string;
  accent: string;
}

export interface Story {
  id: number;
  title: string;
  bengaliTitle?: string;
  category: CategoryKey;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  department: string;
  cover: string;
  tag?: string;
  trending?: boolean;
  featured?: boolean;
  reactions: { likes: number; bookmarks: number };
}

export interface Researcher {
  id: number;
  name: string;
  role: string;
  department: string;
  avatar: string;
  publications: number;
  focus: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}
