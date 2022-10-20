import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../models/MovieDetails";
import { getMovieDetailsById } from "../services/MoviesService";
import Movie from "./Movie";
import "./MovieDetail.css";
const image_url: string =
  process.env.REACT_APP_BASE_IMAGE_URL || "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const id: string | undefined = useParams().id;
  const [movieDetail, setMovieDetail] = useState<MovieDetails | null>(null);

  useEffect(() => {
    getMovieDetailsById(id!).then((response) => {
      setMovieDetail(response);
    });
  }, [id]);

  const buildImageUrl = (image: string) => {
    console.log(image_url + image);
    return image_url + image;
  };

  return (
    <div className="MovieDetails">
      {movieDetail ? (
        <div>
          <h1>{movieDetail.title}</h1>
          <p>{movieDetail.budget}</p>
          <p>{movieDetail.overview}</p>
          <img
            src={buildImageUrl(movieDetail.poster_path)}
            alt={movieDetail.title}
          />
        </div>
      ) : (
        <p>No Luck!!</p>
      )}
    </div>
  );
};

export default MovieDetail;
