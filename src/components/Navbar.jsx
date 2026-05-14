import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Active path check cheyadaniki chinna helper function
  const isActive = (paths) => paths.includes(currentPath);

  // Common classes and conditional classes
  const baseLinkClass = "flex items-center gap-1 font-bold text-[15px] px-5 py-2.5 rounded-full transition-all duration-200";
  const activeClass = "bg-[#E8F5E9] text-[#059669]";
  const inactiveClass = "text-slate-800 hover:text-[#059669]";

  const getStyle = (paths) => `${baseLinkClass} ${isActive(paths) ? activeClass : inactiveClass}`;

  return (
    <header className="w-full bg-white font-sans shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex flex-col text-[#0B1E4A]">
          <span className="text-2xl font-black tracking-wide leading-tight">ELITE GLOBAL</span>
          <span className="text-sm font-bold tracking-widest">ACADEMY</span>
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
      </div>
    </header>
  );
};

export default Navbar;