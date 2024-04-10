import React, { useState } from 'react'
import axios from 'axios'
import "./Contact.css"
import Navbar from '../../components/Navabar/Navbar'
import Footer from '../../components/Footer/Footer'
import toast from 'react-hot-toast'


function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const addContact = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL2}/contacts`, 
    // const response = await axios.post(`http://localhost:5000/contacts`, 

    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      message: message
    })
    
    if (response.data.success === false) {
      toast.error(response.data.message);
    }else{
      toast.success("Message sent successfully");
      setFirstName('')
      setLastName('')
      setEmail('')
      setAddress('')
      setMessage('')
    }
    
  }

  return (
    <>

      <Navbar/>

      <div className='bg-secondary py-5'>

        <h1 className='fw-bold text-center py-4 text-white heading-1'>Contact US</h1>

        <div className='card bg-dark'>

          <form className="row g-3 p-5">

            <div className="row">
              <div className="col">
                <label for="inputName" className='form-label fs-4 text-white' >First Name <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" placeholder="First name" aria-label="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }} required 
                />
              </div>

              <div className="col">
                <label for="inputName" className='form-label fs-4 text-white' >Last Name <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }} required
                />
              </div>
            </div>

            <div className="col-md-12">
              <label for="inputEmail4" className="form-label fs-4 text-white">Email Address <span className='text-danger'>*</span></label>
              <input type="email" className="form-control" id="inputEmail4" placeholder='example@gmail.com'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }} required
              />
            </div>

            <div className="col-12">
              <label for="inputAddress" className="form-label fs-4 text-white">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" 
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
            </div>


            <div className="col-12">
              <label for="inputAddress" className="form-label fs-4 text-white">How May We Help You? <span className='text-danger'>*</span></label>
              <textarea type="text" className="form-control" id="inputAddress" placeholder="Help me understand how I can help you?"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }} required
              />
            </div>

            {/* <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" required />
                <label className="form-check-label fs-5 text-white" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div> */}
            <div class="col-12">
              <button type="button" className="btn btn-primary w-50 fs-5 d-block mx-auto" onClick={addContact}>Send Message</button>
            </div>
          </form>

        </div>
      </div>

      <Footer/>
      
    </>
    
  )
}

export default Contact