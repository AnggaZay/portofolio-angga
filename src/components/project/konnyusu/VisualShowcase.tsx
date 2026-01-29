"use client";
import React from 'react';
import { Camera, Play, Layers, Sparkles } from 'lucide-react';

const VisualShowcase = () => {
  const assets = [
    { 
      type: "Photography", 
      title: "Product Mood", 
      author: "Creative Team", 
      desc: "Menangkap kesegaran susu murni dengan gaya minimalis & pastel yang menggugah selera.",
      icon: <Camera size={16} />
    },
    { 
      type: "Motion", 
      title: "Content Reel", 
      author: "Digital Team", 
      desc: "Editing video dinamis yang dirancang untuk meningkatkan engagement audiens muda.",
      icon: <Play size={16} />
    },
    { 
      type: "Branding", 
      title: "Offline Media", 
      author: "Agency Ops", 
      desc: "Implementasi desain pada media fisik untuk outlet, memastikan konsistensi brand di lapangan.",
      icon: <Layers size={16} />
    }
  ];

  return (
    <section className="w-full py-32 bg-[#FFD1E3]/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3ABEF9]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD1E3]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <Sparkles size={16} className="text-[#ff4d94]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">The Visual Output</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            Galeri <br /> <span className="text-[#ff4d94]">Kreatif.</span>
          </h2>
          <p className="text-slate-500 font-medium">
            Hasil kolaborasi intensif antara strategi agensi dan eksekusi visual untuk menciptakan identitas merk yang kuat.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-8 group relative aspect-video md:aspect-auto md:h-[600px] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-[#FFD1E3]/30 border-8 border-white">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img 
              src="/images/project/konnyusu/main-product.jpg" 
              alt="Konnyusu Product"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="group relative bg-[#3ABEF9] rounded-[3rem] overflow-hidden border-8 border-white shadow-xl">
               <img src="/images/project/konnyusu/content-1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="group relative bg-[#FFD1E3] rounded-[3rem] overflow-hidden border-8 border-white shadow-xl">
               <img src="/images/project/konnyusu/content-2.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {assets.map((asset, i) => (
            <div key={i} className="p-8 bg-white/60 backdrop-blur-sm border border-white rounded-[2rem] hover:bg-white transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 text-[#ff4d94]">
                {asset.icon}
                <span className="text-[10px] font-black uppercase tracking-widest">{asset.type}</span>
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{asset.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{asset.desc}</p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Responsibility</p>
                <p className="text-xs font-black text-slate-700 uppercase">{asset.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;