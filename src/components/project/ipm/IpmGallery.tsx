"use client";
import React from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { IPM_GALLERY } from '@/data/project/ipmPekalongan/gallery';

// Komponen Card Kecil biar kode utama bersih
const GalleryCard = ({ item, aspect }: { item: any, aspect: string }) => (
  <div className={`group relative w-full ${aspect} rounded-[1rem] lg:rounded-[1.5rem] bg-[#2D5A61]/5 border-2 border-[#2D5A61] overflow-hidden mb-4 lg:mb-6 shadow-[4px_4px_0px_0px_rgba(45,90,97,1)] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_rgba(45,90,97,1)] transition-all duration-300`}>
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-[#2D5A61]/90 p-5 lg:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-between">
      <div className="flex justify-between items-start text-[#D6E3A1]">
        <div className="flex items-center gap-2">
          {item.icon && <item.icon size={14} />}
          <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
        </div>
        <ArrowUpRight size={18} />
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-2 opacity-50 text-[#D6E3A1]">
          <Maximize2 size={10} />
          <span className="text-[8px] font-mono uppercase">{item.dim} PX</span>
        </div>
        <h4 className="text-lg lg:text-xl font-[900] text-[#D6E3A1] uppercase italic tracking-tighter leading-none translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {item.title}
        </h4>
      </div>
    </div>

    {/* Media Content */}
    <img 
      src={item.img} 
      alt={item.title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
    />
  </div>
);

const IpmGallery = () => {
  return (
    <section className="w-full py-16 lg:py-32 bg-[#D6E3A1] font-['Helvetica',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 gap-8 border-[#2D5A61]/10 border-b pb-10">
          <div className="max-w-2xl">
            <h2 className="text-[12vw] lg:text-[6.5rem] font-[900] tracking-tighter leading-[0.8] uppercase text-[#2D5A61]">
              Visual <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #2D5A61' }}>Precision.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D5A61]/40">Pixel Perfect Execution</p>
            <div className="flex gap-2">
              <span className="px-4 py-1.5 bg-[#2D5A61] text-[#D6E3A1] text-[10px] font-black uppercase rounded-full">Static Feed</span>
              <span className="px-4 py-1.5 border-2 border-[#2D5A61] text-[#2D5A61] text-[10px] font-black uppercase rounded-full">Motion Reels</span>
            </div>
          </div>
        </div>

        {/* MASONRY-LIKE GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          
          {/* KOLOM 1: TALL (STORIES/SNAPGRAM) - Aspect 9:16 */}
          <div className="flex flex-col">
            {IPM_GALLERY.tallLeft.map((item, i) => (
              <GalleryCard key={`left-${i}`} item={item} aspect="aspect-[9/16]" />
            ))}
          </div>

          {/* KOLOM 2: FEEDS (MIX 4:5 & 1:1) */}
          <div className="flex flex-col">
            {IPM_GALLERY.feeds.slice(0, 3).map((item, i) => (
              <GalleryCard 
                key={`feed-1-${i}`} 
                item={item} 
                aspect={i === 2 ? "aspect-square" : "aspect-[4/5]"} 
              />
            ))}
          </div>

          {/* KOLOM 3: FEEDS (MIX 4:5 & 1:1) */}
          <div className="flex flex-col">
            {IPM_GALLERY.feeds.slice(3, 6).map((item, i) => (
              <GalleryCard 
                key={`feed-2-${i}`} 
                item={item} 
                aspect={i === 0 ? "aspect-square" : "aspect-[4/5]"} 
              />
            ))}
          </div>

          {/* KOLOM 4: TALL (REELS/VIDEO) - Aspect 9:16 */}
          <div className="flex flex-col">
            {IPM_GALLERY.tallRight.map((item, i) => (
              <GalleryCard key={`right-${i}`} item={item} aspect="aspect-[9/16]" />
            ))}
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center pt-10 border-t border-[#2D5A61]/10">
          <p className="text-[9px] font-bold text-[#2D5A61]/40 uppercase tracking-[0.3em]">
            Optimized for Mobile Vertical & Feed Display Architecture
          </p>
        </div>

      </div>
    </section>
  );
};

export default IpmGallery;