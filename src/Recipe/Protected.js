import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

function Protected() {
  return (
    <div>
       let auth=localStorage.getItem("user1")
  return auth?<Outlet/>:<Navigate to="/signup"></Navigate>
    </div>
  )
}

export default Protected
