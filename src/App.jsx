import React, { Suspense, lazy } from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; 
import NavBar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

// Lazy loading components for better performance
const Home = lazy(() => import("./routes/Home"));
const Contact = lazy(() => import("./routes/Contact"));
const Pricing = lazy(() => import("./routes/Pricing"));
const FAQ = lazy(() => import("./routes/FAQ"));
const HowItWork = lazy(() => import("./routes/HowItWorks"));
const AllServices = lazy(() => import("./components/Services/allServices"));
const HomeSchooling = lazy(() => import('./components/Services/HomeSchooling'));
const PrimaryEducation = lazy(() => import('./components/Services/PrimaryEducation'));
const SecondaryEducation = lazy(() => import('./components/Services/SecondaryEducation'));
const HighSchoolEducation = lazy(() => import('./components/Services/HighSchoolEducation'));
const AdultLiteracyEducation = lazy(() => import('./components/Services/AdultLiteracyEducation'));
const ProfessionalCourses = lazy(() => import('./components/Services/ProfessionalCourses'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() { 
  return ( 
    <Router> 
      <div className="App"> 
        <ScrollToTop>
          <NavBar />
          
          <Suspense fallback={<Loading />}>
            <Routes> 
              <Route path="/" element={<Home />} /> 
              <Route path="/home" element={<Navigate to="/" />} /> 
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/how-it-works" element={<HowItWork />} />
              <Route path="/services" element={<AllServices />} />
              <Route path="/service/home-schooling" element={<HomeSchooling />} />
              <Route path="/service/primary-education" element={<PrimaryEducation />} />
              <Route path="/service/secondary-education" element={<SecondaryEducation />} />
              <Route path="/service/high-school" element={<HighSchoolEducation />} />
              <Route path="/service/adult-literacy" element={<AdultLiteracyEducation />} />
              <Route path="/service/professional-courses" element={<ProfessionalCourses />} />
              
              {/* Fallback Route for 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTop>

        <Footer />

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/message/GWB4QDNZVRUFL1 " 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button"
        >
          <FaWhatsapp size={40} />
        </a>
      </div> 
    </Router> 
  ); 
}
