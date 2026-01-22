"use client";
import React from 'react';
import { Eye, Heart, Share2, Award, Zap } from 'lucide-react';

const TheMasterpiece = () => {
  return (
    <section className="w-full py-32 bg-[#001F3F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Showcase (Kiri) */}
          <div className="relative group">
            {/* Dekorasi Salem Muda di Belakang */}
            <div className="absolute -inset-4 bg-[#FFC4A4] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
            
            <div className="relative aspect-[4/5] bg-slate-800 rounded-[3.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              {/* Tempat foto tim atau desain terbaik */}
              <img 
                src="/images/project/ipm/the-avengers.jpg" 
                alt="IPM Avengers Team" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay Statitik (Vibe Data Driven) */}
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-[#001F3F]/80 backdrop-blur-md rounded-3xl border border-white/10">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#FFC4A4]">Top Engagement Content</p>
                    <Award size={16} className="text-[#FFC4A4]" />
                </div>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <Heart size={14} className="text-[#FFC4A4]" />
                        <span className="text-sm font-black italic">High</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Share2 size={14} className="text-[#FFC4A4]" />
                        <span className="text-sm font-black italic">Viral</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Eye size={14} className="text-[#FFC4A4]" />
                        <span className="text-sm font-black italic">Reach</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Konten Narasi (Kanan) */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC4A4] text-[#001F3F] rounded-full mb-8 rotate-2">
              <Zap size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Industry Standard Output</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-10">
              BUKTI NYATA <br /> 
              <span className="text-[#FFC4A4]">SISTEM KERJA.</span>
            </h2>

            <div className="space-y-8 text-slate-300 font-medium">
              <p className="text-xl leading-relaxed">
                Kami tidak hanya mendesain; kami menciptakan <span className="text-white italic">impact</span>. Dengan standar kualitas yang melampaui kebiasaan organisasi, alumni dan pimpinan umum memberikan kepercayaan penuh—termasuk fasilitas ruang khusus bagi tim kami.
              </p>
              
              <div className="p-8 border-l-2 border-[#FFC4A4] bg-white/5 rounded-r-3xl">
                <p className="italic text-lg mb-4">
                  "Standar agensi yang kami bawa mengubah pandangan bahwa bidang Media & IT bukan sekadar pelengkap, melainkan poros utama pergerakan organisasi."
                </p>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FFC4A4]">
                  — The Avengers Era
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheMasterpiece;