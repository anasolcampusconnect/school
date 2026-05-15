import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import bgimage from "../assets/bgimage.jpg";

/* ─────────────────────────── DATA ─────────────────────────── */
const sections = [
  {
    id: "arts",
    label: "Arts & Crafts",
    emoji: "🎨",
    color: "from-orange-400 to-pink-500",
    light: "bg-orange-50",
    accent: "text-orange-500",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    items: [
      "Drawing",
      "Painting",
      "DIY Crafts",
      "Clay Modeling",
      "Creative Workshops",
    ],
    desc: "Nurturing creativity through hands-on art experiences that spark imagination and self-expression in every student.",
    images: [
      "https://images.openai.com/static-rsc-4/Grxjq7p6YbqGXdeYlLAvkYMpK9PrSM0ElUabftJ16lDt28UPQycsrLWVkFDBLJQcqqOvUJbRJp5ZD7qlwonZVzhkET86zSfYXy0SVCJj4iT7glcH9kqbqqktYLb-r244xJ2qWMK8HNwCjSFqqXMbMJYTHFyf51-nWs5QIBHxjA8-QuWTfR7X7lMmMyDM_7-T?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/7JtdyWVBYxm0XMWa9yKKe99px24FuY_RcHYgE6_mJdnlrwhn5hBJ3UFl6m_UPJB2zrW48P48bOMWixpGObQb3-Orb64V-bl222WdAWCm0AQF4EWNKDQFDs8gQm1dUt8-yvvjrmz0RwoB6yykZBonZXwTR6NuUrIj0hAGPZzs1_zaqso4YDgwyRto1hbMvsVx?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/YN0LnFeV3z1AKg5gRGx4ufdKKd8HqaDpAfglc8Er8_DS1o-R3_0efx6YpZueX6jUnL7JGzyIntG3sBMl7lyDOx67UB6Y6MV9JMn3-88HzrUM7Anr1IDXHQx5JKCjkpuoYZn_Mcx0ko9mlnXQo4vAVWlumcEJ_QknQtd9OqOQMtEX5O1ksNx5I9jnkQbVTyWu?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/O-1wL0IQZOuSTXZFCQp8P3fUO5xXi1AOyz5dRCBEsc5kDEvXBozBeH4-tzfC-nZhrzXbpVtcXi2UZ0GUGMH471bJaAt0obspCqf1CUZOkUP6gy_wHhKy8s5tvET56rhs5fdSuB4HDeKt1kZzLQrbTUfRAV65Kqa2ETxWt2ljZIFEwoLC0wHufhiK9qXLs6Fc?purpose=fullsize",
    ],
  },
  {
    id: "dance",
    label: "Dance & Music",
    emoji: "🎵",
    color: "from-purple-500 to-indigo-500",
    light: "bg-purple-50",
    accent: "text-purple-600",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    items: [
      "Classical Dance",
      "Group Performances",
      "Singing Competitions",

      "Annual Day Shows",
    ],
    desc: "Celebrating rhythm and melody through classical art forms, group performances, and musical training for young talents.",
    images: [
      "https://images.openai.com/static-rsc-4/bXjeqWxEVMoIyCtbp6LLgZC-YKNLyU1xOg57M6vu3ohKlJW1ns81hjgMCoy7P0zcPijEz63Ha4w1m9ht1IWmsnV9qbwxwEjODrK3v4ZcJwJ_cmJUVIVm7emdXN1YOx3W0rBvzyWlt9PlgYNiY--2l4YXuMapzofFcEd-0KEqsCTYQlVW9X6Ycu1EGyrt-15S?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/tyQIos8RRMLxQ_91H21Vh2blWqZuYRgZ4hd68AvRO0oshZH6ZlbiEGl-kVoU4t--o_MA82G5F-xUHEZ3PqJfesJHMYqxMQV0JghUiPxsuI8EmuVlMKJmYmlJbpl3W0mJp1XYj7TrRbXW0ugwNaDFDXpwhsuKKvsLzCImIp3-5KCJL0muuakz6D4Y_3VCur1o?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/kH137mXtZpsQXrskRAhjCfn45lF1JPyG4P9Iv94akiOUOqgAaJf9wdt5b9otXN_YV6FRzg-6zDu26UwelgVUXvnf7X_dMtNlrCik2OVAgNtRpxN2z5m_pHYl3Y56yIPwpT2oaQzA-cWMt-En7DSwMrDL-c0fgMrnNE9xIZey_bCjuEh614FNcAPJbmza__P_?purpose=fullsize",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
    ],
  },
  {
    id: "sports",
    label: "Sports",
    emoji: "🏆",
    color: "from-green-500 to-teal-500",
    light: "bg-green-50",
    accent: "text-green-600",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    items: [
      "Indoor Games",
      "Outdoor Games",
      "Yoga",
      "Physical Training",
      "Sports Competitions",
    ],
    desc: "Building champions through disciplined training, teamwork, and competitive sports that promote health and resilience.",
    images: [
      "https://images.openai.com/static-rsc-4/MaUzS89JAbtyjKT9n59P3MGvfep43PlzjhVKAKzrJnVDrtT1Ok03xLrOye-cbXSPOjbkIQSRx1UnrjV-Ymtz8OgtXeN6zZM4Tw0pEWb2TF0kIAsvWf_oFWHWQuoXLjCLlMWFV--ZoPA34fOovzucQewlgWlaTQTKvDFw9ydIJm_LMsNu8wWCl91Umnldl2bK?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/SVXZ8rdKN4vJ3D3bKNm5UZ7Sjah9Iu6SN9UeZqtuhfmzEgsU_CgVCwY0EXBOrKd4Q_lWZiwkTw-J82uKBDBwI3op9W-cRyRiTeEcPkawpseyDU18wz6Dj01vpnAVk9NVfvndvsoqhPUzq-DR8WbcdCwqzHwu-MowJffKAEF0UBZWuacspWn-2VI6sVVVrIPt?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/A0-VecKJ0i1eeuX_UC8SNWGDWvsZcvWNqE3e6jSkGLWs_6Vp0p9E2GEEqAsxXBlfOcoseKc7b-Hx5Me6WkwWVeCbKUeFIntcUoRocUKoSNFCci-X6L3-zi7UdZZLi5ykSvFWfmbTSNGWUkLAyrKG4ab9YmubaAidZufKUdBCGEKLZ9wAf9anc_cK4o_joV5h?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/aYDWhsscHTxSPWYPuhom1eLchfw29RrhC-ubzI6YTRznQCCfiMWQkrt7qEr2mA5dazcLv9FM8FHPwMjQh1OJiHxsiES_BjXN8WOfFhaxEA5lAdBzQQ0xrPnHJqbazIvhTmMX0JJJ1l2ZN8jhCGfTtcYeNewXQEOG-ld3I-4FA__ILSJSwe4LhD72HIhfAwx2?purpose=fullsize",
    ],
  },
  {
    id: "storytelling",
    label: "Storytelling",
    emoji: "📖",
    color: "from-yellow-400 to-amber-500",
    light: "bg-yellow-50",
    accent: "text-yellow-600",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    items: [
      "Story Narration",
      "Role Play",
      "Public Speaking",
      "Drama Activities",
    ],
    desc: "Empowering young voices through storytelling and public speaking to build confidence and communication.",
    images: [
      "https://images.openai.com/static-rsc-4/bzwGI-YVEYBR_T6sN_hCYqznJgHYCwESFQEYVKO79EXDwQbQvMg5p-o26dvsATE4orf2wol_-0-jw1n5wojdebkBc_sgafDcQ1ToMlpJymCDH6myUQVom_5mvfgztjfLGmyopnUQlh11ImWX80S5B4_oioMErxB3K5YCjEaRkiiaLDeXZND1MriyQ51eFUi8?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/siFCHAVJZu1aVldTiHCXjwdwdYnikf58TOYi1pDSnSs3YYxR7TULQepdhH47SNcui1sttWqvfBTQecbysoMzVG7tFcTWwekr20d3qY6P_YF9BFF-2VeNsa_xBhcZ2mhIRM4KuCtXVX7bQaizM7Ay3VQ3uxT0j3GiUg1XYu-v2Yk5wINT0rR9qD93Q_NPDvBj?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/AG0sTo3jxi8avVBPcFlGWNVhlbNMVaGew1jn9dUgcFhy_OTKnp-fTsF60KE5A_7BqlWKhllGAVq_Y_u0ICklss_dNNChqQz6b2eKribdJk_GPK803axbIqAQfiFSZ3tcDbS6mubY9Ne_84MBXX6X0JoIieVYRYBTjKgQzjG5MBnnfAbWyPtilOM9HcaxgIFo?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/Axmhvzr-TeT6mJWESPO1Mp0iRv0esLx8nOzye-8kYwgnd2-eIpsX6PCba3Y78fd8paGm6wAVJcE6ZVf4jHkxxfP_waDCYuTjZMCUmv614Ubey3Ziy9oHstG3Ilw-0PMhwxwOFgVN2HSEfXt5OfA1VXd4knxkE_o9MylvW6AbHNN_MksfhTkl_2AEZilfpAjo?purpose=fullsize",
    ],
  },
  {
    id: "celebrations",
    label: "Celebrations & Events",
    emoji: "🎉",
    color: "from-rose-400 to-red-500",
    light: "bg-rose-50",
    accent: "text-rose-600",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    items: [
      "Annual Day",
      "Festivals",
      "Independence Day",
      "Teachers' Day",
      "Cultural Celebrations",
    ],
    desc: "Creating memories through vibrant celebrations, cultural festivals, and school events that unite our community.",
    images: [
      "https://images.openai.com/static-rsc-4/pcATUg6_2FxOGM_n2UWBQGYOipQnkpeFh8sTU3y8GFqdmGfTcWhA4sSoIXgDVKYJKkmPFVAigbmtkn1vEpRTo44RJSzEnufpfzMyRhNDbTj1Bcyo9QVRQEXtUUIH1dy5bJWVdbptbFvp0o3ZEsC5b-Y-SRPrCJgbn_eRVtweBIxa1XNCvQPewFqUWHLAFEzQ?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/csXdUO2RcCfIpqjUshJ4rLqpPFtklxkJ-WL8gpHNSk4NQzc8-XEkoSEgVZSBvP-ciirG7c8EabFbXjaHkWEMA90CGpDFP01RHw7619QcvnzdFPwc7eUlwmSWdbALmDwBeMtZBX0mm4yBFT-drKX6RL0eR1c3zBFFVOylFDfreHPJh2Oyj40bNHaRxbJtIZDk?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/zdpt_r8xVMtUHs6-vrNYvfQhTVZXao2rdFRdJIP6edmBA25AdCOTjd4_wkwu9Ka5qYtZdfm0CFDwZyw7GeJOiKRZDk6agHqZXyCgoQO5Hp9-lWDxshxjJQ9NjMQfBEsJRehl3jaRQhtd5mJzlV0tCYVXmTtjMDkYJaJgPKsG7svp9Ddq1Xi_jCQxGbbD2RRX?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/cxiMYsCg-QKR_IculqCPLVZJTTIKLEYVEPZBaY6P59ignIbRrKa3BCxHrTZFHtoeGVPWsCbAoxt9S9z0nHYzwkFp2rm_05HjcLkKf0spBDnPGGHaCtcO5TcbPetL8DCH4pey5fcfE1SvyByXiWk8zn4WYe_bW8OVZpZlV-UXQoRG-hUgCJppGnoRr9RtDCBX?purpose=fullsize",
    ],
  },
  {
    id: "science",
    label: "Science & Innovation",
    emoji: "🧪",
    color: "from-cyan-500 to-blue-500",
    light: "bg-cyan-50",
    accent: "text-cyan-600",
    border: "border-cyan-200",
    badge: "bg-cyan-100 text-cyan-700",
    items: [
      "Science Experiments",
      "Robotics Club",

      "Coding Activities",
      "Innovation Projects",
    ],
    desc: "Encouraging curiosity and innovation through hands-on science experiments, robotics, and technology-based learning experiences.",
    images: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&q=80",
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=400&q=80",
    ],
  },
];

