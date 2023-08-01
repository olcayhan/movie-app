export interface Details {
  id: number;
  backdrop_path: string | null;
  poster_path: string | null;
  title: string | null;
  release_date: string | null;
  runtime: number | null;
  genres: Genre[];
  overview: string | null;
  vote_average: number;
}

export interface Genre {
  id: number;
  name: string | null;
}
