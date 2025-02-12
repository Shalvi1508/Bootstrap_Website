import React from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import Header from "./Components/Header"; 
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