const achievements = [
  {
    icon: "🥇",
    title: "Inter-School Sports Champions",
    desc: "Gold in District-Level Athletics 2024",
    color: "from-yellow-400 to-amber-400",
  },
  {
    icon: "🎨",
    title: "State Drawing Competition",
    desc: "1st Place – Young Artists Fest 2024",
    color: "from-pink-400 to-rose-400",
  },
  {
    icon: "💃",
    title: "Classical Dance Excellence",
    desc: "Best Performance – Regional Fest",
    color: "from-purple-400 to-indigo-400",
  },
  {
    icon: "📢",
    title: "Public Speaking Award",
    desc: "Best Orator – City Finals 2024",
    color: "from-blue-400 to-cyan-400",
  },
];

const timeline = [
  {
    month: "Jun",
    event: "Annual Sports Day",
    icon: "https://images.openai.com/static-rsc-4/nFRXwcOyPTmtOAKhF9c3wW_lE5FXmCRy2YOyZ9RznMeK77UdE-al_TO9Z8pFOudGPCYGFyXlzDy5F0X_lqakwDOUUGTaAUSGIgR-QZD5OkYqcX91gna9ydAj_btXp6p0SBW58Hw9YBmiE5Se8R9lxaITbdCisNWPzPkES9hVJnbiuKlGZT1FV6Y1etaB0rmL?purpose=fullsize",
  },
  {
    month: "Aug",
    event: "Independence Day Celebration",
    icon: "https://images.openai.com/static-rsc-4/vZCekWEgAcU34VaEDd9kcDIAW9urlKcghvYuepJgNwy5g_P27RljxlpgSdLVGBEjtdFOdjzn9OyMRtFtH5yAma31QzKsWGKt7BmNfDC39lm2cAC3BxAtMsHB3ebXa9R8nkOv5ZATrb3b6Hj_neo2QiY8im1iHyDfaR9DKeUHiqGT0O_0KXw2Zbd_zfVLY17d?purpose=fullsize",
  },
  {
    month: "Sep",
    event: "Art Exhibition",
    icon: "https://images.openai.com/static-rsc-4/uLwgnvbsm-3DacscX0PgHXTvFjQa46gsYdpgBOkN-0YLomrymkgqjmgxgliLFW2D37exK1cMfiRoN34mUD9mn7cOPbyhS57m8WOx-N673KcrGGBcibGAFMLgmbVxsryu6oDry278wwGo3s-7P5atucjuBOwfxdM-dwpqMQBdH0v3C8X5da2t-c7jB3Eh51Df?purpose=fullsize",
  },
  {
    month: "Oct",
    event: "Cultural Fest",
    icon: "https://images.openai.com/static-rsc-4/kH137mXtZpsQXrskRAhjCfn45lF1JPyG4P9Iv94akiOUOqgAaJf9wdt5b9otXN_YV6FRzg-6zDu26UwelgVUXvnf7X_dMtNlrCik2OVAgNtRpxN2z5m_pHYl3Y56yIPwpT2oaQzA-cWMt-En7DSwMrDL-c0fgMrnNE9xIZey_bCjuEh614FNcAPJbmza__P_?purpose=fullsize",
  },
  {
    month: "Nov",
    event: "Teachers' Day Gala",
    icon: "https://images.openai.com/static-rsc-4/AG0sTo3jxi8avVBPcFlGWNVhlbNMVaGew1jn9dUgcFhy_OTKnp-fTsF60KE5A_7BqlWKhllGAVq_Y_u0ICklss_dNNChqQz6b2eKribdJk_GPK803axbIqAQfiFSZ3tcDbS6mubY9Ne_84MBXX6X0JoIieVYRYBTjKgQzjG5MBnnfAbWyPtilOM9HcaxgIFo?purpose=fullsize",
  },
  {
    month: "Dec",
    event: "Annual Day & Prize Distribution",
    icon: "https://images.openai.com/static-rsc-4/y_CEbQ9Iz3jnYhioLhNLZVZR48zWqscDLZGD7wuPzN_Vq-rUUItUij7tz1CNoLO1Z6R9QLxwQAd-gJJg1GOKIqVn21XE1h4JMVv_2vVDKWHyox1cwZeAou8m4goGbaCXKkWpY_kpfjTZvXZhSppu0_RN86Oi-Yvar7p6uk4ZvF3zgLCy-wdoAvE2x25LHyJB?purpose=fullsize",
  },
];

