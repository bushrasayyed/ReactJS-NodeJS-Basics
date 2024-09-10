import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import empService from '../services/emp.service';

const Register = () => {
const [name,setName]=useState("");
const [age,setAge]=useState(0);

 const addEmp=(e)=>
 {
  e.preventDefault();
  let emp={name:name,age:age};
  empService.addEmp(emp);
  alert("Registered Successfully!!!")
 }
  // const handleChange=(e)=>
  // {
  //   const {name,age}=e.target
  //   setName(name);
  //   setAge(age);
  // }
  return (
    <>
      <div className='container mt-5'>
        <h1>Registration Page</h1>
    <form>
    <div className="mb-3 mt-5">
    <label  className="form-label">
     Name
    </label>
    <input
      type="text"
      name="NAME "
      id="exampleInput1"
      onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className="mb-3 mt-5">
    <label  className="form-label"> Age</label>
    <input type="number" name="age "
    onChange={(e)=>setAge(e.target.value)}
/>

  </div>
  <div className='mb-5'>
  <Link to="/register">
  <button type="submit" className="btn btn-primary m-3" onClick={addEmp}>
    Register
  </button>
  </Link>
  <Link to="/login">
  <p><a class="link-opacity-100">Login</a></p>
  </Link>
  </div>
  
</form>
</div>
</>
  )
}

export default Register
