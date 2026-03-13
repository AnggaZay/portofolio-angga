import React from 'react';
import { MapPin, Clock, Users2, ShieldAlert } from 'lucide-react';
import { generalArtaData } from "@/data/project/artaUtama/general";

const GeneralArtaUtama = () => {
  const { projectInfo, narrative, visuals } = generalArtaData;

  return (
    <section className="w-full py-12 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HEADER: Mega Typography */}
<div className="max-w-6xl mb-16 lg:mb-32">
  <div className="flex flex-col gap-2 mb-10 lg:mb-16 animate-in fade-in slide-in-from-left duration-1000">
    <div className="flex items-center gap-4">
      {/* Garis aksen tetap lebar di desktop */}
      <div className="w-12 lg:w-40 h-[2px] lg:h-[3px] bg-[#054fa0]" /> 
      <span className="text-[#054fa0] font-black tracking-[0.4em] lg:tracking-[0.6em] text-lg lg:text-2xl uppercase italic leading-none">
        {projectInfo.name}
      </span>
    </div>
    <span className="ml-16 lg:ml-44 text-[9px] lg:text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
      Creative Direction & Digital Transformation
    </span>
  </div>
  
  {/* TAGLINE REVISI: text-5xl di mobile (Aman), lg:text-8xl di desktop (Dikecilkan) */}
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-[-0.04em] lg:tracking-[-0.06em] leading-[0.85] lg:leading-[0.8]">
    {projectInfo.tagline}
  </h1>
</div>

        {/* 2. MOBILE PHOTO: Crop Gepeng (Hanya muncul di < lg) */}
        <div className="block lg:hidden w-full mb-12">
          <div className="relative aspect-video rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl">
            <img 
              src={visuals.mainImage} 
              alt={visuals.imageCaption} 
              className="w-full h-full object-cover object-[50%_60%] grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest mb-1">{visuals.unitLabel}</p>
              <p className="text-lg font-black italic uppercase leading-none">{visuals.imageCaption}</p>
            </div>
          </div>
        </div>

        {/* 3. CONTENT GRID: Tumpuk di mobile, Sampingan di desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
          
          {/* SISI KIRI: Narasi & Deskripsi */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1">
            <div className="space-y-10 lg:space-y-16 text-slate-600 font-medium leading-relaxed">
              
              {/* Quote Strategis: text-2xl di Mobile (Aman), lg:text-3xl di Desktop (Dikecilkan) */}
<p className="text-2xl lg:text-3xl text-slate-900 font-bold leading-tight lg:leading-[1.1] tracking-tight italic border-l-4 border-[#054fa0] pl-6 lg:pl-10">
  "{narrative.quote}"
</p>
              
              <p className="text-base lg:text-xl text-slate-500 max-w-2xl">
                {narrative.description}
              </p>

              {/* Info Bar Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 pt-12 border-t border-slate-100">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-red-600">
                    <MapPin size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Location</span>
                  </div>
                  <span className="text-base font-bold text-slate-900 uppercase">{projectInfo.location}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#054fa0]">
                    <Clock size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Tenure</span>
                  </div>
                  <span className="text-base font-bold text-slate-900 uppercase">{projectInfo.tenure}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Users2 size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Creative Unity</span>
                  </div>
                  <span className="text-base font-bold text-slate-900 uppercase">{projectInfo.collaboration}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <ShieldAlert size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Project Role</span>
                  </div>
                  <span className="text-base font-bold text-slate-900 uppercase">{projectInfo.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Desktop Photo (Sticky & Proporsional) */}
          <div className="hidden lg:block lg:w-5/12 lg:sticky lg:top-32 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-6 bg-slate-50 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-transform duration-1000" />
              <div className="relative aspect-[4/5] bg-slate-200 rounded-[3.5rem] overflow-hidden border-[15px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                <img 
                  src={visuals.mainImage} 
                  alt={visuals.imageCaption} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.5em] mb-3 text-blue-400">{visuals.unitLabel}</p>
                  <p className="text-3xl font-black italic tracking-tighter leading-none uppercase">{visuals.imageCaption}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GeneralArtaUtama;