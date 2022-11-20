import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "api/api";

const Cast = () => {
    const {id} = useParams();
    const [cast, setCast] = useState([]);

    useEffect(()=>{
    async function getMovie() {
        const data = await getMovieCast(id);
        setCast(data);
    }
    getMovie();
    },[id]);
    const base_img_url = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
        <ul>
             {cast.map(({profile_path, name, character, cast_id}) => {
                
                return (
                    <li key={cast_id}>
                        <img src={profile_path ? `${base_img_url}${profile_path}` : 'https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'} alt={name}
                        width="240"
                        height="320"/>
                        <h3>{name}</h3>
                        <p>{character}</p>
                    </li>
                )
             })}
        </ul>
        </div>
    )
}

export default Cast;