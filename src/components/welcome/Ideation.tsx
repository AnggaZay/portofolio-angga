"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const journeys = [
  { title: "Konnyusu Evolution", path: "konnyusu", color: "bg-indigo-600" },
  { title: "IPM Legacy", path: "ipm-pekalongan", color: "bg-black" },
  { title: "Tabakery Logic", path: "tabakery", color: "bg-orange-600" },
  { title: "Arta Strategic", path: "arta-utama", color: "bg-blue-600" }
];

export default function Ideation() {
  return (
    <section id="ideation" className="py-32 px-6 md:px-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-20">The Evolution / Journeys</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeys.map((item, i) => (
            <Link 
              key={i} // INI WAJIB ADA BIAR ERROR MERAH HILANG
              href={`/ideation/${item.path}`}
              className="group block"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm cursor-pointer"
              >
                <div className={`w-10 h-10 ${item.color} rounded-full mb-6 group-hover:scale-110 transition-transform`} />
                <h4 className="font-black uppercase tracking-tighter text-lg leading-none mb-2 text-black">{item.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">View Evolution ↗</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}