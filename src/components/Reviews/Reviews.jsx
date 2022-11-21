import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "api/api";

const Reviews = () => {
    const {id} = useParams();
    const [review, setReview] = useState([]);

    useEffect(()=>{
        async function getReviews() {
            const data = await getMovieReviews(id);
            setReview(data);
        }
        getReviews();
    },[id])

    return (
        <div>
            {review.length === 0 ? (
                <h3>We don't have any reviews for this movie</h3>
            ) : (
                <ul>
                    {review.map(({author, content, id})=>(
                        <li key={id}>
                            <h2>{author}</h2>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Reviews;