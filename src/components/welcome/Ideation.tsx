"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const instruments = [
  { id: "01", project: "Arta Strategic", title: "DYNAMIC AUTHENTICITY", image: "/ideation/dynamic-auth.png", color: "#1B3022" },
  { id: "02", project: "Arta Strategic", title: "SMARTLY GROUNDED", image: "/ideation/smartly-grounded.png", color: "#1B3022" },
  { id: "03", project: "Tabakery Logic", title: "FROM COLLECTION WORRIES", image: "/ideation/collection-worries.png", color: "#FACC15" },
  { id: "04", project: "Tabakery Logic", title: "TO FLY HIGHER", image: "/ideation/fly-higher.png", color: "#FACC15" },
  { id: "05", project: "IPM Legacy", title: "DREAM CHASING COMMUNITY", image: "/ideation/dream-chasing.png", color: "#1B3022" },
  { id: "06", project: "Konnyusu Evolution", title: "THE DESTINY CHANGERS", image: "/ideation/destiny-changers.png", color: "#1B3022" }
];

export default function Ideation() {
  const [active, setActive] = useState(0);

  return (
    <section id="ideation" className="py-24 px-6 md:px-32 bg-[#FDFDFD]">
      {/* Container Utama: Kita kasih max-w-5xl biar nggak melebar ke ujung layar */}
      <div className="max-w-5xl mx-auto"> 
        <div className="mb-12">
          <span className="text-[#FACC15] font-mono text-[10px] tracking-[0.5em] font-black uppercase">02. Logic Lab</span>
          <h2 className="text-5xl font-black tracking-tighter text-[#1B3022] mt-2">IDEATION</h2>
        </div>

        {/* Flex Container: Kiri & Kanan seimbang (50/50) */}
        <div className="flex flex-col md:flex-row gap-16 items-stretch min-h-[550px]">
          
          {/* Left Side: Navigation List (Sisi Kiri) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-1">
            {instruments.map((item, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActive(i)}
                className="group cursor-pointer py-4 border-b border-gray-100 flex items-center justify-between last:border-0"
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-[9px] font-bold transition-colors duration-300 ${active === i ? 'text-[#FACC15]' : 'text-gray-300'}`}>
                    {item.id}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-black tracking-tighter transition-all duration-300 ${active === i ? 'text-[#1B3022] translate-x-2' : 'text-gray-300 group-hover:text-gray-400'}`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Wadah Gambar (Sisi Kanan) */}
          <div className="w-full md:w-1/2 relative hidden md:block">
            <div className="h-full w-full">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full h-full bg-white rounded-[2rem] p-12 flex flex-col items-center justify-center shadow-sm border border-gray-50" 
                >
                  {/* Area Gambar: Ukuran pas, nggak lebay */}
                  <div className="relative flex-1 w-full max-h-[380px]">
                    <Image 
                      src={instruments[active].image}
                      alt={instruments[active].title}
                      fill
                      className="object-contain" 
                      priority
                    />
                  </div>
                  
                  {/* Meta Info */}
                  <div className="mt-6 text-center"> 
                    <span className="block text-[9px] font-black text-[#1B3022] tracking-[0.2em] uppercase mb-1 opacity-60">
                      {instruments[active].project}
                    </span>
                    <p className="font-mono text-[8px] font-bold text-gray-300 uppercase italic">
                      Ref_{instruments[active].id}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}