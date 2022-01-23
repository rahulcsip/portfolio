import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./root/pages/Home";
import About from "./root/pages/About";
import Contact from "./root/pages/Contact";
import Now from "./root/pages/Now";
import Blog from "./root/pages/Blog";
import Header from "./root/component/Header";

const App = () => {
  return (
    <Routes>
      <Route index path="/portfolio/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/now" element={<Now />} />
    </Routes>
  );
};

export default App;
