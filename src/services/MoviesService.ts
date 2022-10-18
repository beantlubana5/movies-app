import axios from "axios";
import MovieResults from "../models/MovieResults";

const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getTrendingMovies = (): Promise<MovieResults> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/all/day", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifsBySearchTerm = (
  searchTerm: string
): Promise<MovieResults> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: key, q: searchTerm },
    })
    .then((response) => {
      return response.data;
    });
};

export const getMovieDetailsById = (id: string): Promise<MovieResults> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => response.data);
};
