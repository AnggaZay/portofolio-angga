"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IPM_WORKFLOW } from '@/data/project/ipmPekalongan/workflow';

const AgencyWorkflow = () => {
  return (
    <section className="w-full pt-10 lg:pt-40 pb-20 bg-[#D6E3A1] text-[#2D5A61]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 lg:mb-24">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D5A61]/40 mb-4 lg:mb-6">Operational Framework</h2>
          <h3 className="text-[12vw] lg:text-[7rem] font-[900] tracking-tighter leading-[0.9] uppercase mb-8 lg:mb-10">Agency<br />Standard.</h3>
          <div className="max-w-2xl border-l-4 border-[#2D5A61] pl-6 lg:pl-8">
            <p className="text-lg lg:text-2xl font-bold leading-tight uppercase italic">"Organisasi Pelajar, Kualitas Agensi."</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {IPM_WORKFLOW.map((proc, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group relative bg-[#D6E3A1] border-2 border-[#2D5A61]/10 rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 h-[240px] lg:h-[280px] flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[#2D5A61] translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />
              <div className="flex justify-between items-start">
                <proc.icon size={28} className="group-hover:text-[#D6E3A1] transition-colors" />
                <span className="text-3xl lg:text-4xl font-black opacity-10 group-hover:opacity-20 group-hover:text-[#D6E3A1]">{proc.id}</span>
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-black uppercase group-hover:text-[#D6E3A1] mb-2">{proc.title}</h4>
                <p className="text-[10px] lg:text-xs font-bold leading-relaxed opacity-60 group-hover:text-[#D6E3A1]/80 group-hover:opacity-100">{proc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AgencyWorkflow;