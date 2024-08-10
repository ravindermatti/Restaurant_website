import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const navigate=useNavigate()

    let clickHandler=async()=>{
      if( !password || !email){
        setError(true)
        return false
      }
    
        let result=await fetch("http://localhost:5000/login",{
                 method:'post',
                 body:JSON.stringify({email,password}),
                 headers:{
                    "Content-Type":'application/json'
                 }
        })
        result =await result.json()
        console.log(result)
        if(result.name){
            localStorage.setItem("user1",JSON.stringify(result))
            navigate("/story")
        }
        else
        alert('Please fill the correct details')
    }

  return (
    <div className='signup' >
        
        <form style={{padding:'2em'}}  onSubmit={(e)=> e.preventDefault()}>
      

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ravindermatti123@gmail.com'  value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        {error && !email && <span id="emailHelp" className="form-text" style={{color:'red',fontSize:"15px"}}>Please enter email</span>}
      </div>
    
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='M345@$hjk'  value={password}
        onChange={(e)=>setPassword(e.target.value)} />
        <div id="emailHelp" className="form-text">Password must contain special characters,digits and atleast one capital letter.</div>
        {error && !password && <span id="emailHelp" className="form-text" style={{color:'red',fontSize:"15px"}}>Please enter password</span>}
      </div>
    
      <button type="submit"  className="btn signup-btn" onClick={clickHandler}>Login!</button>
    </form>
    
        
             
    </div>
  )
}

export default Login
