"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LayoutGrid, Film, UserCircle } from 'lucide-react';

const artaGallery = [
  // --- PHASE I: 2025 (SMARTLY GROUNDED) ---
  // 6 Postingan
  { id: 1, year: "2025", type: "Postingan", src: "/images/project/arta-utama/2025-post-1.jpg", title: "Standardized Feed 01" },
  { id: 2, year: "2025", type: "Postingan", src: "/images/project/arta-utama/2025-post-2.jpg", title: "Standardized Feed 02" },
  { id: 3, year: "2025", type: "Postingan", src: "/images/project/arta-utama/2025-post-3.jpg", title: "Product Awareness" },
  { id: 4, year: "2025", type: "Postingan", src: "/images/project/arta-utama/2025-post-4.jpg", title: "Educational Carousel" },
  { id: 5, year: "2025", type: "Postingan", src: "/images/project/arta-utama/2025-post-5.jpg", title: "Promo Interaction" },
  { id: 6, year: "2025", type: "Postingan", src: "/images/project/arta-utama/2025-post-6.jpg", title: "Holiday Greeting" },
  // 2 Cover Reels
  { id: 7, year: "2025", type: "Reels", src: "/images/project/arta-utama/2025-reels-1.jpg", title: "Corporate Info 01" },
  { id: 8, year: "2025", type: "Reels", src: "/images/project/arta-utama/2025-reels-2.jpg", title: "Corporate Info 02" },
  // 2 Foto Profile
  { id: 9, year: "2025", type: "Profile", src: "/images/project/arta-utama/2025-profile-1.jpg", title: "Staff Identity A" },
  { id: 10, year: "2025", type: "Profile", src: "/images/project/arta-utama/2025-profile-2.jpg", title: "Staff Identity B" },

  // --- PHASE II: 2026 (DYNAMIC AUTHENTICITY) ---
  // 6 Postingan
  { id: 11, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-1.jpg", title: "Warung Literasi 01" },
  { id: 12, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-2.jpg", title: "Warung Literasi 02" },
  { id: 13, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-3.jpg", title: "Studio Narrative 01" },
  { id: 14, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-4.jpg", title: "Studio Narrative 02" },
  { id: 15, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-5.jpg", title: "Human Centric Design" },
  { id: 16, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-6.jpg", title: "Visual Storytelling" },
  { id: 17, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-7.jpg", title: "Visual" },
  { id: 18, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-8.jpg", title: "Storytelling" },
  { id: 19, year: "2026", type: "Postingan", src: "/images/project/arta-utama/2026-post-9.jpg", title: "VS" },
  // 2 Cover Reels
  { id: 20, year: "2026", type: "Reels", src: "/images/project/arta-utama/2026-reels-1.jpg", title: "Cinematic Promo 01" },
  { id: 21, year: "2026", type: "Reels", src: "/images/project/arta-utama/2026-reels-2.jpg", title: "Cinematic Promo 02" },
  // 2 Foto Profile
  { id: 22, year: "2026", type: "Profile", src: "/images/project/arta-utama/2026-profile-1.jpg", title: "Modern Professional A" },
  { id: 23, year: "2026", type: "Profile", src: "/images/project/arta-utama/2026-profile-2.jpg", title: "Modern Professional B" },

  // --- EXTEND (TIMELESS & SYSTEM) ---
  // 3 Postingan Extend
  { id: 24, year: "Timeless", type: "Postingan", src: "/images/project/arta-utama/ext-high-1.jpg", title: "Evergreen Content 01" },
  { id: 25, year: "Timeless", type: "Postingan", src: "/images/project/arta-utama/ext-high-2.jpg", title: "Evergreen Content 02" },
  { id: 26, year: "Timeless", type: "Postingan", src: "/images/project/arta-utama/ext-high-3.jpg", title: "Brand Core Visual" },
  { id: 27, year: "Timeless", type: "Postingan", src: "/images/project/arta-utama/ext-high-4.jpg", title: "Universal Guidelines" },
  { id: 28, year: "Timeless", type: "Postingan", src: "/images/project/arta-utama/ext-high-5.jpg", title: "Universal" },
  // 4 Timeless/Web
  { id: 29, year: "Timeless", type: "Website", src: "/images/project/arta-utama/ext-web-1.jpg", title: "Digital Banking UI" },
  { id: 30, year: "Timeless", type: "Website", src: "/images/project/arta-utama/ext-web-2.jpg", title: "Landing Page System" },
  { id: 31, year: "Timeless", type: "Website", src: "/images/project/arta-utama/ext-web-3.jpg", title: "Website Arta" },
  { id: 32, year: "Timeless", type: "Website", src: "/images/project/arta-utama/ext-web-4.jpg", title: "Website" },
];

const ProductionVaultArta = () => {
  const [filter, setFilter] = useState("2026");

  const filteredAssets = artaGallery.filter(item => 
    filter === "All" ? true : item.year === filter
  );

  return (
    <section className="w-full py-32 bg-[#054fa0] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-white/10 pb-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-sm font-black text-yellow-300 uppercase tracking-[0.4em] mb-4">Vault Strategy</h2>
            <h3 className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase">Gudang <br/> Produksi.</h3>
          </motion.div>
          
          {/* Filter Tabs */}
          <div className="flex bg-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10">
            {["2025", "2026", "Timeless"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === f ? "bg-yellow-400 text-[#054fa0]" : "text-white/40 hover:text-white"
                }`}
              >
                {f === "Timeless" ? "Extend" : `Phase ${f}`}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Grid: Dynamic Bento Logic */}
<div className={`grid gap-4 md:gap-6 ${
  filter === "Timeless" 
    ? "grid-cols-1 md:grid-cols-4" // Layout khusus Extend (4 Kolom)
    : "grid-cols-6"                // Layout Phase 1 & 2 (6 Kolom)
}`}>
  <AnimatePresence mode="popLayout">
    {filteredAssets.map((item, index) => {
      // LOGIKA SPAN UNTUK PHASE 1 & 2 (Grid 6)
      let colSpan = "col-span-2"; 
      let aspect = "aspect-[1080/1350]";

      if (filter !== "Timeless") {
        if (item.type === 'Postingan') {
          colSpan = "col-span-2"; // 3 item per baris
          aspect = "aspect-[1080/1350]";
        } else if (item.type === 'Reels' || item.type === 'Profile') {
          colSpan = "col-span-3"; // 2 item per baris
          aspect = item.type === 'Profile' ? "aspect-square" : "aspect-[1080/1920]";
        }
      } 
      // LOGIKA SPAN KHUSUS EXTEND (Grid 4)
else {
  if (item.type === 'Highlight') {
    colSpan = "col-span-1"; // Tetap 1 kolom biar ramping
    // Ubah dari 1080/1920 ke 9/21 biar lebih "jenjang"
    aspect = "aspect-[9/21]"; 
  } else if (item.type === 'Website') {
    colSpan = "col-span-4"; 
    aspect = "aspect-[1600/500]";
  }
}

      return (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: index * 0.03 }}
          className={`${colSpan} ${aspect} group relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10 shadow-xl`}
        >
          <Image 
            key={item.src}
            src={item.src} 
            alt={item.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#054fa0]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
            <span className="text-[8px] font-black text-yellow-300 uppercase tracking-[0.4em] mb-2">{item.type}</span>
            <p className="text-base md:text-xl font-black leading-tight uppercase italic text-white">{item.title}</p>
          </div>
        </motion.div>
      );
    })}
  </AnimatePresence>
</div>

        {/* Footnote */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center"
        >
          <p className="text-slate-400 text-sm font-medium italic max-w-2xl mx-auto">
            "Arsip ini menunjukkan bagaimana logika operasional perbankan yang kaku 
            berhasil diterjemahkan menjadi estetika visual yang konsisten dan manusiawi."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionVaultArta;