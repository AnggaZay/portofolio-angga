"use client";
import React from 'react';
import { ArrowUpRight, Zap, Target, MousePointer2 } from 'lucide-react';

const AgencyHero = () => {
  return (
    <section className="w-full min-h-screen bg-[#FDFDFD] text-[#001F3F] relative overflow-hidden flex flex-col justify-center">
      {/* Background Decor - Grid Halus */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#001F3F_1px,transparent_1px),linear-gradient(to_bottom,#001F3F_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Soft Salem Glow - Tipis banget biar nggak dark */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFC4A4] opacity-20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        
        {/* Header Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#001F3F]/40">
            IPM KAB. PEKALONGAN / 2024—2025
          </span>
          <div className="h-[1px] flex-1 bg-[#001F3F]/10" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Typography */}
          <div className="lg:col-span-8">
            <h1 className="text-[12vw] lg:text-[10rem] font-[900] leading-[0.8] tracking-[-0.04em] uppercase text-[#001F3F]">
              THE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #001F3F' }}>AGENCY</span> <br />
              <span className="flex items-center gap-6">
                BOARD <div className="h-4 w-4 bg-[#FFC4A4] rounded-full animate-bounce" />
              </span>
            </h1>
          </div>

          {/* Description Box - Pake Salem Muda sebagai aksen */}
          <div className="lg:col-span-4 lg:pt-12">
            <div className="bg-[#FFC4A4] p-10 rounded-[3rem] shadow-2xl shadow-[#FFC4A4]/20 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-start mb-10 text-[#001F3F]">
                <Target size={32} strokeWidth={2.5} />
                <ArrowUpRight size={24} />
              </div>
              <p className="text-2xl font-black leading-tight text-[#001F3F] mb-6">
                Membawa standar industri iklan ke jantung organisasi.
              </p>
              <p className="text-xs font-bold text-[#001F3F]/60 uppercase tracking-widest leading-relaxed">
                Transformasi Bidang IT menjadi Creative Powerhouse.
              </p>
            </div>
          </div>
        </div>

        {/* Specialists List (The Avengers) - Lebih Sleek */}
        <div className="mt-32 pt-16 border-t border-[#001F3F]/10 flex flex-wrap gap-x-16 gap-y-10">
          {[
            { name: "Angga", role: "Adv. Specialist" },
            { name: "Dimas P.", role: "Video & Photo" },
            { name: "M. Irfan", role: "Media Liput" },
            { name: "Amanullah", role: "Illustrator" }
          ].map((member, i) => (
            <div key={i} className="group cursor-none">
              <p className="text-[10px] font-black text-[#FFC4A4] uppercase tracking-widest mb-1">
                {member.role}
              </p>
              <h3 className="text-3xl font-black text-[#001F3F] tracking-tighter group-hover:italic transition-all">
                {member.name}
              </h3>
            </div>
          ))}
        </div>

      </div>

      {/* Floating Cursor Vibe */}
      <div className="hidden lg:block absolute bottom-20 right-20 animate-pulse">
        <MousePointer2 className="text-[#FFC4A4]" size={40} />
        <div className="ml-8 mt-2 px-3 py-1 bg-[#001F3F] text-white text-[9px] font-black rounded-lg">
          TEAM_04_05
        </div>
      </div>
    </section>
  );
};

export default AgencyHero;