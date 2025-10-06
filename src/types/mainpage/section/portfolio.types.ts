export interface PortfolioItem {
  id: string;
  title: string;
  category: 'UI/UX' | 'FRONTEND' | 'FULLSTACK' | 'DESIGN';
  image: string;
  description?: string;
  technologies?: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface PortfolioSection {
  title: string;
  description: string;
  items: PortfolioItem[];
}

export interface ViewMoreItem {
  id: string;
  isViewMore: true;
}

export type AllPortfolioItems = PortfolioItem | ViewMoreItem;
