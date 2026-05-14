import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'DAY SCHOOL', path: '/day-school' },
    { name: 'BOARDING SCHOOL', path: '/boarding-school' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'MANDATORY DISCLOSURE', path: '/mandatory-disclosure' },
  ];

  return (
    <header className="w-full bg-white font-sans border-b shadow-sm">
      {/* Top Section */}
      <div className="flex flex-col xl:flex-row justify-between items-center px-4 xl:px-12 py-2 xl:py-0">
        
        {/* New School Name (Elite Global Academy) */}
        <div className="bg-[#0B1E4A] text-white px-8 py-5 flex flex-col items-center justify-center min-w-[280px]">
          <div className="flex items-center gap-3 mb-1">
            {/* 'E' logo placeholder has been removed from here */}
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest leading-tight">ELITE GLOBAL</span>
              <span className="text-sm tracking-widest text-left">ACADEMY</span>
            </div>
          </div>
          <p className="text-[11px] mt-2 font-bold tracking-widest uppercase">CBSE AFFILIATION NO : 3630XXX</p>
        </div>

        {/* Admissions Banner */}
        <div className="hidden lg:block bg-[#B1965A] text-white px-8 py-3 font-bold tracking-wider text-sm shadow-sm cursor-pointer hover:bg-[#967d49] transition">
          ADMISSIONS OPEN 2026 - 27 APPLY NOW!
        </div>

        {/* Updated Contact Info */}
        <div className="hidden lg:flex items-center gap-8 text-[#0B1E4A]">
          <div className="flex items-center gap-4">
            <FaPhoneAlt size={22} className="text-[#0B1E4A] opacity-80" />
            <div>
              <p className="font-bold text-base">Call Us</p>
              <p className="text-gray-500 text-sm tracking-wide">+91 99887 76655</p>
            </div>
          </div>
          <div className="h-12 w-px bg-gray-300"></div>
          <div className="flex items-center gap-4">
            <FaEnvelope size={24} className="text-[#0B1E4A] opacity-80" />
            <div>
              <p className="font-bold text-base">Email</p>
              <p className="text-gray-500 text-sm tracking-wide">contact@eliteglobal.edu.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="border-t border-gray-100">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 xl:px-12 py-4">
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-4 lg:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold tracking-widest transition-colors ${
                  location.pathname === link.path ? 'text-[#B1965A]' : 'text-[#0B1E4A] hover:text-[#B1965A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="p-2.5 border border-[#0B1E4A] rounded-full text-[#0B1E4A] hover:bg-[#0B1E4A] hover:text-white transition">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;