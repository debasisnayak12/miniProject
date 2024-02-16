
import { useState } from "react";
import Search from "./Search";
import MovieCard from "./MovieCard";
import "./movies.css";
import "material-icons/iconfont/material-icons.css";

import {movies as moviesList} from "./data";

const MoviesApp = () => {
   const [movies, setMovies] = useState(moviesList);

   const searchMovies = (searchValue) => {
    const filterMovies = moviesList.filter((movie) => {
        return movie.Title.toLowerCase().includes(searchValue.toLowerCase())
    });
    setMovies(filterMovies);
   }

    return (
        <>
        <Search searchMovies={searchMovies} />
        <div className="movie-cards">
            {
                movies.map((movie) => <MovieCard movieInfo={movie} key={movie.imdbID}/>)
            }
        </div>
        
        </>
    )
}

export default MoviesApp;
