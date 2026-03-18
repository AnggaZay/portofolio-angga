import React from 'react';
import { generalHahaData } from "@/data/project/hahaRicebowl/general";

const HeroHaha = () => {
  return (
    <section className="relative w-full pt-24 pb-16 lg:pt-48 lg:pb-40 bg-white overflow-hidden">
      {/* ORNAMEN: Siluet HAHA Raksasa */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[20rem] md:text-[45rem] font-black leading-none text-slate-900 tracking-tighter uppercase">HAHA</h1>
      </div>
      
      {/* ORNAMEN: Garis Aksen Kiri */}
      <div className="absolute top-0 left-0 w-1.5 lg:w-2 h-full bg-gradient-to-b from-[#EF4444] via-[#FACC15] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-10 lg:gap-16">
          
          {/* Badge & Client Info */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            <span className="bg-[#EF4444] text-white px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-500/20">
              {generalHahaData.niche}
            </span>
            <div className="h-[2px] w-10 lg:w-16 bg-[#FACC15]" />
            <span className="text-slate-500 text-[9px] lg:text-[10px] font-black uppercase tracking-widest bg-slate-100 px-3 py-1 lg:px-4 lg:py-1.5 rounded-md">
              Client: {generalHahaData.client}
            </span>
          </div>

          {/* MAIN TITLE & LOGO CONTAINER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-20">
            
            {/* SISI LOGO: Sekarang di atas pada Mobile, Kanan pada Desktop */}
            <div className="relative shrink-0 order-first md:order-last self-start md:self-center">
              <div className="w-32 h-32 md:w-[22rem] md:h-[22rem] lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-[6px] md:border-[15px] lg:border-[24px] border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] md:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.18)] flex items-center justify-center bg-[#FACC15] transition-transform duration-700 hover:scale-105 group">
                <img 
                  src="/images/project/haharicebowl/logo-macro.png" 
                  alt="Logo Haha Ricebowl"
                  className="w-full h-full object-contain scale-110 lg:scale-125 transition-transform duration-700 group-hover:rotate-6"
                />
              </div>

              {/* Badge Est. 2026 */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-[#EF4444] text-white text-[8px] lg:text-sm font-black px-4 py-2 lg:px-6 lg:py-3 rounded-full rotate-12 shadow-xl border-2 md:border-4 border-white uppercase tracking-tighter">
                Established 2026
              </div>
            </div>

            {/* SISI TEKS: Judul Responsif */}
            <div className="relative flex-1">
              {/* text-5xl di mobile (biar gak kepotong), md:text-8xl, lg:text-[13rem] */}
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[13rem] font-[1000] text-slate-900 leading-[0.9] md:leading-[0.75] tracking-[-0.05em] md:tracking-[-0.06em]">
                <span className="block">{generalHahaData.name.split(' ')[0]}</span>
                <span className="text-[#EF4444] block leading-none"> {generalHahaData.name.split(' ')[1]}</span>
              </h1>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="relative inline-block mt-2 lg:mt-8">
            <p className="relative z-10 text-xl md:text-3xl lg:text-6xl text-slate-800 font-black leading-tight tracking-tight max-w-5xl italic pl-5 lg:pl-16 border-l-4 lg:border-l-[12px] border-[#FACC15]">
              "{generalHahaData.tagline}"
            </p>
          </div>

          {/* Narasi Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 lg:mt-32 pt-10 lg:pt-16 border-t border-slate-100 items-start">
             <div className="lg:col-span-5 bg-[#EF4444] p-8 lg:p-16 rounded-[2rem] lg:rounded-[3rem] md:rotate-[-2deg] shadow-2xl shadow-red-500/20">
                <p className="text-xl lg:text-4xl text-white font-[1000] leading-tight italic">
                  {generalHahaData.narrative.main}
                </p>
             </div>
             <div className="lg:col-span-7 lg:pl-16">
                <p className="text-lg lg:text-3xl text-slate-500 font-medium leading-relaxed tracking-tight">
                  {generalHahaData.narrative.sub}
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHaha;