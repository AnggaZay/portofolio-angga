"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Activity } from 'lucide-react';

const SystemShowcase = () => {
  return (
    <section className="w-full py-16 lg:py-32 bg-[#D6E3A1] font-['Helvetica',_sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Container Utama Screenshot */}
        <div className="relative group">
          
          {/* Label Teknis di Pojok - Centered on Mobile */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 z-20 bg-[#2D5A61] text-[#D6E3A1] px-4 py-2 rounded-t-xl flex items-center gap-3 shadow-xl whitespace-nowrap">
             <Database size={14} />
             <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em]">Operational Dashboard / Monday.com v.2.4</span>
          </div>

          {/* Frame Screenshot - Thinner Border on Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] border-4 lg:border-8 border-[#2D5A61] bg-[#2D5A61] shadow-2xl"
          >
            {/* Overlay Gradient biar screenshot-nya nyatu */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 lg:from-[#0F172A]/40 to-transparent z-10 pointer-events-none" />
            
            <img 
              src="/images/Monday.png" 
              alt="Monday.com Workflow IPM"
              className="w-full h-auto min-h-[300px] object-cover lg:object-contain transition-all duration-700"
            />

            {/* Floating Info di Atas Screenshot - Stacked on Mobile */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 z-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                <div className="max-w-md">
                    <h4 className="text-xl lg:text-3xl font-[900] text-white tracking-tighter uppercase mb-2 leading-none">Automated Ecosystem.</h4>
                    <p className="text-[9px] lg:text-[10px] font-bold text-white/70 uppercase tracking-widest leading-relaxed">
                        Seluruh pergerakan Departemen IT PD IPM Pekalongan dipantau secara real-time melalui arsitektur sistem yang terintegrasi.
                    </p>
                </div>
                
                {/* Status Badge */}
                <div className="flex gap-4 self-end lg:self-auto">
                    <div className="bg-white/10 backdrop-blur-md p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-white/20 flex flex-col items-center min-w-[80px]">
                        <Activity size={16} className="text-white mb-2 lg:mb-2" />
                        <span className="text-[8px] lg:text-[9px] font-black text-white uppercase tracking-tighter">Uptime 99.9%</span>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Aksesoris Grid Tambahan di Luar Frame - Smaller on Mobile */}
          <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-32 h-32 lg:w-64 lg:h-64 bg-[#2D5A61] opacity-10 blur-[60px] lg:blur-[100px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default SystemShowcase;