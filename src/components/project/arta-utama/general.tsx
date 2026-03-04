"use client";

import React from 'react';
import { MapPin, Clock, Users2, Sparkles, Target, Zap, Image as ImageIcon, Video, ChevronRight } from 'lucide-react';

const GeneralArtaUtama = () => {
  return (
    // Kita pakai py-10 biar padat, bg-white biar clean
    <section className="w-full py-10 md:py-16 bg-white overflow-hidden">
      
      {/* KUNCINYA: max-w-[1440px] biar sama kayak layout dashboard Vercel */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          
          {/* Sisi Kiri: Narasi & Metadata */}
          <div className="flex-[1.2] space-y-10">
            <div className="space-y-4">
              <span className="text-[#054fa0] font-black tracking-[0.3em] text-[10px] uppercase italic border-l-4 border-[#054fa0] pl-3">
                Case Study: BPR Arta Utama Pekalongan
              </span>
              
              <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.85]">
                <span className="bg-[#ffff00] px-3 py-1 inline-block mb-2">
                  Bank Perekonomian Rakyat
                </span>
                <br />
                <span className="text-[#054fa0] block">
                  Arta Utama.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 font-medium leading-relaxed max-w-3xl">
              <p className="text-xl md:text-2xl text-slate-900 font-bold leading-tight tracking-tight italic">
                "Bukan sekadar mendesain gambar, tapi membangun infrastruktur kreatif di instansi yang sebelumnya tidak memiliki panduan visual."
              </p>
              
              <p className="text-base md:text-lg">
                Masuk ke <span className="text-slate-900 font-bold">BPR Arta Utama</span>, saya menghadapi realitas aset komunikasi yang diproduksi tanpa <span className="text-[#054fa0] font-bold italic">Brand Guidelines</span>. Saya mulai membangun fondasi identitas visual dari nol—mengubah "sekadar logo" menjadi sebuah sistem karakter merek yang utuh.
              </p>

              <p className="text-base md:text-lg">
                Bersama <span className="text-slate-900 font-bold italic text-red-600">Mbak Ita (Content Creator)</span>, saya merombak alur kerja manual menjadi sistemik melalui pengadaan <span className="text-[#054fa0] font-bold">Job Plan dan Laporan Bulanan</span>.
              </p>
            </div>

            {/* Metadata Section - Rapi & Horizontal */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-red-600">
                  <MapPin size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Location</span>
                </div>
                <p className="text-xs font-bold text-slate-900">PEKALONGAN & BATANG</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#054fa0]">
                  <Clock size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Tenure</span>
                </div>
                <p className="text-xs font-bold text-slate-900">SEP 2024 - JAN 2026</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-yellow-600">
                  <Users2 size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Team</span>
                </div>
                <p className="text-xs font-bold text-slate-900">TIM PUSAT CREATIVE</p>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Foto Utama (Pake W-Full lg:flex-1 biar dia ngisi space sisa) */}
          <div className="flex-1 w-full lg:max-w-[480px]">
            <div className="relative group">
               <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] rotate-2" />
               <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-2xl">
                  <img 
                    src="/images/project/arta-utama/team-pusat.jpeg" 
                    alt="Tim Pusat"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-blue-400">Collaboration Unit</p>
                    <p className="text-xl font-black italic tracking-tighter leading-none uppercase text-yellow-300">The Power Duo Creative Unit</p>
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