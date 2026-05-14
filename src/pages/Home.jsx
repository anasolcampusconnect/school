import React, { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, ChevronLeft, ChevronRight,
  Megaphone, MapPin, Phone, Mail, ArrowRight, Calendar,
  GraduationCap, BookOpen, Trophy, Users, Award,
  Play, Pause, ExternalLink, Star, TrendingUp, Globe, Clock,
  ChevronUp, Sparkles, Shield, Heart, Eye, Briefcase,
  MessageCircle, Gift, Camera, Music, Palette, Microscope,
  Zap, CheckCircle
} from "lucide-react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { path } from "framer-motion/client";

/* ============================================================
   Elite Global Academy — Home Page (Enhanced)
   Single-file React + Tailwind component.
   Palette: Navy #0B1E4A • Gold #B1965A • Mint #E6F0E8 • White
   Added: About Us section, Animated Stats, Awards & Recognition,
   Latest Visuals (Video Cards), Blog/Activities Slider, Admissions Banner.
============================================================ */

const STYLES = `
@keyframes ega-kenburns { 0%{transform:scale(1) translate(0,0)} 100%{transform:scale(1.15) translate(-2%,-1%)} }
@keyframes ega-slideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
@keyframes ega-slideLeft { from{opacity:0;transform:translateX(-60px)} to{opacity:1;transform:translateX(0)} }
@keyframes ega-slideRight { from{opacity:0;transform:translateX(60px)} to{opacity:1;transform:translateX(0)} }
@keyframes ega-zoom { from{opacity:0;transform:scale(1.1)} to{opacity:1;transform:scale(1)} }
@keyframes ega-rotate { from{opacity:0;transform:rotate(-6deg) scale(.95)} to{opacity:1;transform:rotate(0) scale(1)} }
@keyframes ega-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
@keyframes ega-marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
@keyframes ega-blur { from{opacity:0;filter:blur(14px)} to{opacity:1;filter:blur(0)} }
@keyframes ega-spin360 { from{transform:rotateY(0deg)} to{transform:rotateY(360deg)} }
@keyframes ega-spin-slow { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
@keyframes ega-shimmer { 0%{background-position:-100% 0} 100%{background-position:200% 0} }
@keyframes ega-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

.ega-kenburns { animation: ega-kenburns 12s ease-in-out infinite alternate; }
.ega-slideUp { animation: ega-slideUp .8s ease-out both; }
.ega-slideLeft { animation: ega-slideLeft .9s ease-out both; }
.ega-slideRight { animation: ega-slideRight .9s ease-out both; }
.ega-zoom { animation: ega-zoom 1s ease-out both; }
.ega-rotate { animation: ega-rotate .9s ease-out both; }
.ega-float { animation: ega-float 6s ease-in-out infinite; }
.ega-marquee { animation: ega-marquee 30s linear infinite; }
.ega-blur { animation: ega-blur 1s ease-out both; }
.ega-spin360 { animation: ega-spin360 0.8s ease-out both; }
.ega-spin-slow { animation: ega-spin-slow 20s linear infinite; }
.ega-shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); background-size: 200% 100%; animation: ega-shimmer 2s infinite; }
.ega-bounce { animation: ega-bounce 2s ease-in-out infinite; }
`;

