import React from "react";

// Components //

import LandingRegister from "./components/LandingRegister";
import UserPage from "./components/UserPage";

// CSS Links //

import "./App.css";

// Routes //
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingRegister />}/>
        <Route path="/user-page" element={<UserPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
