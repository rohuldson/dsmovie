export type Movie = {
  id: number;
  title: string;
  score: number;
  count: number;
  image: string;
};

export type MoviePager = {
  content: Movie[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  first: boolean;
  numverOfElements: number;
  empty: boolean;
};
