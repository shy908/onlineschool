import React, { useState, useEffect, memo } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaHouseSignal } from "react-icons/fa6";
import { HamburgerMenuClose, HamburgerMenuOpen } from "./Icons";
import logo  from '../assets/logo.png';

// MenuItem Component
const MenuItem = memo(({ to, children, onClick }) => (
  <li className="relative group">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-2 px-4 text-sm md:text-base relative after:content-[''] after:absolute 
        after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#ffdd40] 
        after:transition-all group-hover:after:w-full ${isActive ? "text-[#ffdd40] font-bold" : "text-white"}`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  </li>
));

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Handle the toggling of the mobile menu
  const handleToggle = () => setIsOpen(!isOpen);

  // Scroll to top when pathname changes (on route change)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Handle navigation and close mobile menu
  const handleNavClick = (to) => {
    setIsOpen(false);  // Close the mobile menu
    navigate(to);  // Navigate to the selected page
    window.scrollTo({ top: 0, behavior: "smooth" });  // Scroll to top
  };

  return (
    <nav className="bg-[#1f5156] h-[80px] flex justify-between items-center text-xl sticky top-0 z-20 px-4 shadow-md">
      <div className="flex justify-between items-center w-full max-w-[1500px] mx-auto">
        {/* Logo Section */}
        <NavLink
          to="/"
          className="text-[#f5b921] font-semibold flex items-center text-2xl cursor-pointer"
        >
          <span className="ml-4 inline-block w-[3rem] h-[3rem] mr-1">
            <img src={logo} alt="logo" className="h-15 w-20 rounded-xl border-t-2 border-b-2 border-yellow-400"/>
          </span>
          <span className="text-[16px] lg:text-[20px]">MADUYU ACADEMY</span>
        </NavLink>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex list-none text-center space-x-3">
          <MenuItem to="/" onClick={() => handleNavClick('/')}>Home</MenuItem>
          <MenuItem to="/how-it-works" onClick={() => handleNavClick('/how-it-works')}>How It Works</MenuItem>
          <MenuItem to="/fees" onClick={() => handleNavClick('/fees')}>Fees</MenuItem>
          <MenuItem to="/faq" onClick={() => handleNavClick('/faq')}>FAQ</MenuItem>
          <MenuItem to="/contact" onClick={() => handleNavClick('/contact')}>Contact</MenuItem>
        </ul>

        {/* Enroll Button for Desktop */}
        <div className="hidden sm:block">
          <Link
            to="/contact"
            className="text-base text-[#1f5156] bg-[#f5b921] rounded-lg py-2 px-4 font-medium shadow-lg transition-all duration-300 hover:bg-[#b7a435] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#357ab7] focus:ring-offset-2"
          >
            Enroll Now
          </Link>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div
          className="md:hidden text-[#f5b921] cursor-pointer"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <HamburgerMenuClose className="w-6 h-6" />
          ) : (
            <HamburgerMenuOpen className="w-6 h-6" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className={`${
          isOpen
            ? "flex flex-col text-center items-center pt-16 pb-8 space-y-4 opacity-100 transition-opacity duration-300"
            : "hidden opacity-0"
        } bg-[#1f5156] w-full absolute top-[80px] left-0 z-10 border-t border-[#ffdd40] shadow-lg md:hidden`}
      >
        <MenuItem to="/" onClick={() => handleNavClick('/')}>Home</MenuItem>
        <MenuItem to="/how-it-works" onClick={() => handleNavClick('/how-it-works')}>How It Works</MenuItem>
        <MenuItem to="/fees" onClick={() => handleNavClick('/fees')}>Fees</MenuItem>
        <MenuItem to="/faq" onClick={() => handleNavClick('/faq')}>FAQ</MenuItem>
        <MenuItem to="/contact" onClick={() => handleNavClick('/contact')}>Contact</MenuItem>
      </ul>
    </nav>
  );
}

export default NavBar;
