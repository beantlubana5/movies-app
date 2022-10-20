import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../models/MovieDetails";
import { getMovieDetailsById } from "../services/MoviesService";
import Movie from "./Movie";
import "./MovieDetail.css";

const MovieDetail = () => {
  const id: string | undefined = useParams().id;
  const [movieDetail, setMovieDetail] = useState<MovieDetails | null>(null);

  useEffect(() => {
    getMovieDetailsById(id!).then((response) => {
      setMovieDetail(response);
    });
  }, [id]);

  return (
    <div className="MovieDetails">
      {movieDetail ? (
        <div>
          <h1>{movieDetail.title}</h1>
          <p>{movieDetail.budget}</p>
          <p>{movieDetail.overview}</p>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default MovieDetail;
