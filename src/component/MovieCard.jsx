import { Link } from "react-router-dom";
import styles from "../style/MovieCard.module.css";


function Moviecard({ movie }) {    
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            {/* Link es parte de React-Route-Dom, para hacer enlaces sin que recargue el navegador */}
            <Link to={"/movies/" + movie.id} >
            <img 
            width={230}
            height={345}
            className={styles.movieImage} src={imageUrl} alt={movie.title} />
            <div className={styles.title}> {movie.title} </div>
            </Link>
        
        </li>
    );
}
export default Moviecard;