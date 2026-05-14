import React from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Trees,
  Library,
  Computer,
  Bus,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const facilities = [
  {
    title: "Smart Classrooms",
    icon: <MonitorSmartphone size={28} />,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80",
    description:
      "Our smart classrooms blend technology with traditional learning, making lessons interactive, visual, and deeply engaging for every student.",
    quote: "“Technology in education opens doors to limitless learning.”",
    bg: "from-[#f8f5ff] to-[#eef4ff]",
    accent: "text-[#6D5BD0]",
    blob: "bg-[#dcd6ff]/40",
    shape: "rounded-[45%_55%_60%_40%/50%_50%_60%_40%]",
  },
  {
    title: "Play Area",
    icon: <Trees size={28} />,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
    description:
      "A vibrant outdoor space designed to encourage physical activity, teamwork, creativity, and healthy childhood development through joyful play.",
    quote: "“Play is the highest form of research for children.”",
    bg: "from-[#f4fff7] to-[#eefcf6]",
    accent: "text-[#2f8f6a]",
    blob: "bg-[#d7f5e7]/40",
    shape: "rounded-[60%_40%_50%_50%/45%_55%_45%_55%]",
  },
  {
    title: "Library",
    icon: <Library size={28} />,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80",
    description:
      "A peaceful learning sanctuary filled with books, knowledge, and imagination—helping students develop reading habits and critical thinking.",
    quote: "“A library is the heart of a school.”",
    bg: "from-[#fff7fb] to-[#fff0f6]",
    accent: "text-[#cc5a8b]",
    blob: "bg-[#ffdbe9]/40",
    shape: "rounded-[50%_50%_40%_60%/60%_40%_50%_50%]",
  },
  {
    title: "Computer Lab",
    icon: <Computer size={28} />,
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80",
    description:
      "Equipped with modern systems and guided learning tools, our lab prepares students for a digital future with strong technical foundations.",
    quote: "“Digital literacy is the new language of success.”",
    bg: "from-[#fffaf2] to-[#fff6ea]",
    accent: "text-[#d68b2d]",
    blob: "bg-[#ffe8c4]/40",
    shape: "rounded-[55%_45%_55%_45%/45%_55%_60%_40%]",
  },
  {
    title: "Transport",
    icon: <Bus size={28} />,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
    description:
      "Safe, reliable, and well-managed transport services ensuring students reach school and home comfortably and on time every day.",
    quote: "“Safety and comfort are our first priority.”",
    bg: "from-[#fdf4f8] to-[#fff1f4]",
    accent: "text-[#d8618d]",
    blob: "bg-[#ffd9e6]/40",
    shape: "rounded-[45%_55%_45%_55%/55%_45%_50%_50%]",
  },
  {
    title: "Safety & Security",
    icon: <ShieldCheck size={28} />,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
    description:
      "A fully secured campus with trained staff and monitoring systems to ensure a safe, protected, and worry-free learning environment.",
    quote: "“A safe school is the foundation of confident learning.”",
    bg: "from-[#f2fbff] to-[#edf8ff]",
    accent: "text-[#3a86c8]",
    blob: "bg-[#d7edff]/40",
    shape: "rounded-[50%_50%_60%_40%/40%_60%_50%_50%]",
  },
];

export default function Facilities() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* HERO */}
      <div className="relative min-h-[500px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">

        {/* School background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
        </div>

        {/* Floating soft blobs */}
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-16 left-20 w-40 h-40 bg-[#dcd6ff]/40 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-20 right-20 w-44 h-44 bg-[#ffe5ef]/40 rounded-full blur-3xl"
        />

        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-24 left-1/3 text-[#d6a400]"
        >
          <Sparkles size={24} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute top-28 right-1/3 text-[#cc5a8b]"
        >
          <Star size={22} />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10">
          <div className="mb-6 px-6 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-md text-[#6D5BD0] font-medium">
            ✨ Explore Our Facilities
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#1E2A52]">
            Inspiring Spaces
            <br />
            For Young Learners
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-8">
            Thoughtfully designed environments that nurture learning,
            creativity, confidence, and joyful growth.
          </p>
        </div>

        {/* Elegant wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 180"
            className="w-full h-28 fill-white"
          >
            <path d="M0,128L60,117.3C120,107,240,85,360,80C480,75,600,85,720,96C840,107,960,117,1080,112C1200,107,1320,85,1380,74.7L1440,64V180H0Z" />
          </svg>
        </div>
      </div>

      {/* Timeline */}
      <div className="absolute left-1/2 top-[500px] bottom-0 hidden lg:block w-[4px] rounded-full bg-gradient-to-b from-[#dcd6ff] via-[#ffdbe9] to-[#d7edff]" />

      {/* FACILITIES */}
      {facilities.map((item, index) => (
        <section
          key={index}
          className={`bg-gradient-to-r ${item.bg} py-16 px-6 md:px-16 relative`}
        >
          {/* Glow blob */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div
              className={`w-96 h-96 ${item.blob} rounded-full blur-3xl`}
            />
          </div>

          {/* Section number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[140px] md:text-[180px] font-bold text-black/[0.03]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div
            className={`max-w-6xl mx-auto flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-12 relative z-10`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className={`relative ${item.shape} overflow-hidden shadow-xl w-[260px] h-[260px] md:w-[330px] md:h-[330px] border-8 border-white`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl text-center lg:text-left"
            >
              <div
                className={`inline-flex p-4 rounded-full bg-white/80 backdrop-blur-md shadow-lg ${item.accent}`}
              >
                {item.icon}
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#1E2A52]">
                {item.title}
              </h2>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                {item.description}
              </p>

              <div className="mt-5 h-1.5 w-16 rounded-full bg-[#dcd6ff] mx-auto lg:mx-0" />
            </motion.div>
          </div>
        </section>
      ))}
    </section>
  );
}