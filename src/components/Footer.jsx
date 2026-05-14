import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1E4A] text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#B1965A]">Elite Global Academy</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering students with quality education, fostering innovation, and building leaders for tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#B1965A]">Quick Links</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/about" className="hover:text-[#B1965A] transition">About Us</a></li>
            <li><a href="/admissions" className="hover:text-[#B1965A] transition">Admissions</a></li>
            <li><a href="/careers" className="hover:text-[#B1965A] transition">Careers</a></li>
            <li><a href="/contact" className="hover:text-[#B1965A] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#B1965A]">Reach Us</h2>
          <p className="text-sm text-gray-300 mb-2">📍 123, Education Hub, Hyderabad, Telangana 500001</p>
          <p className="text-sm text-gray-300 mb-2">📞 +91 91570 31234</p>
          <p className="text-sm text-gray-300">📧 inquiries.ega@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Elite Global Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;