type Category = 'all' | 'frontend' | 'backend' | 'uiux';

export interface Works {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
  tags: string[];
}
