"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Flame, Globe } from 'lucide-react';
import { generalTabakeryData } from "@/data/project/tabakery/general";

const TabakeryHero = () => {
  return (
    <section className="w-full min-h-screen bg-white relative flex flex-col justify-center overflow-hidden selection:bg-[#FACC15] selection:text-black pt-10 md:pt-0">
      
      {/* Background Accent: Garis grid modern ultra-thin */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* CONTAINER RAKSASA: Max-width diperlebar biar lega di monitor baru */}
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-10 relative z-10">
        
        {/* TOP BAR: Metadata Branding */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/5 pb-6 mb-12 md:mb-24 gap-4">
          <div className="flex items-center gap-4">
             <div className="px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded">Project 03</div>
             <span className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em]">{generalTabakeryData.role}</span>
          </div>
          <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-300">
             <div className="flex items-center gap-2"><Globe size={12}/> PKL, INDONESIA</div>
             <div className="hidden md:block">EST. 2026</div>
          </div>
        </div>

        {/* MAIN LAYOUT GRID: Gap diperbesar jadi 24 (lg:gap-24) biar gak nabrak */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          
          {/* SISI KIRI: TIPOGRAFI MENGGILA */}
<div className="lg:col-span-8 order-2 lg:order-1 pr-0 lg:pr-10">
  <motion.div 
    initial={{ x: -40, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* REVISI JUDUL: TABAKERY HUB */}
    <h1 className="text-7xl lg:text-[14rem] font-[1000] leading-[0.8] lg:leading-[0.75] tracking-[-0.06em] uppercase text-[#121212] mb-12 relative z-10">
      TABAKERY <br className="hidden lg:block" /> 
      <span className="text-[#FACC15] italic">HUB.</span>
    </h1>
    
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mt-4 lg:mt-8">
      {/* Badge Tagline dengan Shadow Brutalism */}
      <div className="px-6 py-3 bg-[#FACC15] text-black rounded-full shadow-[10px_10px_0px_#000] border-2 border-black inline-block rotate-[-1deg]">
        <span className="text-lg md:text-3xl font-[1000] uppercase italic tracking-tighter">
          "{generalTabakeryData.tagline}"
        </span>
      </div>
      
      {/* Deskripsi Narasi */}
      <p className="text-gray-400 text-sm md:text-xl max-w-sm font-bold leading-tight uppercase tracking-tighter">
        {generalTabakeryData.narrative.main}
      </p>
    </div>
  </motion.div>
</div>

          {/* SISI KANAN: IMAGE CARD (Floating & Rotate) */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ y: 80, opacity: 0, rotate: -2 }} 
              animate={{ y: 0, opacity: 1, rotate: 3 }} 
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative w-full aspect-[3/4] max-w-[420px] rounded-[3rem] md:rounded-[4rem] overflow-hidden border-[12px] md:border-[24px] border-white shadow-2xl transition-all duration-700 bg-gray-50"
            >
              <img src="/images/project/tabakery/outlet.jpg" className="w-full h-full object-cover" alt="Tabakery Physical Outlet" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-[#FACC15] font-black uppercase text-[10px] tracking-widest mb-2">
                  <Flame size={14} fill="#FACC15" /> Operational Excellence
                </div>
                <h3 className="text-2xl font-black text-white uppercase leading-none">The Real<br/>System.</h3>
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM SECTION: Metadata Footer Page */}
<div className="mt-24 md:mt-36 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-start gap-8 pb-10">
   <div className="max-w-xs">
      {/* Label: Dari gray-300 jadi gray-500 (Lebih Tegas) */}
      <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-4 block">
        Background / Core Idea
      </span>
      {/* Deskripsi: Dari gray-400 jadi gray-700 (Jelas Banget) */}
      <p className="text-[11px] font-bold text-gray-700 leading-relaxed uppercase tracking-[0.1em]">
        Membangun jembatan antara kebutuhan fisik UMKM dan efisiensi teknologi digital melalui desain produk.
      </p>
   </div>
   <div className="text-right w-full md:w-auto">
      {/* Label: Dari gray-300 jadi gray-500 */}
      <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-4 block">
        Collaborator / Client
      </span>
      {/* Nama Owner: Tetep text-black (Sudah Oke) */}
      <h4 className="text-2xl font-[1000] uppercase text-black">
        {generalTabakeryData.client}
      </h4>
   </div>
</div>

      </div>

      {/* Floating Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-200 hidden md:block">
        <ArrowDown size={28} />
      </div>
    </section>
  );
};

export default TabakeryHero;