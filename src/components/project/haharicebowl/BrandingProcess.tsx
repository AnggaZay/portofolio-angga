"use client";
import React from 'react';
import { CheckSquare, Monitor, Package, PenTool } from 'lucide-react';

const BrandingProcess = () => {
  const assets = [
    { title: "Visual Identity", items: ["Primary Logo", "Rice Bowl Iconography", "Color Palette"], icon: <PenTool size={20}/> },
    { title: "Store Setup", items: ["Container Design", "Outdoor Banner", "Menu Stickers"], icon: <Monitor size={20}/> },
    { title: "Bowl Packaging", items: ["Eco-Friendly Bowl", "Custom Paper Bag", "Seal Label"], icon: <Package size={20}/> },
    { title: "Marketing Kit", items: ["Price List Board", "Promotional Pamphlet", "Social Media"], icon: <CheckSquare size={20}/> },
  ];

  return (
    <section className="w-full py-32 bg-white font-['Helvetica',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] mb-12 text-center">Development Scope</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {assets.map((asset, i) => (
            <div key={i} className="p-10 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] hover:border-[#EF4444] transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-10 text-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white transition-colors">
                {asset.icon}
              </div>
              <h4 className="text-xl font-black uppercase mb-6 text-slate-900">{asset.title}</h4>
              <ul className="space-y-3">
                {asset.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-tight">
                    <div className="w-1 h-1 bg-[#FACC15] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingProcess;