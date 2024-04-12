import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Reviews.css"
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import Navabar from "../../components/Navabar/Navbar";
import Footer from "../../components/Footer/Footer";

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
    <div className='megha'>
      <Navabar/>
      <div className='review-page'>
      <h1 className='header'>Our Review</h1>
      <div className='review-cards-container'>
      
      {
        
        reviews.map((review)=>{

            const {_id, name, e_mail, experience, suggestion } = review;

          return(
          
                <ReviewCard key={_id} name={name} e_mail={e_mail} experience={experience} suggestion={suggestion}/>

          )
        })
        
      }
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Reviews