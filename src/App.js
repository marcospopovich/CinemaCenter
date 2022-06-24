import style from"./style/App.module.css";
import { MovieDetails } from "./component/MovieDetails";

// React-route code
//genero un alias para BrowserRouter como Router
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { LandingPage } from "./component/LandingPage";


function App() {
  return (
    <Router>
        <header>
          <Link to="/"> <h1 className={ style.title}>Cinema Center</h1> </Link> 
       
       
        </header>
      <main>

           <Routes>
             {/* Rutas */}
             {/* variable moviesID de la barra de direciones */}
             <Route  path="/movies/:movieId" element={<MovieDetails /> } />
             <Route  path="/" element={ <LandingPage /> } />
               
          </Routes>

            
         

      </main>
    </Router>
  );
}

export default App;
