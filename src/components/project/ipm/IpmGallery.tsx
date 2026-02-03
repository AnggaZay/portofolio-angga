"use client";
import React from 'react';
import { 
  Square, 
  Smartphone, 
  Clapperboard, 
  ArrowUpRight, 
  Maximize2 
} from 'lucide-react';

const IpmGallery = () => {
  // DATA DUMMY: 4 Tall Items (9:16) & 4 Short Items (4:5)
  // Kita bagi jadi 3 Kolom Besar secara visual:
  // Kolom 1 (Kiri): Tall Content
  // Kolom 2 & 3 (Tengah): Feed Content
  // Kolom 4 (Kanan): Tall Content
  
  const tallItemsLeft = [
    { title: "Story Campaign", category: "Snapgram", dim: "1080x1920", icon: <Smartphone size={16} />, img: "/images/project/ipm/story1.jpg" },
    { title: "Live Report", category: "Snapgram", dim: "1080x1920", icon: <Smartphone size={16} />, img: "/images/project/ipm/story2.jpg" },
  ];

  const feedItems = [
    { title: "Microblog 01", category: "Feed Design", dim: "1080x1350", icon: <Square size={16} />, img: "/images/project/ipm/feed1.jpg" },
    { title: "Microblog 02", category: "Feed Design", dim: "1080x1350", icon: <Square size={16} />, img: "/images/project/ipm/feed2.jpg" },
    { title: "Event Teaser", category: "Feed Design", dim: "1080x1350", icon: <Square size={16} />, img: "/images/project/ipm/feed3.jpg" },
    { title: "Recruitment", category: "Feed Design", dim: "1080x1350", icon: <Square size={16} />, img: "/images/project/ipm/feed4.jpg" },
  ];

  const tallItemsRight = [
    { title: "Reel Cover 01", category: "Reels", dim: "1080x1920", icon: <Clapperboard size={16} />, img: "/images/project/ipm/reel1.jpg" },
    { title: "Cinematic Recap", category: "Reels", dim: "1080x1920", icon: <Clapperboard size={16} />, img: "/images/project/ipm/reel2.jpg" },
  ];

  // Komponen Card biar kodenya rapi & reusable
  const GalleryCard = ({ item, aspect }: { item: any, aspect: string }) => (
    <div className={`group relative w-full ${aspect} rounded-[1.5rem] bg-[#2D5A61]/5 border-2 border-[#2D5A61] overflow-hidden mb-6 shadow-[6px_6px_0px_0px_rgba(45,90,97,0.2)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(45,90,97,0.3)] transition-all duration-300`}>
      {/* Overlay Hover */}
      <div className="absolute inset-0 bg-[#2D5A61]/95 transition-all duration-500 z-20 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-[#D6E3A1]">
            {item.icon}
            <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
          </div>
          <ArrowUpRight className="text-[#D6E3A1]" size={18} />
        </div>
        
        <div>
           <div className="flex items-center gap-2 mb-2 opacity-50">
             <Maximize2 size={12} className="text-[#D6E3A1]" />
             <span className="text-[9px] font-mono text-[#D6E3A1]">{item.dim} PX</span>
           </div>
           <h4 className="text-xl font-[900] text-[#D6E3A1] uppercase tracking-tighter italic leading-none translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             {item.title}
           </h4>
        </div>
      </div>

      {/* Image */}
      <img 
        src={item.img} 
        alt={item.title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
      />
    </div>
  );

  return (
    <section className="w-full pt-20 pb-40 bg-[#D6E3A1] text-[#2D5A61] font-['Helvetica',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Galeri */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-[#2D5A61]/10 pb-12">
          <div className="max-w-xl">
            <h2 className="text-[8vw] lg:text-[6rem] font-[900] tracking-[-0.04em] leading-[0.8] uppercase text-[#2D5A61]">
              Visual <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #2D5A61' }}>Precision.</span>
            </h2>
          </div>
          <div className="text-right pb-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D5A61]/40 mb-4">Pixel Perfect Execution</p>
            <div className="flex justify-end gap-2">
               <span className="px-4 py-1 bg-[#2D5A61] text-[#D6E3A1] text-[10px] font-black uppercase rounded-full">4:5 Feeds</span>
               <span className="px-4 py-1 border border-[#2D5A61] text-[#2D5A61] text-[10px] font-black uppercase rounded-full">9:16 Reels</span>
            </div>
          </div>
        </div>

        {/* CUSTOM COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* KOLOM 1: TALL (SNAPGRAM) - Aspect 9:16 */}
          <div className="flex flex-col gap-0">
             {tallItemsLeft.map((item, i) => (
                <GalleryCard key={i} item={item} aspect="aspect-[9/16]" />
             ))}
          </div>

          {/* KOLOM 2 & 3: FEED - Aspect 4:5 */}
          {/* Kita pecah feedItems jadi dua kolom biar imbang */}
          <div className="flex flex-col gap-0">
             {feedItems.slice(0, 2).map((item, i) => (
                <GalleryCard key={i} item={item} aspect="aspect-[4/5]" />
             ))}
          </div>
          <div className="flex flex-col gap-0">
             {feedItems.slice(2, 4).map((item, i) => (
                <GalleryCard key={i} item={item} aspect="aspect-[4/5]" />
             ))}
          </div>

          {/* KOLOM 4: TALL (REELS) - Aspect 9:16 */}
          <div className="flex flex-col gap-0">
             {tallItemsRight.map((item, i) => (
                <GalleryCard key={i} item={item} aspect="aspect-[9/16]" />
             ))}
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center border-t border-[#2D5A61]/10 pt-10">
            <p className="text-[10px] font-bold text-[#2D5A61]/50 uppercase tracking-[0.2em]">
                Optimized for Mobile Vertical & Feed Display
            </p>
        </div>

      </div>
    </section>
  );
};

export default IpmGallery;