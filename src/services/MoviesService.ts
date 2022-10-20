import axios from "axios";
import MovieDetails from "../models/MovieDetails";
import MovieResults from "../models/MovieResults";
import MultipleMovieResponse from "../models/MultipleMovieResponse";

const key: string = process.env.REACT_APP_API_KEY || "";

export const getTrendingMovies = (): Promise<MovieResults> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/all/day", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getMovieBySearchTerm = (
  searchTerm: string
): Promise<MovieResults> => {
  return axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: { api_key: key, query: searchTerm },
    })
    .then((response) => {
      return response.data;
    });
};

export const getMovieByDiscoverWithGenre = (
  genre: number
): Promise<MovieResults> => {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: { api_key: key, with_genres: genre },
    })
    .then((response) => {
      return response.data;
    });
};

export const getMovieDetailsById = (id: string): Promise<MovieDetails> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => response.data);
};
