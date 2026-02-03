"use client";
import React from 'react';

const RiceBowlVisualShowcase = () => {
  return (
    <section className="w-full py-24 bg-[#1A1A1A] font-['Helvetica',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 border-l-4 border-[#EF4444] pl-6">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            Visual <span className="text-[#FACC15]">Assets Library.</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-mono uppercase tracking-widest text-[10px]">
            Final Production Grid — Precision Alignment
          </p>
        </div>

        {/* BENTO GRID 4-COLUMN */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          
          {/* --- BARIS ATAS: BRANDING & STOREFRONT --- */}
          {/* 1. LOGO STACK (PALING KIRI ATAS) */}
          <div className="flex flex-col gap-4 md:col-span-1 md:row-span-2">
            <div className="h-full bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group">
                <div className="absolute top-4 left-4 z-10 bg-white text-black text-[8px] font-black px-2 py-1 rounded uppercase">Macro Logo</div>
                <img src="/images/project/haharicebowl/logo-macro.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="h-full bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group">
                <div className="absolute top-4 left-4 z-10 bg-white text-black text-[8px] font-black px-2 py-1 rounded uppercase">Micro Logo</div>
                <img src="/images/project/haharicebowl/logo-micro.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

          {/* 2. STOREFRONT (CENTER FOCUS) */}
          <div className="md:col-span-2 md:row-span-2 bg-[#262626] rounded-[2.5rem] border-2 border-[#333] relative overflow-hidden group">
            <div className="absolute top-6 left-6 z-10 bg-[#FACC15] text-black text-[10px] font-black px-3 py-1 rounded uppercase">Storefront [1:1]</div>
            <img src="/images/project/haharicebowl/mockup-cart.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>

          {/* 3. BANNER (PALING KANAN ATAS) */}
          <div className="md:col-span-1 md:row-span-2 bg-[#262626] rounded-[2.5rem] border-2 border-[#EF4444] relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10 bg-[#EF4444] text-white text-[8px] font-black px-2 py-1 rounded uppercase">Banner [1:2]</div>
            <img src="/images/project/haharicebowl/mockup-banner.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          </div>

          {/* --- BARIS BAWAH: MARKETING & PACKAGING --- */}
          {/* 4. MENU P1 (PALING KIRI BAWAH) */}
          <div className="md:col-span-1 md:row-span-2 bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10 bg-white text-black text-[8px] font-black px-2 py-1 rounded uppercase">Menu P1</div>
            <img src="/images/project/haharicebowl/menu-1.webp" className="w-full h-full object-cover group-hover:scale-105" />
          </div>

          {/* 5. MENU P2 (SETELAH MENU P1) */}
          <div className="md:col-span-1 md:row-span-2 bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10 bg-white text-black text-[8px] font-black px-2 py-1 rounded uppercase">Menu P2</div>
            <img src="/images/project/haharicebowl/menu-2.webp" className="w-full h-full object-cover group-hover:scale-105" />
          </div>

          {/* 6. PAMFLET PROMOSI (TENGAH) */}
          <div className="md:col-span-1 md:row-span-2 bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10 bg-[#EF4444] text-white text-[8px] font-black px-2 py-1 rounded uppercase">Pamphlet A4</div>
            <img src="/images/project/haharicebowl/pamphlet.webp" className="w-full h-full object-cover group-hover:scale-105" />
          </div>

          {/* 7. PACKAGING STACK (PALING KANAN BAWAH) */}
          <div className="flex flex-col gap-4 md:col-span-1 md:row-span-2">
            <div className="h-full bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group">
                <div className="absolute top-4 left-4 z-10 bg-[#FACC15] text-black text-[8px] font-black px-2 py-1 rounded uppercase">Pack V1</div>
                <img src="/images/project/haharicebowl/mockup-box-1.webp" className="w-full h-full object-cover group-hover:scale-110" />
            </div>
            <div className="h-full bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group">
                <div className="absolute top-4 left-4 z-10 bg-[#FACC15] text-black text-[8px] font-black px-2 py-1 rounded uppercase">Pack V2</div>
                <img src="/images/project/haharicebowl/mockup-box-2.webp" className="w-full h-full object-cover group-hover:scale-110" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RiceBowlVisualShowcase;