import { MoviesGrid } from "../component/MoviesGrid";
import { Search } from "../component/Search";
import  StarRating  from "../component/StarRating"


function log(value) {
console.log(value);
}


export function LandingPage(){
    return <div>
        <Search />
        <StarRating onChange={log}/>
        <MoviesGrid />
        
        </div>;
}