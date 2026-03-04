"use client";

import React from 'react';
import { MapPin, Clock, Users2, Sparkles, Target, Zap, Image as ImageIcon, Video, ChevronRight } from 'lucide-react';

const GeneralArtaUtama = () => {
  return (
    // Padding atas-bawah kita kecilin (py-12) biar gak scroll kejauhan
    <section className="w-full py-12 md:py-16 bg-white overflow-hidden">
      
      {/* Container ini kuncinya. Kita pake max-w-6xl biar konten lo "tight" dan elegan */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Row 1: Teks & Foto Utama */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-24">
          
          {/* Sisi Kiri: Narasi */}
          <div className="flex-1 space-y-8">
            <div className="inline-block">
              <span className="text-[#054fa0] font-black tracking-[0.3em] text-[10px] uppercase italic border-b-2 border-[#054fa0] pb-1">
                Case Study: BPR Arta Utama Pekalongan
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.85]">
              <span className="bg-[#ffff00] px-2 py-1 inline-block mb-2">
                Bank Perekonomian Rakyat
              </span>
              <br />
              <span className="text-[#054fa0] block mt-4">
                Arta Utama.
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
              <p className="text-xl text-slate-900 font-bold leading-tight tracking-tight border-l-4 border-yellow-400 pl-6 italic">
                "Bukan sekadar mendesain gambar, tapi membangun infrastruktur kreatif di instansi yang sebelumnya tidak memiliki panduan visual."
              </p>
              
              <p className="text-base">
                Masuk ke <span className="text-slate-900 font-bold">BPR Arta Utama</span>, saya menghadapi realitas aset komunikasi yang diproduksi tanpa <span className="text-[#054fa0] font-bold italic">Brand Guidelines</span>. Langkah pertama saya adalah membangun fondasi identitas visual dari nol—mengubah "sekadar logo" menjadi sebuah sistem karakter merek yang utuh.
              </p>

              <p className="text-base">
                Bersama <span className="text-slate-900 font-bold italic text-red-600">Mbak Ita (Content Creator)</span>, saya merombak alur kerja manual menjadi sistemik melalui pengadaan <span className="text-[#054fa0] font-bold">Job Plan dan Laporan Bulanan</span>.
              </p>

              {/* Metadata row - Dibuat Minimalis */}
              <div className="flex flex-wrap gap-10 pt-8 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-red-600">
                    <MapPin size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Location</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-900 uppercase">Pekalongan & Batang</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#054fa0]">
                    <Clock size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Tenure</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-900 uppercase">Sep 2024 - Jan 2026</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Users2 size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Team</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-900 uppercase text-nowrap">Tim Pusat Creative</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Foto (W-Full di Mobile, W-[400px] di Desktop) */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="relative group">
               <div className="absolute -inset-3 bg-slate-50 rounded-[2.5rem] rotate-2" />
               <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border-[8px] border-white shadow-2xl">
                  <img 
                    src="/images/project/arta-utama/team-pusat.jpeg" 
                    alt="Tim Pusat"
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

        {/* Row 2: Strategy Box (Dibuat Full Width sesuai container) */}
        <div className="flex flex-col lg:flex-row gap-8 mb-24 items-stretch">
           <div className="flex-1 p-10 bg-[#054fa0] rounded-[3rem] text-white relative overflow-hidden flex flex-col justify-center min-h-[300px]">
              <div className="absolute -bottom-10 -right-10 opacity-5 text-white">
                <Users2 size={200} />
              </div>
              <h3 className="text-[10px] font-black text-yellow-300 uppercase tracking-[0.4em] mb-6 relative z-10">Operational Mastery</h3>
              <p className="text-4xl font-black leading-[1] mb-6 relative z-10 tracking-tighter">Sinergi <br /> <span className="text-yellow-300">Tanpa Batas.</span></p>
              <p className="text-slate-200 text-sm leading-relaxed mb-8 relative z-10 font-medium max-w-sm">
                Di bawah supervisi <span className="text-white font-bold">Pak Herland Herlambang</span>, saya mengimbangi keterbatasan fasilitas dengan strategi kreatif yang matang.
              </p>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.15em] text-white/50">
                <span>Research</span> <ChevronRight size={12} />
                <span>Strategy</span> <ChevronRight size={12} />
                <span>Visual Flow</span>
              </div>
           </div>

           <div className="flex-[1.2] rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm">
              <img 
                src="/images/project/arta-utama/office-activity.jpeg" 
                alt="Office Activity"
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Row 3: Tech Stack (Minimalis) */}
        <div className="border-t border-slate-100 pt-12">
          <div className="text-center mb-12">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] mb-2">Creative Engine</h3>
            <p className="text-slate-500 font-medium italic text-xs">Software & AI Workflows</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Photoshop', icon: <ImageIcon size={18}/>, master: 'Expert' },
              { name: 'Illustrator', icon: <Target size={18}/>, master: 'Advanced' },
              { name: 'CorelDraw', icon: <Landmark size={18}/>, master: 'Standard' },
              { name: 'CapCut / PR', icon: <Video size={18}/>, master: 'Dynamic' },
              { name: 'Photo AI', icon: <Sparkles size={18}/>, master: 'Relighting' },
              { name: 'Gemini AI', icon: <Zap size={18}/>, master: 'Strategy' },
            ].map((tool, i) => (
              <div key={i} className="flex flex-col items-center p-6 rounded-[2rem] bg-slate-50 border border-transparent hover:border-[#054fa0] transition-all duration-300">
                <div className="text-[#054fa0] mb-4">{tool.icon}</div>
                <p className="text-[10px] font-black text-slate-900 mb-1 uppercase tracking-tighter">{tool.name}</p>
                <div className="px-2 py-0.5 bg-white rounded-full text-[8px] font-black text-slate-400 uppercase border border-slate-100 italic">{tool.master}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GeneralArtaUtama;