/* ------------------------------ HERO ----------------------------- */
const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Welcome to Elite Global Academy",
    title: "Where Excellence Meets Opportunity",
    desc: "A legacy of academic distinction, character building and global thinking — shaping leaders since day one.",
    cta: "Explore Campus",
    anim: "ega-slideLeft",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "World-Class Learning",
    title: "Learn. Discover. Lead.",
    desc: "Modern classrooms, expert faculty and a curriculum built for the curious mind of tomorrow.",
    cta: "View Academics",
    anim: "ega-zoom",
  },
  {
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Future-Ready Graduates",
    title: "Celebrating Every Achievement",
    desc: "Our students go on to top universities and meaningful careers across the globe.",
    cta: "See Our Results",
    anim: "ega-slideRight",
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Beyond the Classroom",
    title: "Sports • Arts • Innovation",
    desc: "A vibrant campus life that nurtures passion, teamwork and creative confidence.",
    cta: "Discover Campus Life",
    anim: "ega-blur",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  const go = (d) => setI((p) => (p + d + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-[#0B1E4A]">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={s.img}
            alt={s.title}
            className={`absolute inset-0 w-full h-full object-cover ${idx === i ? "ega-kenburns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E4A]/95 via-[#0B1E4A]/65 to-[#0B1E4A]/30" />
          {idx === i && (
            <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-center">
              <span className="ega-slideUp inline-block text-[#B1965A] font-semibold tracking-[0.25em] text-xs lg:text-sm mb-4" style={{ animationDelay: ".1s" }}>
                {s.eyebrow}
              </span>
              <h1 className={`${s.anim} text-white font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl`}>
                {s.title}
              </h1>
              <p className="ega-slideUp mt-6 text-white/85 text-base md:text-lg max-w-xl" style={{ animationDelay: ".4s" }}>
                {s.desc}
              </p>
              <div className="ega-slideUp mt-8 flex flex-wrap gap-4" style={{ animationDelay: ".6s" }}>
                <Link to="/admissions" className="px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white hover:text-[#0B1E4A] transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}

      <button onClick={() => go(-1)} aria-label="Prev"
        className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur hover:bg-[#B1965A] hover:text-[#0B1E4A] text-white grid place-items-center transition-all">
        <ChevronLeft />
      </button>
      <button onClick={() => go(1)} aria-label="Next"
        className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur hover:bg-[#B1965A] hover:text-[#0B1E4A] text-white grid place-items-center transition-all">
        <ChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "bg-[#B1965A] w-10" : "bg-white/40 w-5"}`} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------- ANNOUNCEMENTS BAR -------------------- */
const TICKER = [
  "Admissions open for 2026–27 — Apply by March 15",
  "Annual Sports Day on December 12 — All families welcome",
  "Class XII Results: 100% pass, 42 distinctions",
  "New STEM & Robotics Lab inaugurated this month",
];

function TickerBar() {
  return (
    <div className="bg-[#B1965A]/15 border-y border-[#B1965A]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-4 py-3 px-5 lg:px-10">
        <div className="flex items-center gap-2 text-[#0B1E4A] font-bold text-sm shrink-0 pr-4 border-r border-[#B1965A]/40">
          <Megaphone className="w-4 h-4 text-[#B1965A]" />
          LATEST
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-12 whitespace-nowrap ega-marquee text-[#0B1E4A]/85 text-sm font-medium">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B1965A]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------- in-view hook for scroll reveals -------- */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, seen];
}

/* ----------------------------- ABOUT US ----------------------------- */
/* ----------------------------- ABOUT US ----------------------------- */
function AboutUs() {
  const [ref, seen] = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28 px-5 lg:px-10 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Container with Border Design */}
        <div className={`relative ${seen ? "ega-slideUp" : "opacity-0"}`}>
          {/* Outer decorative border */}
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#B1965A]/30 rounded-3xl" />
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#B1965A]/30 rounded-3xl" />
          
          {/* Inner content with border */}
          <div className="relative border-2 border-[#B1965A]/50 rounded-3xl p-8 lg:p-12 bg-white shadow-xl">
            {/* Corner decorations */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[#B1965A] rounded-tl-2xl" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-[#B1965A] rounded-tr-2xl" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-[#B1965A] rounded-bl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[#B1965A] rounded-br-2xl" />
            
            {/* Decorative dots on corners */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#B1965A] rounded-full" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#B1965A] rounded-full" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#B1965A] rounded-full" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#B1965A] rounded-full" />

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F0E8] rounded-full mb-6">
                  <Heart className="w-4 h-4 text-[#B1965A]" />
                  <span className="text-xs font-semibold text-[#0B1E4A]">ABOUT US</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E4A] leading-tight">
                  From classrooms to <span className="text-[#B1965A]">careers</span>,{' '}
                  <span className="block mt-2">reflections that guide the way</span>
                </h2>
                
                <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
                  <p className="relative pl-4 border-l-3 border-[#B1965A]">
                    At Unicent, we are committed to nurturing confident, compassionate and creative learners. 
                    Since 2009, our schools have focused on holistic development, balancing academics with 
                    co-curricular experiences that help children discover their strengths and passions.
                  </p>
                  <p>
                    We believe that education is more than textbooks, it's about exploring curiosity, fostering 
                    creativity, and encouraging critical thinking. Through a variety of activities, from arts and 
                    sports to collaborative projects and experiential learning, we help students build resilience, 
                    empathy, and a love for learning.
                  </p>
                </div>
                
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#0B1E4A] text-white font-semibold rounded-full hover:bg-[#B1965A] transition-all duration-300 hover:shadow-lg">
                    Discover More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#" className="group inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#0B1E4A]/20 text-[#0B1E4A] font-semibold rounded-full hover:border-[#B1965A] hover:text-[#B1965A] transition-all duration-300">
                    <Play className="w-4 h-4" /> 
                    Watch Video
                  </a>
                </div>

                {/* Stats inside border */}
                <div className="mt-12 grid grid-cols-3 gap-6 pt-6 border-t-2 border-dashed border-[#B1965A]/30">
                  {[
                    { label: "Years of Excellence", value: "15+", icon: Award },
                    { label: "Happy Students", value: "5000+", icon: Users },
                    { label: "Expert Faculty", value: "300+", icon: GraduationCap }
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="text-center group-hover:scale-105 transition-transform">
                        <div className="w-10 h-10 mx-auto bg-[#E6F0E8] rounded-full flex items-center justify-center mb-2 group-hover:bg-[#B1965A] transition-colors">
                          <Icon className="w-5 h-5 text-[#0B1E4A] group-hover:text-white" />
                        </div>
                        <div className="text-xl font-bold text-[#0B1E4A]">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Images with Border */}
              <div className="relative">
                {/* Main border frame for images */}
                <div className="relative border-2 border-[#B1965A]/50 rounded-2xl p-4 bg-[#E6F0E8]/30">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="relative overflow-hidden rounded-xl shadow-lg group">
                        <img 
                          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" 
                          alt="Students in classroom" 
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="relative overflow-hidden rounded-xl shadow-lg group">
                        <img 
                          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" 
                          alt="Sports activity" 
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="relative overflow-hidden rounded-xl shadow-lg group">
                        <img 
                          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" 
                          alt="Art class" 
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="relative overflow-hidden rounded-xl shadow-lg group">
                        <img 
                          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80" 
                          alt="Library" 
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative badge */}
                  <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 ega-float border border-[#B1965A]/30">
                    <div className="w-12 h-12 rounded-xl bg-[#B1965A] grid place-items-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1E4A] text-sm">Since 2009</div>
                      <div className="text-xs text-gray-500">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- STATS CARD (Animated Counters) ----------------------------- */


const STATS_DATA = [
  { icon: Users, label: "Students", value: 6000, suffix: "+" },
  { icon: GraduationCap, label: "Teachers", value: 500, suffix: "+" },
  { icon: Trophy, label: "Awards", value: 100, suffix: "+" },
  { icon: MapPin, label: "Locations", value: 5, suffix: "" },
];

/* --- Animated Counter Component --- */
function AnimatedCounter({ end, duration = 2000, suffix = "", seen }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!seen) return;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, seen]);

  return (
    <span className="text-3xl md:text-5xl font-extrabold text-[#0B1E4A] leading-none">
      {count}{suffix}
    </span>
  );
}

/* --- Main Stats Section --- */
function StatsSection() {
  const [seen, setSeen] = useState(false);
  const sectionRef = React.useRef(null);

  // Simple Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSeen(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white pt-20">
      {/* Wavy Cloud Top Border (Ref: image_a20237.png) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          className="relative block w-full h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#FDF9EE"
          ></path>
        </svg>
      </div>

      {/* Main Container with Light Gradient */}
      <div className="relative bg-gradient-to-r from-[#FDF9EE] to-[#E6F3EA] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Stats Grid: Reduced Gaps and Large Icons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 flex-1">
            {STATS_DATA.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-4 transition-all duration-700 ${seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Larger, Bordered Icon Box */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/60 border-2 border-[#B1965A]/30 rounded-3xl flex items-center justify-center shadow-sm">
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-[#B1965A]" strokeWidth={1.5} />
                </div>

                {/* Counter and Label */}
                <div className="flex flex-col">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} seen={seen} />
                  <span className="text-[#0B1E4A]/70 text-xs md:text-sm font-bold uppercase tracking-widest mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Enquire Tab (Ref: image_a20237.png) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex">
            <button className="bg-[#8C232C] hover:bg-[#6b1b22] text-white py-6 px-3 rounded-l-2xl shadow-xl transition-all flex items-center justify-center group">
              <span className="[writing-mode:vertical-rl] text-sm font-bold uppercase tracking-[0.3em] group-hover:scale-105 transition-transform">
                Enquire Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- AWARDS & RECOGNITION (360° Rotating Banners) ----------------------------- */
const AWARDS = [
  {
    rank: "#3",
    zone: "North Zone, Bachupally",
    ranking: "Times School Ranking 2022",
    description: "UNICENT SCHOOL BACHUPALLY IS ELATED TO SHARE THE JOY OF BEING AWARDED WITH TIMES SCHOOL RANKINGS 2022",
    color: "from-gray-100 to-gray-200",
    hoverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
  },
  {
    rank: "#4",
    zone: "North Zone, Kompally",
    ranking: "Times School Ranking 2022",
    description: "UNICENT SCHOOL KOMPALLY IS ELATED TO SHARE THE JOY OF BEING AWARDED WITH TIMES SCHOOL RANKINGS 2022",
    color: "from-gray-100 to-gray-200",
    hoverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    rank: "#3",
    zone: "East Zone, Kompally",
    ranking: "Time's Cat Rally",
    description: "UNICENT SCHOOL BACHUPALLY IS ELATED TO SHARE THE JOY OF BEING AWARDED WITH TIMES SCHOOL RANKINGS 2022",
    color: "from-gray-100 to-gray-200",
    hoverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
  },
  {
    rank: "Top 10",
    zone: "Hyderabad Region",
    ranking: "Education World Rankings",
    description: "Recognized among the top emerging schools in the region for academic excellence and innovation.",
    color: "from-gray-100 to-gray-200",
    hoverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    rank: "Top 5",
    zone: "Digital Learning",
    ranking: "Microsoft Showcase School",
    description: "Awarded for excellence in integrating technology with curriculum and fostering digital literacy.",
    color: "from-gray-100 to-gray-200",
    hoverImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
  }
];

function AwardsRecognition() {
  const [ref, seen] = useInView(0.2);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section ref={ref} className="relative py-20 lg:py-28 px-5 lg:px-10 bg-[#E6F0E8] overflow-hidden">
      
      {/* Top Wavy Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
          ></path>
        </svg>
      </div>

      {/* Bottom Wavy Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <Trophy className="w-4 h-4 text-[#B1965A]" />
            <span className="text-xs font-semibold text-[#0B1E4A]">AWARDS & RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E4A]">
            Celebrating milestones that reflect <span className="text-[#B1965A]">excellence and dedication</span>
          </h2>
          <p className="mt-4 text-gray-600">Recognized nationally for our commitment to quality education and holistic development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AWARDS.map((award, idx) => (
            <div
              key={idx}
              className={`relative group ${seen ? "ega-spin360" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 cursor-pointer
                ${hoveredIndex === idx ? "scale-105 shadow-xl" : "scale-100"}
              `}>
                {/* Background Image - Appears on hover */}
                <div 
                  className={`
                    absolute inset-0 transition-all duration-700 ease-out z-0
                    ${hoveredIndex === idx ? "opacity-100 scale-110" : "opacity-0 scale-100"}
                  `}
                >
                  <img 
                    src={award.hoverImage} 
                    alt="Award celebration"
                    className="w-full h-full object-cover"
                  />
                  {/* Light overlay for better text readability */}
                  <div className="absolute inset-0 bg-[#0B1E4A]/70" />
                </div>

                {/* Light Background - Normal state */}
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} transition-opacity duration-500 z-0 ${hoveredIndex === idx ? "opacity-0" : "opacity-100"}`} />

                {/* Card content - Always visible */}
                <div className={`relative z-10 p-8 text-center transition-all duration-500 ${hoveredIndex === idx ? "scale-100" : "scale-100"}`}>
                  <div className={`text-xl font-bold mb-1 transition-colors duration-300 ${hoveredIndex === idx ? "text-white" : "text-[#0B1E4A]"}`}>
                    {award.zone}
                  </div>
                  <div className={`text-sm font-semibold mb-4 transition-colors duration-300 ${hoveredIndex === idx ? "text-white/80" : "text-gray-500"}`}>
                    {award.ranking}
                  </div>
                  <div className={`text-xs leading-relaxed max-w-xs mx-auto transition-colors duration-300 ${hoveredIndex === idx ? "text-white/70" : "text-gray-600"}`}>
                    {award.description.length > 100 ? award.description.substring(0, 100) + "..." : award.description}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 
                      ${hoveredIndex === idx 
                        ? "bg-white/20 rotate-12 scale-110" 
                        : "bg-[#E6F0E8] group-hover:bg-[#B1965A]/20"
                      }
                    `}>
                      <Trophy className={`
                        w-6 h-6 transition-all duration-500 
                        ${hoveredIndex === idx 
                          ? "scale-110 text-[#B1965A]" 
                          : "text-[#B1965A] group-hover:scale-110"
                        }
                      `} />
                    </div>
                  </div>
                </div>

                {/* Light border top */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B1965A]/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ----------------------------- LATEST VISUALS (Auto-scrolling Video Cards) ----------------------------- */
/* ----------------------------- LATEST VISUALS (Video Cards with Auto-scroll) ----------------------------- */
const VIDEOS = [
  {
    id: 1,
    title: "Movie Day",
    location: "Unicent International",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Events"
  },
  {
    id: 2,
    title: "Nursery: Maths Exploration",
    location: "Unicent School, Nagole",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Academics"
  },
  {
    id: 3,
    title: "Emotional Wellbeing Workshop",
    location: "Unicent School, Nagole",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Wellness"
  },
  {
    id: 4,
    title: "Likhith Sai - IIB Achievement",
    location: "Unicent School, Bhowampet",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Achievement"
  },
  {
    id: 5,
    title: "Robotics Workshop",
    location: "Hafeezpet Campus",
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Innovation"
  },
  {
    id: 6,
    title: "Annual Day Celebration",
    location: "Miyapur Campus",
    thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Events"
  },
  {
    id: 7,
    title: "Science Exhibition",
    location: "Bachupally Campus",
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Science"
  },
  {
    id: 8,
    title: "Sports Day",
    location: "Kompally Campus",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Sports"
  }
];

function VideoCard({ video, index, seen }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 min-w-[280px] md:min-w-[320px] snap-start"
    >
      <div className="relative h-56 overflow-hidden bg-gray-900">
        {!isPlaying ? (
          <>
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          </>
        ) : (
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            autoPlay
            onEnded={() => setIsPlaying(false)}
          >
            <source src={video.videoUrl} type="video/mp4" />
          </video>
        )}
        <button 
          onClick={handlePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#B1965A]/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        >
          {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
        </button>
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#B1965A] text-white text-xs font-semibold rounded-full">
          {video.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-[#0B1E4A] group-hover:text-[#B1965A] transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {video.location}
        </p>
      </div>
    </div>
  );
}

function LatestVisuals() {
  const [ref, seen] = useInView(0.1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);

  // Duplicate videos for seamless infinite scroll
  const duplicatedVideos = [...VIDEOS, ...VIDEOS, ...VIDEOS];

  const startAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    autoScrollInterval.current = setInterval(() => {
      if (scrollContainerRef.current && isAutoScrolling) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (scrollPosition >= maxScroll - 10) {
          // Reset to start smoothly
          container.scrollTo({ left: 0, behavior: 'instant' });
          setScrollPosition(0);
        } else {
          const newPosition = scrollPosition + 1;
          container.scrollTo({ left: newPosition, behavior: 'smooth' });
          setScrollPosition(newPosition);
        }
      }
    }, 30);
  };

  useEffect(() => {
    if (seen && isAutoScrolling) {
      startAutoScroll();
    }
    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    };
  }, [seen, isAutoScrolling, scrollPosition]);

  const handleManualScroll = () => {
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000); // Resume auto-scroll after 5 seconds
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 px-5 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-5">
          <div className={seen ? "ega-slideLeft" : "opacity-0"}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F0E8] rounded-full mb-4">
              <Camera className="w-4 h-4 text-[#B1965A]" />
              <span className="text-xs font-semibold text-[#0B1E4A]">IN-CAMPUS HAPPENINGS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E4A]">
              Latest <span className="text-[#B1965A]">Visuals</span>
            </h2>
            <p className="mt-2 text-gray-500">Moments that reflect our ethos and vibrant campus life</p>
          </div>
          <div className={`flex gap-3 ${seen ? "ega-slideRight" : "opacity-0"}`}>
            <button 
              onClick={() => {
                setIsAutoScrolling(false);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
                }
                setTimeout(() => setIsAutoScrolling(true), 5000);
              }}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#B1965A] hover:text-white hover:border-[#B1965A] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                setIsAutoScrolling(false);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
                }
                setTimeout(() => setIsAutoScrolling(true), 5000);
              }}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#B1965A] hover:text-white hover:border-[#B1965A] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auto-scrolling horizontal slider */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          onTouchStart={handleManualScroll}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {duplicatedVideos.map((video, idx) => (
              <VideoCard key={`${video.id}-${idx}`} video={video} index={idx} seen={seen} />
            ))}
          </div>
        </div>

        {/* Auto-scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isAutoScrolling ? 'bg-[#B1965A]' : 'bg-gray-300'} transition-colors`} />
            <div className={`w-2 h-2 rounded-full ${isAutoScrolling ? 'bg-[#B1965A]' : 'bg-gray-300'} transition-colors`} />
            <div className={`w-2 h-2 rounded-full ${isAutoScrolling ? 'bg-[#B1965A]' : 'bg-gray-300'} transition-colors`} />
            <span className="text-xs text-gray-400 ml-2">
              {isAutoScrolling ? 'Auto-scrolling' : 'Paused - Hover to pause'}
            </span>
          </div>
        </div>

        {/* Branch Quick Links */}
        {/*<div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Hafeezpet", "Nagole", "Miyapur", "Kompally", "Bachupally"].map((branch, idx) => (
            <button 
              key={idx}
              className="px-5 py-2 rounded-full bg-[#E6F0E8] text-[#0B1E4A] text-sm font-medium hover:bg-[#B1965A] hover:text-white transition-colors"
            >
              {branch} Visuals
            </button>
          ))}
        </div>*/}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

