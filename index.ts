export interface Documentary {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: number; // in minutes
  genre: string[];
  releaseYear: number;
  rating: number;
  views: number;
  director: string;
  streamUrl: string;
}

export interface Genre {
  id: string;
  name: string;
  description: string;
}