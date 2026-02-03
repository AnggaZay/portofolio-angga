"use client";
import React from 'react';
import Image from 'next/image';

// 1. Definisikan Helper Component di luar atau di dalam dengan parameter yang jelas
const BentoItem = ({ 
  src = "", 
  label = "", 
  span = "", 
  ratio = "h-full", 
  priority = false, 
  color = "bg-white", 
  textColor = "text-black" 
}) => (
  <div className={`${span} ${ratio} bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group transform-gpu`}>
    <div className={`absolute top-4 left-4 z-20 ${color} ${textColor} text-[8px] font-black px-2 py-1 rounded uppercase tracking-tighter`}>
      {label}
    </div>
    <div className="relative w-full h-full will-change-transform transition-transform duration-700 ease-out group-hover:scale-105">
      <Image
        src={src}
        alt={label}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
  </div>
);

const RiceBowlVisualShowcase = () => {
  return (
    <section className="w-full py-24 bg-[#1A1A1A] font-sans selection:bg-[#FACC15] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 border-l-4 border-[#EF4444] pl-6">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
            Visual <span className="text-[#FACC15] not-italic">Assets Library.</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-mono uppercase tracking-widest text-[10px]">
            Final Production Grid — Pixel Perfect Execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {/* Sisa kodenya sama seperti sebelumnya, panggil <BentoItem ... /> */}
          <div className="flex flex-col gap-4 md:col-span-1 md:row-span-2">
            <BentoItem label="Macro Logo" src="/images/project/haharicebowl/logo-macro.webp" ratio="h-1/2" />
            <BentoItem label="Micro Logo" src="/images/project/haharicebowl/logo-micro.webp" ratio="h-1/2" />
          </div>

          <BentoItem 
            label="Storefront [1:1]" 
            src="/images/project/haharicebowl/mockup-cart.webp" 
            span="md:col-span-2 md:row-span-2" 
            priority={true} 
            color="bg-[#FACC15]"
          />

          {/* COLUMN 2-3: MAIN HERO (STOREFRONT) */}
          <BentoItem 
            label="Storefront [1:1]" 
            src="/images/project/haharicebowl/mockup-cart.webp" 
            span="md:col-span-2 md:row-span-2" 
            priority={true} 
            color="bg-[#FACC15]"
          />

          {/* COLUMN 4: BANNER */}
          <BentoItem 
            label="Banner [1:2]" 
            src="/images/project/haharicebowl/mockup-banner.webp" 
            span="md:col-span-1 md:row-span-2" 
            color="bg-[#EF4444]" 
            textColor="text-white"
          />

          {/* BOTTOM ROW */}
          <BentoItem label="Menu P1" src="/images/project/haharicebowl/menu-1.webp" span="md:col-span-1 md:row-span-2" />
          <BentoItem label="Menu P2" src="/images/project/haharicebowl/menu-2.webp" span="md:col-span-1 md:row-span-2" />
          <BentoItem 
            label="Pamphlet A4" 
            src="/images/project/haharicebowl/pamphlet.webp" 
            span="md:col-span-1 md:row-span-2" 
            color="bg-[#EF4444]" 
            textColor="text-white" 
          />
          
          <div className="flex flex-col gap-4 md:col-span-1 md:row-span-2">
            <BentoItem label="Pack V1" src="/images/project/haharicebowl/mockup-box-1.webp" ratio="h-1/2" color="bg-[#FACC15]" />
            <BentoItem label="Pack V2" src="/images/project/haharicebowl/mockup-box-2.webp" ratio="h-1/2" color="bg-[#FACC15]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default RiceBowlVisualShowcase;