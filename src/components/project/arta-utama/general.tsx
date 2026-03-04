"use client";

import React from 'react';
import { Landmark, MapPin, Clock, Users2, Sparkles, Target, Zap, Image as ImageIcon, Video, ChevronRight } from 'lucide-react';

const GeneralArtaUtama = () => {
  return (
    // py-12 biar jarak atas-bawah gak sejauh lapangan bola
    <section className="w-full py-12 md:py-20 bg-white overflow-hidden">
      
      {/* Container utama kita lebarin ke 1400px biar mirip Vercel style */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section 1: Main Narrative - items-start biar sejajar dari atas */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-24 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-[#054fa0] font-black tracking-[0.4em] text-[10px] uppercase italic">
                Case Study: BPR Arta Utama Pekalongan
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              <span className="bg-[#ffff00] px-3 py-1 inline-block mb-3">
                Bank Perekonomian Rakyat
              </span>
              <br />
              <span className="text-[#054fa0] block mt-4">
                Arta Utama.
              </span>
            </h2>

            <div className="space-y-8 text-slate-600 font-medium leading-relaxed max-w-3xl">
              <p className="text-xl md:text-2xl text-slate-900 font-bold leading-tight tracking-tight border-l-4 border-yellow-400 pl-6 italic">
                "Bukan sekadar mendesain gambar, tapi membangun infrastruktur kreatif di instansi yang sebelumnya tidak memiliki panduan visual."
              </p>
              
              <p className="text-base md:text-lg">
                Masuk ke <span className="text-slate-900 font-bold">BPR Arta Utama</span> sebagai desainer grafis berpengalaman 3 tahun, saya menghadapi realitas aset komunikasi yang diproduksi tanpa <span className="text-[#054fa0] font-bold italic">Brand Guidelines</span>. Langkah pertama saya adalah membangun fondasi identitas visual dari nol—mengubah "sekadar logo" menjadi sebuah sistem karakter merek yang utuh.
              </p>

              <p className="text-base md:text-lg">
                Tantangannya bukan hanya teknis, tapi juga adaptasi budaya kerja. Bersama <span className="text-slate-900 font-bold italic text-red-600">Mbak Ita (Content Creator)</span>, saya merombak alur kerja manual menjadi sistemik melalui pengadaan <span className="text-[#054fa0] font-bold">Job Plan dan Laporan Bulanan</span>.
              </p>

              {/* Metadata Proyek - Dibuat lebih rapat */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-100">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-red-600">
                    <MapPin size={14} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Location</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 uppercase">Pekalongan & Batang</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#054fa0]">
                    <Clock size={14} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Tenure</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 uppercase">Sep 2024 - Jan 2026</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Users2 size={14} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Structure</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 uppercase text-nowrap">Tim Pusat Creative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slot Foto Utama - Tim Pusat */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group max-w-[450px] ml-auto">
               <div className="absolute -inset-3 bg-slate-50 rounded-[2.5rem] rotate-2" />
               <div className="relative aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden border-[8px] border-white shadow-xl">
                  <img 
                    src="/images/project/arta-utama/team-pusat.jpeg" 
                    alt="Tim Pusat BPR Arta Utama"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 text-blue-400">Creative Collaboration</p>
                    <p className="text-lg font-black italic tracking-tighter leading-none uppercase text-yellow-300">The Power Duo <br /> Creative Unit</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Section 2: Strategy over Facilities */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24 items-stretch">
           <div className="lg:col-span-5 p-12 bg-[#054fa0] rounded-[3rem] text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -bottom-10 -right-10 opacity-5 text-white">
                <Users2 size={200} />
              </div>
              <h3 className="text-[10px] font-black text-yellow-300 uppercase tracking-[0.4em] mb-8 relative z-10 flex items-center gap-3">
                Operational Mastery
              </h3>
              <p className="text-4xl font-black leading-[1] mb-6 relative z-10 tracking-tighter">
                Sinergi <br /> 
                <span className="text-yellow-300">Tanpa Batas.</span>
              </p>
              <p className="text-slate-200 text-base leading-relaxed mb-8 relative z-10 font-medium">
                Di bawah supervisi <span className="text-white font-bold text-nowrap">Pak Herland Herlambang</span> (Kabag Operasional), saya mengimbangi keterbatasan fasilitas dengan strategi kreatif yang matang.
              </p>
              <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.1em] text-white/50">
                <span>Research</span> <ChevronRight size={12} />
                <span>Strategy</span> <ChevronRight size={12} />
                <span>Visual Flow</span>
              </div>
           </div>

           <div className="lg:col-span-7 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm relative group">
              <img 
                src="/images/project/arta-utama/office-activity.jpeg" 
                alt="Aktivitas Tim Pusat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#054fa0]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center p-12">
                 <div className="px-6 py-3 bg-white rounded-xl shadow-2xl">
                    <p className="text-[#054fa0] font-black uppercase tracking-[0.3em] text-[9px]">Budaya Kerja Agensi x Perbankan</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Section 3: Tech Stack */}
        <div className="border-t border-slate-100 pt-16">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em]">Creative Engine</h3>
            <p className="text-slate-500 font-medium italic text-sm">
              Kombinasi software desain konvensional dan Generative AI untuk standar visual perbankan.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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