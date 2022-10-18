import MovieLimitedInfo from "./MovieLimitedInfo";

export default interface MovieResults {
  page: number;
  results: MovieLimitedInfo[];
}
