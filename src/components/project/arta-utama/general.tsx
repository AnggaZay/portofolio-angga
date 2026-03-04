"use client";

import React from 'react';
import { Landmark, MapPin, Clock, Users2, ShieldAlert, Sparkles, Target, Zap, Image as ImageIcon, Video, ChevronRight } from 'lucide-react';

const GeneralArtaUtama = () => {
  return (
    <section className="w-full py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section 1: The Deep Dive Narrative (5W) */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[#054fa0] font-black tracking-[0.4em] text-[10px] uppercase italic">BPR Arta Utama : Kantor Pusat Pekalongan</span>
            </div>
            
            <h2 className="text-4xl md:text-[2.5rem] font-black text-slate-900 tracking-tighter leading-none mb-12">
  {/* Stabilo Kuning Lurus */}
  <span className="bg-[#ffff00] px-2 py-1">
    Bank Perekonomian Rakyat
  </span>
  
  <br />

  <span className="text-[#054fa0] text-6xl md:text-[6rem] block leading-[0.8] mt-6">
    Arta Utama.
  </span>
</h2>

            <div className="space-y-10 text-slate-600 font-medium leading-relaxed">
              <p className="text-2xl text-slate-900 font-bold leading-tight tracking-tight">
                "Membangun fondasi visual yang kuat agar pesan Arta Utama sampai ke nasabah dengan cara yang paling tepat."
              </p>
              
              <p>
                Ketika pertama kali masuk dan bekerja di <span className="text-slate-900 font-bold">BPR Arta Utama - Kantor Pusat Pekalongan</span>, tantangan terbesar bukanlah beban kerja, melainkan absennya fondasi. Sebagai seorang desainer grafis murni, saya menemukan fakta bahwa setiap aset komunikasi sebelumnya diproduksi tanpa adanya <span className="text-[#054fa0] font-bold italic">Brand Guidelines</span> maupun dokumentasi proyek yang baku.
              </p>

              <p>
                Realita ini membuat identitas Arta Utama menjadi reaktif dan hanya mengikuti tren sesaat tanpa memiliki "wajah" dan "sifat" yang tetap. Dari sinilah saya mulai membuat struktur visual menyeluruh, menyusun kembali elemen-elemen fundamental , mulai dari tipografi hingga pola komunikasi untuk memastikan setiap piksel yang keluar dari Instrumen Periklanan BPR Arta Utama memiliki nilai strategis yang kuat.
              </p>

              <div className="flex flex-wrap gap-10 pt-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-red-600">
                    <MapPin size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Location</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 uppercase">KP. Pekalongan</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#054fa0]">
                    <Clock size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tenure</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 uppercase">2024 - Present</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Users2 size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Unity</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 uppercase">Tim Pusat Official</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slot Foto Utama - Tim Pusat */}
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
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-blue-400">Collaboration Unit</p>
                    <p className="text-2xl font-black italic tracking-tighter leading-none uppercase">Tim Pusat <br />BPR Arta Utama</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Section 2: Team Dynamics (The Collaboration) */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-stretch">
           <div className="lg:col-span-5 p-16 bg-[#054fa0] rounded-[4rem] text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -bottom-10 -right-10 opacity-5 text-white">
                <Users2 size={240} />
              </div>
              <h3 className="text-xs font-black text-yellow-300 uppercase tracking-[0.5em] mb-10 relative z-10 flex items-center gap-3">
               Tim Pusat BPR Arta Utama
              </h3>
              <p className="text-4xl font-black leading-[1] mb-8 relative z-10 tracking-tighter">
                Satu Tim, <br /> 
                <span className="text-yellow-300">Satu Standar.</span>
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 relative z-10 font-medium">
                Berada di bawah komando <span className="text-white font-bold text-red-500">Bapak Herland Herlambang</span> (Kabag Operasional), saya bersama <span className="text-white font-bold">Rosima Tahtita</span> mengintegrasikan visual dan narasi agar setiap pesan sampai ke nasabah dengan presisi.
              </p>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/40">
                <span>Job Plan</span>
                <ChevronRight size={14} />
                <span>Eksekusi</span>
                <ChevronRight size={14} />
                <span>Evaluasi</span>
              </div>
           </div>

           <div className="lg:col-span-7 rounded-[4rem] overflow-hidden border border-slate-100 shadow-sm relative group">
              <img 
                src="/images/project/arta-utama/office-activity.jpeg" 
                alt="Aktivitas Tim Pusat"
                className="w-full h-full object-cover group-hover:scale-150 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                 <div className="px-8 py-4 bg-white rounded-full shadow-2xl">
                    <p className="text-[#054fa0] font-black uppercase tracking-[0.4em] text-[10px]">Insavaganza Utama Group 2025</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Section 3: Mastery Matrix */}
        <div className="space-y-20 border-t border-slate-100 pt-24">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.8em]">Infrastruktur Teknis</h3>
            <p className="text-slate-500 font-medium italic">Tools yang digunakan untuk mengeksekusi desain di BPR Arta Utama.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Photoshop', icon: <ImageIcon size={22}/>, master: '95%' },
              { name: 'Illustrator', icon: <Target size={22}/>, master: '92%' },
              { name: 'CorelDraw', icon: <Landmark size={22}/>, master: '90%' },
              { name: 'Premiere Pro', icon: <Video size={22}/>, master: '55%' },
              { name: 'After Effects', icon: <Zap size={22}/>, master: '65%' },
              { name: 'Generative AI', icon: <Sparkles size={22}/>, master: 'Optimized' },
            ].map((tool, i) => (
              <div key={i} className="group flex flex-col items-center p-10 rounded-[3rem] bg-slate-50 border border-transparent hover:border-[#054fa0] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl">
                <div className="text-[#054fa0] mb-8 group-hover:scale-125 transition-transform duration-500">
                    {tool.icon}
                </div>
                <p className="text-sm font-black text-slate-900 mb-3 uppercase tracking-tighter">{tool.name}</p>
                <div className="px-3 py-1 bg-white rounded-full text-[9px] font-black text-slate-400 group-hover:text-[#054fa0] border border-slate-100 transition-colors uppercase tracking-widest shadow-inner">
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