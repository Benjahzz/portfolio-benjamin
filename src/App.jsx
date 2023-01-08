 
  import { Routes, Route,Navigate, useParams, useLocation } from "react-router-dom";
import Index from "./pages";
import View from "./pages/view";
import Layout from "./components/layout";
import { Suspense } from "react";
import i18n from "i18next";


function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/:lng">
          <Route path="project/:name" element={<Layout navbar={false}><View/></Layout>} />
          <Route  element={<Layout navbar={false}><View/></Layout>} />
          <Route index element={<Layout navbar={true}><Index /></Layout>} />
        </Route>
        <Route exact path="/" element={<Layout navbar={true}><Index /></Layout>}/>
        <Route exact path="/project/:name" element={<Layout navbar={false}><View/></Layout>} />
      </Routes>
      </Suspense>
  );
}


export default App;
