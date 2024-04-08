import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='bg-dark py-5'>

      <h1 className='fw-bold text-center py-4 fs-10 text-white heading'>Contact US</h1>

      <div className='card bg-secondary'>

        <form className="row g-3 p-5">
          
          <div className="row">
            <div className="col">
              <label for="inputName" className='form-label fw-semibold fs-4 text-white' >First Name <span className='text-danger'>*</span></label>
              <input type="text" className="form-control" placeholder="First name" aria-label="First name" required/>
            </div>
            <div className="col">
              <label for="inputName" className='form-label fw-semibold fs-4 text-white' >Last Name <span className='text-danger'>*</span></label>
              <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required/>
            </div>
          </div>

          <div className="col-md-12">
            <label for="inputEmail4" className="form-label fw-semibold fs-4 text-white">Email Address <span className='text-danger'>*</span></label>
            <input type="email" className="form-control" id="inputEmail4" placeholder='example@gmail.com' required/>
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label fw-semibold fs-4 text-white">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          

          <div className="col-12">
            <label for="inputAddress" className="form-label fw-semibold fs-4 text-white">How May We Help You? <span className='text-danger'>*</span></label>
            <textarea type="text" className="form-control" id="inputAddress" placeholder="Help me understand how I can help you?" required/>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" required/>
              <label className="form-check-label fw-semibold fs-5 text-white" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" className="btn btn-primary w-50 fs-5 d-block mx-auto">Send Message</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Contact