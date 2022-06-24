import Moviecard from './MovieCard';
import React from 'react';
import styles from "../style/MoviesGrid.module.css";
import { useEffect , useState } from 'react';
import { get } from '../services/httpClient';
import { useLocation } from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


export function MoviesGrid() { 
 
       const [movies ,setMovies] = useState([]);

       const query = useQuery();
       const search = query.get("search"); //el search tiene limpia la busqueda
     
       
     
 
      // traigo datos de la Api y actualizo es useState
        useEffect(() => {
          const searchUrl = search 
          ? "/search/movie?query=" + search 
          : "/discover/movie?sort_by=popularity.desc"
          

        get(searchUrl).then((data) => {
          setMovies(data.results);
        });
        //"/discover/movie?sort_by=popularity.desc"
        
      }, [search]); //si cambia Search se ejecuta de nuevo useEffect

        return (
          <ul className={styles.moviesGrid}>
              {movies.map((movie) => (
                  <Moviecard key={ movie.id } movie={movie} />   
              
              ))}
          </ul>
        );
}
 