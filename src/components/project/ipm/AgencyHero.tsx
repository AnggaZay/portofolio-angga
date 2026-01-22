"use client";
import React from 'react';
import { ShieldCheck, Zap, BarChart, Users, Target } from 'lucide-react';

const AgencyHero = () => {
  // Warna Salem yang lebih muda (#FFC4A4)
  const lightSalem = "#FFC4A4";
  const deepSea = "#001F3F";

  const avengers = [
    { name: "Angga", origin: "Eks PC Wonokerto", role: "Advertising Specialist", primary: true },
    { name: "Dimas Permadi", origin: "Ketua PC Pekajangan", role: "Video & Photo", primary: false },
    { name: "Muhammad Irfan", origin: "Eks PR Sijambe", role: "Media Coverage", primary: true },
    { name: "Amanullah", origin: "Eks PR Doro", role: "Illustrator", primary: false },
  ];

  return (
    <section className={`w-full py-32 bg-[${deepSea}] text-white overflow-hidden relative`}>
      {/* Background Decor - Salem Muda Soft */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC4A4] opacity-5 blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#FFC4A4] text-[#FFC4A4] mb-10">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Specialist Board Entry</span>
            </div>
            
            <h2 className="text-6xl md:text-[6.5rem] font-black tracking-tighter leading-[0.8] mb-12">
              IPM <br /> 
              <span className="text-[#FFC4A4]">AGENCY</span> <br />
              <span className="italic opacity-90">MINDSET.</span>
            </h2>

            <div className="flex items-center gap-4 mb-12">
              <div className="h-[2px] w-20 bg-[#FFC4A4]" />
              <p className="text-lg text-slate-300 font-medium max-w-md">
                Mentransformasi organisasi menjadi ekosistem kreatif profesional dengan <span className="text-white">standar agensi periklanan.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="p-8 bg-white/5 border-l-4 border-[#FFC4A4] rounded-r-3xl">
                <Target className="text-[#FFC4A4] mb-4" size={24} />
                <p className="text-3xl font-black italic mb-1 uppercase tracking-tighter">Engagement</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Data Driven Strategy</p>
              </div>
              <div className="p-8 bg-white/5 border-l-4 border-white/20 rounded-r-3xl text-white/40">
                <Zap className="mb-4" size={24} />
                <p className="text-3xl font-black italic mb-1 uppercase tracking-tighter text-white">Execution</p>
                <p className="text-[9px] font-bold uppercase tracking-widest">High Industrial Quality</p>
              </div>
            </div>
          </div>

          {/* The Avengers Cards */}
          <div className="lg:col-span-5">
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 text-right">The 04-05 Generation</p>
             <div className="space-y-3">
                {avengers.map((member, i) => (
                  <div key={i} className={`group p-6 rounded-[2rem] border transition-all duration-500 flex justify-between items-center ${
                    member.primary 
                    ? 'bg-[#FFC4A4] border-[#FFC4A4] text-[#001F3F]' 
                    : 'bg-transparent border-white/10 text-white hover:border-[#FFC4A4]/50'
                  }`}>
                    <div>
                      <h4 className="font-black uppercase text-2xl tracking-tighter leading-none">{member.name}</h4>
                      <p className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${member.primary ? 'opacity-60' : 'text-slate-500'}`}>
                        {member.origin}
                      </p>
                    </div>
                    <span className={`text-[8px] font-black px-3 py-1 rounded-full border ${
                      member.primary ? 'border-[#001F3F]/20' : 'border-white/10'
                    }`}>
                      {member.role}
                    </span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyHero;