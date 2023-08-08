import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {Context} from "../Context/context"


const Navbar = () => {
  const {user,dispatch}= useContext(Context);

const handleLogOut=()=>{
  dispatch({type:"LOGOUT"})

}

  return (
    <div className='top'>
      
{
user?(
  <ul className='topList'>
  <li onClick={handleLogOut} className='topItem'>
  <Link className='link' to="/logout">{user && "Logout"}</Link>
  </li>
  </ul>
):(
  <ul className='topList'>
  <li className='topItem'>
  <Link className='link' to="/login"style={{marginRight:"20px"}}>Login</Link>
  </li>
 <li className='topItem'>
<Link className='link' to="/register">Register</Link>
</li>
</ul>
)
}


   
    {/* <Link className='link' to="/login"style={{marginRight:"20px"}}>Login</Link>
    </li>
   <li>
  <Link className='link' to="/register">Register</Link>
  </li> */}


    </div>
  )
}

export default Navbar
