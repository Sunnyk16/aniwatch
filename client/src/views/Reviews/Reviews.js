import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Reviews.css"
import ReviewCard from '../../components/ReviewCard/ReviewCard';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    const loadReviews = async ()=>{
     const response = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);//back end hosting link...



     setReviews(response.data.data ) ;
    }

    useEffect(()=>{
        loadReviews();
    }, [])
  return (
    <div>
      <h1>Our Review</h1>
      {
        
        reviews.map((review)=>{

            const {_id, name, e_mail, experience, suggestion } = review;

          return(
          <div className='review-cards-container'>
            <div className='review-cards'>
                <ReviewCard key={_id} name={name} e_mail={e_mail} experience={experience} suggestion={suggestion}/>
             </div>
          </div>
          )
        })
        
      }
    </div>
  )
}

export default Reviews