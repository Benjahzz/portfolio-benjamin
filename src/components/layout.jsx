import { useEffect } from "react";
import Background from "./background/background";
import Navbar from "./navbar";

export default function Layout({ children }) {
  
  return (
    <div>
      <Background />
      <Navbar />
      <main>{children}</main>
    </div>
  )
}