import React from 'react';
import Home from "./components/Home";
import PersonDetails from "./components/PersonDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":person" element={<PersonDetails />} />
        </Routes>
      </Router>
    </div>
  )
}