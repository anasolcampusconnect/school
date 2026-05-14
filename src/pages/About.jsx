import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  BookOpen,
  School,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {

  const history = [

    {
      icon: <School size={20} />,
      title: "Founded In 2005",
      description:
        "Elite Global Academy began with a vision to create innovative and future-ready leaders.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2074&auto=format&fit=crop",
      bg: "bg-[#DCE8F2]",
      text: "text-[#28496B]",
    },

    {
      icon: <BookOpen size={20} />,
      title: "Academic Innovation",
      description:
        "Smart classrooms and modern digital learning transformed the student experience.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
      bg: "bg-[#DDF3EC]",
      text: "text-[#1F7A6D]",
    },

    {
      icon: <Trophy size={20} />,
      title: "Achievements & Growth",
      description:
        "Students achieved excellence in academics, sports, arts, and leadership.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      bg: "bg-[#F8E8D5]",
      text: "text-[#C07A12]",
    },

    {
      icon: <GraduationCap size={20} />,
      title: "Future Ready Vision",
      description:
        "Building confident students with creativity, leadership, and innovation.",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
      bg: "bg-[#EADFF8]",
      text: "text-[#7A4CC2]",
    },

  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === history.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-[#F4F4F4] overflow-hidden font-sans">

      {/* HERO SECTION */}

      <section className="w-full min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 min-h-screen w-full">

          {/* LEFT SIDE */}

          <div className="bg-[#1E3A5F] text-white flex items-center justify-center px-6 md:px-10 py-14">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[520px] w-full"
            >

              <span className="border border-white/30 px-4 py-2 rounded-full text-[10px] tracking-[4px] font-bold inline-block mb-6">
                ABOUT ELITE GLOBAL
              </span>

              <h1
                className="text-4xl md:text-6xl font-black leading-[1.05]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >

                Inspiring
                <br />
                Future Leaders
                <br />

                <span className="text-[#FFD166]">
                  Through Education
                </span>

              </h1>

              <p className="text-white/80 text-[15px] leading-8 mt-7 max-w-[480px]">

                Elite Global Academy empowers students
                through innovation, creativity,
                leadership, and future-ready learning
                experiences designed for tomorrow.

              </p>

              <div className="flex flex-wrap gap-5 mt-9 text-sm font-semibold">

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFD166]"></span>
                  30+ Years
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#10B981]"></span>
                  25+ Campuses
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F472B6]"></span>
                  Child-First Learning
                </div>

              </div>

            </motion.div>

          </div>

          {/* RIGHT IMAGE SLIDER */}

          <div className="w-full h-full overflow-hidden">

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full"
            >

              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop"
                  alt="Students"
                  className="w-full h-screen object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Campus"
                  className="w-full h-screen object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070&auto=format&fit=crop"
                  alt="Library"
                  className="w-full h-screen object-cover"
                />
              </SwiperSlide>

            </Swiper>

          </div>

        </div>

      </section>

      {/* SCHOOL HISTORY */}

      <section className="px-4 lg:px-10 py-20 min-h-screen flex items-center">

        <div className="max-w-5xl mx-auto w-full">

          <div className="text-center mb-16">

            <span className="text-[#5B8C85] tracking-[6px] uppercase text-xs font-bold">
              OUR JOURNEY
            </span>

            <h2
              className="text-5xl md:text-6xl font-black mt-5 text-[#28496B]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              School History
            </h2>

          </div>

          <AnimatePresence mode="wait">

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.7 }}
              className={`${history[activeIndex].bg} rounded-[30px] overflow-hidden shadow-2xl grid lg:grid-cols-2 items-center`}
            >

              <div className="p-8 flex justify-center">

                <div className="w-full max-w-[340px] h-[240px] rounded-[24px] overflow-hidden shadow-xl">

                  <img
                    src={history[activeIndex].image}
                    alt={history[activeIndex].title}
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>

              <div className="p-8 lg:p-10">

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/70 mb-6 ${history[activeIndex].text}`}
                >
                  {history[activeIndex].icon}
                </div>

                <h3
                  className={`text-3xl md:text-4xl font-black mb-5 leading-tight ${history[activeIndex].text}`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {history[activeIndex].title}
                </h3>

                <p className="text-[#4B5563] text-[14px] leading-8">
                  {history[activeIndex].description}
                </p>

                <div className="flex gap-3 mt-8">

                  {history.map((_, index) => (

                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`transition-all duration-500 rounded-full ${
                        activeIndex === index
                          ? "w-12 h-3 bg-[#355070]"
                          : "w-3 h-3 bg-gray-300"
                      }`}
                    ></button>

                  ))}

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>

      {/* MISSION & VISION */}

      <section className="px-4 lg:px-10 py-16 bg-[#F7F8FA] min-h-screen flex items-center">

        <div className="max-w-5xl mx-auto w-full">

          <div className="text-center mb-12">

            <span className="text-[#5B8C85] tracking-[5px] uppercase text-[10px] font-bold">
              OUR PURPOSE
            </span>

            <h2
              className="text-4xl md:text-5xl font-black mt-4 text-[#28496B]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Mission & Vision
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[28px] bg-[#DCE8F2] shadow-xl"
            >

              <div className="h-[180px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-6 relative">

                <div className="absolute -top-7 right-6 w-14 h-14 rounded-2xl bg-[#28496B] flex items-center justify-center shadow-lg">

                  <BookOpen size={24} className="text-white" />

                </div>

                <span className="text-[#28496B] uppercase tracking-[4px] text-[10px] font-bold">
                  OUR MISSION
                </span>

                <h3 className="text-2xl font-black text-[#28496B] mt-4 leading-tight">
                  Learning Beyond
                  Boundaries
                </h3>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[28px] bg-[#E7F4ED] shadow-xl"
            >

              <div className="h-[180px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Vision"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-6 relative">

                <div className="absolute -top-7 right-6 w-14 h-14 rounded-2xl bg-[#10B981] flex items-center justify-center shadow-lg">

                  <GraduationCap size={24} className="text-white" />

                </div>

                <span className="text-[#10B981] uppercase tracking-[4px] text-[10px] font-bold">
                  OUR VISION
                </span>

                <h3 className="text-2xl font-black text-[#1F7A6D] mt-4 leading-tight">
                  Building Future
                  Global Leaders
                </h3>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* PRINCIPAL MESSAGE */}

      <section className="px-4 lg:px-10 py-16 bg-[#F4F6FB] min-h-screen flex items-center">

        <div className="max-w-5xl mx-auto w-full">

          <div className="text-center mb-12">

            <span className="text-[#5B8C85] tracking-[5px] uppercase text-[10px] font-bold">
              LEADERSHIP MESSAGE
            </span>

            <h2
              className="text-4xl md:text-5xl font-black mt-4 text-[#28496B]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Principal’s Message
            </h2>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 rounded-[28px] overflow-hidden shadow-2xl bg-white"
          >

            <div className="bg-[#DCE8F2] flex items-center justify-center p-6">

              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
                alt="Principal"
                className="w-[240px] h-[320px] object-cover rounded-[24px] shadow-2xl border-4 border-white"
              />

            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center">

              <h3
                className="text-2xl md:text-3xl font-black text-[#28496B] leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Empowering Every Student
                To Shine Bright
              </h3>

              <p className="text-[#4B5563] text-[14px] leading-8 mt-6">

                At Elite Global Academy, we believe education
                is about building confidence, creativity,
                leadership, and strong values.

              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* MANAGEMENT TEAM */}

      <section className="px-4 lg:px-10 py-20 bg-[#F8FAFC] min-h-screen flex items-center">

        <div className="max-w-6xl mx-auto w-full">

          <div className="text-center mb-14">

            <span className="text-[#5B8C85] tracking-[5px] uppercase text-[10px] font-bold">
              OUR LEADERSHIP
            </span>

            <h2
              className="text-4xl md:text-5xl font-black mt-4 text-[#28496B]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Management & Team
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-xl group"
            >

              <div className="h-[320px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Director"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-black text-[#28496B]">
                  Emma Johnson
                </h3>

                <p className="text-[#10B981] text-sm font-semibold mt-2">
                  Academic Director
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-xl group"
            >

              <div className="h-[320px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                  alt="Vice Principal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-black text-[#28496B]">
                  Michael Carter
                </h3>

                <p className="text-[#F59E0B] text-sm font-semibold mt-2">
                  Vice Principal
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-xl group"
            >

              <div className="h-[320px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
                  alt="Coordinator"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-black text-[#28496B]">
                  Sophia Lee
                </h3>

                <p className="text-[#8B5CF6] text-sm font-semibold mt-2">
                  Student Coordinator
                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-xl group"
            >

              <div className="h-[320px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                  alt="Innovation Head"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-black text-[#28496B]">
                  Daniel Smith
                </h3>

                <p className="text-[#EF4444] text-sm font-semibold mt-2">
                  Innovation Head
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;