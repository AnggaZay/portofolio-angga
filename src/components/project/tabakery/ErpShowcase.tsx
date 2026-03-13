"use client";
import React, { useState } from 'react';
import { Smartphone, MousePointer2, ChevronRight, ChevronLeft } from 'lucide-react';
import { tabakeryScreens, figmaPrototypeLink } from "@/data/project/tabakery/showcase";

const ErpShowcase = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        
        <div className="bg-[#121212] rounded-[4rem] border border-white/5 p-8 md:p-20 relative">
          
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Phone Mockup Frame */}
<div className="w-full lg:w-1/2 flex justify-center relative">
  <div className="absolute w-[120%] h-[120%] bg-[#FACC15] blur-[150px] opacity-10 rounded-full" />
  
  {/* REVISI DI SINI: 
      1. Hapus h-[600px] dan h-[700px]
      2. Ganti pake aspect-[9/18.5] (rasio HP jangkung modern)
      3. Tambahin overflow-y-auto (opsional kalau mau bisa di-scroll di dalem frame)
  */}
  <div className="w-[300px] md:w-[380px] aspect-[9/18.5] bg-black rounded-[3.5rem] border-[12px] border-[#222] relative overflow-hidden shadow-2xl z-10">
    <img 
      key={index} // Supaya animasi trigger tiap ganti slide
      src={tabakeryScreens[index].img} 
      className="w-full h-full object-cover object-top animate-in fade-in zoom-in duration-500" 
      alt="Screen" 
    />
    
    {/* Refleksi Layar biar makin real (Bonus) */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-50" />
  </div>
</div>

            {/* Content & Control */}
            <div className="w-full lg:w-1/2">
              <div className="text-[#FACC15] font-black text-xs uppercase tracking-[0.5em] mb-6">Visual Walkthrough</div>
              <h2 className="text-6xl md:text-8xl font-[1000] text-white uppercase tracking-tighter leading-none mb-10">
                POCKET<br/>SOLUTION.
              </h2>
              
              <div className="flex items-center gap-4 mb-12">
                <button onClick={() => setIndex(prev => prev > 0 ? prev - 1 : 8)} className="p-4 bg-white/5 rounded-full hover:bg-[#FACC15] hover:text-black transition-all">
                  <ChevronLeft />
                </button>
                <div className="text-2xl font-black text-white w-20 text-center">0{index + 1} <span className="text-white/20">/ 09</span></div>
                <button onClick={() => setIndex(prev => prev < 8 ? prev + 1 : 0)} className="p-4 bg-white/5 rounded-full hover:bg-[#FACC15] hover:text-black transition-all">
                  <ChevronRight />
                </button>
              </div>

              <div className="p-8 bg-black/40 rounded-[2rem] border border-white/5">
                <h4 className="text-2xl font-black text-[#FACC15] uppercase mb-2">{tabakeryScreens[index].title}</h4>
                <p className="text-gray-400 font-medium tracking-tight leading-relaxed text-sm md:text-base">
                  Modul ini menangani alur {tabakeryScreens[index].title.toLowerCase()} secara otomatis dan terintegrasi dengan database pusat.
                </p>
              </div>
            </div>
          </div>

          {/* Prototype Section Below */}
          <div className="mt-32 pt-20 border-t border-white/5">
            <div className="text-center mb-12">
              <span className="px-6 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase text-white/50 tracking-[0.3em] border border-white/5 inline-flex items-center gap-3">
                <MousePointer2 size={12} /> Live Interactive Prototype
              </span>
            </div>
            <div className="w-full h-[600px] md:h-[900px] bg-black rounded-[3rem] border-8 border-[#1A1A1A] overflow-hidden shadow-3xl">
              <iframe title="Figma" className="w-full h-full" src={figmaPrototypeLink} allowFullScreen />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ErpShowcase;