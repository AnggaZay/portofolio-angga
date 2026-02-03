"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2, Eye } from 'lucide-react';

const TheMasterpiece = () => {
  return (
    <section className="w-full py-20 bg-[#D6E3A1] text-[#2D5A61] font-['Helvetica',_sans-serif] overflow-hidden">
      
      {/* 1. INDUSTRIAL TICKER (Teks Berjalan) */}
      <div className="w-full bg-[#2D5A61] py-4 rotate-[-2deg] scale-110 mb-20 shadow-xl border-y-2 border-[#D6E3A1]">
        <motion.div 
          className="whitespace-nowrap flex gap-10"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-[#D6E3A1] font-black uppercase tracking-widest text-lg">
              <span>System Online</span>
              <span className="w-2 h-2 rounded-full bg-[#D6E3A1]" />
              <span>Legacy Established</span>
              <span className="w-2 h-2 rounded-full bg-[#D6E3A1]" />
              <span>No More "Desain Dadakan"</span>
              <span className="w-2 h-2 rounded-full bg-[#D6E3A1]" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: THE EVIDENCE (FOTO INSIGHT) */}
          <div>
            <div className="mb-10">
               <span className="px-4 py-2 border border-[#2D5A61] rounded-full text-[10px] font-black uppercase tracking-widest">
                  Final Report 2024
               </span>
               <h2 className="text-6xl md:text-8xl font-[900] uppercase tracking-tighter leading-[0.9] mt-6">
                  The <br /> Legacy.
               </h2>
            </div>

            {/* GRID FOTO BUKTI */}
            <div className="grid grid-cols-2 gap-4">
               {/* Image Card 1 */}
               <div className="group relative overflow-hidden rounded-[2rem] border-2 border-[#2D5A61] aspect-square bg-[#2D5A61]/10">
                  {/* Overlay Hover */}
                  <div className="absolute inset-0 bg-[#2D5A61]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                     <div className="bg-[#D6E3A1] p-3 rounded-full text-[#2D5A61]">
                        <Eye size={24} />
                     </div>
                  </div>
                  
                  {/* GANTI SRC INI DENGAN FOTO INSIGHT LO */}
                  <img 
                    src="/images/project/ipm/insight1.jpg" 
                    alt="Engagement Data Proof" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
               </div>

               {/* Image Card 2 */}
               <div className="group relative overflow-hidden rounded-[2rem] border-2 border-[#2D5A61] aspect-square bg-[#2D5A61]/10">
                  <div className="absolute inset-0 bg-[#2D5A61]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                     <div className="bg-[#D6E3A1] p-3 rounded-full text-[#2D5A61]">
                        <Eye size={24} />
                     </div>
                  </div>

                  {/* GANTI SRC INI DENGAN FOTO INSIGHT LO */}
                  <img 
                    src="/images/project/ipm/insight2.jpg" 
                    alt="Audience Reach Proof" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
               </div>
            </div>
          </div>

          {/* RIGHT: THE TESTIMONIAL / PHILOSOPHY */}
          <div className="relative">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[#2D5A61]/5 rounded-[3rem] rotate-6 transform scale-90" />
            
            <div className="relative bg-[#D6E3A1] border-4 border-[#2D5A61] p-10 md:p-14 rounded-[3rem] shadow-[15px_15px_0px_0px_#2D5A61]">
               <Quote size={48} className="text-[#2D5A61] mb-8 opacity-20" />
               
               <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-10">
                  "Sistem ini tidak hanya merapikan *feed* Instagram, tapi merubah cara pandang organisasi terhadap pentingnya **visual branding** dan **disiplin kerja**."
               </p>

               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5A61] flex items-center justify-center text-[#D6E3A1]">
                     <CheckCircle2 size={20} />
                  </div>
                  <div>
                     <h5 className="text-lg font-[900] uppercase tracking-tighter">Voice of Alumni</h5>
                     <p className="text-xs font-bold opacity-60 uppercase tracking-widest">PD IPM Pekalongan</p>
                  </div>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TheMasterpiece;