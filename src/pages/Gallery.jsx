import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Camera, PlayCircle, Quote } from "lucide-react";

const campusPhotos = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80",
];

const eventPhotos = [
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
];

const videos = [
  {
    title: "Annual Day Celebration",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Sports Day Highlights",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Gallery() {
  const [tab, setTab] = useState("campus");

  return (
    <section className="bg-gradient-to-b from-[#f7f9ff] to-white min-h-screen">

      {/* HERO */}
      <div className="relative min-h-[460px] flex items-center justify-center text-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-[#0B1E4A]/60 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-6 text-white"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5">
            <Quote size={16} />
            “Education is the passport to the future”
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            School Gallery
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/80">
            A glimpse into our vibrant campus life, inspiring events, and unforgettable memories shaped every day.
          </p>
        </motion.div>
      </div>

      {/* CATEGORY PILLS */}
      <div className="flex justify-center gap-4 flex-wrap px-6 -mt-8 relative z-20">
        {[
          { key: "campus", label: "Campus Life", icon: <ImageIcon size={18} /> },
          { key: "events", label: "Events & Celebrations", icon: <Camera size={18} /> },
          { key: "videos", label: "Video Moments", icon: <PlayCircle size={18} /> },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setTab(item.key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-lg transition-all duration-300 ${
              tab === item.key
                ? "bg-[#6D5BD0] text-white scale-105"
                : "bg-white text-slate-600 hover:scale-105"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* CAMPUS */}
        {tab === "campus" && (
          <>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              “Where learning begins with curiosity and every corner of the campus tells a story of growth.”
            </p>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {campusPhotos.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-3xl shadow-xl group"
                >
                  <img
                    src={img}
                    className="w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                    Campus Life Moment
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* EVENTS */}
        {tab === "events" && (
          <>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              “Celebrations that bring us together, creating memories that last a lifetime.”
            </p>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {eventPhotos.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-3xl shadow-xl group"
                >
                  <img
                    src={img}
                    className="w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                    Event Highlight
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              “Moments in motion — reliving the joy, energy, and spirit of our school life.”
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={video.image}
                      className="w-full h-80 object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="bg-white/90 backdrop-blur-md rounded-full p-5 text-[#6D5BD0] shadow-lg">
                        <PlayCircle size={44} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#0B1E4A]">
                      {video.title}
                    </h3>
                    <p className="text-slate-500 mt-2 text-sm">
                      Watch the highlights of our most memorable school moments.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}