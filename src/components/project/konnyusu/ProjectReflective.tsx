"use client";
import React from 'react';
import { Heart, RefreshCw, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ProjectReflective = () => {
  return (
    <section className="w-full py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-[#3ABEF9]/30 rounded-[4rem] p-12 md:p-24 relative overflow-hidden border-2 border-[#3ABEF9]/20">
          {/* Decorative Icon */}
          <div className="absolute -top-10 -right-10 opacity-10">
            <Heart size={300} className="text-[#ff4d94]" />
          </div>

          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-[#3ABEF9]/20 mx-auto mb-10 rotate-3">
              <RefreshCw size={32} className="text-[#ff4d94]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
              Pelajaran Terbesar: <br />
              <span className="italic text-[#ff4d94]">"Progress Over Perfection."</span>
            </h2>

            <div className="max-w-2xl mx-auto space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Konnyusu bukan proyek yang sempurna, tapi ini adalah proyek yang paling berharga. Ia mengajarkan saya bahwa sebuah ide tidak butuh kesempurnaan untuk lahir, ia hanya butuh keberanian untuk segera dijalankan.
              </p>
              <p>
                Setiap kesalahan dokumentasi, kebingungan strategi marketing, hingga perdebatan visual di tim, semuanya adalah proses "perbaikan saat berjalan" yang membentuk mentalitas profesional saya hari ini.
              </p>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100">
                <Trophy size={18} className="text-yellow-500" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-900">First Milestone</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100">
                <Heart size={18} className="text-red-500" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-900">Lifelong Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Next Project */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-12">
          <div className="mb-8 md:mb-0">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Next Journey</p>
            <h4 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Proyek IPM</h4>
          </div>
          
          <Link href="/project/ipm" className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-[#054fa0] transition-all duration-500">
            <span className="font-black uppercase tracking-widest text-xs">Lihat Proyek Selanjutnya</span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectReflective;