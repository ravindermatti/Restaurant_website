import React, { useEffect } from "react";
import "./Menu.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Menu() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div>
      <br />
      <div className="hero1">
        <div className="text1" data-aos="fade-up">
          <h1>Our Menu</h1>
          <p>
            <b>Perfect for all breakfast,lunch and dinner</b>
          </p>
        </div>
      </div>

      <h3 className="p1 m-5" data-aos="fade-right">
        <b>Breakfast Menu</b>
      </h3>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-4 col-md-6">
            {/* first column */}
            <div className="card " data-aos="fade-up">
              <img
                src="https://plus.unsplash.com/premium_photo-1669727915223-46c13b2f4232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">Nuts Biscuits</h5>
                <p className="card-text">
                  {" "}
                  <b>4.2/5</b>
                </p>
                <p className="p1">
                  <b>just in 6.7$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 4 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          {/* second column */}
          <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1560788843-f1af8e869d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">Fruit Salad</h5>
                <p className="card-text">
                  {" "}
                  <b>4.4/5</b>
                </p>
                <p className="p1">
                  <b>just in 1.5$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 8 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          {/* 3rd column */}
          <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1656936631969-9e7cdbae5ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">lemon drink</h5>
                <p className="card-text">
                  {" "}
                  <b>4.9/5</b>
                </p>
                <p className="p1">
                  <b>just in 1.2$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 12 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second row */}
      <h3 className="p1 m-5" data-aos="fade-right">
        <b>Lunch Menu</b>
      </h3>
      <div className="container">
        <div className="row">
          {/* first column */}
          <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">Pizza</h5>
                <p className="card-text">
                  {" "}
                  <b>4.2/5</b>
                </p>
                <p className="p1">
                  <b>just in 6.7$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 4 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
            <div className="card ">
              <img
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">French Fries</h5>
                <p className="card-text">
                  {" "}
                  <b>4.4/5</b>
                </p>
                <p className="p1">
                  <b>just in 1.5$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 8 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          {/* third column */}
          <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1496662559123-ac291228fb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">Brown Rice</h5>
                <p className="card-text">
                  {" "}
                  <b>4.9/5</b>
                </p>
                <p className="p1">
                  <b>just in 1.2$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 12 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="p1 m-5" data-aos="fade-right">
        <b>Dinner Menu</b>
      </h3>
      {/* third row */}
      <div className="container">
        <div className="row">
          {/* first column */}
          <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">Punjabi Cuisine</h5>
                <p className="card-text">
                  {" "}
                  <b>4.2/5</b>
                </p>
                <p className="p1">
                  <b>just in 6.7$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 4 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1664472757995-3260cd26e477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">cheesy sandwich</h5>
                <p className="card-text">
                  {" "}
                  <b>4.4/5</b>
                </p>
                <p className="p1">
                  <b>just in 1.5$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 8 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          {/* thirs column */}
          <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title p1">Veg burger</h5>
                <p className="card-text">
                  {" "}
                  <b>4.9/5</b>
                </p>
                <p className="p1">
                  <b>just in 1.2$</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 12 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="p1 m-5" data-aos="fade-right">
        <b>Special For You!</b>
      </h3>
      <div className="card mb-3" data-aos="fade-up">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="img-fluid rounded-start"
              alt="..."
              height="250px"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="p1 mt-5">
                <b>Free Of Cost!</b>
              </h3>
              <p className="card-text mt-4">
                As a dessert we will offer you ice creams of flavours which id
                absolutely free for our all customers.
              </p>
              <p className="mt-5">
                <b>Thank You for visiting us!</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
