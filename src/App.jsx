import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./pages";
import View from "./pages/view";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Index />
  );
}

export default App;
