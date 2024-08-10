import React from "react";
import "./App.css";
import Story from "./Recipe/Story";
import Updates from "./Recipe/Updates";
import Menu from "./Recipe/Menu";
import Contact from "./Recipe/Contact";
import Home from "./Recipe/Home";
import Nav from "./Recipe/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reserve from "./Recipe/Reserve";
import Signup from "./Recipe/Signup";
import Login from "./Recipe/Login";
import Comments from "./Recipe/Comments";
import UpdateComment from "./Recipe/UpdateComment";
import CommentBox from "./Recipe/CommentBox";
import NewsLetter from "./Recipe/NewsLetter";
/* import Protected from './Recipe/Protected'; */

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/story" element={<Story />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/update/:id" element={<UpdateComment />} />

            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/comments" element={<Comments></Comments>} />
            <Route path="/commentbox" element={<CommentBox></CommentBox>} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<NewsLetter />} />

            <Route path="/reserve" element={<Reserve />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
