import Background from "./background/background";
import Footer from "./footer";
import Navbar from "./navbar";
import Logo2 from "../assets/logo-2.png";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children,navbar }) {
  
  
  useEffect(()=>{
    document.body.classList.add("loading");

  },[children])
  return (
    <>
      <Background />
      {navbar? <Navbar /> : <Navbar navbarView={true}/>}
      {children}
      <Footer/>
      </>
  )
}