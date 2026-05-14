import React, { useState, useEffect, useRef } from 'react';
import { FaCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AnimatedNumber = ({ end, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; 
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Team = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 1,
      name: 'DR. ARVIND SHARMA',
      role: 'CHAIRMAN',
      title: 'Chairman of Elite Global Group',
      description: 'A visionary education leader with over three decades of service, Shri M. Komariah has played a pivotal role in shaping child-first institutions rooted in values and academic excellence. His leadership philosophy blends discipline, innovation, and care, ensuring every campus delivers a safe and progressive environment for children.',
      bullets: ['30+ Years in Education', '25+ Campuses Built', 'Values-Driven Leadership'],
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: '#E8F5E9',
      tagColor: '#059669',
      imgRight: false,
    },
    {
      id: 2,
      name: 'SIDDHARTH REDDY',
      role: 'CEO & DIRECTOR',
      title: 'CEO & Director of Elite Global',
      description: 'Founder and CEO of Born Bright, Shri Yasasvi Malka is a young entrepreneur committed to nation-building through meaningful education. Trained in civil engineering at BITS Pilani, Dubai Campus, with further study in business psychology and entrepreneurship at University College London, he combines innovation and leadership.',
      bullets: ['Founder & CEO, Born Bright', 'BITS Pilani (Dubai) + UCL', 'Investor & Growth Strategist'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: '#E3F2FD',
      tagColor: '#0B1E4A',
      imgRight: true,
    },
    {
      id: 3,
      name: 'DR. ANJALI MENON',
      role: 'DIRECTOR',
      title: 'Director of Elite Global Academy',
      description: 'Mrs. M. Pallavi drives quality-focused school systems with a strong emphasis on holistic child development, teacher empowerment, and parent trust. She champions joyful learning environments where creativity, confidence, and character development go hand in hand.',
      bullets: ['Holistic Development', 'Teacher Empowerment', 'Parent Trust Builder'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: '#E0F2F1',
      tagColor: '#00897B',
      imgRight: false,
    },
    {
      id: 4,
      name: 'RAJESH VARMA',
      role: 'DIRECTOR',
      title: 'Director of Elite Global Group',
      description: 'Shri Thribhuvana Malka brings a systems-first mindset to educational leadership, focusing on school culture, execution discipline, and long-term institutional consistency across campuses. He works closely with academic and operations teams to convert vision into measurable outcomes.',
      bullets: ['Systems-First Mindset', 'Execution Discipline', 'Institutional Consistency'],
      image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: '#FFF3E0',
      tagColor: '#E65100',
      imgRight: true,
    },
    {
      id: 5,
      name: 'KIRAN KUMAR',
      role: 'DIRECTOR & GEN SECRETARY',
      title: 'Director of Elite Group of Schools',
      description: 'An Ivy League intern from the University of Pennsylvania and a graduate of the University of the Sciences, Philadelphia, Mr. A. Sushil Kumar brings international exposure and interdisciplinary insight to educational leadership. He drives a learner-centered, research-informed approach.',
      bullets: ['Univ of Pennsylvania Intern', 'Scientific Informatics', 'Global Standards in Learning'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: '#F3E5F5',
      tagColor: '#6A1B9A',
      imgRight: false,
    }
  ];

  const scrollToLastMember = () => {
    const lastMemberIndex = teamMembers.length - 1;
    const element = document.getElementById(`member-${teamMembers[lastMemberIndex].id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-gray-50 font-sans">
      
      {/* Hero Section */}
      <section className="w-full flex flex-col lg:flex-row bg-[#2C3E50] min-h-[85vh] lg:min-h-[calc(100vh-80px)]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 lg:p-20 text-white z-10">
          <div className="inline-block border border-white/40 rounded-full px-4 py-1.5 text-xs font-bold w-max mb-5 tracking-wider">
            Leadership Team
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight">
            Meet the Visionaries Behind Elite Global
          </h1>
          <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">
            Our leadership team brings decades of educational insight, child-first values, and long-term institution-building experience to every Elite Global Academy campus.
          </p>
          
          <div className="flex flex-wrap gap-4 text-xs font-bold mb-8">
            <span className="flex items-center gap-2"><FaCircle className="text-[#059669] text-[8px]" /> 30+ Years in Education</span>
            <span className="flex items-center gap-2"><FaCircle className="text-[#059669] text-[8px]" /> 25+ Campuses Guided</span>
            <span className="flex items-center gap-2"><FaCircle className="text-[#059669] text-[8px]" /> Child-First Leadership</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToLastMember} 
              className="bg-[#059669] hover:bg-[#047855] transition text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg"
            >
              Meet the Leadership
            </button>
            <button 
              onClick={() => navigate('/about')} 
              className="border border-white/30 hover:border-white transition text-white px-6 py-3 rounded-xl font-bold text-base"
            >
              About Elite Global
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative">
          <img 
            src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="School Campus" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Sticky Stacking Cards Section  */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-0 pb-10">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              id={`member-${member.id}`}
              className="sticky top-28 min-h-[45vh] w-full shadow-[0_-5px_30px_rgb(0,0,0,0.08)] rounded-[2rem] overflow-hidden flex flex-col md:flex-row mb-12 border border-black/5"
              style={{ backgroundColor: member.bgColor, zIndex: index + 10 }}
            >
              
              {/* Image Container */}
              <div className={`w-full md:w-4/12 h-[35vh] md:h-auto relative ${member.imgRight ? 'md:order-2' : 'md:order-1'}`}>
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>

              {/* Text Information Container */}
              <div className={`w-full md:w-8/12 p-6 md:p-10 lg:p-14 flex flex-col justify-center ${member.imgRight ? 'md:order-1' : 'md:order-2'}`}>
                
                <span 
                  className="inline-block px-4 py-1 text-white text-[11px] font-black rounded-full w-max mb-4 tracking-widest uppercase"
                  style={{ backgroundColor: member.tagColor }}
                >
                  {member.role}
                </span>
                
                <h2 className="text-3xl lg:text-4xl font-black text-[#0B1E4A] mb-1 uppercase tracking-tight">
                  {member.name}
                </h2>
                
                <h4 className="text-base font-bold text-[#0B1E4A]/80 mb-4 border-b border-black/10 pb-3">
                  {member.title}
                </h4>
                
                <p className="text-gray-700 text-base mb-6 leading-relaxed font-medium">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-black text-gray-800 bg-white/40 p-3 rounded-lg w-max">
                  {member.bullets.map((bullet, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <FaCircle style={{ color: member.tagColor }} className="text-[8px]" /> 
                      {bullet}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Stats Row with Counting Animation */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl lg:text-5xl font-black text-[#0B1E4A] mb-1">
              <AnimatedNumber end={30} />
            </h3>
            <p className="text-gray-600 font-bold text-sm">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl lg:text-5xl font-black text-[#0B1E4A] mb-1">
              <AnimatedNumber end={25} />
            </h3>
            <p className="text-gray-600 font-bold text-sm">School Campuses</p>
          </div>
          <div>
            <h3 className="text-4xl lg:text-5xl font-black text-[#0B1E4A] mb-1">
              <AnimatedNumber end={15000} />
            </h3>
            <p className="text-gray-600 font-bold text-sm">Students Nurtured</p>
          </div>
          <div>
            <h3 className="text-4xl lg:text-5xl font-black text-[#0B1E4A] mb-1">
              <AnimatedNumber end={500} />
            </h3>
            <p className="text-gray-600 font-bold text-sm">Trained Educators</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-[#0B1E4A] rounded-[2rem] p-10 lg:p-14 flex flex-col md:flex-row justify-between items-center shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          
          <div className="w-full md:w-2/3 relative z-10 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-black text-white mb-3">Learn More About Elite Global</h2>
            <p className="text-white/80 text-base font-medium leading-relaxed max-w-xl">
              See how our leadership vision translates into quality early-years education across all Elite Global Academy campuses.
            </p>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col sm:flex-row gap-3 justify-center md:justify-end relative z-10">
            <button 
              onClick={() => navigate('/about')}
              className="bg-[#059669] text-white font-bold text-base px-6 py-3 rounded-full hover:bg-[#047855] transition shadow-lg"
            >
              About Elite Global
            </button>
            <button 
              onClick={() => navigate('/gallery')}
              className="border-2 border-white/50 text-white font-bold text-base px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              View Gallery
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;