/* ----------------------------- BLOG / ACTIVITIES SLIDER ----------------------------- */
const ACTIVITIES = [
  {
    id: 1,
    title: "Annual Science Exhibition",
    description: "Students showcased innovative projects on sustainable energy and robotics, impressing visitors with their creativity.",
    date: "Nov 20, 2026",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    icon: Microscope,
    category: "STEM"
  },
  {
    id: 2,
    title: "Inter-School Sports Meet",
    description: "Our athletes brought home 15 medals across athletics, swimming, and team sports at the district level championship.",
    date: "Nov 15, 2026",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    icon: Trophy,
    category: "Sports"
  },
  {
    id: 3,
    title: "Cultural Fest - Aurora 2026",
    description: "A spectacular showcase of music, dance, and drama featuring performances from students across all grades.",
    date: "Nov 28, 2026",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    icon: Music,
    category: "Cultural"
  },
  {
    id: 4,
    title: "Art & Craft Workshop",
    description: "Students explored their artistic side with painting, pottery, and recycled art projects guided by expert artists.",
    date: "Nov 10, 2026",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    icon: Palette,
    category: "Arts"
  },
  {
    id: 5,
    title: "Robotics Bootcamp",
    description: "Advanced programming and AI workshop where students built and coded their own autonomous robots.",
    date: "Nov 5, 2026",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80",
    icon: Zap,
    category: "Innovation"
  }
];

function BlogSlider() {
  const [ref, seen] = useInView(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ACTIVITIES.length) % ACTIVITIES.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentIndex]);

  const current = ACTIVITIES[currentIndex];
  const visibleActivities = ACTIVITIES.slice(currentIndex, currentIndex + 3);
  if (visibleActivities.length < 3) {
    visibleActivities.push(...ACTIVITIES.slice(0, 3 - visibleActivities.length));
  }

  return (
    <section ref={ref} className="py-20 lg:py-28 px-5 lg:px-10 bg-gradient-to-b from-white to-[#E6F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-[#B1965A]" />
            <span className="text-xs font-semibold text-[#0B1E4A]">BLOG & ACTIVITIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E4A]">
            Campus <span className="text-[#B1965A]">Highlights</span>
          </h2>
          <p className="mt-4 text-gray-600">Discover the vibrant happenings and student achievements across our campuses</p>
        </div>

        {/* Featured Activity Card */}
        <div className={`mb-16 ${seen ? "ega-zoom" : "opacity-0"}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#B1965A] text-white text-sm font-semibold rounded-full">
                  {current.category}
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{current.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1E4A] mb-4">{current.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{current.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#B1965A] font-semibold hover:gap-3 transition-all">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleActivities.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <div 
                key={`${activity.id}-${idx}`}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${seen ? "ega-slideUp" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#E6F0E8] group-hover:bg-[#B1965A] transition-colors flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#0B1E4A] group-hover:text-white transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{activity.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="text-[#B1965A] font-medium">{activity.category}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1E4A] mb-2 group-hover:text-[#B1965A] transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.description.substring(0, 100)}...</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0B1E4A] group-hover:text-[#B1965A] transition-colors">
                  Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-3 mt-10">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#B1965A] hover:text-white hover:border-[#B1965A] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 h-12 rounded-full font-medium transition-colors ${isAutoPlaying ? 'bg-[#B1965A] text-white' : 'border border-gray-300 text-gray-600 hover:border-[#B1965A]'}`}
          >
            {isAutoPlaying ? 'Pause' : 'Auto Play'}
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#B1965A] hover:text-white hover:border-[#B1965A] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {ACTIVITIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#B1965A] w-8' : 'bg-gray-300 w-2'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ADMISSIONS BANNER (Animated with Children Image) ----------------------------- */
function AdmissionsBanner() {
  const [ref, seen] = useInView(0.3);

  return (
    <section ref={ref} className="py-16 px-5 lg:px-10 bg-[#0B1E4A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B1965A]/20 to-transparent" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#B1965A]/10 rounded-full ega-spin-slow" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#B1965A]/10 rounded-full ega-spin-slow" style={{ animationDirection: "reverse" }} />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            <div className={seen ? "ega-slideLeft" : "opacity-0"}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B1965A]/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#B1965A]" />
                <span className="text-xs font-semibold text-[#B1965A]">LIMITED SEATS AVAILABLE</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                ADMISSIONS <br />
                <span className="text-[#B1965A]">OPEN</span>
                <span className="text-3xl md:text-4xl block mt-2">2026–27</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/admissions" className="px-8 py-4 bg-[#B1965A] text-[#0B1E4A] font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#B1965A]/30 inline-flex items-center gap-2">
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
                {/*<a href="#" className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white hover:text-[#0B1E4A] transition-colors">
                  Download Brochure
                </a>*/} 
              </div>
              <div className="mt-8 flex items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-[#B1965A]" /> Limited Seats</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-[#B1965A]" /> Early Bird Offer</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-[#B1965A]" /> Scholarship Available</div>
              </div>
            </div>
            
            <div className={`relative flex justify-center lg:justify-end ${seen ? "ega-slideRight" : "opacity-0"}`}>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 ega-float">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B1965A]/30 to-transparent rounded-full blur-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80" 
                  alt="Happy children"
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#B1965A] rounded-full flex items-center justify-center shadow-xl ega-bounce">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-[#B1965A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- QUICK LINKS (Enhanced) ----------------------------- */
const LINKS = [
  { 
    icon: GraduationCap, 
    label: "Admissions", 
    desc: "Apply for 2026–27", 
    anim: "ega-slideUp" ,
    path: "/admissions",
  },
  { 
    icon: Trophy, 
    label: "Results", 
    desc: "View achievements", 
    anim: "ega-zoom",
    path: "/academics" 
  },
  { 
    icon: BookOpen, 
    label: "Academics", 
    desc: "Curriculum & programs", 
    anim: "ega-rotate" ,
    path: "/academics"
  },
  { 
    icon: Calendar, 
    label: "Events", 
    desc: "Upcoming calendar", 
    anim: "ega-slideUp" ,
  },
  { 
    icon: Users, 
    label: "Campus Life", 
    desc: "Clubs & activities", 
    anim: "ega-zoom" ,
    path:"/gallery"
  },
  { 
    icon: Phone, 
    label: "Contact", 
    desc: "Reach our team", 
    anim: "ega-rotate" ,
    path: "/contact"
  },
];

function QuickLinks() {
  const [ref, seen] = useInView(0.15);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section ref={ref} className="py-20 lg:py-28 px-5 lg:px-10 bg-gradient-to-b from-white to-[#E6F0E8]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F0E8] rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#B1965A]" />
            <span className="text-xs font-semibold text-[#0B1E4A] tracking-wider">QUICK ACCESS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E4A] leading-tight">
            Everything you need,{' '}
            <span className="text-[#B1965A] relative inline-block">
              one click away
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2 L200 2" stroke="#B1965A" strokeWidth="3" strokeDasharray="6 6" fill="none"/>
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-gray-500">Navigate through our services and resources effortlessly</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {LINKS.map((l, i) => {
            const Icon = l.icon;
            const isHovered = hoveredIndex === i;
            
            return (
              <Link 
                key={i} 
                to={l.path}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 
                  ${seen ? l.anim : "opacity-0"}
                  ${isHovered ? 'shadow-2xl -translate-y-3' : 'shadow-lg hover:-translate-y-2'}`}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Navy background on hover - from theme */}
                <div className={`
                  absolute inset-0 bg-[#0B1E4A] opacity-0 transition-all duration-500
                  ${isHovered ? 'opacity-100' : ''}
                `} />
                
                {/* Icon container */}
                <div className={`
                  relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 
                  transition-all duration-500 transform
                  ${isHovered ? 'scale-110 rotate-12 bg-[#B1965A]' : 'bg-[#E6F0E8] group-hover:bg-[#B1965A]/20'}
                `}>
                  <Icon className={`
                    w-7 h-7 transition-all duration-500
                    ${isHovered ? 'text-white scale-110' : 'text-[#0B1E4A] group-hover:text-[#B1965A] group-hover:scale-110'}
                  `} />
                </div>

                {/* Label */}
                <div className="relative z-10">
                  <div className={`
                    font-bold text-lg transition-all duration-300
                    ${isHovered ? 'text-white' : 'text-[#0B1E4A] group-hover:text-[#B1965A]'}
                  `}>
                    {l.label}
                  </div>
                  <div className={`
                    text-sm mt-1 transition-all duration-300
                    ${isHovered ? 'text-white/80' : 'text-gray-500'}
                  `}>
                    {l.desc}
                  </div>
                </div>

                {/* Arrow indicator on hover */}
                <div className={`
                  absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-500
                  ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                `}>
                  <ArrowRight className={`w-5 h-5 ${isHovered ? 'text-[#B1965A]' : 'text-[#B1965A]'}`} />
                </div>

                {/* Bottom border animation with gold */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B1965A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Shine effect on hover */}
                {isHovered && (
                  <div className="absolute inset-0 -translate-x-full animate-shine pointer-events-none" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Call to action button */}
        <div className="text-center mt-12">
          <Link 
            to ="/facilities" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0B1E4A] text-white rounded-full font-semibold hover:bg-[#B1965A] transition-all duration-300 hover:shadow-lg hover:gap-3 group"
          >
            Explore All Services 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shine {
          animation: shine 0.8s ease-in-out;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }
      `}</style>
    </section>
  );
}

/* ----------------------------- BRANCHES SECTION (From Image) ----------------------------- */
const BRANCHES = [
  {
    name: "Unicent Bachupally",
    phone: ["+91 8019 000 441", "+91 7288 861 444"],
    email: "bachupally@unicent.in",
    mapLink: "#",
    address: "Bachupally, Hyderabad - 500090",
    timing: "Mon - Sat: 8:30 AM to 4:00 PM"
  },
  {
    name: "Unicent Kompally",
    phone: ["+91 9491 079 191", "+91 8500 288 338"],
    email: "kompally@unicent.in",
    mapLink: "#",
    address: "Kompally, Hyderabad - 500014",
    timing: "Mon - Sat: 8:30 AM to 4:00 PM"
  },
  {
    name: "Unicent Miyapur",
    phone: ["+91 800 880 2272", "+91 8019 000 445"],
    email: "miyapur@unicent.in",
    mapLink: "#",
    address: "Miyapur, Hyderabad - 500049",
    timing: "Mon - Sat: 8:30 AM to 4:00 PM"
  },
  {
    name: "Unicent Nagole",
    phone: ["+91 8500 600 404", "+91 8500 500 404"],
    email: "nagole@unicent.in",
    mapLink: "#",
    address: "Nagole, Hyderabad - 500068",
    timing: "Mon - Sat: 8:30 AM to 4:00 PM"
  },
  {
    name: "Unicent Hafeezpet",
    phone: ["+91 86 888 20488", "+91 86 888 20499"],
    email: "kondapur@unicent.in",
    mapLink: "#",
    address: "Hafeezpet, Hyderabad - 500049",
    timing: "Mon - Sat: 8:30 AM to 4:00 PM"
  }
];

function Branches() {
  const [ref, seen] = useInView(0.15);
  const [hoveredBranch, setHoveredBranch] = useState(null);

  return (
    <section ref={ref} className="py-20 lg:py-28 px-5 lg:px-10 bg-[#E6F0E8] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#B1965A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0B1E4A]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4">
            <MapPin className="w-4 h-4 text-[#B1965A]" />
            <span className="text-xs font-semibold text-[#0B1E4A] tracking-wider">OUR BRANCHES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E4A] leading-tight">
            Bringing holistic learning closer to you,{' '}
            <span className="text-[#B1965A] relative inline-block">
              wherever you are
              <svg className="absolute -bottom-2 left-0 w-full" height="3" viewBox="0 0 200 3" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.5 L200 1.5" stroke="#B1965A" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-gray-600">5 campuses across Hyderabad, each committed to excellence in education</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {BRANCHES.map((branch, idx) => (
            <div 
              key={idx}
              className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 
                ${seen ? "ega-slideUp" : "opacity-0"}
                ${hoveredBranch === idx ? 'shadow-2xl -translate-y-3' : 'shadow-lg hover:-translate-y-2'}`}
              style={{ animationDelay: `${idx * 0.08}s` }}
              onMouseEnter={() => setHoveredBranch(idx)}
              onMouseLeave={() => setHoveredBranch(null)}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-[#B1965A] transition-transform duration-500 origin-left ${hoveredBranch === idx ? 'scale-x-100' : 'scale-x-0'}`} />
              
              {/* Decorative circle in background */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#B1965A]/5 rounded-full transition-all duration-500 group-hover:scale-150" />

              <div className="p-6 relative z-10">
                {/* Icon with animation */}
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500
                  ${hoveredBranch === idx ? 'bg-[#B1965A] rotate-12 scale-110' : 'bg-[#E6F0E8] group-hover:bg-[#B1965A]/20'}
                `}>
                  <MapPin className={`
                    w-7 h-7 transition-all duration-500
                    ${hoveredBranch === idx ? 'text-white' : 'text-[#B1965A] group-hover:scale-110'}
                  `} />
                </div>

                {/* Branch name */}
                <h3 className={`
                  text-xl font-bold mb-2 transition-colors duration-300
                  ${hoveredBranch === idx ? 'text-[#B1965A]' : 'text-[#0B1E4A] group-hover:text-[#B1965A]'}
                `}>
                  {branch.name}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-[#B1965A] shrink-0" />
                  <span>{branch.address}</span>
                </div>

                {/* Phone numbers */}
                <div className="space-y-2 mb-3">
                  {branch.phone.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Phone className="w-3.5 h-3.5 text-[#B1965A] shrink-0" />
                      <a href={`tel:${p.replace(/\s/g, '')}`} className="text-gray-600 hover:text-[#B1965A] transition-colors">
                        {p}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 text-sm mb-4">
                  <Mail className="w-3.5 h-3.5 text-[#B1965A] shrink-0" />
                  <a href={`mailto:${branch.email}`} className="text-gray-600 hover:text-[#B1965A] transition-colors truncate">
                    {branch.email}
                  </a>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 pb-3 border-b border-gray-100">
                  <Clock className="w-3 h-3" />
                  <span>{branch.timing}</span>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <a 
                    href={branch.mapLink} 
                    className="inline-flex items-center gap-1 text-xs text-[#B1965A] font-medium hover:gap-2 transition-all"
                  >
                    📍 Open in Maps
                  </a>
                  <span className="text-gray-300">•</span>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1 text-xs text-[#B1965A] font-medium hover:gap-2 transition-all"
                  >
                    🌐 Visit Website
                  </a>
                </div>

                {/* Enquire button */}
                <button className={`
                  w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300
                  ${hoveredBranch === idx 
                    ? 'bg-[#B1965A] text-white shadow-lg shadow-[#B1965A]/30' 
                    : 'bg-[#E6F0E8] text-[#0B1E4A] hover:bg-[#B1965A] hover:text-white'
                  }
                `}>
                  Enquire now
                  <ArrowRight className="inline-block w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Bottom shine effect on hover */}
              {hoveredBranch === idx && (
                <div className="absolute inset-0 -translate-x-full animate-shine pointer-events-none" />
              )}
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shine {
          animation: shine 0.6s ease-in-out;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        }
      `}</style>
    </section>
  );
}

/* ------------------------------ PAGE ---------------------------- */
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <style>{STYLES}</style>
      <main className="flex-1">
        <Hero />
        <TickerBar />
        <AboutUs />
        <StatsSection />
        <AwardsRecognition />
        <LatestVisuals />
        <BlogSlider />
        <AdmissionsBanner />
        <QuickLinks />
        <Branches />
      </main>
    </div>
  );
}