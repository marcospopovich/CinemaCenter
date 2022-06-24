import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import styles from "../style/MovieDetails.module.css";

export function MovieDetails() {
  //useParams pertenece a React-Route-Dom
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //useEffect hace la llamad asincrona y trae la pelicula que viene con el identificador
  useEffect(() => {
    //movieId es el identificador que trae UseParams
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    // hago un condicional para solucionar que la primera vez que me cargue no traiga error
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}