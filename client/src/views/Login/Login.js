import {React ,useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'


function Login() {
    const [email ,setEmail]=useState()
    const [password ,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/login',{email,password})
        .then(result =>{
          toast.success(result.data)
          if(result.data === "Success") {
            navigate('/home')

          }
        
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='signup-container'>
        <div className='signup-form-container ' >
            <h2 className='heading'>Login</h2>
            <form onSubmit={handleSubmit}>


                <div className='mb-3'>
                    {/* <label htmlFor='email'>
                        <strong>Email</strong>
                    </label> */}<br></br>
                    <input
                    type='email'
                    placeholder='Enter Email'
                    autoComplete='off'
                    name='email'
                    className='input ' 
                    onChange={(e)=>setEmail(e.target.value)}                  
                    />
                </div>

                <div className='mb-3'>
                    {/* <label htmlFor='email'>
                        <strong>Password</strong>
                    </label> */}<br></br>
                    <input
                    type='password'
                    placeholder='Enter Password'
                    name='password'
                    className='input '  
                    onChange={(e)=>setPassword(e.target.value)}                 
                    />
                </div><br></br>

                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Login
                </button>
                </form>

                <p className='text'>Already have an Account?</p>

                <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Register                 
                </Link>


            
        </div>
    </div>
  )
}

export default Login