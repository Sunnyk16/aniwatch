import React, { useEffect, useState } from 'react'
import "./Feedback.css";
import imgStar from "./blank-star.png";
import yellowImg from "./yellow-star.png";

function Feedback() {
    const [img, setImg] = useState('');
  
    const changeImg = ()=>{
        setImg({yellowImg});
    };
  
    useEffect(()=>{
      changeImg();
    },[img]);

  return (
       <div className='feedback-container'>
      <h1 className='header'>Share Your Feedback</h1>
     
      <form className='feedback-form'>

           <div className='customer-info'>
            
            <div className='customer-name-info'>
             <label for = "inputFullName" className='customer-name'>Customer Name</label> <br/>
             <input type='text' id='inputFullName' required className='customer-name-input'/>
            </div>

           <div className='customer-email-info'>
             <label for = "inputEMail" className='customer-email'>E-mail Address</label> <br/>
              <input type='email' id='inputEmail' required className='customer-email-input'/>
           </div>
        </div>
        

            
        
        {/* <p className='service'>Please rate the quality of the servive you received from your host</p> */}
        {/* <div className='service-rating'>
          <input type='checkbox' id='exellent'/>
          <label for="exellent">Exellent</label> &nbsp;
          <input type='checkbox' id='good'/>
          <label for="good">Good</label> &nbsp;
          <input type='checkbox' id='fair'/>
          <label for="fair">Fair</label> &nbsp;
          <input type='checkbox' id='bad'/>
          <label for="bad">Bad</label> &nbsp;
        </div> */}

       <p className='experinece'>Please rate your overall doing experience </p>
           
         <div className='experience-rating'>
          <input type='checkbox' id='exellent'/>
          <label for="exellent">Exellent</label> &nbsp;
          <input type='checkbox' id='good'/>
          <label for="good">Good</label> &nbsp;
          <input type='checkbox' id='fair'/>
          <label for="fair">Fair</label> &nbsp;
          <input type='checkbox' id='bad'/>
          <label for="bad">Bad</label> &nbsp;
         </div>

           <h1 className='rating'>Rate Us</h1>
            <div className='start-img-container'>
              <img src= {imgStar} alt='star' className='img-star'
                onClick= {changeImg}
              />
              <img src= {imgStar} alt='star' className='img-star'/>
              <img src= {imgStar} alt='star' className='img-star'/>
              <img src= {imgStar} alt='star' className='img-star'/>
              <img src= {imgStar} alt='star' className='img-star'/>
            </div>


          <h2 className='tittle'>Do you have any suggestion to improve our website</h2> 
          <input type='text' placeholder='write your suggestion' className='suggestion-input'/> 

          <button type='botton' className='Feedback-btn'>Send</button>   
      </form>
    </div>
    
  )
}

export default Feedback
