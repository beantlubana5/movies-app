import axios from "axios";
import MovieDetails from "../models/MovieDetails";
import MovieResults from "../models/MovieResults";
import MultipleMovieResponse from "../models/MultipleMovieResponse";

const key: string = process.env.REACT_APP_REST_KEY || "";
const restUrl = "Content-Type:application/json";


export const postWatchlist = (title: string, id: number): Promise<MovieResults> => {

    const config = {
        headers:{
            "x-apikey": key,
            "Content-Type": "application/json"
        }
      };

  return axios
    .post("https://moviewatchlist-2e76.restdb.io/rest/watchlist", {"title":title, "movie_id":id},
      config
    )
    .then((response) => {
      return response.data;
    });
};
