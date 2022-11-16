import {Routes, Route, Link} from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';

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
    </Routes>
    </>
  );
};