/* ─────────────────────────── SECTION CARD ─────────────────────────── */
const SectionCard = ({ section }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div
      className={`rounded-3xl bg-white/90 backdrop-blur border ${section.border}
overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2
transition-all duration-500 group relative`}
    >
      {/* Top image gallery */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={section.images[activeImg]}
          alt={section.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70`}
        />

        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {section.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === activeImg ? "border-white scale-110" : "border-white/50 opacity-70"}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className={`text-xl font-extrabold ${section.accent} mb-2`}>
          {section.label}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {section.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {section.items.map((item) => (
            <span
              key={item}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${section.badge}`}
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          to="/gallery"
          className={`w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r ${section.color} text-white hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5`}
        >
          View More →
        </Link>
      </div>
    </div>
  );
};

const ActivitiesPage = () => {
  const [activeSection, setActiveSection] = useState("all");

  const filtered =
    activeSection === "all"
      ? sections
      : sections.filter((s) => s.id === activeSection);

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import bgimage from "../assets/bgimage.jpg";

/* ─────────────────────────── DATA ─────────────────────────── */
const sections = [
  {
    id: "arts",
    label: "Arts & Crafts",
    emoji: "🎨",
    color: "from-orange-400 to-pink-500",
    light: "bg-orange-50",
    accent: "text-orange-500",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    items: [
      "Drawing",
      "Painting",
      "DIY Crafts",
      "Clay Modeling",
      "Creative Workshops",
    ],
    desc: "Nurturing creativity through hands-on art experiences that spark imagination and self-expression in every student.",
    images: [
      "https://images.openai.com/static-rsc-4/Grxjq7p6YbqGXdeYlLAvkYMpK9PrSM0ElUabftJ16lDt28UPQycsrLWVkFDBLJQcqqOvUJbRJp5ZD7qlwonZVzhkET86zSfYXy0SVCJj4iT7glcH9kqbqqktYLb-r244xJ2qWMK8HNwCjSFqqXMbMJYTHFyf51-nWs5QIBHxjA8-QuWTfR7X7lMmMyDM_7-T?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/7JtdyWVBYxm0XMWa9yKKe99px24FuY_RcHYgE6_mJdnlrwhn5hBJ3UFl6m_UPJB2zrW48P48bOMWixpGObQb3-Orb64V-bl222WdAWCm0AQF4EWNKDQFDs8gQm1dUt8-yvvjrmz0RwoB6yykZBonZXwTR6NuUrIj0hAGPZzs1_zaqso4YDgwyRto1hbMvsVx?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/YN0LnFeV3z1AKg5gRGx4ufdKKd8HqaDpAfglc8Er8_DS1o-R3_0efx6YpZueX6jUnL7JGzyIntG3sBMl7lyDOx67UB6Y6MV9JMn3-88HzrUM7Anr1IDXHQx5JKCjkpuoYZn_Mcx0ko9mlnXQo4vAVWlumcEJ_QknQtd9OqOQMtEX5O1ksNx5I9jnkQbVTyWu?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/O-1wL0IQZOuSTXZFCQp8P3fUO5xXi1AOyz5dRCBEsc5kDEvXBozBeH4-tzfC-nZhrzXbpVtcXi2UZ0GUGMH471bJaAt0obspCqf1CUZOkUP6gy_wHhKy8s5tvET56rhs5fdSuB4HDeKt1kZzLQrbTUfRAV65Kqa2ETxWt2ljZIFEwoLC0wHufhiK9qXLs6Fc?purpose=fullsize",
    ],
  },
  {
    id: "dance",
    label: "Dance & Music",
    emoji: "🎵",
    color: "from-purple-500 to-indigo-500",
    light: "bg-purple-50",
    accent: "text-purple-600",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    items: [
      "Classical Dance",
      "Group Performances",
      "Singing Competitions",

      "Annual Day Shows",
    ],
    desc: "Celebrating rhythm and melody through classical art forms, group performances, and musical training for young talents.",
    images: [
      "https://images.openai.com/static-rsc-4/bXjeqWxEVMoIyCtbp6LLgZC-YKNLyU1xOg57M6vu3ohKlJW1ns81hjgMCoy7P0zcPijEz63Ha4w1m9ht1IWmsnV9qbwxwEjODrK3v4ZcJwJ_cmJUVIVm7emdXN1YOx3W0rBvzyWlt9PlgYNiY--2l4YXuMapzofFcEd-0KEqsCTYQlVW9X6Ycu1EGyrt-15S?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/tyQIos8RRMLxQ_91H21Vh2blWqZuYRgZ4hd68AvRO0oshZH6ZlbiEGl-kVoU4t--o_MA82G5F-xUHEZ3PqJfesJHMYqxMQV0JghUiPxsuI8EmuVlMKJmYmlJbpl3W0mJp1XYj7TrRbXW0ugwNaDFDXpwhsuKKvsLzCImIp3-5KCJL0muuakz6D4Y_3VCur1o?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/kH137mXtZpsQXrskRAhjCfn45lF1JPyG4P9Iv94akiOUOqgAaJf9wdt5b9otXN_YV6FRzg-6zDu26UwelgVUXvnf7X_dMtNlrCik2OVAgNtRpxN2z5m_pHYl3Y56yIPwpT2oaQzA-cWMt-En7DSwMrDL-c0fgMrnNE9xIZey_bCjuEh614FNcAPJbmza__P_?purpose=fullsize",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
    ],
  },
  {
    id: "sports",
    label: "Sports",
    emoji: "🏆",
    color: "from-green-500 to-teal-500",
    light: "bg-green-50",
    accent: "text-green-600",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    items: [
      "Indoor Games",
      "Outdoor Games",
      "Yoga",
      "Physical Training",
      "Sports Competitions",
    ],
    desc: "Building champions through disciplined training, teamwork, and competitive sports that promote health and resilience.",
    images: [
      "https://images.openai.com/static-rsc-4/MaUzS89JAbtyjKT9n59P3MGvfep43PlzjhVKAKzrJnVDrtT1Ok03xLrOye-cbXSPOjbkIQSRx1UnrjV-Ymtz8OgtXeN6zZM4Tw0pEWb2TF0kIAsvWf_oFWHWQuoXLjCLlMWFV--ZoPA34fOovzucQewlgWlaTQTKvDFw9ydIJm_LMsNu8wWCl91Umnldl2bK?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/SVXZ8rdKN4vJ3D3bKNm5UZ7Sjah9Iu6SN9UeZqtuhfmzEgsU_CgVCwY0EXBOrKd4Q_lWZiwkTw-J82uKBDBwI3op9W-cRyRiTeEcPkawpseyDU18wz6Dj01vpnAVk9NVfvndvsoqhPUzq-DR8WbcdCwqzHwu-MowJffKAEF0UBZWuacspWn-2VI6sVVVrIPt?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/A0-VecKJ0i1eeuX_UC8SNWGDWvsZcvWNqE3e6jSkGLWs_6Vp0p9E2GEEqAsxXBlfOcoseKc7b-Hx5Me6WkwWVeCbKUeFIntcUoRocUKoSNFCci-X6L3-zi7UdZZLi5ykSvFWfmbTSNGWUkLAyrKG4ab9YmubaAidZufKUdBCGEKLZ9wAf9anc_cK4o_joV5h?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/aYDWhsscHTxSPWYPuhom1eLchfw29RrhC-ubzI6YTRznQCCfiMWQkrt7qEr2mA5dazcLv9FM8FHPwMjQh1OJiHxsiES_BjXN8WOfFhaxEA5lAdBzQQ0xrPnHJqbazIvhTmMX0JJJ1l2ZN8jhCGfTtcYeNewXQEOG-ld3I-4FA__ILSJSwe4LhD72HIhfAwx2?purpose=fullsize",
    ],
  },
  {
    id: "storytelling",
    label: "Storytelling",
    emoji: "📖",
    color: "from-yellow-400 to-amber-500",
    light: "bg-yellow-50",
    accent: "text-yellow-600",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    items: [
      "Story Narration",
      "Role Play",
      "Public Speaking",
      "Drama Activities",
    ],
    desc: "Empowering young voices through storytelling and public speaking to build confidence and communication.",
    images: [
      "https://images.openai.com/static-rsc-4/bzwGI-YVEYBR_T6sN_hCYqznJgHYCwESFQEYVKO79EXDwQbQvMg5p-o26dvsATE4orf2wol_-0-jw1n5wojdebkBc_sgafDcQ1ToMlpJymCDH6myUQVom_5mvfgztjfLGmyopnUQlh11ImWX80S5B4_oioMErxB3K5YCjEaRkiiaLDeXZND1MriyQ51eFUi8?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/siFCHAVJZu1aVldTiHCXjwdwdYnikf58TOYi1pDSnSs3YYxR7TULQepdhH47SNcui1sttWqvfBTQecbysoMzVG7tFcTWwekr20d3qY6P_YF9BFF-2VeNsa_xBhcZ2mhIRM4KuCtXVX7bQaizM7Ay3VQ3uxT0j3GiUg1XYu-v2Yk5wINT0rR9qD93Q_NPDvBj?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/AG0sTo3jxi8avVBPcFlGWNVhlbNMVaGew1jn9dUgcFhy_OTKnp-fTsF60KE5A_7BqlWKhllGAVq_Y_u0ICklss_dNNChqQz6b2eKribdJk_GPK803axbIqAQfiFSZ3tcDbS6mubY9Ne_84MBXX6X0JoIieVYRYBTjKgQzjG5MBnnfAbWyPtilOM9HcaxgIFo?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/Axmhvzr-TeT6mJWESPO1Mp0iRv0esLx8nOzye-8kYwgnd2-eIpsX6PCba3Y78fd8paGm6wAVJcE6ZVf4jHkxxfP_waDCYuTjZMCUmv614Ubey3Ziy9oHstG3Ilw-0PMhwxwOFgVN2HSEfXt5OfA1VXd4knxkE_o9MylvW6AbHNN_MksfhTkl_2AEZilfpAjo?purpose=fullsize",
    ],
  },
  {
    id: "celebrations",
    label: "Celebrations & Events",
    emoji: "🎉",
    color: "from-rose-400 to-red-500",
    light: "bg-rose-50",
    accent: "text-rose-600",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    items: [
      "Annual Day",
      "Festivals",
      "Independence Day",
      "Teachers' Day",
      "Cultural Celebrations",
    ],
    desc: "Creating memories through vibrant celebrations, cultural festivals, and school events that unite our community.",
    images: [
      "https://images.openai.com/static-rsc-4/pcATUg6_2FxOGM_n2UWBQGYOipQnkpeFh8sTU3y8GFqdmGfTcWhA4sSoIXgDVKYJKkmPFVAigbmtkn1vEpRTo44RJSzEnufpfzMyRhNDbTj1Bcyo9QVRQEXtUUIH1dy5bJWVdbptbFvp0o3ZEsC5b-Y-SRPrCJgbn_eRVtweBIxa1XNCvQPewFqUWHLAFEzQ?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/csXdUO2RcCfIpqjUshJ4rLqpPFtklxkJ-WL8gpHNSk4NQzc8-XEkoSEgVZSBvP-ciirG7c8EabFbXjaHkWEMA90CGpDFP01RHw7619QcvnzdFPwc7eUlwmSWdbALmDwBeMtZBX0mm4yBFT-drKX6RL0eR1c3zBFFVOylFDfreHPJh2Oyj40bNHaRxbJtIZDk?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/zdpt_r8xVMtUHs6-vrNYvfQhTVZXao2rdFRdJIP6edmBA25AdCOTjd4_wkwu9Ka5qYtZdfm0CFDwZyw7GeJOiKRZDk6agHqZXyCgoQO5Hp9-lWDxshxjJQ9NjMQfBEsJRehl3jaRQhtd5mJzlV0tCYVXmTtjMDkYJaJgPKsG7svp9Ddq1Xi_jCQxGbbD2RRX?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/cxiMYsCg-QKR_IculqCPLVZJTTIKLEYVEPZBaY6P59ignIbRrKa3BCxHrTZFHtoeGVPWsCbAoxt9S9z0nHYzwkFp2rm_05HjcLkKf0spBDnPGGHaCtcO5TcbPetL8DCH4pey5fcfE1SvyByXiWk8zn4WYe_bW8OVZpZlV-UXQoRG-hUgCJppGnoRr9RtDCBX?purpose=fullsize",
    ],
  },
  {
    id: "science",
    label: "Science & Innovation",
    emoji: "🧪",
    color: "from-cyan-500 to-blue-500",
    light: "bg-cyan-50",
    accent: "text-cyan-600",
    border: "border-cyan-200",
    badge: "bg-cyan-100 text-cyan-700",
    items: [
      "Science Experiments",
      "Robotics Club",

      "Coding Activities",
      "Innovation Projects",
    ],
    desc: "Encouraging curiosity and innovation through hands-on science experiments, robotics, and technology-based learning experiences.",
    images: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&q=80",
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=400&q=80",
    ],
  },
];

