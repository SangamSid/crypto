import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import { useRef } from 'react';
import "./login.css"
import { Context } from '../Context/context';


const Login = () => {

  const {user,dispatch,isFetching}=useContext(Context);
  console.log("my dispatch",dispatch)

    const emailRef= useRef();
    const passwordRef= useRef();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        // dispatch({type:"LOGIN_START"});
        try{
    const res= await axios.post("/login",{
      email:emailRef.current.value,
      password:passwordRef.current.value,
    })
    dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }
        catch(err){
          dispatch({type:"LOGIN_FAILURE"});
          alert("login failed");
          emailRef.current.value=null;
          passwordRef.current.value=null;
        
        }
      }

  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm' onSubmit={handleSubmit}>
<label>email</label>
<input type="email" placeholder='enter your username' className='loginInput' ref={emailRef}/>

<label>password</label>
<input type="password" placeholder='enter your password......' className='loginInput' ref={passwordRef} />


<button className='loginButton' type="submit" >Login</button>
        </form>

      
    </div>
  )
}

export default Login
