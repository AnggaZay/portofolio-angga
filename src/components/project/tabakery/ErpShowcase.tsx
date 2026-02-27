"use client";
import React, { useState } from 'react';
import { Smartphone, MousePointer2 } from 'lucide-react';

const ErpShowcase = () => {
  // Data Screen yang udah gue rapihin namanya & typo-nya
  const screens = [
    { id: 1, title: "Login Screen", img: "/images/project/tabakery/1.png" },
    { id: 2, title: "Dashboard Tab", img: "/images/project/tabakery/2.png" },
    { id: 3, title: "Sales Tab", img: "/images/project/tabakery/3.png" },
    { id: 4, title: "Expense Tab", img: "/images/project/tabakery/4.png" },
    { id: 5, title: "Inventory Screen", img: "/images/project/tabakery/5.png" },
    { id: 6, title: "Add Sales Screen", img: "/images/project/tabakery/6.png" },
    { id: 7, title: "Bill Screen", img: "/images/project/tabakery/7.png" },
    { id: 8, title: "Add Expense Screen", img: "/images/project/tabakery/8.png" },
    { id: 9, title: "Activation Screen", img: "/images/project/tabakery/9.png" }, // Typo 'Activatin' fixed!
  ];

  const [activeCard, setActiveCard] = useState(1);

  // Cara paling ampuh: Pake link mentah yang udah di-embed langsung dari Figma
  const figmaLink = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA47v7zpgM99ZUIqwWOVQ0%2FTabakeryHub%3Fnode-id%3D1-2%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D115%253A505";

  return (
    <section className="w-full py-24 bg-[#121212] text-white font-sans overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[#FACC15] text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <Smartphone size={14} />
              9-Core Module Ecosystem
            </span>
            <h2 className="text-5xl md:text-7xl font-[900] uppercase tracking-tighter leading-none">
              Pocket <br/> Control.
            </h2>
          </div>
          <p className="text-gray-500 text-sm font-mono text-right hidden md:block uppercase tracking-widest">
            Tabakery Hub / ERP Solution
          </p>
        </div>
      </div>

      {/* HORIZONTAL ACCORDION (NO SCROLL) */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden h-[80vh] bg-black">
        <div className="flex w-full h-full items-center">
          {screens.map((screen, index) => (
            <div 
              key={screen.id}
              onMouseEnter={() => setActiveCard(index)}
              style={{ 
                flex: activeCard === index ? '0 0 42.18vh' : '1 1 0%',
                height: '75vh',
                transition: 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)'
              }}
              className={`relative overflow-hidden cursor-pointer border-r border-[#333] last:border-0 ${
                activeCard === index ? 'z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]' : 'z-0 grayscale opacity-30 hover:opacity-70'
              }`}
            >
              <img 
                src={screen.img} 
                alt={screen.title} 
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  activeCard === index ? 'scale-100' : 'scale-125'
                }`}
              />
              
              {/* Vertical Label (Inactive) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeCard === index ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-xl font-black text-white/10 -rotate-90 whitespace-nowrap uppercase tracking-[0.4em]">M-0{index + 1}</span>
              </div>

              {/* Info Label (Active) */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-700 ${activeCard === index ? 'opacity-100' : 'opacity-0'} flex flex-col justify-end p-8`}>
                <span className="text-[#FACC15] font-mono text-[10px] mb-2 uppercase tracking-[0.3em]">Module 0{index + 1}</span>
                <h4 className="text-2xl font-[900] uppercase tracking-tighter leading-none text-white">{screen.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FIGMA LIVE PROTOTYPE */}
      <div className="max-w-7xl mx-auto px-6 mt-20 border-t border-[#333] pt-20">
          <div className="w-full h-[600px] md:h-[850px] bg-[#1A1A1A] rounded-[3rem] border-[6px] border-[#222] overflow-hidden relative shadow-2xl">
              // KODE YANG BENAR
<iframe 
  title="Tabakery Hub Prototype"
  className="w-full h-full"
  src={figmaLink} 
  allowFullScreen
  loading="lazy"
/>
              <div className="absolute bottom-8 right-8 bg-[#FACC15] text-black px-6 py-3 rounded-full text-[10px] font-black uppercase flex items-center gap-2 animate-pulse shadow-xl pointer-events-none">
                  <MousePointer2 size={14} />
                  Simulate Interface
              </div>
          </div>
      </div>

    </section>
  );
};

export default ErpShowcase;