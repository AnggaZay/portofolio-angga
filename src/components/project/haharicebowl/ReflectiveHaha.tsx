import React from 'react';
import { reflectiveHahaData } from "@/data/project/hahaRicebowl/reflective";

const ReflectiveHaha = () => {
  return (
    <section className="relative w-full py-24 lg:py-48 bg-white overflow-hidden">
      {/* ORNAMEN: Siluet Bowl Raksasa Samar di Latar Belakang */}
      <div className="absolute -bottom-20 -left-20 text-slate-50 opacity-[0.03] pointer-events-none select-none">
        <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 10H2V12C2 17.5 6.5 22 12 22S22 17.5 22 12V10Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* KIRI: Narasi & Stats */}
          <div className="lg:col-span-7">
            <div className="relative mb-12">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#FACC15] rounded-full opacity-20 animate-pulse" />
              <h2 className="text-xs font-[1000] text-[#EF4444] uppercase tracking-[0.5em] mb-8 relative">Project Insight</h2>
              <p className="text-3xl lg:text-5xl font-[1000] text-slate-900 leading-[1.1] tracking-tighter">
                "{reflectiveHahaData.insight}"
              </p>
            </div>

            {/* Stats: Pakai Border Merah Putus-putus ala Kupon Makanan */}
            <div className="grid grid-cols-3 gap-4 p-8 lg:p-10 border-2 border-dashed border-red-100 rounded-[2.5rem] bg-red-50/30">
              {reflectiveHahaData.stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <p className="text-4xl lg:text-6xl font-[1000] text-[#EF4444] mb-1 group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
                  <p className="text-[9px] lg:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* KANAN: Tools Ecosystem */}
          <div className="lg:col-span-5 relative">
            {/* Ornamen "Stamp" Melingkar di Pojok */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-[#FACC15] border-dotted rounded-full flex items-center justify-center rotate-12 opacity-40 hidden lg:flex">
              <span className="text-[8px] font-black text-[#FACC15] uppercase tracking-tighter text-center px-4">
                AUTHENTIC BRANDING SYSTEM • HAHA RICEBOWL
              </span>
            </div>

            <div className="bg-slate-900 p-10 lg:p-14 rounded-[3.5rem] shadow-2xl shadow-red-900/20 relative overflow-hidden group">
              {/* Efek Cahaya Merah di dalam Box */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF4444] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <h3 className="text-xl font-black text-white mb-12 flex items-center gap-4">
                <span className="w-10 h-1 bg-[#FACC15] rounded-full" />
                Mastered Tools
              </h3>
              
              <div className="space-y-10">
                {reflectiveHahaData.tools.map((tool, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-black text-white uppercase text-[11px] tracking-[0.2em]">{tool.name}</h4>
                      <div className="px-2 py-1 rounded bg-[#EF4444] text-[8px] font-black text-white uppercase italic">Pro</div>
                    </div>
                    <p className="text-slate-400 text-xs font-medium mb-4 leading-relaxed">{tool.function}</p>
                    
                    {/* Progress Bar Dinamis */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-[#FACC15] to-[#EF4444] origin-left scale-x-100 transition-transform duration-1000" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReflectiveHaha;