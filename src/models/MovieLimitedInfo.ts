export default interface MovieLimitedInfo {
  adult: boolean;
  id: number;
  title: string;
  genere_ids: number[];
  vote_average: number;
  media_type: string;
  original_language: string;
  poster_path: string;
}
