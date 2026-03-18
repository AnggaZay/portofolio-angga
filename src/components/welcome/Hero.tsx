"use client";
import NextImage from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-auto lg:h-screen bg-white overflow-x-hidden flex flex-col selection:bg-yellow-400">
      
      {/* 1. PEMBUNGKUS UTAMA */}
      {/* min-h-screen di mobile biar kontennya lega, flex-col biar urut atas-bawah */}
      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:grid lg:grid-cols-12 relative z-10 pt-20 lg:pt-0 lg:-mt-24 lg:flex-1">
        
        {/* --- BAGIAN A: HIMPUNAN TEXT --- */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start px-6 lg:px-20 pt-6 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border-2 border-dashed border-emerald-950 px-4 py-1.5 lg:px-6 lg:py-2 rounded-sm relative bg-white mb-5 lg:mb-8"
          >
            <span className="text-emerald-950 font-bold text-sm lg:text-xl tracking-tight uppercase">Hello There!</span>
            <div className="absolute -top-1 -left-1 w-2 h-2 lg:w-2.5 lg:h-2.5 bg-yellow-400" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 lg:w-2.5 lg:h-2.5 bg-yellow-400" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-emerald-950 tracking-tighter uppercase">
              <span className="text-[13vw] lg:text-[7.5rem] font-[1000] block leading-[0.95]">
                I'm <span className="text-yellow-500 italic">Angga,</span>
              </span>
              <span className="text-[8vw] lg:text-[3.5rem] font-semibold text-emerald-900/30 block mt-1 lg:mt-3 leading-none">
                Creative Designer
              </span>
            </h1>
            <p className="mt-4 lg:mt-6 text-slate-400 text-sm md:text-xl max-w-[280px] lg:max-w-lg leading-relaxed font-medium">
              Spesialis Kreatif Visual dalam Desain Merek & Pemasaran. Membangun sistem visual yang fungsional dan berkelanjutan.
            </p>
          </motion.div>
        </div>

        {/* --- BAGIAN B: HIMPUNAN OBJEK (FOTO) --- */}
        {/* Kita pake padding top (pt-8) buat ngasih jarak fisik dari teks di atasnya */}
        <div className="lg:col-span-5 relative flex items-end justify-center pt-8 lg:pt-0 h-[45vh] lg:h-full overflow-hidden">
          <div className="relative w-full max-w-[400px] lg:max-w-[500px] h-full flex items-end justify-center">
            <div className="relative w-full h-full z-10">
              <NextImage 
                src="/foto-angga.png" 
                alt="Angga Photo"
                fill
                className="object-contain object-bottom origin-bottom scale-[1.1] lg:scale-[1.0]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- BAGIAN C: TICKER --- */}
      <div className="relative lg:absolute lg:bottom-0 left-0 w-full bg-yellow-400 py-3 lg:py-6 border-y-2 border-emerald-900 overflow-hidden z-40">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-6 lg:gap-10 px-6 text-emerald-950 font-black text-base lg:text-2xl uppercase italic tracking-tighter">
              <span>Advertising</span> <span className="text-base lg:text-3xl">✱</span>
              <span>Branding & Marketing</span> <span className="text-base lg:text-3xl">✱</span>
              <span>Creative Designer</span> <span className="text-base lg:text-3xl">✱</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}