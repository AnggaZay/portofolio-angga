"use client";
import React from 'react';
import Image from 'next/image'; // Import komponen Image

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

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          
          {/* LOGO STACK */}
          <div className="flex flex-col gap-4 md:col-span-1 md:row-span-2">
            {[ 
              { label: "Macro Logo", src: "/images/project/haharicebowl/logo-macro.webp" },
              { label: "Micro Logo", src: "/images/project/haharicebowl/logo-micro.webp" }
            ].map((img, i) => (
              <div key={i} className="h-full bg-[#262626] rounded-3xl border-2 border-[#333] relative overflow-hidden group will-change-transform">
                <div className="absolute top-4 left-4 z-10 bg-white text-black text-[8px] font-black px-2 py-1 rounded uppercase">
                  {img.label}
                </div>
                <Image 
                  src={img.src} 
                  alt={img.label}
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* STOREFRONT - Ditambah Properti Priority karena ini aset utama */}
          <div className="md:col-span-2 md:row-span-2 bg-[#262626] rounded-[2.5rem] border-2 border-[#333] relative overflow-hidden group will-change-transform">
            <div className="absolute top-6 left-6 z-10 bg-[#FACC15] text-black text-[10px] font-black px-3 py-1 rounded uppercase">
              Storefront [1:1]
            </div>
            <Image 
              src="/images/project/haharicebowl/mockup-cart.webp" 
              alt="Storefront"
              fill
              priority // Prioritaskan pemuatan aset tengah
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* BANNER */}
          <div className="md:col-span-1 md:row-span-2 bg-[#262626] rounded-[2.5rem] border-2 border-[#EF4444] relative overflow-hidden group will-change-transform">
            <div className="absolute top-4 left-4 z-10 bg-[#EF4444] text-white text-[8px] font-black px-2 py-1 rounded uppercase">
              Banner [1:2]
            </div>
            <Image 
              src="/images/project/haharicebowl/mockup-banner.webp" 
              alt="Banner"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default RiceBowlVisualShowcase;