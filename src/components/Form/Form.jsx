import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovieByValue } from "api/api";

const Form = ({setMovies}) => {
    const [searchValue, setSearchValue] = useSearchParams();
    const value = searchValue.get('value') ?? '';
    
    useEffect(()=>{
        if(value === '') {
            return;
        }
        async function fetchMovies() {
            const movies= await searchMovieByValue(value);
            const results = movies.map(({id, title, poster_path})=> ({id, title, poster_path}));
            setMovies(results);
        }
        fetchMovies();
    },[setMovies, value])

    const submitForm = e => {
        e.preventDefault();
        const form = e.currentTarget;
        // const searchValue = form.elements.value.value;
        setSearchValue({value: form.elements.value.value});
        form.reset();
    }
    return (
        <>
        <form onSubmit={submitForm}>
            <input 
            type="text" 
            name="value"
            placeholder="enter movies name"
             />
            <button type='submit'>Search</button>
        </form>
        </>
    )
}

export default Form;