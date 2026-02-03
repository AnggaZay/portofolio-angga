"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Flame } from 'lucide-react';

const TabakeryHero = () => {
  return (
    <section className="w-full min-h-screen bg-[#121212] text-[#FACC15] font-['Helvetica',_sans-serif] relative flex items-center overflow-hidden py-20 lg:py-0">
      
      {/* Background Pattern: Warning Stripes Halus */}
      <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(45deg,#FACC15_0,#FACC15_10px,transparent_10px,transparent_20px)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: TYPOGRAPHY & IDENTITY */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            
            {/* Status Badge */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex"
            >
               <div className="flex items-center gap-3 px-4 py-2 border border-[#333] rounded-full bg-[#1A1A1A]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FACC15]"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                    ERP System Live
                  </span>
               </div>
            </motion.div>

            {/* MAIN TITLE */}
            <h1 className="text-[15vw] lg:text-[10rem] font-[900] leading-[0.85] tracking-tighter uppercase text-white mix-blend-difference mb-6">
              Taba<br/>
              <span className="text-[#FACC15]">kery.</span>
            </h1>

            {/* SLOGAN: ROTI BAKAR ASLI DIBAKAR */}
            <div className="relative inline-block mb-10">
                <span className="text-2xl md:text-4xl font-black uppercase italic text-white tracking-tight bg-[#2D2D2D] px-4 py-1 rotate-[-2deg] inline-block shadow-lg border-l-4 border-[#FACC15]">
                    "Roti Bakar Asli Dibakar"
                </span>
            </div>

            <p className="text-lg text-gray-400 max-w-md font-medium leading-relaxed">
              Bukan sekadar gerobak roti, tapi ekosistem kuliner yang dijalankan oleh data. Integrasi penuh dari gudang sampai kasir.
            </p>
          </div>

          {/* RIGHT SIDE: 1:1 PHOTO SHOWCASE */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
             
             {/* Decorative Circle di belakang foto */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FACC15] blur-[100px] opacity-10 rounded-full" />

             <motion.div 
               initial={{ scale: 0.8, opacity: 0, rotate: 6 }}
               animate={{ scale: 1, opacity: 1, rotate: 3 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               whileHover={{ rotate: 0, scale: 1.05 }}
               className="relative w-full aspect-square max-w-[500px] bg-[#1A1A1A] rounded-[2rem] border-8 border-[#1A1A1A] shadow-2xl overflow-hidden group cursor-pointer"
             >
                {/* IMAGE */}
                <img 
                  src="/images/project/tabakery/outlet.jpg" 
                  alt="Tabakery Outlet" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* OVERLAY INFORMATION */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="flex items-center gap-2 text-[#FACC15] mb-2">
                                <Flame size={18} fill="#FACC15" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Hot from Oven</span>
                            </div>
                            <h3 className="text-3xl font-[900] text-white uppercase leading-none">
                                Physical<br/>Outlet.
                            </h3>
                        </div>
                        
                        <div className="text-right">
                            <div className="flex items-center gap-1 justify-end text-gray-400 mb-1">
                                <MapPin size={12} />
                                <span className="text-[10px] font-mono">PKL - ID</span>
                            </div>
                            <div className="px-3 py-1 bg-[#FACC15] text-black text-[10px] font-black uppercase rounded-md inline-block">
                                Open Daily
                            </div>
                        </div>
                    </div>

                </div>
             </motion.div>

             {/* Floating Element: Tech Stack */}
             

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#FACC15]/50">
        <ArrowDown size={24} />
      </div>

    </section>
  );
};

export default TabakeryHero;