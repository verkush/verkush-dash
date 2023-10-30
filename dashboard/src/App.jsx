import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Innovation from "./pages/Innovation";
import Projects from "./pages/Projects";
import Documentation from "./pages/Documentation";
import Teams from "./pages/Teams";
import Error404 from "./pages/Error404";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="innovation" element={<Innovation />} />
          <Route path="projects" element={<Projects />} />
          <Route path="docs" element={<Documentation />} />
          <Route path="teams" element={<Teams />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="login" element={<div></div>} />
      </Routes>
    </Router>
  );
}

export default App;
