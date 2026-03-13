"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { IPM_HERO } from '@/data/project/ipmPekalongan/hero';

const AgencyHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full h-auto lg:h-screen bg-[#D6E3A1] text-[#2D5A61] relative overflow-hidden flex flex-col justify-center font-['Helvetica',_sans-serif] cursor-crosshair pb-10 lg:pb-24"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#2D5A61_1px,transparent_1px),linear-gradient(to_bottom,#2D5A61_1px,transparent_1px)] bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem]" />
      
      {/* Container Konten: pt-24 biar lega tapi nggak lowong */}
      <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-0 relative z-10 w-full flex flex-col gap-10 lg:gap-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-10 lg:mb-32">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
  {/* Bungkus judul dalam container agar gap antar baris terkontrol */}
  <div className="flex flex-col">
    <span className="text-[10px] lg:text-[12px] block tracking-[0.5em] lg:tracking-[0.8em] text-[#2D5A61]/60 mb-4 lg:mb-6 ml-1 uppercase font-black">
      Pimpinan Daerah
    </span>
    
    <h1 className="text-[#2D5A61] tracking-[-0.05em] uppercase leading-[0.85]">
      <span className="text-[10vw] lg:text-[4.8rem] font-[900] block">Ikatan Pelajar</span>
      <span className="text-[10vw] lg:text-[4.8rem] font-[900] text-transparent block py-1" style={{ WebkitTextStroke: '1px #2D5A61' }}>Muhammadiyah</span>
      <span className="text-[10vw] lg:text-[4.8rem] font-[900] block">Kab. Pekalongan</span>
    </h1>
  </div>

  <p className="mt-6 lg:mt-8 text-xs lg:text-lg font-bold max-w-xl opacity-80 leading-relaxed">
    {IPM_HERO.narrative}
  </p>
</motion.div>
          </div>

          {/* FOTO: Sekarang muncul di mobile juga! */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
            className="lg:col-span-5 perspective-1000"
          >
            <div className="relative h-[250px] lg:h-[450px] w-full rounded-[2rem] lg:rounded-[3rem] shadow-2xl border-4 border-[#2D5A61] overflow-hidden group bg-[#2D5A61]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A61] via-transparent to-transparent opacity-90 z-10" />
              <img 
                src="/images/project/ipm/pelantikan.jpg" 
                alt="Pelantikan" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h2 className="text-lg lg:text-2xl font-black text-[#D6E3A1] uppercase leading-none">Periode Musyda XXIII</h2>
                <p className="text-[8px] lg:text-[10px] font-bold text-[#D6E3A1]/60 uppercase tracking-widest mt-1">Official Board 2024 - 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {IPM_HERO.team.map((member, i) => (
            <div key={i} className="p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] border-2 border-[#2D5A61]/20 bg-[#D6E3A1] hover:bg-[#2D5A61] hover:text-[#D6E3A1] transition-all duration-300 group">
              <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest mb-3 opacity-60 group-hover:opacity-100">{member.spec}</p>
              <h3 className="text-lg lg:text-3xl font-[900] tracking-tighter leading-tight">{member.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default AgencyHero;