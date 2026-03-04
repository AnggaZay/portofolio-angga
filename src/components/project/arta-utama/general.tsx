"use client";

import React from 'react';
import { Landmark, MapPin, Clock, Users2, ShieldAlert, Sparkles, Target, Zap, Image as ImageIcon, Video, ChevronRight } from 'lucide-react';

const GeneralArtaUtama = () => {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section 1: The Deep Dive Narrative (The Foundation Builder) */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[#054fa0] font-black tracking-[0.4em] text-[10px] uppercase italic">
                Case Study: BPR Arta Utama Pekalongan
              </span>
            </div>
            
            <h2 className="text-4xl md:text-[2.5rem] font-black text-slate-900 tracking-tighter leading-none mb-12">
              <span className="bg-[#ffff00] px-2 py-1">
                Bank Perekonomian Rakyat
              </span>
              <br />
              <span className="text-[#054fa0] text-6xl md:text-[6rem] block leading-[0.8] mt-6">
                Arta Utama.
              </span>
            </h2>

            <div className="space-y-10 text-slate-600 font-medium leading-relaxed">
              <p className="text-2xl text-slate-900 font-bold leading-tight tracking-tight border-l-4 border-yellow-400 pl-6">
                "Bukan sekadar mendesain gambar, tapi membangun infrastruktur kreatif di instansi yang sebelumnya tidak memiliki panduan visual."
              </p>
              
              <p>
                Masuk ke <span className="text-slate-900 font-bold">BPR Arta Utama</span> sebagai desainer grafis dengan pengalaman agensi, saya menghadapi realitas bahwa aset komunikasi diproduksi tanpa <span className="text-[#054fa0] font-bold italic">Brand Guidelines</span>. Langkah pertama saya adalah membangun fondasi identitas visual dari nol—mengubah "sekadar logo" menjadi sebuah sistem karakter merek yang utuh dan profesional.
              </p>

              <p>
                Tantangannya bukan hanya teknis, tapi juga adaptasi budaya kerja. Bersama <span className="text-slate-900 font-bold italic text-red-600">Mbak Ita (Content Creator)</span>, saya merombak alur kerja manual menjadi sistemik melalui pengadaan <span className="text-[#054fa0] font-bold">Job Plan dan Laporan Bulanan</span>. Ini adalah perjalanan kreatif korporasi dalam menentukan visual dan strategi <span className="italic font-bold">Kampanye</span>.
              </p>

              {/* Metadata Proyek */}
              <div className="flex flex-wrap gap-10 pt-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-red-600">
                    <MapPin size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Location</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 uppercase">Pekalongan & Batang</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#054fa0]">
                    <Clock size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tenure</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 uppercase">Sep 2024 - Jan 2026</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Users2 size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Team Structure</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 uppercase">Tim Pusat Creative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slot Foto Utama - Tim Pusat (Tetap Sesuai Permintaan) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative group">
               <div className="absolute -inset-4 bg-slate-100 rounded-[3.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
               <div className="relative aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
                  <img 
                    src="/images/project/arta-utama/team-pusat.jpeg" 
                    alt="Tim Pusat BPR Arta Utama"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-blue-400">Creative Collaboration</p>
                    <p className="text-2xl font-black italic tracking-tighter leading-none uppercase text-yellow-300">The Power Duo <br /> Creative Unit</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Section 2: Team Dynamics (The Strategy Over Facilities) */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-stretch">
           <div className="lg:col-span-5 p-16 bg-[#054fa0] rounded-[4rem] text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -bottom-10 -right-10 opacity-5 text-white">
                <Users2 size={240} />
              </div>
              <h3 className="text-xs font-black text-yellow-300 uppercase tracking-[0.5em] mb-10 relative z-10 flex items-center gap-3">
                Operational Mastery
              </h3>
              <p className="text-4xl font-black leading-[1] mb-8 relative z-10 tracking-tighter">
                Sinergi <br /> 
                <span className="text-yellow-300">Tanpa Batas.</span>
              </p>
              <p className="text-slate-200 text-lg leading-relaxed mb-10 relative z-10 font-medium">
                Di bawah supervisi <span className="text-white font-bold">Pak Herland Herlambang</span> (Kabag Operasional), saya berperan sebagai motor visual yang mengimbangi keterbatasan fasilitas dengan strategi kreatif yang matang.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                <span>Research</span>
                <ChevronRight size={14} />
                <span>Strategy</span>
                <ChevronRight size={14} />
                <span>Visual Flow</span>
              </div>
           </div>

           <div className="lg:col-span-7 rounded-[4rem] overflow-hidden border border-slate-100 shadow-sm relative group">
              <img 
                src="/images/project/arta-utama/office-activity.jpeg" 
                alt="Aktivitas Tim Pusat"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#054fa0]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center p-16">
                 <div className="px-8 py-4 bg-white rounded-2xl shadow-2xl">
                    <p className="text-[#054fa0] font-black uppercase tracking-[0.4em] text-[10px]">Budaya Kerja Agensi x Perbankan</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Section 3: Tech Stack & AI Integration */}
        <div className="space-y-20 border-t border-slate-100 pt-24">
          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.8em]">Creative Engine</h3>
            <p className="text-slate-500 font-medium italic max-w-xl text-balance text-sm">
              Kombinasi software desain konvensional dan Generative AI untuk mencapai standar visual perbankan kelas atas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Photoshop', icon: <ImageIcon size={22}/>, master: 'Expert' },
              { name: 'Illustrator', icon: <Target size={22}/>, master: 'Advanced' },
              { name: 'CorelDraw', icon: <Landmark size={22}/>, master: 'Standard' },
              { name: 'CapCut / PR', icon: <Video size={22}/>, master: 'Dynamic' },
              { name: 'Photo AI', icon: <Sparkles size={22}/>, master: 'Relighting' },
              { name: 'Gemini AI', icon: <Zap size={22}/>, master: 'Strategy' },
            ].map((tool, i) => (
              <div key={i} className="group flex flex-col items-center p-10 rounded-[3rem] bg-slate-50 border border-transparent hover:border-[#054fa0] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl">
                <div className="text-[#054fa0] mb-8 group-hover:scale-125 transition-transform duration-500">
                    {tool.icon}
                </div>
                <p className="text-sm font-black text-slate-900 mb-3 uppercase tracking-tighter">{tool.name}</p>
                <div className="px-4 py-1 bg-white rounded-full text-[9px] font-black text-slate-400 group-hover:text-[#054fa0] border border-slate-100 transition-colors uppercase tracking-widest shadow-inner">
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