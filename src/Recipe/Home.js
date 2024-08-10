import React, { useEffect } from 'react'
 import Aos from 'aos'
 import 'aos/dist/aos.css'
 import Menu from './Menu'
import Contact from './Contact'

import backVedio from './vedio/vedio.mp4'
/* import Updates from './Updates' */
export default function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div>
<div className="vedio">
        <video width="100%" height="500px" autoPlay loop muted playsInline className='v1'>
  <source src={backVedio} type="video/mp4" width="100%"/>

</video>
<div className="c1" style={{color:'white',backgroundImage: 'linearGradient(to top,rgb(0,0,0,1),rgb(0,0,0,.4),rgb(0,0,0,.3))'}}>
<h1>Delicious Steaks</h1>
<p><b>4.4/5</b></p>
<p><small>from 2,345+ customer Reviews</small></p>
</div>

        </div>
    

<h1 className="p1" data-aos="fade-right">Special Menus</h1>
<div className="container" data-aos="fade-up">
  <div className="row">
    {/* first column */}
    <div className="col-sm-12 col-md-6 col-lg-4">
    <div className="card">
    <img src="https://images.unsplash.com/photo-1669277038743-066083326c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Morning Fresh</h5>
      <p className="card-text"> <b>4.2/5</b></p>
<p className="p1"><b>just in 2.5$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    </div>
    {/* second column */}
    <div className="col-sm-12 col-md-6 col-lg-4">
    <div className="card ">
    <img src="https://images.unsplash.com/photo-1651707515427-eda0666ce222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Lunch special</h5>
      <p className="card-text"> <b>4.8/5</b></p>
<p className="p1"><b>just in 4.5$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 31 mins ago</small></p>
    </div>
  </div>

    </div>
    {/* third column */}
    <div className="col-sm-12 col-md-6 col-lg-4">
    <div className="card">
    <img src="https://images.unsplash.com/photo-1639280150666-4f01f0e02f7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">dinner delight</h5>
      <p className="card-text"> <b>4.6/5</b></p>
<p className="p1"><b>just in 6.1$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 28 mins ago</small></p>
    </div>
  </div>
    </div>
  </div>
</div>

  


 <Menu></Menu>
{/*  <Story></Story>
 <Updates></Updates> */}
 <Contact></Contact>
 

</div>
    )
}
