"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Award, Box } from 'lucide-react';

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

  const team = [
    { name: "Angga", role: "Specialist & System Arch." },
    { name: "Dimas P.", role: "Visual Content Dept." },
    { name: "M. Irfan", role: "Journalism & Media" },
    { name: "Amanullah", role: "Lead Illustrator" }
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full min-h-fit bg-[#D6E3A1] text-[#2D5A61] relative overflow-hidden flex flex-col justify-center font-['Helvetica',_sans-serif] cursor-crosshair pb-24"
    >
      {/* Grid Background - Navy Tipis di atas Background Cream */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#2D5A61_1px,transparent_1px),linear-gradient(to_bottom,#2D5A61_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10 w-full flex flex-col justify-between gap-20">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-[5.5vw] lg:text-[4.8rem] font-[900] leading-[0.85] tracking-[-0.05em] uppercase">
                <span className="text-[12px] block tracking-[0.8em] text-[#2D5A61]/60 mb-8 ml-1">Pimpinan Daerah</span>
                <div className="flex items-center gap-4">
                   <span>Ikatan Pelajar</span>
                </div>
                {/* Outline text pakai warna Navy sesuai palet footer */}
                <span className="text-transparent block py-2" style={{ WebkitTextStroke: '1.5px #2D5A61' }}>Muhammadiyah</span>
                <span className="block text-[#2D5A61]">Kab. Pekalongan</span>
              </h1>
            </motion.div>
          </div>

          {/* MAIN CARD - PHOTO VERSION (PELANTIKAN) */}
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="lg:col-span-5 perspective-1000">
            <div className="relative h-[400px] w-full rounded-[3rem] shadow-[0_30px_60px_rgba(45,90,97,0.3)] border-4 border-[#2D5A61] overflow-hidden group bg-[#2D5A61]">
              
              {/* Overlay Gradient biar teks kebaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A61] via-transparent to-transparent opacity-90 z-10" />
              
              {/* LABEL TAG DI POJOK ATAS */}
              <div className="absolute top-8 left-8 z-20 flex justify-between w-[85%]">
                 <div className="px-4 py-2 bg-[#D6E3A1] text-[#2D5A61] rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Award size={12} />
                    Inauguration Day
                 </div>
                 <div className="w-10 h-10 rounded-full bg-[#D6E3A1] flex items-center justify-center text-[#2D5A61] shadow-lg group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight size={20} />
                 </div>
              </div>

              {/* FOTO PELANTIKAN */}
              {/* Ganti src ini dengan foto pelantikan lo */}
              <img 
                src="/images/project/ipm/pelantikan.jpg" 
                alt="Pelantikan PD IPM Pekalongan" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* TEKS DI BAWAH (Overlay di atas foto) */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                 <h2 className="text-3xl font-[900] leading-none text-[#D6E3A1] mb-2 drop-shadow-md">
                    Periode Musyda <br /> Ke-XXIII.
                 </h2>
                 <p className="text-[10px] font-bold text-[#D6E3A1]/80 uppercase tracking-widest">
                    Official Board 2024 - 2026
                 </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* TEAM GRID */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                whileHover={{ backgroundColor: "#2D5A61", color: "#D6E3A1", y: -10 }}
                className="p-8 rounded-[2rem] border-2 border-[#2D5A61]/20 bg-[#D6E3A1] transition-all duration-300 group cursor-default shadow-sm"
              >
                <p className="text-[9px] font-black text-[#2D5A61]/60 uppercase tracking-[0.2em] mb-4 group-hover:text-[#D6E3A1]/80">
                  {member.role}
                </p>
                <h3 className="text-3xl font-[900] text-[#2D5A61] tracking-tighter group-hover:text-[#D6E3A1] transition-all">
                  {member.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgencyHero;