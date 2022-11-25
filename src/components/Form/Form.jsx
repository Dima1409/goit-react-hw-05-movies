import { Container } from "components/App/App.styled";
import { SearchForm, InputForm, BtnSubmit } from "./Form.styled";
import { useState, useRef } from 'react';


const Form = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const btn = useRef();
  console.log(btn)

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
        btn.current.disabled = true;
      return
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    btn.current.disabled = true;
  };

  return (
    <Container>
    <SearchForm onSubmit={handleSubmit}>
        <InputForm 
        type="text" 
        name="value"
        value={searchQuery}
        onChange={handleChange}
        placeholder="enter movies name"
         />
        <BtnSubmit type='submit' ref={btn}>Search</BtnSubmit>
    </SearchForm>
    </Container>
  )
};

export default Form;