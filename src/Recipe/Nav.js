import React from 'react'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom';
export default function Nav() {
let navigate=useNavigate()
let order=localStorage.getItem("order")
  let clickHandler=()=>{
        navigate("/reserve")
  }

  let auth=localStorage.getItem("user1")
  let reserve=localStorage.getItem("reserve")
  let logout=()=>{
    localStorage.removeItem("user1")
    alert("You have been logged out from this page")
    navigate("/signup")
  }
  return (
    <>
     <div className="navbar sticky">
        <div className="logo">
        <h4>Crispy kitchen</h4>
        </div>
        {
          auth?
          <div className="list">
        <div className="list-item"><Link to='/'>Home</Link></div>
        <div className="list-item"><Link to='/menu'>Menu</Link></div>
        <div className="list-item"><Link to='/contact'>Contact</Link></div>
        <div className="list-item"><Link to='/story'>Story</Link></div>
        {/* <div className="list-item"><Link to='/signup'>Signup</Link></div>
        <div className="list-item"><Link to='/login'>Login</Link></div>
 */}        
        <div className="list-item"><Link to='/updates'>Updates</Link></div>
        <div className="list-item"><Link to='/signup' onClick={logout}>Logout <span style={{color:'red',textTransform:'capitalize'}}>({JSON.parse(auth).name})</span></Link></div>
        {
         order ? 
         <div className="list-item"><button className='navBtn' onClick={clickHandler}>Table Booked</button></div>
       :
       <div className="list-item"><button className='navBtn' onClick={clickHandler}>Book Table</button></div>
        }
       
        </div>
          :
          <div className="list">
        <div className="list-item"><Link to='/'>Home</Link></div>
        <div className="list-item"><Link to='/menu'>Menu</Link></div>
        <div className="list-item"><Link to='/contact'>Contact</Link></div>
        <div className="list-item"><Link to='/signup'>Signup</Link></div>
        <div className="list-item"><Link to='/login'>Login</Link></div>
        {
         order ? 
         <div className="list-item"><button className='navBtn' onClick={clickHandler}>Table Booked</button></div>
       :
       <div className="list-item"><button className='navBtn' onClick={clickHandler}>Book Table</button></div>
        }
        </div>
        }

        

       
    </div>
       
    
    </>
  )
}
