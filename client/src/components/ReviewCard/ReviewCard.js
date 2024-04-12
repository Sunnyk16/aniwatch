import React from 'react'
import "./ReviewCard.css";


function ReviewCard({_id, name, e_mail, experience, suggestion}) {
  return (
    <div className='review-card-container' >
      <div className='review-card'>
        <h2>{name}</h2>
        <h3>{e_mail}</h3>
        <span className='abc'>{experience}</span>
        <p>{suggestion}</p>
      </div>

    </div>
            
    
  )
}

export default ReviewCard