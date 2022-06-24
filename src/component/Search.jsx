import style from "../style/Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





export function Search() {

    const [searchText, setsearchText] = useState("");
    const navigate = useNavigate(); // useHistory es un hook de React-route permite cambiar la ruta de navegacion 
    //busqueda
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/?search=" + searchText );



    }
    return (
        <form className={style.searchContainer} onSubmit={ handleSubmit } >
            <div className={style.searchBox}>
                {/* capturando el evento del input */}
                <input className={style.searchInput}
                    type="text"
                    value={ searchText }
                    onChange={(e)=> setsearchText(e.target.value)}
                    placeholder="Search for a movie.. "
                    /> 

                <button className={style.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>
               
            </div>
           
          
           
            
           
        </form>
        
    )
}
