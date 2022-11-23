import {Routes, Route, Navigate} from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const Home = lazy(()=> import('pages/Home'));
const Movies = lazy(()=> import('pages/Movies'));
const MovieDetails = lazy(()=> import('components/MovieDetails/MovieDetails'));
// const Cast = lazy(()=> import('components/Cast/Cast'));
// const Reviews = lazy(()=> import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='movies/:id' element={<MovieDetails/>}>
        <Route path='cast' element={<Cast/>}/>
        <Route path='reviews' element={<Reviews/>}/>
      </Route>
      <Route path='*' element={<Navigate to='/' replace/>}/>
      </Route>
    </Routes>
    </>
  );
};
