import { Routes, Route,Navigate } from "react-router-dom";
import Index from "./pages";
import View from "./pages/view";
import Layout from "./components/layout";
import { Suspense } from "react";

function App() {
 
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route exact path="/" element={<Layout navbar={true}><Index /></Layout>}/>
        <Route exact path="/project/:name" element={<Layout navbar={false}><View/></Layout>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      </Suspense>
  );
}

export default App;
