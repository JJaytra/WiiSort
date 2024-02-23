export interface GameCardInterface {
  id: number;
  name: string;
  summary: string;
  cover: number;
  image_id: string;
}

export interface GameInterface {
  id: number;
  age_ratings: [number];
  aggregated_rating_count: number;
  alternative_names: number;
  artworks: [number];
  bundles: [number];
  category: number;
  collection: number;
  collections: [number];
  cover: [];
  expanded_games: [number];
  first_release_date: number;
  franchise: number;
  franchises: [number];
  genres: [];
  involved_companies: [number];
  multiplayer_modes: [number];
  name: string;
  ports: [number];
  rating: number;
  remakes: [number];
  remasters: [number];
  screenshots: [number];
  similar_games: [number];
  storyline: string;
  summary: string;
  themes: [number];
  total_rating: number;
  url: string;
  videos: [number];
  websites: [number];
  image_id: string;
}
