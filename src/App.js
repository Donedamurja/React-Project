import React from 'react'
import "./App.css";
import Navbar from "./Containers/Navbar";
import Home from "./Pages/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  </Routes>
  </Router>
  );
}

export default App;