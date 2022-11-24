import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovieByValue } from "api/api";
import { Container } from "components/App/App.styled";
import { SearchForm, InputForm, BtnSubmit } from "./Form.styled";

const Form = ({setMovies}) => {
    const [searchValue, setSearchValue] = useSearchParams();
    const value = searchValue.get('value') ?? '';
    
    useEffect(()=>{
        if(value === '') {
            alert('Please enter a value');
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
        setSearchValue({value: form.elements.value.value});
        form.reset();
    }
    return (
        <Container>
        <SearchForm onSubmit={submitForm}>
            <InputForm 
            type="text" 
            name="value"
            placeholder="enter movies name"
             />
            <BtnSubmit type='submit'>Search</BtnSubmit>
        </SearchForm>
        </Container>
    )
}

export default Form;