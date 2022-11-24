import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "api/api";
import { Review, ReviewTitle } from "./Reviews.styled";

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
        <Review>
            {review.length === 0 ? (
                <h3>We don't have any reviews for this movie</h3>
            ) : (
                <ul>
                    {review.map(({author, content, id})=>(
                        <li key={id}>
                            <ReviewTitle>{author}</ReviewTitle>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </Review>
    )
}

export default Reviews;