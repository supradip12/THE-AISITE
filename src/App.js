import './App.css';
import React from "react";

import Blog from "./containers/blog/Blog";
import Feature from "./containers/feature/Feature";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Possibility from "./containers/possibility/Possibility";
import WhatGPT from "./containers/whatGPT3/WhatGPT";
import { Cta, Brand, Navbar } from './components';

function App() {
  return (
    <>
      
       <div className="App">
         <div className="gradient__bg">
           <Navbar/>
           <Header/>
           </div>
           <Brand/>
           <WhatGPT/>
           <Feature/>
           <Possibility/>
           <Cta/>
           <Blog/>
           <Footer/>

         </div>
    
    </>
   
  );
}

export default App;
