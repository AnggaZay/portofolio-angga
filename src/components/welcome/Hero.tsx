"use client";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden font-sans select-none flex flex-col">
      <div 
        className="grid w-full h-full flex-grow"
        style={{ 
          gridTemplateColumns: 'repeat(16, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(9, minmax(0, 1fr))'
        }}
      >
        
        {/* Hello Box */}
        <div className="col-start-2 col-span-4 row-start-2 row-span-1 flex items-start justify-start z-30 pt-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block border-2 border-dashed border-emerald-900 px-6 py-2 rounded-sm relative bg-white shadow-sm"
          >
            <span className="text-emerald-950 font-bold text-lg md:text-xl tracking-tight">Hello There!</span>
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-yellow-400 shadow-[0_0_10px_#facc15]" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-yellow-400 shadow-[0_0_10px_#facc15]" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-yellow-400 shadow-[0_0_10px_#facc15]" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-yellow-400 shadow-[0_0_10px_#facc15]" />
          </motion.div>
        </div>

        {/* Judul Utama & Deskripsi */}
        <div className="col-start-2 col-span-10 row-start-3 row-span-5 z-20 flex flex-col justify-start items-start pt-6 md:pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-emerald-950 tracking-tighter text-left">
              <span className="text-7xl md:text-8xl lg:text-[100px] font-black block leading-[1.1]">
                I'm <span className="text-yellow-500">Angga,</span>
              </span>
              <span className="text-4xl md:text-5xl lg:text-[65px] font-semibold text-emerald-900/40 block leading-tight">
                Creative Designer
              </span>
            </h1>
            
            <p className="mt-4 text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
              Spesialis Kreatif Visual dalam Desain Merek & Pemasaran. Menggabungkan intuisi artistik dengan logika sistem  untuk membangun sistem visual yang fungsional dan berkelanjutan.
            </p>
          </motion.div>
        </div>

        {/* Foto & Circle */}
        <div className="col-start-11 col-span-5 row-start-3 row-span-7 relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] aspect-square bg-yellow-400/10 blur-3xl rounded-full -z-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square bg-yellow-400 rounded-full -z-10 shadow-xl" />
          
          <div className="relative w-full h-full">
            <NextImage 
              src="/foto-angga.png" 
              alt="Angga Photo"
              fill
              className="object-contain object-bottom scale-[1.2] origin-bottom transition-all duration-700"
              priority
            />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 bg-emerald-900 text-white px-6 py-2 rounded-full shadow-lg z-30"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Advertising Designer</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-32 -left-16 bg-white text-emerald-950 px-6 py-2 rounded-full shadow-xl z-30 flex items-center gap-2 border border-emerald-900/10"
            >
              <div className="w-1.5 h-1.5 bg-emerald-900 rounded-full animate-pulse shadow-[0_0_10px_#064e3b]" />
              <span className="text-xs font-bold uppercase tracking-widest">Brand & Marketing Designer</span>
            </motion.div>

            <div className="absolute top-10 -right-4 z-30">
               <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-emerald-950 border-[10px] border-white flex items-center justify-center shadow-2xl">
                  <div className="absolute w-full h-full animate-spin-slow">
                      <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                        <text className="fill-yellow-400 text-[9px] font-bold uppercase tracking-[1.5px]">
                          <textPath href="#circlePath">HIRE ME NOW • HIRE ME NOW • </textPath>
                        </text>
                      </svg>
                  </div>
                  <ArrowUpRight className="text-yellow-400 relative z-10" size={32} />
               </div>
            </div>
          </div>
        </div>

        {/* --- INDUSTRIAL TICKER: DUAL TONE --- */}
        <div className="col-start-1 col-span-16 row-start-9 flex items-end z-40 relative">
          <div className="w-[110%] -ml-[5%] relative">
            {/* LAYER BAWAH: Hijau Rumput (Tetap) */}
            <div 
              className="absolute inset-0 bg-emerald-950 h-16 transform -skew-y-2 translate-y-2"
              style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)' }}
            />
            {/* LAYER ATAS: Kuning Pisang dengan Teks Hijau */}
            <div className="relative bg-yellow-400 py-4 border-y-2 border-emerald-900 transform skew-y-1 overflow-hidden shadow-2xl">
              <div className="flex animate-marquee whitespace-nowrap">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-10 px-6 text-emerald-950 font-black text-xl md:text-2xl uppercase italic tracking-tighter">
                    <span>Advertising</span>
                    <span className="text-2xl text-emerald-800">✱</span>
                    <span>Branding & Marketing</span>
                    <span className="text-2xl text-emerald-800">✱</span>
                    <span>Creative Designer</span>
                    <span className="text-2xl text-emerald-800">✱</span>
                    <span>Print Design</span>
                    <span className="text-2xl text-emerald-800">✱</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}