import MovieLimitedInfo from "../models/MovieLimitedInfo";
import Movie from "./Movie";
import "./MovieResults.css";

interface Props {
  movies: MovieLimitedInfo[];
  adultOnlyFilter: boolean;
  englishFilter: boolean;
  starFilter: boolean;
}

const MovieResults = ({ movies, adultOnlyFilter, englishFilter, starFilter }: Props) => {
  return (
    <div className="MovieResults">
      <ul>
        {(movies.filter(movie => { return (
              (!adultOnlyFilter || movie.adult) &&
              (!englishFilter || movie.original_language=="en") &&
              (!starFilter || movie.vote_average >= 8))}))
            .map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieResults;
