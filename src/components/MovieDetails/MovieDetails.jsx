import { useState, useEffect } from "react";
import { getMovieById } from "api/api";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";


const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
       async function getById() {
        const data = await getMovieById(id);
        setMovie(data);
       }
    getById();
    }, [id]);
    const location = useLocation();
    console.log(location)
    const base_img_url = 'https://image.tmdb.org/t/p/w500';
    const {
        original_title,
        overview,
        release_date='',
        poster_path,
        vote_average, 
        genres=[],
    } = movie;

    let genresList = genres.map((elem)=>elem.name);
    const backLink = location.state?.from?? '/';
    return (
        <>
        <Link to={backLink}>Back</Link>
        <div><img
                src={poster_path ?
                    `${base_img_url}${poster_path}`: 
                    'https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
                alt={original_title}
                width="300"
                height="200"
            /></div>
        <h3>{original_title} ({release_date.slice(0,4)})</h3>
        <p>User Score: {Math.round(vote_average * 100 / 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresList.join(' ')}</p>

        <div>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            
            
        </div>
        <Outlet/>
        </>
        
    )
}

export default MovieDetails;