"use client";

import React from 'react';
import { Landmark, MapPin, Clock, Users2, Sparkles, Target, Zap, Image as ImageIcon, Video, ChevronRight } from 'lucide-react';

const GeneralArtaUtama = () => {
  return (
    // Section utama dengan padding atas-bawah yang lebih manusiawi (py-16)
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Container utama lebar (max-w-7xl = 1280px) agar seimbang di monitor 24 inch */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* --- SECTION 1: NARRATIVE --- */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24">
          
          {/* Kolom Teks (Kiri) */}
          <div className="lg:col-span-7">
            <div className="inline-block mb-8">
              <span className="text-[#054fa0] font-black tracking-[0.3em] text-[10px] uppercase italic border-b-2 border-[#054fa0] pb-1">
                Case Study: BPR Arta Utama Pekalongan
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-10">
              <span className="bg-[#ffff00] px-2 py-1 inline-block mb-2">
                Bank Perekonomian Rakyat
              </span>
              <br />
              <span className="text-[#054fa0] block mt-4">
                Arta Utama.
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 font-medium leading-relaxed max-w-2xl">
              <p className="text-xl md:text-2xl text-slate-900 font-bold leading-tight tracking-tight border-l-4 border-yellow-400 pl-6 italic">
                "Bukan sekadar mendesain gambar, tapi membangun infrastruktur kreatif di instansi yang sebelumnya tidak memiliki panduan visual."
              </p>
              
              <p className="text-base md:text-lg">
                Masuk ke <span className="text-slate-900 font-bold">BPR Arta Utama</span>, saya menghadapi realitas aset komunikasi yang diproduksi tanpa <span className="text-[#054fa0] font-bold italic">Brand Guidelines</span>. Langkah pertama saya adalah membangun fondasi identitas visual dari nol—mengubah "sekadar logo" menjadi sebuah sistem karakter merek yang utuh.
              </p>

              <p className="text-base md:text-lg">
                Bersama <span className="text-slate-900 font-bold italic text-red-600">Mbak Ita (Content Creator)</span>, saya merombak alur kerja manual menjadi sistemik melalui pengadaan <span className="text-[#054fa0] font-bold">Job Plan dan Laporan Bulanan</span>.
              </p>

              {/* Metadata row yang rapat */}
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-red-600">
                    <MapPin size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Location</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 uppercase">Pekalongan & Batang</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#054fa0]">
                    <Clock size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Tenure</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 uppercase">Sep 2024 - Jan 2026</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Users2 size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Team</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 uppercase">Tim Pusat Creative</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Foto (Kanan) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto lg:ml-auto">
               <div className="absolute -inset-3 bg-slate-50 rounded-[2.5rem] rotate-2" />
               <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-[8px] border-white shadow-2xl bg-slate-100">
                  <img 
                    src="/images/project/arta-utama/team-pusat.jpeg" 
                    alt="Tim Pusat BPR Arta Utama"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-1 text-blue-400">Collaboration Unit</p>
                    <p className="text-lg font-black italic tracking-tighter leading-none uppercase text-yellow-300">The Power Duo Creative Unit</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: STRATEGY BOX --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24">
           <div className="lg:col-span-5 p-12 bg-[#054fa0] rounded-[3rem] text-white relative overflow-hidden flex flex-col justify-center min-h-[350px]">
              <div className="absolute -bottom-10 -right-10 opacity-5 text-white">
                <Users2 size={220} />
              </div>
              <h3 className="text-[10px] font-black text-yellow-300 uppercase tracking-[0.4em] mb-6 relative z-10">
                Operational Mastery
              </h3>
              <p className="text-4xl font-black leading-[1] mb-6 relative z-10 tracking-tighter">
                Sinergi <br /> <span className="text-yellow-300">Tanpa Batas.</span>
              </p>
              <p className="text-slate-200 text-base leading-relaxed mb-8 relative z-10 font-medium">
                Di bawah supervisi <span className="text-white font-bold">Pak Herland Herlambang</span>, saya mengimbangi keterbatasan fasilitas dengan strategi kreatif yang matang.
              </p>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.15em] text-white/50">
                <span>Research</span> <ChevronRight size={12} />
                <span>Strategy</span> <ChevronRight size={12} />
                <span>Visual Flow</span>
              </div>
           </div>

           <div className="lg:col-span-7 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm group">
              <img 
                src="/images/project/arta-utama/office-activity.jpeg" 
                alt="Aktivitas Kantor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
           </div>
        </div>

        {/* --- SECTION 3: TECH STACK --- */}
        <div className="border-t border-slate-100 pt-16">
          <div className="text-center mb-16">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] mb-3">Creative Engine</h3>
            <p className="text-slate-500 font-medium italic text-sm italic">Software & AI Workflows</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: 'Photoshop', icon: <ImageIcon size={20}/>, master: 'Expert' },
              { name: 'Illustrator', icon: <Target size={20}/>, master: 'Advanced' },
              { name: 'CorelDraw', icon: <Landmark size={20}/>, master: 'Standard' },
              { name: 'CapCut / PR', icon: <Video size={20}/>, master: 'Dynamic' },
              { name: 'Photo AI', icon: <Sparkles size={20}/>, master: 'Relighting' },
              { name: 'Gemini AI', icon: <Zap size={20}/>, master: 'Strategy' },
            ].map((tool, i) => (
              <div key={i} className="group flex flex-col items-center p-8 rounded-[2.5rem] bg-slate-50 hover:bg-white border border-transparent hover:border-[#054fa0] transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="text-[#054fa0] mb-6 group-hover:scale-110 transition-transform">
                    {tool.icon}
                </div>
                <p className="text-xs font-black text-slate-900 mb-2 uppercase tracking-tighter">{tool.name}</p>
                <div className="px-3 py-1 bg-white rounded-full text-[8px] font-black text-slate-400 group-hover:text-[#054fa0] border border-slate-100 uppercase">
                    {tool.master}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GeneralArtaUtama;