const achievements = [
  {
    icon: "🥇",
    title: "Inter-School Sports Champions",
    desc: "Gold in District-Level Athletics 2024",
    color: "from-yellow-400 to-amber-400",
  },
  {
    icon: "🎨",
    title: "State Drawing Competition",
    desc: "1st Place – Young Artists Fest 2024",
    color: "from-pink-400 to-rose-400",
  },
  {
    icon: "💃",
    title: "Classical Dance Excellence",
    desc: "Best Performance – Regional Fest",
    color: "from-purple-400 to-indigo-400",
  },
  {
    icon: "📢",
    title: "Public Speaking Award",
    desc: "Best Orator – City Finals 2024",
    color: "from-blue-400 to-cyan-400",
  },
];

const timeline = [
  {
    month: "Jun",
    event: "Annual Sports Day",
    icon: "https://images.openai.com/static-rsc-4/nFRXwcOyPTmtOAKhF9c3wW_lE5FXmCRy2YOyZ9RznMeK77UdE-al_TO9Z8pFOudGPCYGFyXlzDy5F0X_lqakwDOUUGTaAUSGIgR-QZD5OkYqcX91gna9ydAj_btXp6p0SBW58Hw9YBmiE5Se8R9lxaITbdCisNWPzPkES9hVJnbiuKlGZT1FV6Y1etaB0rmL?purpose=fullsize",
  },
  {
    month: "Aug",
    event: "Independence Day Celebration",
    icon: "https://images.openai.com/static-rsc-4/vZCekWEgAcU34VaEDd9kcDIAW9urlKcghvYuepJgNwy5g_P27RljxlpgSdLVGBEjtdFOdjzn9OyMRtFtH5yAma31QzKsWGKt7BmNfDC39lm2cAC3BxAtMsHB3ebXa9R8nkOv5ZATrb3b6Hj_neo2QiY8im1iHyDfaR9DKeUHiqGT0O_0KXw2Zbd_zfVLY17d?purpose=fullsize",
  },
  {
    month: "Sep",
    event: "Art Exhibition",
    icon: "https://images.openai.com/static-rsc-4/uLwgnvbsm-3DacscX0PgHXTvFjQa46gsYdpgBOkN-0YLomrymkgqjmgxgliLFW2D37exK1cMfiRoN34mUD9mn7cOPbyhS57m8WOx-N673KcrGGBcibGAFMLgmbVxsryu6oDry278wwGo3s-7P5atucjuBOwfxdM-dwpqMQBdH0v3C8X5da2t-c7jB3Eh51Df?purpose=fullsize",
  },
  {
    month: "Oct",
    event: "Cultural Fest",
    icon: "https://images.openai.com/static-rsc-4/kH137mXtZpsQXrskRAhjCfn45lF1JPyG4P9Iv94akiOUOqgAaJf9wdt5b9otXN_YV6FRzg-6zDu26UwelgVUXvnf7X_dMtNlrCik2OVAgNtRpxN2z5m_pHYl3Y56yIPwpT2oaQzA-cWMt-En7DSwMrDL-c0fgMrnNE9xIZey_bCjuEh614FNcAPJbmza__P_?purpose=fullsize",
  },
  {
    month: "Nov",
    event: "Teachers' Day Gala",
    icon: "https://images.openai.com/static-rsc-4/AG0sTo3jxi8avVBPcFlGWNVhlbNMVaGew1jn9dUgcFhy_OTKnp-fTsF60KE5A_7BqlWKhllGAVq_Y_u0ICklss_dNNChqQz6b2eKribdJk_GPK803axbIqAQfiFSZ3tcDbS6mubY9Ne_84MBXX6X0JoIieVYRYBTjKgQzjG5MBnnfAbWyPtilOM9HcaxgIFo?purpose=fullsize",
  },
  {
    month: "Dec",
    event: "Annual Day & Prize Distribution",
    icon: "https://images.openai.com/static-rsc-4/y_CEbQ9Iz3jnYhioLhNLZVZR48zWqscDLZGD7wuPzN_Vq-rUUItUij7tz1CNoLO1Z6R9QLxwQAd-gJJg1GOKIqVn21XE1h4JMVv_2vVDKWHyox1cwZeAou8m4goGbaCXKkWpY_kpfjTZvXZhSppu0_RN86Oi-Yvar7p6uk4ZvF3zgLCy-wdoAvE2x25LHyJB?purpose=fullsize",
  },
];

