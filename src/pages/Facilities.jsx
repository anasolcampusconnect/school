import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MonitorSmartphone,
  Trees,
  Library,
  Computer,
  Bus,
  ShieldCheck,
  Sparkles,
  Heart,
  GraduationCap,
  Star,
  ArrowRight,
  Compass,
  BookOpen,
  Paintbrush,
  CloudSun,
  School,
  CalendarDays,
  Users,
  Trophy,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const facilities = [
  {
    title: "Smart Classrooms",
    icon: <MonitorSmartphone size={24} />,
    color: "from-blue-500 to-indigo-600",
    gradient: "from-blue-50 to-indigo-50",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80",
    desc:
      "Interactive digital classrooms where lessons come alive through visuals, animations, and activity-based learning.",
    story: "Every lesson becomes an adventure with touch-enabled smart boards and immersive audio-visual tools.",
    funFact: "🎯 40% better concept retention through visual learning",
  },
  {
    title: "Play & Discovery Zone",
    icon: <Trees size={24} />,
    color: "from-green-400 to-emerald-600",
    gradient: "from-green-50 to-emerald-50",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
    desc:
      "A vibrant outdoor space designed to encourage teamwork, creativity, and healthy physical development.",
    story: "Climbing, sliding, exploring — every play moment builds confidence and friendship.",
    funFact: "🤸‍♂️ 6 different zones for motor skill development",
  },
  {
    title: "Knowledge Library",
    icon: <Library size={24} />,
    color: "from-purple-500 to-fuchsia-600",
    gradient: "from-purple-50 to-fuchsia-50",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80",
    desc:
      "A peaceful reading haven filled with storybooks, moral stories, and knowledge-rich resources for young minds.",
    story: "A magical corner where stories whisper and imagination takes flight.",
    funFact: "📚 Over 5,000+ curated books for every age group",
  },
  {
    title: "Digital Lab",
    icon: <Computer size={24} />,
    color: "from-cyan-500 to-sky-600",
    gradient: "from-cyan-50 to-sky-50",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80",
    desc:
      "Early exposure to technology helping children build confidence in computers, logic, and problem-solving.",
    story: "Future coders and innovators start their journey here with playful tech exploration.",
    funFact: "💻 1:1 student-device ratio for hands-on learning",
  },
  {
    title: "Safe Transport System",
    icon: <Bus size={24} />,
    color: "from-orange-400 to-amber-600",
    gradient: "from-orange-50 to-amber-50",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
    desc:
      "Well-managed transport with trained staff ensuring safe, punctual, and comfortable travel for every child.",
    story: "Every journey to school is filled with safety, care, and cheerful smiles.",
    funFact: "🚍 GPS-tracked fleet with female attendants",
  },
  {
    title: "Campus Safety",
    icon: <ShieldCheck size={24} />,
    color: "from-rose-500 to-pink-600",
    gradient: "from-rose-50 to-pink-50",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
    desc:
      "A fully monitored campus with CCTV, trained staff, and child-first safety policies for complete peace of mind.",
    story: "Your child's safety is our heartbeat — every corner, every moment.",
    funFact: "🛡️ 24/7 CCTV surveillance + biometric access",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Facilities() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section className="relative bg-white overflow-hidden">

      {/* ========== ATTRACTIVE HEADER SECTION (No Navbar) ========== */}
      <div className="relative">
        {/* Top Bar with contact info */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-3 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
            <div className="flex items-center gap-5 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <MapPin size={14} /> <span>123 Education Ave, Knowledge City</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} /> <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} /> <span>info@brightfuture.edu</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1">📅 Mon-Fri: 8AM - 3PM</span>
              <span className="flex items-center gap-1">🎓 Since 1995</span>
            </div>
          </div>
        </div>

        {/* Hero Section with Animated Elements */}
        <div className="relative text-center py-32 px-6 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          {/* Animated Background Shapes */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-yellow-200/30 rounded-full blur-3xl"
          />
          
          {/* Floating Stars */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400/50"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * 400 + 100,
              }}
              animate={{ 
                y: [null, -30, 0, 30, 0],
              }}
              transition={{ 
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60 + 10}%`,
              }}
            >
              <Star size={12 + Math.random() * 8} fill="currentColor" />
            </motion.div>
          ))}

          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2.5 rounded-2xl shadow-lg">
              <School className="text-white" size={32} />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Bright Future
              </h2>
              <p className="text-xs text-slate-500">International School</p>
            </div>
          </motion.div>

          {/* Floating Mascot / Character */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-10 top-1/3 hidden lg:block"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl">🦉</span>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-lg text-xs font-semibold text-orange-500 whitespace-nowrap">
                Wise Owl 🦉
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm shadow-lg rounded-full text-sm text-indigo-600 font-medium border border-indigo-100">
              <Sparkles size={18} className="text-yellow-500" />
              Top-Rated International School
              <Sparkles size={18} className="text-yellow-500" />
            </div>

            {/* Main Heading with Animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-5xl md:text-7xl lg:text-8xl font-extrabold"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                World-Class
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-transparent bg-clip-text">
                School Facilities
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed"
            >
              We believe education is not just about classrooms — it is about experiences,
              environment, emotions, and growth. Our campus is designed to nurture every
              child's curiosity, confidence, and creativity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition"
              >
                Explore Our Facilities <Compass size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-indigo-600 rounded-full font-semibold shadow-md hover:shadow-lg transition border border-indigo-200"
              >
                Watch Virtual Tour <ChevronRight size={18} />
              </motion.button>
            </motion.div>

            {/* Achievement Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
            >
              {[
                { value: "25+", label: "Years of Excellence", icon: <Trophy className="text-yellow-500" size={24} /> },
                { value: "2,500+", label: "Happy Students", icon: <Users className="text-blue-500" size={24} /> },
                { value: "50+", label: "Expert Faculty", icon: <GraduationCap className="text-purple-500" size={24} /> },
                { value: "15+", label: "Awards Won", icon: <Star className="text-amber-500" size={24} /> },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 cursor-pointer z-20 hidden md:block"
      >
        <div className="w-8 h-12 border-2 border-indigo-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-indigo-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* 💡 VISION SECTION with Stats */}
      <div className="max-w-6xl mx-auto text-center px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-[#1E2A52]">
              A Place Where Children Don't Just Study — They <span className="text-indigo-600">Grow</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-6 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our facilities are thoughtfully designed to create a balance between academics,
            creativity, physical activity, and emotional well-being. Every corner of the
            campus inspires learning through experience.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-8 h-8" />, text: "Child-Centered Learning", value: "100%", color: "text-rose-500" },
              { icon: <Star className="w-8 h-8" />, text: "Modern Infrastructure", value: "25+", color: "text-amber-500" },
              { icon: <GraduationCap className="w-8 h-8" />, text: "Holistic Development", value: "8+", color: "text-emerald-500" },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${item.color} flex justify-center mb-4 group-hover:scale-110 transition`}>
                  {item.icon}
                </div>
                <p className="text-3xl font-bold text-slate-800">{item.value}</p>
                <p className="mt-2 font-semibold text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 🌟 FEATURE HIGHLIGHTS with Icons */}
      <div className="bg-gradient-to-r from-indigo-50 via-white to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <BookOpen />, label: "Activity-Based", color: "bg-blue-100 text-blue-600" },
              { icon: <Paintbrush />, label: "Creative Spaces", color: "bg-purple-100 text-purple-600" },
              { icon: <CloudSun />, label: "Eco-Friendly", color: "bg-green-100 text-green-600" },
              { icon: <Heart />, label: "Safe Environment", color: "bg-rose-100 text-rose-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2"
              >
                <div className={`p-3 rounded-2xl ${item.color} shadow-sm`}>
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔄 LEARNING JOURNEY MAP */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-center text-3xl md:text-4xl font-bold text-[#1E2A52] mb-4">
            The Learning Journey <span className="text-indigo-600">Inside Our Campus</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
            From curiosity to mastery — every step is an adventure
          </motion.p>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 hidden md:block -translate-y-1/2" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              {facilities.slice(0, 4).map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="bg-white shadow-xl rounded-2xl p-6 w-56 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-indigo-200">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition`}>
                      {item.icon}
                    </div>
                    <p className="mt-4 font-bold text-slate-800">{item.title}</p>
                    <div className="w-12 h-0.5 bg-indigo-200 mx-auto mt-2 rounded-full" />
                    <p className="mt-2 text-xs text-slate-400">Step {index + 1}</p>
                  </div>
                  {index !== 3 && (
                    <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-indigo-300 group-hover:text-indigo-500 transition" size={24} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p variants={fadeInUp} className="text-center mt-10 text-slate-500 text-sm">
            Each stage builds confidence, creativity, and real-world skills in children.
          </motion.p>
        </motion.div>
      </div>

      {/* 🏫 FEATURE STORY CARDS with Fun Facts */}
      <div className="max-w-6xl mx-auto px-6 pb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-30 transition`} />
                <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${item.color} opacity-60`} />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1E2A52] group-hover:text-indigo-600 transition">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border-l-4 border-indigo-400">
                  <p className="text-sm text-slate-500 italic">📖 {item.story}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
                    {item.funFact}
                  </span>
                  <span className="text-indigo-400 group-hover:text-indigo-600 transition">
                    ✨ Explore →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🌟 IMPACT SECTION with Testimonial Style */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-white to-pink-100" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-4xl mx-auto px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-rose-500 font-medium mb-6">
            <Heart className="w-4 h-4 fill-rose-500" />
            Made with Love & Care
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A52]">
            Building Future-Ready Minds with{" "}
            <span className="text-rose-500">❤️</span>
          </h2>

          <div className="mt-8 p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-white">
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              "Every facility in our school is more than infrastructure — it is a step toward
              shaping confident, intelligent, and compassionate individuals."
            </p>
            <div className="mt-6 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-4 text-slate-400 text-sm">— Rated by 1,000+ Happy Parents</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition flex items-center gap-2 mx-auto"
          >
            Schedule a Campus Tour <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}