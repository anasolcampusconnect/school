import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B1E4A] text-white pt-16 pb-6 mt-16 border-t-4 border-[#059669]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: School Info & Socials */}
        <div>
          <Link to="/" className="flex flex-col mb-5">
            <span className="text-2xl font-black tracking-wide leading-tight text-white">ELITE GLOBAL</span>
            <span className="text-sm font-bold tracking-widest text-[#059669]">ACADEMY</span>
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed mb-6 pr-4">
            Empowering students with quality education, fostering innovation, and building leaders for tomorrow. A place where excellence meets opportunity.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-[#059669] hover:text-white transition-colors duration-300">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-[#059669] hover:text-white transition-colors duration-300">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-[#059669] hover:text-white transition-colors duration-300">
              <FaYoutube size={14} />
            </a>
            <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-[#059669] hover:text-white transition-colors duration-300">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-5 text-white border-b-2 border-[#059669] inline-block pb-1">Quick Links</h2>
          <ul className="text-sm text-gray-300 space-y-3">
            <li><Link to="/about" className="hover:text-[#059669] transition-colors flex items-center gap-2"><span className="text-[#059669] text-xs">▸</span> About Us</Link></li>
            <li><Link to="/admissions" className="hover:text-[#059669] transition-colors flex items-center gap-2"><span className="text-[#059669] text-xs">▸</span> Admissions</Link></li>
            <li><Link to="/academics" className="hover:text-[#059669] transition-colors flex items-center gap-2"><span className="text-[#059669] text-xs">▸</span> Academics</Link></li>
            <li><Link to="/contact" className="hover:text-[#059669] transition-colors flex items-center gap-2"><span className="text-[#059669] text-xs">▸</span> Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Campus Life */}
        <div>
          <h2 className="text-lg font-bold mb-5 text-white border-b-2 border-[#059669] inline-block pb-1">Campus Life</h2>
          <ul className="text-sm text-gray-300 space-y-3">
            <li><Link to="/facilities" className="hover:text-[#059669] transition-colors flex items-center gap-2"><span className="text-[#059669] text-xs">▸</span> Facilities</Link></li>
            <li><Link to="/activities" className="hover:text-[#059669] transition-colors flex items-center gap-2"><span className="text-[#059669] text-xs">▸</span> Extra-Curriculars</Link></li>
            <li><Link to="/gallery" className="hover:text-[#059669] transition-colors flex items-center gap-2"><span className="text-[#059669] text-xs">▸</span> Photo Gallery</Link></li>
            <li><Link to="/team" className="hover:text-[#059669] transition-colors flex items-center gap-2"><span className="text-[#059669] text-xs">▸</span> Our Team</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-5 text-white border-b-2 border-[#059669] inline-block pb-1">Reach Us</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#059669] mt-1 flex-shrink-0" size={16} />
              <p className="text-sm text-gray-300 leading-relaxed">
                Elite Education Campus, Hi-Tech City, Hyderabad, Telangana 500081
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#059669] flex-shrink-0" size={14} />
              <p className="text-sm text-gray-300">+91 99887 76655</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#059669] flex-shrink-0" size={14} />
              <p className="text-sm text-gray-300">contact@eliteglobal.edu.in</p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 mt-12 pt-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Elite Global Academy. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;