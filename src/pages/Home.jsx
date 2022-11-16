// import { NavLink } from "react-router-dom";
import { getMovieTrendDay } from "api/api";
import { useEffect, useState } from "react";
import MovieList from "components/MovieList/MovieList";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        getMovieTrendDay().then(data=>{
            console.log(data)
            setMovies(data.results);
        })
    },[]);

    return (
        <>
        <MovieList movies={movies}></MovieList>
        </>
        
    )
}

