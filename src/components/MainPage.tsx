import { useEffect, useState } from "react";
import MovieLimitedInfo from "../models/MovieLimitedInfo";
import {
  getMovieBySearchTerm,
  getTrendingMovies,
} from "../services/MoviesService";
import Filters from "./Filters";
import "./MainPage.css";
import MovieResults from "./MovieResults";
import MovieSearch from "./MovieSearch";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [movies, setMovies] = useState<MovieLimitedInfo[]>([]);
  const [searchParams] = useSearchParams();
  const term = searchParams.get("term");

  useEffect(() => {
    if (term) {
      getMovieBySearchTerm(term).then((response) => {
        setMovies(response.results);
      });
    } else {
      getTrendingMovies().then((response) => {
        setMovies(response.results);
      });
    }
  });

  return (
    <div className="MainPage">
      <h1>Movies</h1>
      <MovieSearch />
      <Filters />
      <MovieResults movies={movies} />
    </div>
  );
};

export default MainPage;
