"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const RiceBowlReflective = () => {
  return (
    <section className="w-full py-32 bg-white font-['Helvetica',_sans-serif]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-8">
                <Star size={16} className="text-[#FACC15]" fill="#FACC15" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Project Conclusion</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-none text-slate-900">
                Rice Bowl <br /> <span className="text-[#EF4444]">Construction.</span>
            </h2>

            <p className="text-xl font-medium text-slate-500 leading-relaxed max-w-2xl">
                Melalui Haha Rice Bowl, saya membuktikan bahwa brand makanan praktis pun layak memiliki visual berkelas. Integrasi desain yang saya lakukan memastikan identitas merk kuat secara digital maupun fisik.
            </p>

            <div className="mt-20 w-full pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-8 md:mb-0">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Next Journey</p>
                    <p className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Tabakery Project</p>
                </div>

                <Link href="/project/tabakery" className="px-10 py-5 bg-[#EF4444] text-white rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-4 hover:bg-[#FACC15] hover:text-black transition-all shadow-xl shadow-[#EF4444]/20">
                    Next Project
                    <ArrowRight size={18} />
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RiceBowlReflective;