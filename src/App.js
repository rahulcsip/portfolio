import React ,{useEffect,useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./root/pages/Home";
import About from "./root/pages/About";
import Contact from "./root/pages/Contact";
import Now from "./root/pages/Now";
import Blog from "./root/pages/Blog";
import Header from "./root/component/Header";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio ,Watch } from  'react-loader-spinner'
const App = () => {

  const [ loader , setLoader ] = useState(true)

useEffect(() => {

  setTimeout(()=>{
setLoader(false)

  },3000)
}, [])



 return !loader ? (
    <Routes>
      <Route index path="/portfolio/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/now" element={<Now />} />
    </Routes>
  ) :(
    <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>
      <Audio
  heigth="100"
  width="100"
  color='grey'
  ariaLabel='loading'
  />
    </div>
  )
};

export default App;
