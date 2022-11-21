import {Routes, Route} from 'react-router-dom';
// import {StyledLink, Header} from './App.styled';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetais';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <>
    {/* <Header>
      <nav>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/movies'}>Movies</StyledLink>
      </nav>
    </Header> */}
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='movies/:id' element={<MovieDetails/>}>
        <Route path='cast' element={<Cast/>}/>
        <Route path='reviews' element={<Reviews/>}/>
      </Route>
      <Route path='*' element={<p>Page not found</p>}/>
      </Route>
    </Routes>
    </>
  );
};
