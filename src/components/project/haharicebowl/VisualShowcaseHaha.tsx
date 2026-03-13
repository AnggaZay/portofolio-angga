import React from 'react';
import { showcaseHahaData } from "@/data/project/hahaRicebowl/showcase";

const VisualShowcaseHaha = () => {
  const getBlock = (id: string) => showcaseHahaData.find((d) => d.id === id);

  return (
    <section className="w-full py-24 lg:py-48 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-xs font-black text-[#FACC15] uppercase tracking-[0.4em] mb-4">Production & Mockups</h2>
          <p className="text-5xl lg:text-8xl font-[1000] text-white tracking-tighter leading-none">
            Visual <span className="text-[#EF4444]">Showcase</span>
          </p>
        </div>

        {/* BENTO GRID: 4 KOLOM UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 items-start">
          
          {/* KOLOM 1: LOGO STACK + MENU 1 */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {getBlock("logo-stack")?.items?.map((item, i) => (
              <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-[#262626] group bg-[#1a1a1a] transition-all duration-500 hover:border-white/20">
                <div className="absolute top-4 left-4 z-10 bg-white text-black text-[8px] font-black px-2 py-1 rounded uppercase">{item.label}</div>
                <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
            
            {/* Menu P1 (1:1.41) */}
            <div className="relative aspect-[1/1.41] rounded-[2.5rem] overflow-hidden border-2 border-[#262626] group bg-[#1a1a1a]">
               <img src={getBlock("menu-p1")?.src} alt="Menu 1" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>
          </div>

          {/* KOLOM 2 & 3: STOREFRONT + (MENU 2 & PAMPHLET SEJAJAR) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="relative group rounded-[3rem] overflow-hidden border-2 border-[#FACC15]/20 hover:border-[#FACC15] transition-all duration-700 bg-[#1a1a1a]">
              <div className="absolute top-8 left-8 z-20 bg-[#FACC15] text-black text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                Storefront Focus
              </div>
              <div className="aspect-square">
                 <img src={getBlock("storefront")?.src} alt="Cart" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
              </div>
            </div>
            
            {/* SUB-GRID: Menu 2 dan Pamphlet Berdampingan di Bawah Storefront */}
            <div className="grid grid-cols-2 gap-6">
               {/* Menu P2 Fix Rasio (1:1.41) */}
               <div className="relative aspect-[1/1.41] rounded-[2.5rem] overflow-hidden border-2 border-[#262626] group bg-[#1a1a1a]">
                  <img src={getBlock("menu-p2")?.src} alt="Menu 2" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
               </div>
               {/* Pamphlet Sebelah Menu 2 */}
               <div className="relative aspect-[1/1.41] rounded-[2.5rem] overflow-hidden border-2 border-[#EF4444]/20 group bg-[#1a1a1a]">
                  <img src={getBlock("pamphlet")?.src} alt="Pamphlet" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
               </div>
            </div>
          </div>

          {/* KOLOM 4: BANNER + PACKAGING (RAPET KE ATAS) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <div className="relative aspect-[1/1.41] rounded-[2.5rem] overflow-hidden border-2 border-[#EF4444]/20 hover:border-[#EF4444] group bg-[#1a1a1a]">
              <div className="absolute top-6 left-6 z-10 bg-[#EF4444] text-white text-[8px] font-black px-2 py-1 rounded uppercase">Banner Tall</div>
              <img src={getBlock("banner")?.src} alt="Banner" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Pack V1 & V2 */}
            {getBlock("packaging-stack")?.items?.map((item, i) => (
              <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-[#FACC15]/20 hover:border-[#FACC15] group bg-[#1a1a1a]">
                <div className="absolute top-4 left-4 z-10 bg-[#FACC15] text-black text-[8px] font-black px-2 py-1 rounded uppercase">{item.label}</div>
                <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualShowcaseHaha;