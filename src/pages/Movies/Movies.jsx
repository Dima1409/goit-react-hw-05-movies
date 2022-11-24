import Form from "components/Form/Form";
import MovieList from "components/MovieList";
import { useState } from "react";

const Movies = () => {
   const [searchMovies, setSearchMovies] = useState([]);
   return (
    <>
    <Form setMovies={setSearchMovies}/>
    {searchMovies && <MovieList movies={searchMovies}/>}
    </>
   )
}

export default Movies;