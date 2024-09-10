import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   
      <>
      <div className='container mt-5'>
      <h1>Login Page</h1>
    <form>
  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className='mb-5'>
  <Link to="/login">
  <button type="submit" className="btn btn-primary mr-3">
    Login
  </button>
  </Link>
  <Link to="/register">
  {/* <button type="submit" className="btn btn-primary m-3">
    Register
  </button> */}
 <p><a class="link-opacity-100">New here?<br></br>Register</a></p>
  </Link>
  </div>
  
</form>
</div>

</>
  )
}

export default Login
