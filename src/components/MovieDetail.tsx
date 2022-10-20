import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../models/MovieDetails";
import { getMovieDetailsById } from "../services/MoviesService";
import Movie from "./Movie";
import "./MovieDetail.css";

const MovieDetail = () => {
  const id: string | undefined = useParams().id;
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    getMovieDetailsById(id!).then((response) => {
      setMovieDetails(response);
    });
  }, [id]);
  return (
    <div className="MovieDetails">
      {movieDetails ? <div> {movieDetails.budget} </div> : <p>Loading</p>}
    </div>
  );
};

export default MovieDetail;
