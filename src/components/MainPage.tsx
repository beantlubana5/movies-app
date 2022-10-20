import { useEffect, useState } from "react";
import MovieLimitedInfo from "../models/MovieLimitedInfo";
import { getTrendingMovies } from "../services/MoviesService";
import Filters from "./Filters";
import "./MainPage.css";
import MovieResults from "./MovieResults";
import MovieSearch from "./MovieSearch";

const MainPage = () => {
  const [movies, setMovies] = useState<MovieLimitedInfo[]>([]);

  useEffect(() => {
    getTrendingMovies().then((response) => {
      setMovies(response.results);
    });
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
