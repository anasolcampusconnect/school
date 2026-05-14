import React from "react";
import { BookOpen, Target, Globe, Handshake } from "lucide-react";

const PrincipalMessage = () => {
  const values = [
    {
      title: "Excellence",
      des: "At Elite Global Academy, we encourage students to aim high and achieve academic excellence through dedication, smart learning, and continuous improvement in every subject.",
      icon: <BookOpen size={32} className="text-[#B1965A]" />,
      bg: "bg-yellow-50"
    },
    {
      title: "Discipline",
      des: "We believe discipline builds strong character. Our school promotes punctuality, responsibility, and respect, helping students develop habits that shape their future success.",
      icon: <Target size={32} className="text-[#B1965A]" />,
      bg: "bg-blue-50"
    },
    {
      title: "Leadership",
      des: "We provide opportunities for students to become confident leaders by participating in clubs, events, and team activities that strengthen decision-making and communication skills.",
      icon: <Globe size={32} className="text-[#B1965A]" />,
      bg: "bg-green-50"
    },
    {
      title: "Respect",
      des: "Respect is a core value in our school. We teach students to value diversity, treat everyone equally, and build a safe environment based on kindness and empathy.",
      icon: <Handshake size={32} className="text-[#B1965A]" />,
      bg: "bg-purple-50"
    },
  ];

  return (
    <div className="bg-gray-50 text-[#0B1E4A] font-sans">
      {/* HERO SECTION */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="https://t4.ftcdn.net/jpg/06/39/25/95/360_F_639259506_G3q5xWYFDHIIhxa8lg2NWSHLpOVcwKSP.jpg"
          alt="School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1E4A]/80 flex flex-col justify-center px-10 md:px-24">
          <div className="max-w-3xl border-l-4 border-[#B1965A] pl-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
              Message from the <span className="text-[#B1965A]">Principal</span>
            </h2>
            <p className="text-gray-300 mt-4 text-lg md:text-xl font-light">
              Establishing a foundation of excellence and integrity for the next generation.
            </p>
          </div>
        </div>
      </div>

      {/* PROFESSIONAL PRINCIPAL SECTION */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10 pb-20">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 flex flex-col md:row-auto md:flex-row ">

          {/* LEFT: PHOTO COLUMN */}
          <div className="w-full md:w-1/3 bg-[#0B1E4A]  border-r border-gray-100 p-10 flex flex-col items-center justify-center">
            <div className="relative p-2 border border-gray-200 rounded-sm">
              <img
                src="https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.jpg?s=612x612&w=0&k=20&c=xweBj18Ra0homW2Vvs20N27F2l6t-sOoYaeW5xdL5n0="
                alt="Dr. Ramesh Kumar"
                className="w-64 h-80 object-cover shadow-md grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              {/* Elegant Gold Accent Frame */}
              <div className="absolute inset-0 border-[6px] border-[#B1965A]/20 pointer-events-none m-4"></div>
            </div>

            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-[#B1965A] tracking-tight">
                Dr. Ramesh Kumar
              </h2>
              <p className="text-[#B1965A] font-semibold text-sm mt-1 uppercase tracking-wider">
                Principal
              </p>
              <div className="h-[2px] w-10 bg-[#B1965A] mx-auto my-4"></div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Ph.D. in Education <br />
                20+ Years of Academic Leadership
              </p>
            </div>
          </div>

          {/* RIGHT: MESSAGE CONTENT */}
          <div className="w-full md:w-2/3 p-10 md:p-16 bg-white flex flex-col">

            <h1 className="text-4xl font-bold text-[#0B1E4A] mb-8 leading-tight">
              A Heartfelt Welcome to <br /> Elite Global Academy
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
              <p className="font-semibold text-[#0B1E4A] italic border-l-2 border-[#B1965A] pl-4">
                "Education is not just about learning facts, but about building
                character, confidence, and a brighter future."
              </p>

              <p>
                It gives me immense pleasure to welcome you to <strong>Elite Global Academy</strong>.
                In today's rapidly evolving world, education must go beyond the traditional
                confines of textbooks. Our institution is dedicated to providing a quality
                experience that inspires curiosity, fosters creativity, and builds the
                resilience needed for the 21st century.
              </p>

              <p>
                We believe that every child is unique, possessing a distinct set of talents
                and potential. Our curriculum is designed to balance rigorous academic
                standards with a wide array of co-curricular opportunities. From the
                science lab to the sports field, we encourage our students to explore
                their passions and develop a lifelong love for learning.
              </p>

              <p>
                Character building remains at the heart of our mission. We focus on
                cultivating discipline, empathy, and strong moral values, ensuring our
                students grow into compassionate global citizens. By integrating modern
                technology with traditional values, we prepare our students to lead
                with integrity in an interconnected world.
              </p>

              <p>
                The success of our students is a result of a strong partnership between
                the school, the students, and the parents. I invite you to join us in
                this journey of excellence, as we work together to nurture the
                visionary leaders of tomorrow.
              </p>

              <div className="pt-10">
                <p className="font-bold text-[#0B1E4A]">Warm Regards,</p>
                <div className="mt-2">
                  <p className="font-serif text-2xl text-[#0B1E4A]">Dr. Ramesh Kumar</p>
                  <p className="text-sm text-[#B1965A]">Principal, Elite Global Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE VALUES SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-center text-[#0B1E4A] mb-12 uppercase tracking-widest">
          Our Core Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} border border-gray-200 p-8 rounded-sm shadow-sm hover:shadow-lg hover:scale-[1.07] transition duration-300 ease-in-out`}
            >
              <div className="mb-6 text-[#B1965A]">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#0B1E4A] mb-3 uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;