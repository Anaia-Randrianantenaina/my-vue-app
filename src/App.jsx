import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"
import Programme from "./components/programme/Programme";
import Inscription from "./components/inscri/Inscription";
import About from "./components/about/About";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/programme" element={<Programme/>}></Route>
      <Route path="/inscri" element={<Inscription/>}></Route>
      <Route path="/about" element={<About/>}></Route>
     </Routes>
    </>
  );
}

export default App;
