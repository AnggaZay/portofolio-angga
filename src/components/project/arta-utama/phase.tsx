import React, { useState } from 'react';
import { Target, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { phaseArtaData } from "@/data/project/artaUtama/phase";

const PhaseArtaUtama = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = phaseArtaData[activeTab];

  return (
    <section className="w-full py-16 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. SWITCHER: Mobile-Friendly Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-black tracking-[0.3em] text-[#054fa0] uppercase mb-2">Project Roadmap</h2>
            <p className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter">Strategic Evolution</p>
          </div>
          
          <div className="flex bg-slate-200 p-1.5 rounded-2xl lg:rounded-3xl">
            {phaseArtaData.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl text-xs lg:text-sm font-black transition-all duration-500 ${
                  activeTab === index 
                  ? "bg-white text-[#054fa0] shadow-xl scale-100" 
                  : "text-slate-500 hover:text-slate-700 scale-95"
                }`}
              >
                {phase.year.split(' – ')[0]} {/* Ambil tahun depannya aja biar ringkas */}
              </button>
            ))}
          </div>
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* KIRI: VISI & TEMA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#054fa0] inline-block px-4 py-1 rounded-full">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{data.theme}</span>
            </div>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              {data.theme}
            </h3>
            <p className="text-lg lg:text-xl text-slate-600 font-medium italic border-l-4 border-slate-300 pl-6">
              "{data.vision}"
            </p>
          </div>

          {/* KANAN: TANTANGAN & SOLUSI */}
<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
  
  {/* Seksi Tantangan List */}
  <div className="space-y-6">
    <div className="flex items-center gap-2 text-red-500">
      <AlertCircle size={20} className="shrink-0" />
      <span className="font-black uppercase tracking-widest text-xs text-slate-400">Tantangan Utama</span>
    </div>
    <ul className="space-y-5">
      {data.challenges.map((item, i) => (
        <li key={i} className="flex gap-3 group">
          {/* Custom Bullet Point untuk Tantangan: Garis Merah Kecil */}
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 group-hover:scale-150 transition-transform duration-300" />
          <p className="text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
            {item}
          </p>
        </li>
      ))}
    </ul>
  </div>

  {/* Seksi Solusi List */}
  <div className="space-y-6">
    <div className="flex items-center gap-2 text-emerald-500">
      <CheckCircle2 size={20} className="shrink-0" />
      <span className="font-black uppercase tracking-widest text-xs text-slate-400">Solusi Strategis</span>
    </div>
    <ul className="space-y-4">
      {data.solutions.map((item, i) => (
        <li key={i} className="flex gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group">
          {/* Custom Bullet Point untuk Solusi: Ikon Ceklis Kecil */}
          <div className="bg-emerald-50 p-1 rounded-full h-fit mt-0.5 group-hover:bg-emerald-500 transition-colors duration-300">
            <CheckCircle2 size={12} className="text-emerald-500 group-hover:text-white" />
          </div>
          <p className="text-sm lg:text-[15px] text-slate-900 font-bold leading-snug">
            {item}
          </p>
        </li>
      ))}
    </ul>
  </div>

</div>
        </div>
        {/* 3. PRODUCT HIGHLIGHT: Muncul di bawah Grid */}
<div className="mt-16 pt-10 border-t border-slate-200">
  <div className="flex items-center gap-3 mb-8">
    <Zap size={20} className="text-yellow-500 fill-yellow-500" />
    <span className="font-black uppercase tracking-[0.2em] text-xs text-slate-400">Key Deliverables</span>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {data.products.map((prod, i) => (
      <div key={i} className="group bg-[#054fa0] p-6 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-blue-900/10">
        <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1">
          {prod.label}
        </p>
        <p className="text-xl lg:text-2xl font-black text-white leading-tight">
          {prod.value}
        </p>
        
        {/* Dekorasi kecil biar nggak sepi */}
        <div className="mt-4 w-10 h-1 bg-white/20 group-hover:w-full transition-all duration-700" />
      </div>
    ))}
  </div>
</div>
      </div>
      
    </section>
  );
};

export default PhaseArtaUtama;