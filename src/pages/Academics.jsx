import React, { useEffect, useRef } from "react";
import {
  Book, Palette, Music, Lightbulb, Microscope,
  Languages, Calculator, Brain, Award, CheckCircle
} from "lucide-react";

const useReveal = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(48px);
        transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal.from-left {
        transform: translateX(-60px);
      }
      .reveal.from-right {
        transform: translateX(60px);
      }
      .reveal.visible {
        opacity: 1;
        transform: translate(0, 0);
      }
      .reveal-delay-1 { transition-delay: 0.1s; }
      .reveal-delay-2 { transition-delay: 0.2s; }
      .reveal-delay-3 { transition-delay: 0.3s; }
      .reveal-delay-4 { transition-delay: 0.4s; }
      .reveal-delay-5 { transition-delay: 0.5s; }
      .reveal-delay-6 { transition-delay: 0.6s; }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);
};

const AcademicsPage = () => {
  useReveal();

  const SubjectCard = ({ icon: Icon, title, delay = "" }) => (
    <div className={`reveal ${delay} flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}>
      <div className="p-2 bg-[#B1965A]/10 rounded-lg">
        <Icon size={18} className="text-[#B1965A]" />
      </div>
      <span className="text-[#0B1E4A] font-semibold text-sm">{title}</span>
    </div>
  );

  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* 1. HERO BANNER */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000"
          alt="Academics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1E4A]/75 flex flex-col justify-center px-10 md:px-24">
          <div className="max-w-4xl">
            <div className="reveal flex items-center gap-2 text-[#B1965A] text-sm font-bold uppercase tracking-widest mb-4">
              <span>Home</span>
              <span className="w-4 h-[1px] bg-[#B1965A]"></span>
              <span className="text-white/60">Academics</span>
            </div>
            <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Nurturing <span className="text-[#B1965A]">Brilliance</span> <br />
              Every Single Day
            </h1>
            <p className="reveal reveal-delay-2 text-gray-300 mt-6 text-lg md:text-xl max-w-2xl font-light leading-relaxed border-l-2 border-[#B1965A] pl-6">
              Our academic framework is designed to foster a love for learning
              through a balanced blend of CBSE standards and modern pedagogical innovation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white clip-path-slant">
          <style jsx>{`
            .clip-path-slant { clip-path: polygon(0 100%, 100% 100%, 100% 0); }
          `}</style>
        </div>
      </div>

      {/* 2. CURRICULUM SECTION */}
      <section className="py-2 px-6 md:py-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-left">

          <div className="reveal flex items-center gap-2 mb-4">
            <Award size={20} className="text-[#B1965A]" />
            <span className="text-[#B1965A] font-bold uppercase tracking-[0.2em] text-xs">
              Academic Excellence
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E4A]">
            Our <span className="text-[#B1965A]">Curriculum</span> Framework
          </h2>

          <div className="reveal reveal-delay-2 h-1 w-20 bg-[#B1965A] mt-5 rounded-full"></div>

          <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed mt-8">
            <p className="reveal reveal-delay-3">
              At Elite Global Academy, we follow a comprehensive curriculum that blends
              international standards with the rigorous academic foundations of the CBSE board.
              Our approach is designed to spark curiosity and foster critical thinking from
              the very first day.
            </p>

            <p className="reveal reveal-delay-4">
              We believe that education should be an immersive journey. By integrating
              technology, art, and hands-on activities into our core subjects, we ensure
              that every student finds their unique path to excellence.Through project-based learning, interactive classroom engagement, and modern teaching
              tools, we help students develop communication skills, confidence, and problem-solving
              ability that prepares them for future academic challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ACADEMIC WINGS HEADER */}
      <section className="py-6 px-2 md:px-16 bg-gray-50">
        <div className="max-w-5xl pl-10 md:pl-24">

          <h2 className="reveal text-4xl font-bold text-[#0B1E4A]">
            Academic <span className="text-[#B1965A]">Wings</span>
          </h2>

          <p className="reveal reveal-delay-1 text-gray-600 mt-4 text-lg italic">
            A structured learning journey from Foundation to Upper Primary.
          </p>

          <div className="reveal reveal-delay-2 h-1 w-24 bg-[#B1965A] mt-6 rounded-full"></div>

        </div>
      </section>

      {/* 3. FOUNDATION WING (IMAGE LEFT) */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="reveal from-left w-full md:w-1/2 hover:scale-[1.02] transition-transform duration-500">
            <div className="relative">
              <img
                src="https://blsinternationalschool.com/Bls@Admin/Menu_Submenu_Banner/nursery.JPG"
                alt="Foundation Wing"
                className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#B1965A] text-white p-4 rounded-2xl hidden md:block">
                <p className="text-3xl font-bold">Pre-KG</p>
                <p className="text-sm uppercase tracking-widest">To UKG</p>
              </div>
            </div>
          </div>
          <div className="reveal from-right w-full md:w-1/2">
            <h3 className="text-[#B1965A] font-bold uppercase tracking-widest text-sm mb-3">Early Years</h3>
            <h2 className="text-4xl font-bold text-[#0B1E4A] mb-6">Foundation Wing</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Following a play-based Montessori approach, we focus on sensory development,
              motor skills, and social interaction, ensuring first steps are filled with wonder.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SubjectCard icon={Music} title="Phonics & Rhymes" delay="reveal-delay-1" />
              <SubjectCard icon={Palette} title="Art & Craft" delay="reveal-delay-2" />
              <SubjectCard icon={Book} title="Storytelling" delay="reveal-delay-3" />
              <SubjectCard icon={Lightbulb} title="Sensory Play" delay="reveal-delay-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOWER PRIMARY (IMAGE RIGHT) */}
      <section className="py-20 px-6 md:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="reveal from-left w-full md:w-1/2">
            <h3 className="text-[#B1965A] font-bold uppercase tracking-widest text-sm mb-3">Grades 1 - 2</h3>
            <h2 className="text-4xl font-bold text-[#0B1E4A] mb-6">Lower Primary Wing</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Transitioning to formal academic learning through interactive methods,
              encouraging students to connect classroom lessons with the real world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SubjectCard icon={Languages} title="English" delay="reveal-delay-1" />
              <SubjectCard icon={Calculator} title="Mathematics" delay="reveal-delay-2" />
              <SubjectCard icon={Microscope} title="EVS" delay="reveal-delay-3" />
              <SubjectCard icon={Brain} title="Life Skills" delay="reveal-delay-4" />
            </div>
          </div>
          <div className="reveal from-right w-full md:w-1/2 hover:scale-[1.02] transition-transform duration-500">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000"
                alt="Lower Primary"
                className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#B1965A] text-white p-4 rounded-2xl hidden md:block">
                <p className="text-3xl font-bold">1 - 2</p>
                <p className="text-sm uppercase tracking-widest">Lower Primary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UPPER PRIMARY (IMAGE LEFT) */}
      <section className="py-20 px-6 md:px-24 mb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="reveal from-left w-full md:w-1/2 hover:scale-[1.02] transition-transform duration-500">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000"
                alt="Upper Primary Wing"
                className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0B1E4A] text-white p-4 rounded-2xl hidden md:block">
                <p className="text-3xl font-bold">Grade 3-5</p>
                <p className="text-sm uppercase tracking-widest">Achievers</p>
              </div>
            </div>
          </div>
          <div className="reveal from-right w-full md:w-1/2">
            <h3 className="text-[#B1965A] font-bold uppercase tracking-widest text-sm mb-3">Grades 3 - 5</h3>
            <h2 className="text-4xl font-bold text-[#0B1E4A] mb-6">Upper Primary Wing</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Fostering independent thinking and research. Our curriculum becomes more
              conceptual, integrating technology and advanced problem-solving techniques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SubjectCard icon={Microscope} title="Science" delay="reveal-delay-1" />
              <SubjectCard icon={Calculator} title="Advanced Math" delay="reveal-delay-2" />
              <SubjectCard icon={Languages} title="Social Studies" delay="reveal-delay-3" />
              <SubjectCard icon={Brain} title="Coding / ICT" delay="reveal-delay-4" />
            </div>
          </div>
        </div>
      </section>

      {/* TEACHING METHODOLOGY SECTION */}
      <section className="py-12 px-6 bg-gradient-to-b from-white via-[#F9F6EF] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="reveal text-[#B1965A] font-bold uppercase tracking-widest text-sm mb-2">
              Our Approach
            </h3>
            <h2 className="reveal reveal-delay-1 text-4xl font-bold text-[#0B1E4A]">
              Teaching Methodology
            </h2>
            <div className="reveal reveal-delay-2 h-1 w-20 bg-[#B1965A] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="reveal reveal-delay-1 text-center p-8 bg-white rounded-2xl shadow-md border border-[#B1965A]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B1965A] to-[#0B1E4A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h4 className="text-[#0B1E4A] font-bold text-xl mb-3">Inquiry Based</h4>
              <p className="text-gray-500 text-sm">
                Encouraging students to ask questions and explore "why" behind every concept.
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal reveal-delay-2 text-center p-8 bg-white rounded-2xl shadow-md border border-[#B1965A]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B1965A] to-[#0B1E4A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Palette className="text-white" size={32} />
              </div>
              <h4 className="text-[#0B1E4A] font-bold text-xl mb-3">Play-Way Method</h4>
              <p className="text-gray-500 text-sm">
                Specifically for KG wings to make learning feel like a joyful adventure.
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal reveal-delay-3 text-center p-8 bg-white rounded-2xl shadow-md border border-[#B1965A]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B1965A] to-[#0B1E4A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Microscope className="text-white" size={32} />
              </div>
              <h4 className="text-[#0B1E4A] font-bold text-xl mb-3">Hands-on Learning</h4>
              <p className="text-gray-500 text-sm">
                Learning by doing through experiments, projects, and field activities.
              </p>
            </div>

            {/* Card 4 */}
            <div className="reveal reveal-delay-4 text-center p-8 bg-white rounded-2xl shadow-md border border-[#B1965A]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B1965A] to-[#0B1E4A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="text-white" size={32} />
              </div>
              <h4 className="text-[#0B1E4A] font-bold text-xl mb-3">Digital Integration</h4>
              <p className="text-gray-500 text-sm">
                Using smart boards and digital tools to enhance conceptual understanding.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* ACADEMIC CALENDAR SECTION */}
      <section className="py-12 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0B1E4A]">
              Academic <span className="text-[#B1965A]">Calendar</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg italic">
              Important dates, events, examinations and holidays for the academic year.
            </p>
            <div className="h-1 w-24 bg-[#B1965A] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* SINGLE CENTER CARD */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg border border-[#B1965A]/20 p-10 w-full md:w-[650px] text-center">

              <h3 className="text-2xl font-bold text-[#0B1E4A] mb-4">
                Session 2025 - 2026
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Download the official academic calendar to view school reopening dates,
                examination schedules, holidays, and major academic events for the year.
              </p>


              {/* Download Button */}
              <a
                href="/calendar.pdf"
                download
                className="mt-8 block w-full bg-[#B1965A] text-white font-bold py-3 rounded-xl hover:bg-[#9f844c] transition"
              >
                Download Academic Calendar
              </a>

              <p className="text-gray-500 text-xs mt-6">
                Note: Dates may be subject to minor changes depending on official announcements.
              </p>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;