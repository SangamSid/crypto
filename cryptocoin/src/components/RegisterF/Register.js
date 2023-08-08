import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber,setPhoneNumber]=useState()
    // const [error, setError] = useState(false)
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    //   setError(false)
      try {
  
        const res = await axios.post("/register", {
          name, email,phoneNumber, password
        });
        alert("submitted")
        res.data && window.location.replace("/login");
  
      } catch (err) {
        // setError(true);
        console.log(err)
      }
    }
  return (
    <div className='register'>
    <span className='registerTitle'>Register</span>
    <form className='registerForm' onSubmit={handleSubmit}>

      <label>UserName</label>
      <input type="text" placeholder='enter your username....' className='registerInput' value={name} onChange={e => setName(e.target.value)} />
      {/* {error && <p style={{ color: "red" }}>"username is already used"</p>} */}
      <label>Email</label>
      <input type="text" placeholder='enter your email' value={email} className='registerInput' onChange={e => setEmail(e.target.value)} />

      <label>PhoneNumber</label>
      <input type="number" placeholder='enter your phone number' name={phoneNumber} className='registerInput' onChange={e => setPhoneNumber(e.target.value)} />



      <label>password</label>
      <input type="password" placeholder='enter your password......' name={password} className='registerInput' onChange={e => setPassword(e.target.value)} />


      <button className='registerButton' type="submit">Register</button>
    </form>
 

  </div>

  )
}

export default Register
