import { Routes, Route,Navigate } from "react-router-dom";
import Index from "./pages";
import View from "./pages/view";
import Layout from "./components/layout";
function App() {
 
  return (
    <Routes>
      <Route exact path="/" element={<Layout navbar={true}><Index /></Layout>}/>
      <Route exact path="/project/:name" element={<Layout navbar={false}><View/></Layout>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
