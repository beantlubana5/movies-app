import { useEffect, useState } from "react";
import MovieLimitedInfo from "../models/MovieLimitedInfo";
import {
  getMovieByDiscoverWithGenre,
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
  const [adultOnlyFilter, setAdultOnlyFilter] = useState<boolean>(false)
  const [englishFilter, setEnglishFilter] = useState<boolean>(false)
  const [starFilter, setStarFilter] = useState<boolean>(false)
  const [activeGenre, setActiveGenre] = useState<number>(0)

  useEffect(() => {
    if (activeGenre != 0) {
      getMovieByDiscoverWithGenre(activeGenre).then((response) => {
        setMovies(response.results);
      });
    } else {
      getTrendingMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [movies]);

  return (
    <div className="MainPage">
      <h1>Movies</h1>
      <MovieSearch />
      <Filters setAdultOnlyFilter={setAdultOnlyFilter} 
                setEnglishFilter={setEnglishFilter} 
                setStarFilter={setStarFilter} 
                setGenre={setActiveGenre}/>
      <MovieResults movies={movies} 
                    adultOnlyFilter={adultOnlyFilter} 
                    englishFilter={englishFilter} 
                    starFilter={starFilter}/>
    </div>
  );
};

export default MainPage;
