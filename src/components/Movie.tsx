import { Link } from "react-router-dom";
import MovieLimitedInfo from "../models/MovieLimitedInfo";
import { postWatchlist } from "../services/RestDbService";
import "./Movie.css";

interface Props {
  movie: MovieLimitedInfo;
}

const Movie = ({ movie}: Props) => {


  const AddToWatchlist = (movie: MovieLimitedInfo) => {
    postWatchlist(movie.title, movie.id)
  }
  const RemoveFromWatchlist = (movie: MovieLimitedInfo) => {
    movie.inWatchlist = false;
  }
  

  // const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);
  const image_url: string =
    process.env.REACT_APP_BASE_IMAGE_URL || "https://image.tmdb.org/t/p/w500";

  return (
    <li className="Movie">
      <div style={{display: "flex"}}>
          <h2 style={{marginRight: "50px"}}>{movie.title}</h2>
        {!movie.inWatchlist ? <button onClick={()=> AddToWatchlist(movie)}>Add to Watchlist</button> :
          <button onClick={()=> RemoveFromWatchlist(movie)}>Remove from Watchlist</button> }
      </div>
      <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <img src={image_url + movie.poster_path} alt={movie.title} />
      </Link>
    </li>
  );
};

export default Movie;
