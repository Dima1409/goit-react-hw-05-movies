import { useState, useEffect } from 'react';
import { getMovieById } from 'api/api';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Details, Poster, Heading, Description } from './MovieDetails.styled';
import { Container } from 'components/App/App.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getById() {
      const data = await getMovieById(id);
      setMovie(data);
    }
    getById();
  }, [id]);
  const location = useLocation();
  const base_img_url = 'https://image.tmdb.org/t/p/w500';
  const {
    original_title,
    overview,
    release_date = '',
    poster_path,
    vote_average,
    genres = [],
  } = movie;

  let genresList = genres.map(elem => elem.name);
  const backLink = location.state?.from ?? '/movies';
  return (
    <Container>
      <Link to={backLink}>Back</Link>
      <Details>
        <Poster>
          <img
            src={
              poster_path
                ? `${base_img_url}${poster_path}`
                : 'https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
            }
            alt={original_title}
          />
        </Poster>
        <div>
          <Heading>
            {original_title} ({release_date.slice(0, 4)})
          </Heading>
          <Description>User Score: {Math.round((vote_average * 100) / 10)}%</Description>
          <Heading>Overview</Heading>
          <Description>{overview}</Description>
          <Heading>Genres</Heading>
          <Description>{genresList.join(' ')}</Description>
        </div>
      </Details>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
