import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieDetails from "../models/MovieDetails";
import { getMovieDetailsById } from "../services/MoviesService";
import Movie from "./Movie";
import "./MovieDetail.css";

const MovieDetail = () => {
  const id: string | undefined = useParams().id;
  const [movieDetail, setMovieDetail] = useState<MovieDetails | null>(null);
  const image_url: string =
  process.env.REACT_APP_BASE_IMAGE_URL || "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getMovieDetailsById(id!).then((response) => {
      setMovieDetail(response);
    });
  }, [id]);
  return (
    <div className="MovieDetails">
      <Link to={`/`}>
        <p>Back</p>
      </Link>
      {movieDetail ? <h1> {movieDetail.title} </h1> : <p>Loading</p>}
      {movieDetail ? <img src={image_url + movieDetail.poster_path} alt={movieDetail.title} /> : <p>Loading</p>}
      {movieDetail ? <p> Rating: {movieDetail.vote_average} </p> : <p>Loading</p>}
      {movieDetail ? <p> Votes: {movieDetail.vote_count} </p> : <p>Loading</p>}
      {movieDetail ? <p> {movieDetail.overview} </p> : <p>Loading</p>}
    </div>
  );
};

export default MovieDetail;
