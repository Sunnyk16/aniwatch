// import {React ,useState} from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'
// import {useNavigate} from "react-router-dom"
// import './SignUp.css'


// function Signup() {
//     const [name ,setName]=useState()
//     const [email ,setEmail]=useState()
//     const [password ,setPassword]=useState()
//     const navigate = useNavigate()

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         axios.post('http://localhost:5000/register',{name,email,password})
//         .then(result =>{console.log(result)
//             navigate('/login')
        
//         })
//         .catch(err=>console.log(err))
//     }

//   return (
//     <div className='signup-container'>
//         <div className='signup-form-container ' >
//             <h2 className='heading'>Register</h2><br></br>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-3'>
//                      {/* <label htmlFor='email'>
//                         <strong>Name</strong>
//                     </label> */}
//                     <br></br> 
//                     <input
//                     type='text'
//                     placeholder='Enter Name'
//                     autoComplete='off'
//                     name='name'
//                     className=' input '
//                     onChange={(e)=>setName(e.target.value)}                   
//                     />
//                 </div>


//                 <div className='mb-3'>
//                     {/* <label htmlFor='email'>
//                         <strong>Email</strong>
//                     </label> */}
//                     <br></br>
//                     <input
//                     type='email'
//                     placeholder='Enter Email'
//                     autoComplete='off'
//                     name='email'
//                     className='input' 
//                     onChange={(e)=>setEmail(e.target.value)}                  
//                     />
//                 </div>

//                 <div className='mb-3'>
//                     {/* <label htmlFor='email'>
//                         <strong>Password</strong>
//                     </label> */}
//                     <br></br>
//                     <input
//                     type='password'
//                     placeholder='Enter Password'
//                     name='password'
//                     className='input'  
//                     onChange={(e)=>setPassword(e.target.value)}                 
//                     />
//                 </div><br></br>

//                 <button type='submit' className='btn btn-success w-100 rounded-1 p-2'>
//                     Register
//                 </button>
//                 </form>

//                 <p className='text'>Already have an Account?</p>

//                 <Link to='/login' className='btn  btn-default border w-100 bg-light rounded-1 p-2 text-decoration-none'>
//                     Login                  
//                 </Link>


            
//         </div>
//     </div>
//   )
// }

// export default Signup




import React from 'react'

function Signup() {
  return (
    
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
        <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>

      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr class="my-4"/>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>

  )
}

export default Signup