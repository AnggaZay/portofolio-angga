"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Activity } from 'lucide-react';

const SystemShowcase = () => {
  return (
    <section className="w-full py-20 bg-[#D6E3A1] font-['Helvetica',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Container Utama Screenshot */}
        <div className="relative group">
          {/* Label Teknis di Pojok */}
          <div className="absolute -top-6 left-10 z-20 bg-[#2D5A61] text-[#D6E3A1] px-4 py-2 rounded-t-xl flex items-center gap-3 shadow-xl">
             <Database size={14} />
             <span className="text-[10px] font-black uppercase tracking-[0.2em]">Operational Dashboard / Monday.com v.2.4</span>
          </div>

          {/* Frame Screenshot lo */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.5rem] border-8 border-[#2D5A61] bg-[#2D5A61] shadow-2xl"
          >
            {/* Overlay Gradient biar screenshot-nya nyatu */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent z-10 pointer-events-none" />
            
            <img 
  src="/images/Monday.png" 
  alt="Monday.com Workflow IPM"
  className="w-full object-cover transition-all duration-700"
/>

            {/* Floating Info di Atas Screenshot */}
            <div className="absolute bottom-10 left-10 z-20 right-10 flex justify-between items-end">
                <div className="max-w-md">
                    <h4 className="text-3xl font-[900] text-white tracking-tighter uppercase mb-2">Automated Ecosystem.</h4>
                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest leading-relaxed">
                        Seluruh pergerakan Departemen IT PD IPM Pekalongan dipantau secara real-time melalui arsitektur sistem yang terintegrasi.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex flex-col items-center">
                        <Activity size={20} className="text-white mb-2" />
                        <span className="text-[9px] font-black text-white uppercase">Uptime 99%</span>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Aksesoris Grid Tambahan di Luar Frame */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#2D5A61] opacity-10 blur-[100px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default SystemShowcase;