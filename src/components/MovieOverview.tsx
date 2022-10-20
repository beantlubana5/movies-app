import MovieDetails from "../models/MovieDetails";
import "./MovieOverview.css";
const image_url: string = process.env.REACT_BASE_IMAGE_URL || "dummy";

interface Props {
  movie: MovieDetails;
}
const MovieOverview = ({ movie }: Props) => {
  return (
    <div className="MovieOverview">
      <h1> Overview </h1>
      {/*<img src=`{image_url}` alt={gif.title}></img>*/}
    </div>
  );
};

export default MovieOverview;
