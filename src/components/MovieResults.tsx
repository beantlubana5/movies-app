import MovieLimitedInfo from "../models/MovieLimitedInfo";
import Movie from "./Movie";
import "./MovieResults.css";

interface Props {
  movies: MovieLimitedInfo[];
}

const MovieResults = ({ movies }: Props) => {
  return (
    <div className="MovieResults">
      <ul>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieResults;
