import React from "react";
import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
};

export default App;
