import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./root/screen/Home"
import About from "./root/screen/About";
import Contact from "./root/screen/Contact";
import Now from "./root/screen/Now";
import Blog from "./root/screen/Blog";
import Header from "./root/component/Header";


const App = ()=>{
  return (<Routes>
<Route index path="/" element={<Home/>}
     />
  
  <Route  path="about" element={<About/>} />
  <Route  path="contact" element={<Contact/>} />
  <Route  path="blog" element={<Blog/>} />
  <Route   path="now" element={<Now/>} />
</Routes>)

}

export default App;



