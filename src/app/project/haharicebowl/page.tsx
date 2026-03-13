"use client";

import React from 'react';
import HeroHaha from "@/components/project/haharicebowl/HeroHaha";
import DevelopmentHaha from "@/components/project/haharicebowl/DevelopmentHaha";
import ReflectiveHaha from "@/components/project/haharicebowl/ReflectiveHaha";
import VisualShowcaseHaha from "@/components/project/haharicebowl/VisualShowcaseHaha";

export default function HahaRicebowlPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. Header & Narasi Utama dengan Logo Circle */}
      <HeroHaha />

      {/* 2. Detail Paket Pengerjaan (Full Service Brand Development) */}
      <DevelopmentHaha />

      {/* 3. Insight Strategis, Stats, & Tools Ecosystem */}
      <ReflectiveHaha />

      {/* 4. Visual Showcase (Bento Grid Mockups & Branding) */}
      {/* Kita panggil komponennya langsung, section dark-nya sudah ada di dalam komponen tersebut */}
      <VisualShowcaseHaha />

      {/* 5. Footer Navigation */}
      <footer className="py-20 lg:py-32 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="group cursor-pointer">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Next Project</p>
            <h4 className="text-3xl lg:text-5xl font-[1000] text-slate-900 group-hover:text-[#054fa0] transition-all duration-500 tracking-tighter">
              BPR Arta Utama
            </h4>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-500">
              <span className="text-slate-900 group-hover:text-white transition-colors">↑</span>
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Back to Top</span>
          </button>
        </div>
      </footer>
    </main>
  );
}