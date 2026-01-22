"use client";
import React from 'react';
import { Users, MapPin, Milk, Rocket, Quote } from 'lucide-react';

const GeneralKonnyusu = () => {
  const team = [
    { name: "Hiba Al-faridzi", role: "Project Manager", bg: "bg-[#FFD1E3]" },
    { name: "Angga", role: "Digital Marketing & Legal", bg: "bg-[#3ABEF9]" },
    { name: "Syamil Ahmad", role: "Video Editor", bg: "bg-[#FFD1E3]" },
    { name: "Arif Mujahid", role: "Asst. Designer", bg: "bg-[#3ABEF9]" },
  ];

  return (
    <section className="w-full py-24 bg-[#F8FDFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Story */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1 bg-[#FFD1E3] text-[#ff4d94] font-black text-[10px] rounded-full uppercase tracking-widest">First Industry Project</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              Konnyusu: <br />
              <span className="text-[#3ABEF9]">Nekat & </span>
              <span className="text-[#FFD1E3]">Tumbuh.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-[#FFD1E3] pl-6 mb-8">
              "Bukan tentang kesempurnaan, tapi tentang keberanian untuk memulai dan memperbaiki saat sedang berjalan."
            </p>
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#ff4d94]" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Ngaliyan, Semarang</span>
              </div>
              <div className="flex items-center gap-2">
                <Milk size={18} className="text-[#3ABEF9]" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Susu Murni Aneka Rasa</span>
              </div>
            </div>
          </div>

          {/* Team Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {team.map((member, i) => (
              <div key={i} className={`${member.bg} p-6 rounded-[2.5rem] shadow-sm flex flex-col justify-between aspect-square group hover:-translate-y-2 transition-all duration-500`}>
                <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">
                  <Users size={18} className="text-slate-700" />
                </div>
                <div>
                  <p className="font-black text-slate-900 leading-tight mb-1 uppercase">{member.name}</p>
                  <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Context */}
        <div className="p-12 md:p-20 bg-white border-2 border-[#3ABEF9]/30 rounded-[4rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Rocket size={200} className="text-[#ff4d94]" />
          </div>
          <div className="max-w-3xl relative z-10">
            <h3 className="text-xs font-black text-[#ff4d94] uppercase tracking-[0.5em] mb-8">The Backstory</h3>
            <p className="text-2xl font-bold text-slate-800 leading-relaxed mb-6">
              Awalnya saya hanyalah seorang desainer grafis lepas yang tiba-tiba ditawari proyek industri pertama di Semarang. Bersama tim yang "ajaib"—termasuk <span className="underline decoration-[#FFD1E3] decoration-4">Project Manager anak Akuntansi</span>—kami terjun ke dunia periklanan tanpa peta.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Dari sekadar urusan konten digital, kami nekat mengambil alih <span className="font-bold text-slate-900 italic">offline marketing</span> hingga urusan <span className="font-bold text-slate-900 italic">legalitas & dokumentasi</span>. Berbekal riset mandiri dan keinginan untuk terus memperbaiki, proyek ini menjadi saksi bahwa pengalaman terhebat seringkali lahir dari ketidaktahuan yang dieksekusi dengan berani.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GeneralKonnyusu;