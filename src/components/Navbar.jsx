import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileCampusOpen, setIsMobileCampusOpen] = useState(false);
  
  const location = useLocation();
  const currentPath = location.pathname;

  // Active path check cheyadaniki chinna helper function
  const isActive = (paths) => paths.includes(currentPath);

  // Common classes and conditional classes
  const baseLinkClass = "flex items-center gap-1 font-bold text-[15px] px-5 py-2.5 rounded-full transition-all duration-200";
  const activeClass = "bg-[#E8F5E9] text-[#059669]";
  const inactiveClass = "text-slate-800 hover:text-[#059669]";

  const getStyle = (paths) => `${baseLinkClass} ${isActive(paths) ? activeClass : inactiveClass}`;

  // Helper function to close mobile menu on link click
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileCampusOpen(false);
  };

  return (
    <header className="w-full bg-white font-sans shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 text-[#0B1E4A] group" onClick={closeMobileMenu}>
          <div className="bg-[#0B1E4A] p-2.5 rounded-xl shadow-md group-hover:bg-[#059669] transition-colors duration-300">
            <FaGraduationCap className="text-white" size={26} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-wide leading-tight">ELITE GLOBAL</span>
            <span className="text-[13px] font-bold tracking-widest text-[#059669]">ACADEMY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          
          {/* Home */}
          <Link to="/" className={getStyle(['/'])}>
            Home
          </Link>

          {/* About Us - Dropdown */}
          <div className="relative group">
            <button className={getStyle(['/about', '/team', '/principal-message'])}>
              About Us <FaChevronDown size={11} className={`mt-0.5 transition-transform ${isActive(['/about', '/team', '/principal-message']) ? 'text-[#059669]' : ''}`} />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
              <Link to="/about" className={`block px-5 py-2.5 text-sm font-bold hover:bg-[#E8F5E9] hover:text-[#059669] ${currentPath === '/about' ? 'text-[#059669] bg-gray-50' : 'text-gray-700'}`}>About Elite Global</Link>
              <Link to="/team" className={`block px-5 py-2.5 text-sm font-bold hover:bg-[#E8F5E9] hover:text-[#059669] ${currentPath === '/team' ? 'text-[#059669] bg-gray-50' : 'text-gray-700'}`}>Our Team</Link>
              <Link to="/principal-message" className={`block px-5 py-2.5 text-sm font-bold hover:bg-[#E8F5E9] hover:text-[#059669] ${currentPath === '/principal-message' ? 'text-[#059669] bg-gray-50' : 'text-gray-700'}`}>Principal Message</Link>
            </div>
          </div>

          {/* Admissions */}
          <Link to="/admissions" className={getStyle(['/admissions'])}>
            Admissions
          </Link>

          {/* Academics */}
          <Link to="/academics" className={getStyle(['/academics'])}>
            Academics
          </Link>

          {/* Campus Life - Dropdown */}
          <div className="relative group">
            <button className={getStyle(['/facilities', '/activities', '/gallery'])}>
              Campus Life <FaChevronDown size={11} className={`mt-0.5 transition-transform ${isActive(['/facilities', '/activities', '/gallery']) ? 'text-[#059669]' : ''}`} />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
              <Link to="/facilities" className={`block px-5 py-2.5 text-sm font-bold hover:bg-[#E8F5E9] hover:text-[#059669] ${currentPath === '/facilities' ? 'text-[#059669] bg-gray-50' : 'text-gray-700'}`}>Facilities</Link>
              <Link to="/activities" className={`block px-5 py-2.5 text-sm font-bold hover:bg-[#E8F5E9] hover:text-[#059669] ${currentPath === '/activities' ? 'text-[#059669] bg-gray-50' : 'text-gray-700'}`}>Activities</Link>
              <Link to="/gallery" className={`block px-5 py-2.5 text-sm font-bold hover:bg-[#E8F5E9] hover:text-[#059669] ${currentPath === '/gallery' ? 'text-[#059669] bg-gray-50' : 'text-gray-700'}`}>Gallery</Link>
            </div>
          </div>

          {/* Contact */}
          <Link to="/contact" className={getStyle(['/contact'])}>
            Contact
          </Link>

        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#0B1E4A] hover:text-[#059669] focus:outline-none p-2 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2 shadow-lg max-h-[80vh] overflow-y-auto w-full absolute left-0 top-full">
          
          <Link to="/" className={getStyle(['/'])} onClick={closeMobileMenu}>Home</Link>

          {/* About Us Mobile Dropdown */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              className={`${baseLinkClass} w-full justify-between ${isActive(['/about', '/team', '/principal-message']) ? activeClass : inactiveClass}`}
            >
              <span>About Us</span>
              <FaChevronDown size={11} className={`transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180 text-[#059669]' : ''}`} />
            </button>
            {isMobileAboutOpen && (
              <div className="flex flex-col pl-6 mt-1 border-l-2 border-gray-100 ml-5 gap-1">
                <Link to="/about" className={`py-2 text-[14px] font-bold ${currentPath === '/about' ? 'text-[#059669]' : 'text-gray-600 hover:text-[#059669]'}`} onClick={closeMobileMenu}>About Elite Global</Link>
                <Link to="/team" className={`py-2 text-[14px] font-bold ${currentPath === '/team' ? 'text-[#059669]' : 'text-gray-600 hover:text-[#059669]'}`} onClick={closeMobileMenu}>Our Team</Link>
                <Link to="/principal-message" className={`py-2 text-[14px] font-bold ${currentPath === '/principal-message' ? 'text-[#059669]' : 'text-gray-600 hover:text-[#059669]'}`} onClick={closeMobileMenu}>Principal Message</Link>
              </div>
            )}
          </div>

          <Link to="/admissions" className={getStyle(['/admissions'])} onClick={closeMobileMenu}>Admissions</Link>
          <Link to="/academics" className={getStyle(['/academics'])} onClick={closeMobileMenu}>Academics</Link>

          {/* Campus Life Mobile Dropdown */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileCampusOpen(!isMobileCampusOpen)}
              className={`${baseLinkClass} w-full justify-between ${isActive(['/facilities', '/activities', '/gallery']) ? activeClass : inactiveClass}`}
            >
              <span>Campus Life</span>
              <FaChevronDown size={11} className={`transition-transform duration-200 ${isMobileCampusOpen ? 'rotate-180 text-[#059669]' : ''}`} />
            </button>
            {isMobileCampusOpen && (
              <div className="flex flex-col pl-6 mt-1 border-l-2 border-gray-100 ml-5 gap-1">
                <Link to="/facilities" className={`py-2 text-[14px] font-bold ${currentPath === '/facilities' ? 'text-[#059669]' : 'text-gray-600 hover:text-[#059669]'}`} onClick={closeMobileMenu}>Facilities</Link>
                <Link to="/activities" className={`py-2 text-[14px] font-bold ${currentPath === '/activities' ? 'text-[#059669]' : 'text-gray-600 hover:text-[#059669]'}`} onClick={closeMobileMenu}>Activities</Link>
                <Link to="/gallery" className={`py-2 text-[14px] font-bold ${currentPath === '/gallery' ? 'text-[#059669]' : 'text-gray-600 hover:text-[#059669]'}`} onClick={closeMobileMenu}>Gallery</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className={getStyle(['/contact'])} onClick={closeMobileMenu}>Contact</Link>

        </nav>
      )}

    </header>
  );
};

export default Navbar;