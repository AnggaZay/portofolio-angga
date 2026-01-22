"use client";

import React from 'react';
// Pastikan semua ikon diimport dari satu baris yang sama untuk menghindari error linting
import { Zap, Sparkles, ArrowUpRight, Store, Megaphone, BadgePercent } from 'lucide-react';

const SignatureProjectsArta = () => {
  const projects = [
    {
      id: "umkm-banner",
      year: "2024 - 2025",
      title: "Banner UMKM Gratis",
      tagline: "Win-Win Collaboration Strategy",
      description: "Menghadapi kendala pajak reklame yang tinggi, saya mengajukan ide pemberian banner gratis bagi nasabah UMKM. Strategi ini meningkatkan kehadiran merek di lapangan secara organik tanpa beban pajak baliho.",
      icon: <Store className="text-[#054fa0]" size={24} />,
      accent: "bg-yellow-300",
      stats: ["Bebas Pajak Reklame", "Branding Organik", "Gerakan Berbasis Kehadiran Merk"]
    },
    {
      id: "warung-literasi",
      year: "2026",
      title: "Warung Literasi",
      tagline: "Elevating Financial Education",
      description: "Evolusi dari sekadar promosi menjadi edukasi. Menggunakan gaya visual 'Photograph Studio' untuk menghadirkan narasi finansial yang lebih nyata, hangat, dan mudah diterima oleh masyarakat.",
      icon: <Megaphone className="text-[#fffff]" size={24} />,
      accent: "bg-[#054fa0]",
      stats: ["Pemanfaatan Teknologi - AI", "Branding Naratif dan Lebih Emosional", "Gerakan Berbasis Dampak"]
    }
  ];

  return (
    <section className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-[0.4em]">Program Kerja Unggulan</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative p-1 bg-slate-50 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                
                <div className="flex justify-between items-start mb-12">
                  <div className={`p-4 rounded-2xl ${project.accent} bg-opacity-10`}>
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{project.year}</span>
                </div>

                <div className="flex-1">
                  <p className="text-[#054fa0] text-xs font-black uppercase tracking-widest mb-2">{project.tagline}</p>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">{project.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 mb-10">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${project.accent}`} />
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-tight">{stat}</p>
                    </div>
                  ))}
                </div>

                <button className="flex items-center justify-between w-full p-6 bg-slate-50 rounded-2xl group-hover:bg-[#054fa0] group-hover:text-white transition-all duration-300">
                  <span className="text-xs font-black uppercase tracking-widest">Lihat Detail Case Study</span>
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureProjectsArta;