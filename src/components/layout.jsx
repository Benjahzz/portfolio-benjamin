import Background from "./background/background";
import Footer from "./footer";
import Navbar from "./navbar";
import { useEffect } from "react";

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