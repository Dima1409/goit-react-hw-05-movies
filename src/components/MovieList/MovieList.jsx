import {Link} from "react-router-dom";

const MovieList = ({movies}) => {

    return (
        <div>
            <ul>
            {movies.map(({id, title, poster_path})=> {
                const base_img_url = 'https://image.tmdb.org/t/p/w500';
                return (
                    
                        <li key={id}>
                        <Link to={`/movies/${id}`}>
                            <h2>{title}</h2>
                            <img
                src={poster_path ?
                    `${base_img_url}${poster_path}`: 
                    'https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
                alt={title}
                width="300"
                height="200"
            />
                        </Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
} 

export default MovieList;