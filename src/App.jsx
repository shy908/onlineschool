import React, { useState, useEffect } from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; 
import Home from "./routes/Home";
import NavBar from "./components/Navbar";
import Contact from "./routes/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Fees from "./routes/Fees";
import Footer from "./components/Footer/Footer";
import HowItWork from "./routes/HowItWorks";
import FAQ from "./routes/FAQ";
import Loading from "./components/Loading";
import Courses from "./components/Courses/Courses";

export default function App() { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process, such as fetching resources or data
    const timer = setTimeout(() => setLoading(false), 2000); // Display for 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return ( 
    <Router> 
      <div className="App"> 
        <ScrollToTop>
          <NavBar />
          
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Navigate to="/" />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/fees" element={<Fees />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/how-it-works" element={<HowItWork />} />
            <Route path="/courses" element={<Courses />} />
          </Routes> 
        </ScrollToTop>

        <Footer />
      </div> 
    </Router> 
  ); 
}
