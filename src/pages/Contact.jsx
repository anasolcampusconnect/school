import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F8F6F1] to-[#EEF2FF] px-6 py-16 md:px-16">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0B1E4A] tracking-wide">
          Contact Us
        </h1>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We would love to hear from you. Reach out for admissions,
          collaborations, or any assistance.
        </p>

        <div className="w-28 h-1.5 bg-[#B1965A] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div className="space-y-8">
          
          {/* Address */}
          <div className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
            <div className="flex items-start gap-5">
              
              <div className="bg-[#0B1E4A] p-4 rounded-2xl text-white">
                <MapPin size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1E4A]">
                  Address
                </h2>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  ABC International School,
                  <br />
                  MG Road, Hyderabad,
                  <br />
                  Telangana, India - 500001
                </p>
              </div>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Phone */}
            <div className="bg-gradient-to-br from-[#0B1E4A] to-[#1E3A8A] text-white rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-500">
              
              <Phone size={34} className="mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Phone
              </h3>

              <p className="text-lg tracking-wide">
                +91 98765 43210
              </p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-[#B1965A] to-[#D4B87A] text-white rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-500">
              
              <Mail size={34} className="mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Email
              </h3>

              <p className="text-lg break-words">
                contact@school.com
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
            <iframe
              title="School Location"
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              className="w-full h-[320px] border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          
          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B1965A]/20 rounded-full blur-3xl"></div>

          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[35px] p-8 md:p-10 shadow-2xl">
            
            {/* Success Message UI */}
            {showMessage && (
              <div className="mb-6 flex items-center gap-3 bg-green-100 border border-green-300 text-green-700 px-5 py-4 rounded-2xl animate-pulse shadow-md">
                <CheckCircle size={24} />
                <span className="font-semibold">
                  Message Sent Successfully!
                </span>
              </div>
            )}

            {/* Form Heading */}
            <div className="flex items-center gap-4 mb-8">
              
              <div className="bg-[#0B1E4A] p-4 rounded-2xl text-white">
                <MessageSquare size={28} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0B1E4A]">
                  Send Message
                </h2>

                <p className="text-gray-500">
                  Fill out the form below
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Name */}
              <div>
                <label className="block mb-2 text-[#0B1E4A] font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B1965A] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-[#0B1E4A] font-semibold">
                  Email Address
                </label>

                <input
  type="text"
  placeholder="Enter your email"
  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B1965A] transition"
/>
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-[#0B1E4A] font-semibold">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B1965A] transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-[#0B1E4A] font-semibold">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B1965A] transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#0B1E4A] hover:bg-[#142d69] text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-1"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;