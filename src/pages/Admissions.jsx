import React, { useState, useEffect, useRef } from 'react';
import { 
  FaClipboardList, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaTimes, 
  FaChild, 
  FaRegFileAlt, 
  FaRupeeSign,
  FaPhoneAlt,
  FaBell,
  FaArrowRight
} from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

// Reusable Card Content for Timeline
const CardContent = ({ title, desc, colors }) => (
  <div className="bg-white p-7 rounded-3xl shadow-xl border border-gray-100 hover:border-[#059669]/40 hover:shadow-2xl transition-all duration-300 relative group cursor-default w-full">
    <h3 className={`text-xl lg:text-2xl font-bold text-[#0B1E4A] mb-2 group-hover:${colors.text} transition-colors uppercase tracking-tight`}>{title}</h3>
    <p className="text-gray-700 font-medium leading-relaxed">{desc}</p>
  </div>
);

// Custom Component for Alternating Timeline Cards
const AdmissionTimelineItem = ({ step, title, desc, index, colorClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const colorMap = {
    green: { border: 'border-[#059669]', text: 'text-[#059669]', bg: 'hover:bg-[#059669]' },
    blue: { border: 'border-blue-600', text: 'text-blue-600', bg: 'hover:bg-blue-600' },
    gold: { border: 'border-[#B1965A]', text: 'text-[#B1965A]', bg: 'hover:bg-[#B1965A]' },
    purple: { border: 'border-purple-600', text: 'text-purple-600', bg: 'hover:bg-purple-600' }
  };
  const colors = colorMap[colorClass] || colorMap.green;

  return (
    <div ref={ref} className={`relative flex items-center w-full mb-12 lg:mb-16 transition-all duration-[800ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
      <div className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white border-4 ${colors.border} rounded-full z-10 ${colors.text} font-black shadow-lg ${colors.bg} hover:text-white transition-colors duration-300`}>
        {step}
      </div>
      <div className="w-full flex md:justify-between items-center">
        {isEven ? (
          <>
            <div className="hidden md:flex w-[45%] lg:pr-8 justify-end text-right">
              <CardContent title={title} desc={desc} colors={colors} />
            </div>
            <div className="block md:hidden w-full pl-20 pr-4 text-left">
              <CardContent title={title} desc={desc} colors={colors} />
            </div>
            <div className="hidden md:block w-[45%]"></div>
          </>
        ) : (
          <>
            <div className="hidden md:block w-[45%]"></div>
            <div className="w-full pl-20 pr-4 md:pl-0 md:pr-0 md:w-[45%] lg:pl-8 text-left">
              <CardContent title={title} desc={desc} colors={colors} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Admissions = () => {
  const [showPromoPopup, setShowPromoPopup] = useState(false); 
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false); 
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', grade: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto open the popup after exactly 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromoPopup(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  const processSteps = [
    { step: '01', color: 'green', title: 'Submit Enquiry', desc: 'Fill out the online enquiry form with basic details to register your interest.' },
    { step: '02', color: 'blue', title: 'School Tour & Interaction', desc: 'Our admissions team will invite you for a campus tour and a friendly interaction with the academic head.' },
    { step: '03', color: 'gold', title: 'Document Verification', desc: 'Submit the required documents for verification by our administrative team.' },
    { step: '04', color: 'purple', title: 'Fee Payment & Confirmation', desc: 'Pay the admission fee to secure the seat and receive the welcome kit.' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsEnquiryModalOpen(false); 
      setFormData({ name: '', email: '', phone: '', grade: '', message: '' }); // Reset form
    }, 4000); 
  };

  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <div className="bg-gray-50 font-sans min-h-screen relative">
      
      {/* --- MARKETING PROMO POPUP --- */}
      <AnimatePresence>
        {showPromoPopup && (
          <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white w-full max-w-[700px] rounded-2xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden animate-[fadeIn_0.4s_ease-out]">
              
              {/* Left Content Area */}
              <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center bg-white relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#a3d646] to-[#007B8F]"></div>
                    <div className="leading-none">
                      <span className="text-lg font-black text-[#0B1E4A]">Elite Global</span><br/>
                      <span className="text-[9px] font-bold text-gray-400 tracking-wider">INTERNATIONAL SCHOOL</span>
                    </div>
                  </div>
                  <div className="text-right leading-none hidden sm:block">
                    <span className="text-base font-black text-[#007B8F]">Elite</span><br/>
                    <span className="text-[10px] font-bold text-gray-500">COMPASS</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-light text-[#6096BA] leading-[1.15] mb-5 tracking-wide">
                  THE <br/> OPPORTUNE <br/> TIME FOR AN <br/> EXCEPTIONAL <br/> EDUCATION.
                </h2>

                <div className="space-y-2 mb-6">
                  <div className="bg-[#a3d646] text-white px-3 py-1 text-xs font-black w-max rounded-md shadow-sm">
                    #SmarterThanSmart
                  </div>
                  <div className="bg-[#0B1E4A] text-white px-3 py-1 text-[10px] md:text-xs font-bold w-max rounded-md shadow-sm tracking-wider">
                    HYDERABAD | FINANCIAL DIST
                  </div>
                </div>

                <div className="flex items-center gap-3 text-2xl md:text-3xl font-black text-[#0B1E4A]">
                  <FaPhoneAlt className="text-[#6096BA] text-xl" /> 
                  95050 29333
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 grid grid-cols-4 gap-2 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0B1E4A]"></div>
                  ))}
                </div>
              </div>

              {/* Right Content Area (Image & Badge) */}
              <div className="w-full md:w-[45%] pt-8 px-6 bg-white flex flex-col items-center relative z-10 pb-16 md:pb-10">
                <div className="w-full max-w-[260px] h-[280px] md:h-[320px] bg-gray-100 rounded-t-[10rem] overflow-hidden border-[6px] border-white shadow-xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80" 
                    alt="Young Student" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className="bg-[#007B8F] text-white text-center py-5 px-6 relative z-20 -mt-8 rounded-b-2xl shadow-xl w-full max-w-[260px]">
                  <h3 className="text-2xl font-black uppercase leading-tight tracking-wide">
                    Admissions <br/> Open <br/> 2026-27
                  </h3>
                </div>
              </div>

              {/* Bottom Colored Stripes */}
              <div className="absolute bottom-0 left-0 w-full flex flex-col z-0">
                <div className="h-1.5 bg-[#a3d646]"></div>
                <div className="h-1.5 bg-[#007B8F]"></div>
                <div className="h-2 bg-amber-400"></div>
              </div>

              <button 
                onClick={() => setShowPromoPopup(false)}
                className="absolute bottom-4 right-4 bg-white text-gray-500 hover:text-red-500 rounded-full p-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.15)] z-30 transition-transform hover:scale-110 border border-gray-100"
              >
                <FaTimes size={14} />
              </button>

            </div>
          </div>
        )}
      </AnimatePresence>

      {/* FLOATING ADMISSION WIDGET */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-8 right-8 z-40 hidden md:block"
      >
        <button 
          onClick={openEnquiryModal}
          className="group flex items-center bg-white p-2 pr-6 rounded-full shadow-[0_10px_40px_rgba(11,30,74,0.15)] hover:shadow-[0_10px_40px_rgba(11,30,74,0.25)] hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center text-white mr-4 relative">
            <span className="absolute inset-0 bg-[#059669] rounded-full animate-ping opacity-40"></span>
            <FaBell size={18} />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Admissions 26-27</p>
            <p className="text-[#0B1E4A] font-black group-hover:text-[#059669] transition-colors">Apply Now</p>
          </div>
        </button>
      </motion.div>

      {/* --- PAGE CONTENT --- */}

      
      <section 
        className="text-white px-6 relative overflow-hidden w-full flex flex-col items-center justify-center min-h-[80vh] lg:min-h-[calc(100vh-90px)] py-12"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(11, 30, 74, 0.1), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10 mb-8 md:mb-0">
          <span className="inline-block px-5 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-bold tracking-widest text-[#059669] mb-6 uppercase backdrop-blur-sm shadow-xl">
            Admissions 2026 - 2027
          </span>
          <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-lg text-white">
            Begin Your Child's Journey to Excellence
          </h1>
          <p className="text-lg lg:text-xl text-white mb-10 leading-relaxed font-semibold drop-shadow-md">
            Join Elite Global Academy, where we nurture curious minds, build strong character, and prepare leaders for tomorrow's world.
          </p>
          <button 
            onClick={openEnquiryModal} 
            className="bg-[#059669] hover:bg-[#047855] transition text-white px-9 py-4 rounded-full font-bold text-lg shadow-[0_8px_30px_rgb(5,150,105,0.4)] transform hover:-translate-y-1"
          >
            Apply Now / Enquire
          </button>
        </div>
      </section>

      {/* 2. Admission Process Tree */}
      <section className="pt-20 pb-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-3 mb-16 text-center">
            <div className="p-4 bg-[#E8F5E9] rounded-2xl text-[#059669] shadow-inner"><FaClipboardList size={30} /></div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1E4A] uppercase tracking-tighter">Admission Process</h2>
            <p className="text-lg text-gray-600 font-medium max-w-xl">Follow these smooth steps to become a part of the Elite Global Academy family.</p>
          </div>
          
          <div className="relative w-full pb-4">
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-[#059669] via-[#0B1E4A]/40 to-[#0B1E4A]/10 z-0 rounded-full"></div>
            {processSteps.map((item, i) => (
              <AdmissionTimelineItem key={i} step={item.step} title={item.title} desc={item.desc} index={i} colorClass={item.color} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Age Criteria & Required Documents */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#E3F2FD] rounded-xl text-[#0B1E4A]"><FaChild size={22} /></div>
            <h2 className="text-2xl font-black text-[#0B1E4A]">Age Criteria</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6 font-medium">As of 31st March of the academic year:</p>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="font-bold text-gray-700">Pre-Nursery</span>
              <span className="bg-[#E8F5E9] text-[#059669] px-3 py-1 rounded-md text-sm font-black">2.5+ Years</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="font-bold text-gray-700">Nursery</span>
              <span className="bg-[#E8F5E9] text-[#059669] px-3 py-1 rounded-md text-sm font-black">3+ Years</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="font-bold text-gray-700">LKG / UKG</span>
              <span className="bg-[#E8F5E9] text-[#059669] px-3 py-1 rounded-md text-sm font-black">4+ / 5+ Years</span>
            </li>
            <li className="flex justify-between items-center pb-2">
              <span className="font-bold text-gray-700">Grade 1</span>
              <span className="bg-[#E8F5E9] text-[#059669] px-3 py-1 rounded-md text-sm font-black">6+ Years</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#FFF3E0] rounded-xl text-[#E65100]"><FaRegFileAlt size={22} /></div>
            <h2 className="text-2xl font-black text-[#0B1E4A]">Required Docs</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6 font-medium">Please carry self-attested copies:</p>
          <ul className="space-y-3">
            {['Birth Certificate (Original & Copy)', 'Aadhaar Card of Child & Parents', '4 Passport Size Photographs', 'Transfer Certificate (Grade 2 onwards)', 'Previous Year Report Card'].map((doc, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#059669] mt-1 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Fee Structure */}
      <section className="max-w-7xl mx-auto px-6 py-8 pb-20">
        <div className="bg-[#0B1E4A] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 opacity-10">
            <FaRupeeSign size={150} className="-mt-10 -mr-10" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/10 rounded-xl text-[#059669]"><FaRupeeSign size={24} /></div>
                <h2 className="text-3xl font-black">Fee Structure</h2>
              </div>
              <p className="text-gray-300 font-medium leading-relaxed mb-0">
                We believe in a completely transparent fee structure with no hidden charges. The fee varies depending on the grade and the campus facilities (Day School vs. Boarding). 
              </p>
            </div>
            <div className="md:w-1/3 w-full text-center md:text-right">
              <button 
                onClick={openEnquiryModal}
                className="w-full md:w-auto bg-[#059669] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#047855] transition shadow-lg"
              >
                Request Fee Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENQUIRY POP-UP FORM (With Textarea Restored) */}
      <AnimatePresence>
        {isEnquiryModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1E4A]/80 z-[300] flex items-center justify-center p-4 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]"
            >
              {/* Left Side: Visual/Branding Panel */}
              <div className="hidden md:flex md:w-1/3 bg-[#0B1E4A] p-10 flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#059669] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                    <FaPaperPlane size={20} />
                  </div>
                  <h2 className="text-3xl font-black text-white leading-tight uppercase tracking-tighter">
                    Start Your <br/> <span className="text-[#059669]">Success</span> <br/> Story
                  </h2>
                  <div className="h-1 w-12 bg-[#059669] mt-4 rounded-full"></div>
                </div>
                
                <div className="relative z-10 space-y-4">
                  <p className="text-gray-400 text-sm font-medium">
                    Join 500+ families who chose excellence this year.
                  </p>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#059669]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>
              </div>

              {/* Right Side: The Form */}
              <div className="w-full md:w-2/3 p-8 lg:p-12 bg-white overflow-y-auto max-h-[90vh]">
                <button 
                  onClick={closeEnquiryModal}
                  className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors p-2"
                >
                  <FaTimes size={20} />
                </button>

                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-20 h-20 bg-green-100 text-[#059669] rounded-full flex items-center justify-center mb-6 animate-bounce">
                      <FaCheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-[#0B1E4A] mb-2">Thank You!</h3>
                    <p className="text-gray-600 font-medium">Your enquiry has been received. Our counselor will reach out within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-[#0B1E4A] uppercase tracking-tight">Admission Enquiry</h2>
                      <p className="text-gray-500 font-medium">Academic Session 2026-27</p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="md:col-span-2">
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 ml-1">Parent / Guardian Name *</label>
                        <input 
                          type="text" name="name" required value={formData.name} onChange={handleChange}
                          className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition-all font-medium"
                          placeholder="e.g. John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 ml-1">Email Address *</label>
                        <input 
                          type="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition-all font-medium"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 ml-1">Phone Number *</label>
                        <input 
                          type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                          className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition-all font-medium"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 ml-1">Admission Required For Grade *</label>
                        <select 
                          name="grade" required value={formData.grade} onChange={handleChange}
                          className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition-all font-medium appearance-none"
                        >
                          <option value="" disabled>Select Grade</option>
                          <option value="pre-nursery">Pre-Nursery</option>
                          <option value="nursery">Nursery</option>
                          <option value="lkg-ukg">LKG / UKG</option>
                          <option value="grade-1-5">Grade 1 to 5</option>
                          <option value="grade-6-10">Grade 6 to 10</option>
                        </select>
                      </div>

                      {/* RESTORED TEXTAREA FIELD */}
                      <div className="md:col-span-2">
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 ml-1">Any Specific Query? (Optional)</label>
                        <textarea 
                          name="message" rows="3" value={formData.message} onChange={handleChange}
                          className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition-all font-medium resize-none"
                          placeholder="Type your message here..."
                        ></textarea>
                      </div>

                      <div className="md:col-span-2">
                        <button 
                          type="submit" 
                          className="w-full bg-[#059669] hover:bg-[#047855] text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-green-900/20 transition-all active:scale-[0.98] mt-2"
                        >
                          SUBMIT APPLICATION <FaArrowRight size={14} />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Admissions;