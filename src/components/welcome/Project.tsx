"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image"; // Tambahkan ini buat cover
import { ArrowUpRight, Briefcase, Rocket, Users, Zap } from "lucide-react";

const projects = [
  { 
    title: "BPR Arta Utama", 
    slug: "arta-utama", 
    category: "Corporate Identity", 
    year: "2024 — 2026",
    icon: <Briefcase size={24} />,
    size: "md:col-span-2 md:row-span-2",
    image: "/projects/arta-cover.png", // Path ke foto sampul lo
    desc: "Mengubah perbankan tradisional menjadi pengalaman digital modern."
  },
  { 
    title: "Tabakery", 
    slug: "tabakery",
    category: "Business Strategy", 
    year: "2024 — 2026",
    icon: <Rocket size={24} />,
    size: "md:col-span-1 md:row-span-1",
    image: "/projects/tabakery-cover.png", //
    desc: "Proyek berbasis aplikasi untuk bisnis kontainer di pinggir jalan."
  },
  { 
    title: "IPM Pekalongan", 
    slug: "ipm-pekalongan",
    category: "Community Infrastructure", 
    year: "2024 — 2025",
    icon: <Users size={24} />,
    size: "md:col-span-1 md:row-span-2",
    image: "/projects/ipm-cover.png", //
    desc: "Mengubah komunitas menjadi basis agensi."
  },
  { 
    title: "Konnyusu", 
    slug: "konnyusu",
    category: "Visual Experiment", 
    year: "2023",
    icon: <Zap size={24} />,
    size: "md:col-span-2 md:row-span-1",
    image: "/projects/konnyusu-cover.png", //
    desc: "Menjelajahi batas-batas seni visual melalui gerakan dan visual eksperimental."
  },
];

export default function Project() {
  return (
    <section id="work" className="py-32 px-6 md:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-emerald-900 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Selected Works</p>
            <h2 className="text-5xl md:text-6xl font-black text-emerald-950 tracking-tighter italic uppercase leading-none">
              Featured <br /> <span className="text-yellow-500 not-italic">Projects</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((item, index) => (
            <Link 
              href={`/project/${item.slug}`} 
              key={index} 
              className={`group relative overflow-hidden rounded-[2.5rem] p-10 flex flex-col justify-between transition-all duration-700 ${item.size} ${
                index % 2 === 0 ? "bg-emerald-950 text-white" : "bg-yellow-400 text-emerald-950"
              }`}
            >
              {/* --- IMAGE COVER LAYER --- */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700">
                 {/* Lo bisa pakai placeholder dulu kalau fotonya belum ada */}
                 <div className="w-full h-full bg-black/20 absolute inset-0 z-10" />
                 <NextImage 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                 />
              </div>

              <div className="flex justify-between items-start relative z-10">
                <div className={`p-4 rounded-2xl ${index % 2 === 0 ? "bg-white/10 backdrop-blur-md" : "bg-emerald-950/10 backdrop-blur-md"}`}>
                  {item.icon}
                </div>
                <div className={`w-14 h-14 rounded-full border flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${
                  index % 2 === 0 ? "border-white/20 group-hover:bg-yellow-400 group-hover:border-yellow-400" : "border-emerald-950/20 group-hover:bg-emerald-950"
                }`}>
                  <ArrowUpRight size={24} className={index % 2 === 0 ? "group-hover:text-emerald-950" : "group-hover:text-white"} />
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-80 drop-shadow-sm">{item.category}</p>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-4 uppercase group-hover:translate-x-2 transition-transform duration-500 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-xs font-medium line-clamp-2 bg-black/20 backdrop-blur-sm p-2 rounded-lg">
                  {item.desc}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}