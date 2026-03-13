import React, { useState } from 'react';
import { productionVaultData } from "@/data/project/artaUtama/production";

const ProductionVault = () => {
  const [filter, setFilter] = useState("ALL");

  const filteredData = filter === "ALL" 
    ? productionVaultData 
    : productionVaultData.filter(item => item.year === filter || item.type === filter);

  return (
    <section className="w-full py-20 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header System */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-xl">
            <h2 className="text-xs font-black text-[#054fa0] uppercase tracking-[0.4em] mb-4">Production Archives</h2>
            <p className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none">The Vault</p>
          </div>

          <div className="flex overflow-x-auto pb-4 lg:pb-0 gap-3 no-scrollbar">
            {["ALL", "2025", "2026", "Timeless", "Website", "Reels"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 shrink-0 ${
                  filter === cat ? "bg-[#054fa0] text-white shadow-xl" : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* STATIC GRID SYSTEM (Biar Feed Nyambung Tetap Rapi) */}
        {/* Kita pakai grid 3 kolom di desktop supaya feed nyambung kamu aman urutannya */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filteredData.map((item) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] bg-slate-50 transition-all duration-700 hover:shadow-2xl ${
                item.ratio === "16/5" ? "lg:col-span-2" : "" 
              }`}
            >
              {/* Gambar Full Color & Presisi Rasio */}
              <div 
                className="w-full overflow-hidden"
                style={{ 
                  aspectRatio: item.ratio === "4/5" ? "4/5" : 
                              item.ratio === "9/16" ? "9/16" : 
                              item.ratio === "16/5" ? "16/5" : "1/1" 
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              
              {/* Info Overlay saat Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#054fa0]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] font-black uppercase tracking-widest mb-1 text-blue-300">{item.type} • {item.year}</span>
                <h4 className="text-xl font-black italic uppercase leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductionVault;