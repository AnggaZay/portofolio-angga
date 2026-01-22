"use client";
import React from 'react';
import { 
  BarChart3, 
  FileCheck, 
  Search, 
  Megaphone, 
  HeartHandshake, 
  ArrowUpRight 
} from 'lucide-react';

const LearningProcess = () => {
  const experiences = [
    {
      title: "Self-Taught Marketing",
      desc: "Mempelajari growth general marketing dari nol untuk mendukung ekspansi offline, bukan sekadar konten digital.",
      icon: <BarChart3 className="text-[#ff4d94]" />,
      tags: ["Growth", "Offline Marketing"]
    },
    {
      title: "Legal & Documentation",
      desc: "Menangani administrasi dan dokumen legalitas industri periklanan dengan riset mandiri tanpa latar belakang hukum.",
      icon: <FileCheck className="text-[#054fa0]" />,
      tags: ["Administration", "Legalitas"]
    },
    {
      title: "Creative Collaboration",
      desc: "Menyelaraskan logika bisnis anak akuntansi dengan eksekusi visual tim konten (Syamil & Arif).",
      icon: <HeartHandshake className="text-[#ff4d94]" />,
      tags: ["Team Management", "Leadership"]
    },
    {
      title: "Market Research",
      desc: "Terjun langsung ke lapangan Ngaliyan untuk memetakan minat audiens terhadap produk susu murni kekinian.",
      icon: <Search className="text-[#054fa0]" />,
      tags: ["Observation", "Consumer Insight"]
    }
  ];

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <h3 className="text-xs font-black text-[#054fa0] uppercase tracking-[0.5em] mb-6">Execution & Growth</h3>
            <h4 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              Belajar Sambil <br /> 
              <span className="text-[#ff4d94] italic">Berlari.</span>
            </h4>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              Ketidaktahuan bukanlah penghambat. Di Konnyusu, saya belajar bahwa setiap tantangan baru—mulai dari strategi marketing hingga legalitas—adalah peluang untuk memperluas kapasitas diri melampaui batas seorang desainer grafis.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3ABEF9] to-[#FFD1E3] rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-xl">
              <Megaphone className="text-[#ff4d94] mb-6" size={40} />
              <p className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                "Nggak harus jadi sempurna dulu untuk berjalan, asal kita mau terus memperbaikinya."
              </p>
            </div>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className="group p-8 bg-[#F8FDFF] border border-[#3ABEF9]/20 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-[#3ABEF9]/20 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                {exp.icon}
              </div>
              <h5 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{exp.title}</h5>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white border border-slate-100 rounded-full text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 bg-[#3ABEF9] rounded-[3rem] text-white">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="p-4 bg-white/70 rounded-2xl">
              <ArrowUpRight size={32} className="text-[#3ABEF9]" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#FFD1E3]">Impact</p>
              <p className="text-2xl font-black italic tracking-tighter">Growth Beyond Design.</p>
            </div>
          </div>
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest text-right max-w-[200px]">
            Konnyusu Project <br /> Semarang — 2023
          </p>
        </div>

      </div>
    </section>
  );
};

export default LearningProcess;