import { MoviesGrid } from "../component/MoviesGrid";
import { Search } from "../component/Search";

export function LandingPage(){
    return <div>
        <Search />
        <MoviesGrid />
        </div>;
}