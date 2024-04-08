import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div>

      <h1 className='fw-bold text-center my-5'>Contact US</h1>

      <div className='card'>

        <form className="row g-3 p-5">
          
          <div className="row">
            <div className="col">
              <label for="inputName" className='form-label fw-semibold' >First Name <span className='text-danger'>*</span></label>
              <input type="text" className="form-control" placeholder="First name" aria-label="First name" required/>
            </div>
            <div className="col">
              <label for="inputName" className='form-label fw-semibold' >Last Name <span className='text-danger'>*</span></label>
              <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required/>
            </div>
          </div>

          <div className="col-md-12">
            <label for="inputEmail4" className="form-label fw-semibold">Email Address <span className='text-danger'>*</span></label>
            <input type="email" className="form-control" id="inputEmail4" placeholder='example@gmail.com' required/>
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label fw-semibold">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          

          <div className="col-12">
            <label for="inputAddress" className="form-label fw-semibold">How may we help you? <span className='text-danger'>*</span></label>
            <textarea type="text" className="form-control" id="inputAddress" placeholder="Help me understand how I can help you?" required/>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" required/>
              <label className="form-check-label fw-semibold" for="gridCheck">
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