"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { tabakeryOverview, tabakeryFeatures } from "@/data/project/tabakery/features";
import { ChevronRight, Package, ShoppingCart, TrendingUp, Users } from 'lucide-react';

const IconMap: any = { Package, ShoppingCart, TrendingUp, Users };

const TabakeryFeatures = () => {
  return (
    <section className="w-full py-24 md:py-40 bg-white text-[#121212] relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg,#333_0,#333_1px,transparent_1px,transparent_10px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: SOLUTION & SCOPE */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-24 md:mb-32">
          <div>
            <span className="text-[#FACC15] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Problem Solver</span>
            <h2 className="text-6xl md:text-8xl font-[1000] text-[#121212] uppercase tracking-tighter leading-none mb-8">
              The <br/> Solution.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabakeryOverview.map((item, i) => (
                <motion.div 
                   key={i} 
                   initial={{ y: 20, opacity: 0 }} 
                   whileInView={{ y: 0, opacity: 1 }} 
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-2xl border border-black/5 hover:border-[#FACC15]/20 hover:bg-white transition-all duration-300"
                >
                  <ChevronRight size={16} className="text-[#FACC15]" />
                  <span className="font-bold text-sm uppercase text-gray-700 tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative p-10 bg-[#F5F5F5] rounded-[3rem] border border-black/5 flex flex-col justify-between min-h-[300px]">
            <div className="flex gap-1 mb-6">
               {[...Array(5)].map((_,i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />)}
            </div>
            <p className="text-2xl font-semibold leading-relaxed text-[#121212] italic">
              "Kami membedahi ekosistem operasional UMKM lewat desain produk yang tidak hanya estetik, tapi juga solutif terhadap manajemen data secara real-time."
            </p>
            <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-3 text-gray-400 font-black uppercase text-[10px] tracking-widest">
               Design Paradigm / User-Centered Solution
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: CORE FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tabakeryFeatures.map((feat, i) => {
            const Icon = IconMap[feat.iconName];
            return (
              <div key={i} className="group p-8 bg-[#F5F5F5] hover:bg-white border border-black/5 hover:border-[#FACC15]/20 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 bg-[#121212] text-white rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                    {Icon && <Icon size={28} />}
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-3 text-[#121212] tracking-tight">{feat.title}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-6 leading-relaxed group-hover:text-black/70">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-auto flex">
                  <span className="px-4 py-1.5 bg-white border border-black/10 rounded-full text-[10px] font-black uppercase tracking-widest text-black/50">
                    {feat.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TabakeryFeatures;