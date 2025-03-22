import React, { useState, useEffect, memo } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { HamburgerMenuClose, HamburgerMenuOpen } from "./Icons";
import logo from '../assets/logo1.svg';

// MenuItem Component
const MenuItem = memo(({ to, children, onClick, ariaCurrent }) => (
  <li className="relative group">
    <NavLink
      to={to}
      aria-current={ariaCurrent}
      className={({ isActive }) =>
        `py-2 px-4 text-sm md:text-base relative after:content-[''] after:absolute 
        after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-gray-300 
        after:transition-all group-hover:after:w-full ${isActive ? "text-white font-semibold" : "text-gray-300"} 
        hover:text-white-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500`
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
  const handleMenuItemClick = (to) => {
    setIsOpen(false); // Close the mobile menu
    navigate(to); // Navigate to the selected page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <nav className="bg-primary h-[80px] flex justify-between items-center text-xl sticky top-0 z-20 px-4 shadow-lg">
      <div className="flex justify-between items-center w-full max-w-[1500px] mx-auto">
       {/* Logo Section */}
        <NavLink to="/" className="flex items-center space-x-2 cursor-pointer">
          {/* <img src={logo} alt="MADUYU ACADEMY Logo" className="h-10 w-auto" /> */}
          <span className="text-lg lg:text-xl font-bold text-gray-300">MADUYU ACADEMY</span>
        </NavLink>


        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex list-none text-center space-x-3">
          <MenuItem to="/" onClick={() => handleMenuItemClick('/')} ariaCurrent={pathname === '/' ? 'page' : undefined}>Home</MenuItem>
          <MenuItem to="/how-it-works" onClick={() => handleMenuItemClick('/how-it-works')} ariaCurrent={pathname === '/how-it-works' ? 'page' : undefined}>How It Works</MenuItem>
          <MenuItem to="/services" onClick={() => handleMenuItemClick('/services')} ariaCurrent={pathname === '/services' ? 'page' : undefined}>Our Services</MenuItem>
          <MenuItem to="/pricing" onClick={() => handleMenuItemClick('/pricing')} ariaCurrent={pathname === '/pricing' ? 'page' : undefined}>Pricing</MenuItem>
          <MenuItem to="/faq" onClick={() => handleMenuItemClick('/faq')} ariaCurrent={pathname === '/faq' ? 'page' : undefined}>FAQ</MenuItem>
          <MenuItem to="/contact" onClick={() => handleMenuItemClick('/contact')} ariaCurrent={pathname === '/contact' ? 'page' : undefined}>Contact</MenuItem>
        </ul>

        {/* Enroll Now Button (Hidden on Small Screens) */}
        <div className="hidden sm:block">
          <Link
            to="/contact"
            className="text-sm md:text-base text-blue-800 bg-white rounded-md py-1.5 px-2 md:py-2 md:px-3 font-medium
             shadow-md transition-all duration-300 hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2
              focus:ring-blue-500 focus:ring-offset-2 ml-2"
          >
            Enroll Now
          </Link>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div
          className="md:hidden text-white cursor-pointer"
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
            ? "flex flex-col text-center items-center pt-16 pb-8 space-y-4 opacity-100 transition-all duration-300 animate-slideIn"
            : "hidden opacity-0"
        } bg-blue-600 w-full absolute top-[80px] left-0 z-10 border-t border-gray-700 shadow-lg md:hidden`}
      >
        <MenuItem to="/" onClick={() => handleMenuItemClick('/')} ariaCurrent={pathname === '/' ? 'page' : undefined}>Home</MenuItem>
        <MenuItem to="/how-it-works" onClick={() => handleMenuItemClick('/how-it-works')} ariaCurrent={pathname === '/how-it-works' ? 'page' : undefined}>How It Works</MenuItem>
        <MenuItem to="/services" onClick={() => handleMenuItemClick('/services')} ariaCurrent={pathname === '/services' ? 'page' : undefined}>Our Services</MenuItem>
        <MenuItem to="/pricing" onClick={() => handleMenuItemClick('/pricing')} ariaCurrent={pathname === '/pricing' ? 'page' : undefined}>Pricing</MenuItem>
        <MenuItem to="/faq" onClick={() => handleMenuItemClick('/faq')} ariaCurrent={pathname === '/faq' ? 'page' : undefined}>FAQ</MenuItem>
        <MenuItem to="/contact" onClick={() => handleMenuItemClick('/contact')} ariaCurrent={pathname === '/contact' ? 'page' : undefined}>Contact</MenuItem>
      </ul>
    </nav>
  );
}

export default NavBar;
