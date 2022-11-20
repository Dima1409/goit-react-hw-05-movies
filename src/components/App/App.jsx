import {Routes, Route, Link} from 'react-router-dom';
import { Home } from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetais';
import Cast from 'components/Cast/Cast';

export const App = () => {
  return (
    <>
    <header>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movies' element={<Movies/>}></Route>
      <Route path='movies/:id' element={<MovieDetails/>}>
        <Route path='cast' element={<Cast/>}/>
      </Route>
      <Route path='*'>{<>Page not found</>}</Route>
    </Routes>
    </>
  );
};