/* ─────────────────────────── SECTION CARD ─────────────────────────── */
const SectionCard = ({ section }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div
      className={`rounded-3xl bg-white/90 backdrop-blur border ${section.border}
overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2
transition-all duration-500 group relative`}
    >
      {/* Top image gallery */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={section.images[activeImg]}
          alt={section.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70`}
        />

        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {section.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === activeImg ? "border-white scale-110" : "border-white/50 opacity-70"}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className={`text-xl font-extrabold ${section.accent} mb-2`}>
          {section.label}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {section.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {section.items.map((item) => (
            <span
              key={item}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${section.badge}`}
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          to="/gallery"
          className={`w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r ${section.color} text-white hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5`}
        >
          View More →
        </Link>
      </div>
    </div>
  );
};

const ActivitiesPage = () => {
  const [activeSection, setActiveSection] = useState("all");

  const filtered =
    activeSection === "all"
      ? sections
      : sections.filter((s) => s.id === activeSection);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans ">
      <div className="relative z-10">
        <section className="relative h-screen md:h-screen w-full overflow-hidden ">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimage})` }}
          />

          {/* Colored Overlay */}
          <div className="absolute inset-0 bg-black/60 " />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.20),transparent_35%)]" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-8 py-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-emerald-200 text-sm font-bold px-5 py-2 rounded-full mb-6 border border-white/10 shadow-lg">
              🌟 Campus Life at Elite Global
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Where Every Student <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-pink-300">
                Discovers Their Spark
              </span>
            </h1>

            {/* Description */}
            <p className="text-emerald-50/90 text-lg md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
              From arts to athletics, dance to debate — our vibrant
              extracurricular ecosystem helps students grow into confident,
              creative, and future-ready leaders.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/facilities"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold shadow-xl hover:scale-105 transition duration-300"
              >
                Explore Facilities
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white font-bold hover:bg-white/20 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION CARDS ── */}
        <section className="relative px-4 xl:px-8 py-16 bg-gradient-to-b from-emerald-100/50 via-emarald-100/50 to-red-100/50 ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filtered.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>
        </section>

        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-red-100/50 via-sky-50/40 to-sky-200/50">
          {/* Background Glow */}

          <div className="relative max-w-6xl mx-auto px-4 xl:px-8">
            {/* Heading */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-[#059669] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] shadow-sm">
                📅 Academic Year
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#0B1E4A] leading-tight">
                Events Calendar
              </h2>

              <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                A journey filled with celebrations, competitions, achievements,
                and unforgettable school memories.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
                <div className="w-1 h-full bg-gradient-to-b from-emerald-400 via-emerald-500 to-[#0B1E4A] rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/30 animate-pulse" />
                </div>
              </div>

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div
                    key={item.month}
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${
                      i % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        i % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 bg-emerald-100 text-[#059669] text-xs font-black px-4 py-1.5 rounded-full shadow-sm mb-3`}
                      >
                        ✨ {item.month} 2024
                      </div>

                      <div className="group relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-1000 hover:-translate-y-1 overflow-hidden">
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                        <div className="relative flex items-start gap-4">
                          {/* Event Icon */}
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#059669] to-[#0B1E4A] text-white flex items-center justify-center shadow-md shrink-0 text-xl">
                            🎉
                          </div>

                          {/* Text */}
                          <div>
                            <h3 className="font-black text-lg text-[#0B1E4A]">
                              {item.event}
                            </h3>

                            <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                              Join us for exciting activities, student
                              participation, and memorable moments throughout
                              the academic year.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Image */}
                    <div className="relative hidden md:flex items-center justify-center">
                      {/* Pulse Ring */}
                      <div className="absolute w-24 h-24 rounded-full bg-emerald-400/20 animate-ping" />

                      <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden border-[5px] border-white shadow-2xl ring-4 ring-emerald-100">
                        <img
                          src={item.icon}
                          alt={item.event}
                          className="w-full h-full object-cover hover:scale-110 transition duration-500"
                        />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-slate-50 py-20 overflow-hidden bg-gradient-to-b from-sky-200/50 via-emarald-50/50 to-emerald-100/50">
          {/* Background Blur Circles */}

          <div className="relative max-w-4xl mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-10 md:p-14 text-center shadow-xl relative overflow-hidden">
              {/* subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-cyan-50/30 pointer-events-none" />

              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-4xl mb-6 shadow-md">
                🌟
              </div>

              {/* Heading */}
              <h2 className="relative text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Ready to Join the Journey?
              </h2>

              {/* Description */}
              <p className="relative text-slate-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                Give your child a vibrant learning environment filled with
                creativity, confidence, friendships, and memorable experiences.
              </p>

              {/* Buttons */}
              <div className="relative mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary Button */}
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-300/40 hover:-translate-y-1"
                >
                  Apply for Admission
                </Link>

                {/* Secondary Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-slate-300 bg-white/70 backdrop-blur text-slate-700 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ── PHOTO SHOWCASE ── */}
        <section className="py-16 bg-slate-50 bg-gradient-to-b from-emerald-100/50 via-red-200/50 to-slate-100/50 ">
          <div className="max-w-7xl mx-auto px-4 xl:px-8">
            <div className="text-center mb-10">
              <span className="text-[#059669] font-bold text-sm uppercase tracking-widest">
                Memories
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1E4A] mt-2">
                Activity Showcase
              </h2>
              <p className="text-slate-500 mt-3">
                A glimpse into the vibrant life at Elite Global Academy.
              </p>
            </div>

            {/* Masonry-style grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
                  tall: true,
                  label: "Art Session",
                },
                {
                  src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
                  tall: false,
                  label: "Dance Practice",
                },
                {
                  src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
                  tall: false,
                  label: "Basketball",
                },
                {
                  src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
                  tall: true,
                  label: "Annual Day",
                },
                {
                  src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
                  tall: false,
                  label: "Painting",
                },
                {
                  src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
                  tall: true,
                  label: "Reading Club",
                },
                {
                  src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
                  tall: false,
                  label: "Festival",
                },
                {
                  src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
                  tall: false,
                  label: "Music",
                },
                {
                  src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
                  tall: false,
                  label: "Creative Learning",
                },
              ].map((photo, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${photo.tall ? "row-span-2" : ""}`}
                  style={{ minHeight: photo.tall ? "320px" : "150px" }}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      height: "100%",
                      minHeight: photo.tall ? "320px" : "150px",
                    }}
                  />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm">
                      {photo.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    <div className="relative min-h-screen overflow-hidden font-sans ">
      <div className="relative z-10">
        <section className="relative h-screen md:h-screen w-full overflow-hidden ">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimage})` }}
          />

          {/* Colored Overlay */}
          <div className="absolute inset-0 bg-black/60 " />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.20),transparent_35%)]" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-8 py-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-emerald-200 text-sm font-bold px-5 py-2 rounded-full mb-6 border border-white/10 shadow-lg">
              🌟 Campus Life at Elite Global
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Where Every Student <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-pink-300">
                Discovers Their Spark
              </span>
            </h1>

            {/* Description */}
            <p className="text-emerald-50/90 text-lg md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
              From arts to athletics, dance to debate — our vibrant
              extracurricular ecosystem helps students grow into confident,
              creative, and future-ready leaders.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/facilities"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold shadow-xl hover:scale-105 transition duration-300"
              >
                Explore Facilities
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white font-bold hover:bg-white/20 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION CARDS ── */}
        <section className="relative px-4 xl:px-8 py-16 bg-gradient-to-b from-emerald-100/50 via-emarald-100/50 to-red-100/50 ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filtered.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>
        </section>

        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-red-100/50 via-sky-50/40 to-sky-200/50">
          {/* Background Glow */}

          <div className="relative max-w-6xl mx-auto px-4 xl:px-8">
            {/* Heading */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-[#059669] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] shadow-sm">
                📅 Academic Year
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#0B1E4A] leading-tight">
                Events Calendar
              </h2>

              <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                A journey filled with celebrations, competitions, achievements,
                and unforgettable school memories.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
                <div className="w-1 h-full bg-gradient-to-b from-emerald-400 via-emerald-500 to-[#0B1E4A] rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/30 animate-pulse" />
                </div>
              </div>

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div
                    key={item.month}
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${
                      i % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        i % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 bg-emerald-100 text-[#059669] text-xs font-black px-4 py-1.5 rounded-full shadow-sm mb-3`}
                      >
                        ✨ {item.month} 2024
                      </div>

                      <div className="group relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-1000 hover:-translate-y-1 overflow-hidden">
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                        <div className="relative flex items-start gap-4">
                          {/* Event Icon */}
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#059669] to-[#0B1E4A] text-white flex items-center justify-center shadow-md shrink-0 text-xl">
                            🎉
                          </div>

                          {/* Text */}
                          <div>
                            <h3 className="font-black text-lg text-[#0B1E4A]">
                              {item.event}
                            </h3>

                            <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                              Join us for exciting activities, student
                              participation, and memorable moments throughout
                              the academic year.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Image */}
                    <div className="relative hidden md:flex items-center justify-center">
                      {/* Pulse Ring */}
                      <div className="absolute w-24 h-24 rounded-full bg-emerald-400/20 animate-ping" />

                      <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden border-[5px] border-white shadow-2xl ring-4 ring-emerald-100">
                        <img
                          src={item.icon}
                          alt={item.event}
                          className="w-full h-full object-cover hover:scale-110 transition duration-500"
                        />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-slate-50 py-20 overflow-hidden bg-gradient-to-b from-sky-200/50 via-emarald-50/50 to-emerald-100/50">
          {/* Background Blur Circles */}

          <div className="relative max-w-4xl mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-10 md:p-14 text-center shadow-xl relative overflow-hidden">
              {/* subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-cyan-50/30 pointer-events-none" />

              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-4xl mb-6 shadow-md">
                🌟
              </div>

              {/* Heading */}
              <h2 className="relative text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Ready to Join the Journey?
              </h2>

              {/* Description */}
              <p className="relative text-slate-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                Give your child a vibrant learning environment filled with
                creativity, confidence, friendships, and memorable experiences.
              </p>

              {/* Buttons */}
              <div className="relative mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary Button */}
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-300/40 hover:-translate-y-1"
                >
                  Apply for Admission
                </Link>

                {/* Secondary Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-slate-300 bg-white/70 backdrop-blur text-slate-700 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ── PHOTO SHOWCASE ── */}
        <section className="py-16 bg-slate-50 bg-gradient-to-b from-emerald-100/50 via-red-200/50 to-slate-100/50 ">
          <div className="max-w-7xl mx-auto px-4 xl:px-8">
            <div className="text-center mb-10">
              <span className="text-[#059669] font-bold text-sm uppercase tracking-widest">
                Memories
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1E4A] mt-2">
                Activity Showcase
              </h2>
              <p className="text-slate-500 mt-3">
                A glimpse into the vibrant life at Elite Global Academy.
              </p>
            </div>

            {/* Masonry-style grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
                  tall: true,
                  label: "Art Session",
                },
                {
                  src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
                  tall: false,
                  label: "Dance Practice",
                },
                {
                  src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
                  tall: false,
                  label: "Basketball",
                },
                {
                  src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
                  tall: true,
                  label: "Annual Day",
                },
                {
                  src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
                  tall: false,
                  label: "Painting",
                },
                {
                  src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
                  tall: true,
                  label: "Reading Club",
                },
                {
                  src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
                  tall: false,
                  label: "Festival",
                },
                {
                  src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
                  tall: false,
                  label: "Music",
                },
                {
                  src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
                  tall: false,
                  label: "Creative Learning",
                },
              ].map((photo, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${photo.tall ? "row-span-2" : ""}`}
                  style={{ minHeight: photo.tall ? "320px" : "150px" }}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      height: "100%",
                      minHeight: photo.tall ? "320px" : "150px",
                    }}
                  />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm">
                      {photo.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActivitiesPage;
