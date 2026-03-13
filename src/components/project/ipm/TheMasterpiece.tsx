"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2 } from 'lucide-react';
import { IPM_INSIGHTS, IPM_LEGACY } from '@/data/project/ipmPekalongan/masterpiece';

const TheMasterpiece = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-[#D6E3A1] overflow-hidden">
      <div className="w-[120%] -ml-[10%] bg-[#2D5A61] py-3 lg:py-5 rotate-[-2deg] mb-16 lg:mb-24 shadow-xl">
        <motion.div className="flex gap-10 whitespace-nowrap" animate={{ x: [0, -500] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 text-[#D6E3A1] font-black uppercase tracking-widest text-xs lg:text-lg">
              <span>System Online</span> <div className="w-1.5 h-1.5 rounded-full bg-[#D6E3A1]" />
              <span>No More Design Chaos</span> <div className="w-1.5 h-1.5 rounded-full bg-[#D6E3A1]" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-[12vw] lg:text-[7rem] font-[900] uppercase leading-[0.9] mb-10">The<br />Legacy.</h2>
            <div className="grid grid-cols-2 gap-4">
              {IPM_INSIGHTS.map((item) => (
                <div key={item.id} className="aspect-square rounded-[1.5rem] lg:rounded-[2rem] border-2 border-[#2D5A61] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#D6E3A1] border-4 border-[#2D5A61] p-8 lg:p-14 rounded-[2rem] lg:rounded-[3rem] shadow-[10px_10px_0px_0px_#2D5A61]">
            <Quote size={40} className="text-[#2D5A61] opacity-20 mb-6 lg:mb-8" />
            <p className="text-xl lg:text-3xl font-black leading-tight mb-8 lg:mb-10 uppercase italic">"{IPM_LEGACY.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2D5A61] flex items-center justify-center text-[#D6E3A1]"><CheckCircle2 size={20} /></div>
              <div>
                <h5 className="text-sm lg:text-lg font-black uppercase leading-none">{IPM_LEGACY.source}</h5>
                <p className="text-[9px] lg:text-[10px] font-bold opacity-50 uppercase tracking-widest">{IPM_LEGACY.org}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheMasterpiece;