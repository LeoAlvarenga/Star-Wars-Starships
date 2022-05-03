export interface SWAPIStarship {
  name: string;
  MGLT: string;
  consumables: string;
}

export interface SWAPIStarshipsResponse {
  next: string | null;
  previous: string | null;
  results: SWAPIStarship[];
}
