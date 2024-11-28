import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Tarifs from "./pages/Tarifs";
import NotFound from "./pages/NotFound";
import Demo from "./pages/Demo";

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="tarif" element={<Tarifs />} />☻
            <Route path="demo" element={<Demo />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
