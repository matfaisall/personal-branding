export interface ListContent {
  paragraphs: string[];
  testimonial: string;
  company: string;
}

export interface CardListInterface {
  id: number;
  title: string;
  shortDescription: string;
  fullContent?: ListContent;
  imageSrc: string;
  imageAlt: string;
}
