import { Link } from "react-router-dom";
import MovieLimitedInfo from "../models/MovieLimitedInfo";
import "./Movie.css";

interface Props {
  movie: MovieLimitedInfo;
}

const Movie = ({ movie }: Props) => {
  // const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);
  const image_url: string =
    process.env.REACT_APP_BASE_IMAGE_URL || "https://image.tmdb.org/t/p/w500";

  return (
    <li className="Movie">
      <h2>{movie.title}</h2>
      <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <img src={image_url + movie.poster_path} alt={movie.title} />
      </Link>
      {/* <a href={movie.}>Link to original</a>
        {isFav(gif.id) ? (
          <button onClick={() => removeFavorite(gif.id)}>Remove Favorite</button>
        ) : (
          <button onClick={() => addFavorite(gif)}>Add Favorite</button>
        )} */}
    </li>
  );
};

export default Movie;
