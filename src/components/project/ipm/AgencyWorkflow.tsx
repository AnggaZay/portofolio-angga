"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  LayoutList, 
  MessageSquareText, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

const AgencyWorkflow = () => {
  const processes = [
    { 
      id: "01",
      title: "Perencanaan Kerja", 
      desc: "Sentralisasi tugas via Monday.com. Eliminasi instruksi liar di chat.", 
      icon: <LayoutList size={32} /> 
    },
    { 
      id: "02",
      title: "Komunikasi Efektif", 
      desc: "Feedback loop real-time tanpa meeting berjam-jam yang tidak perlu.", 
      icon: <MessageSquareText size={32} /> 
    },
    { 
      id: "03",
      title: "Evaluasi Kinerja", 
      desc: "Audit performa berbasis data persentase sukses proyek.", 
      icon: <BarChart3 size={32} /> 
    },
    { 
      id: "04",
      title: "Standar Kualitas", 
      desc: "Quality Control ketat setara standar industri kreatif.", 
      icon: <CheckCircle2 size={32} /> 
    },
  ];

  return (
    <section className="w-full pt-40 pb-20 bg-[#D6E3A1] text-[#2D5A61] font-['Helvetica',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION: VERTIKAL & CLEAN */}
        <div className="mb-24">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#2D5A61]/40 mb-6">
            System Architecture
          </h2>
          
          <h3 className="text-6xl md:text-8xl font-[900] tracking-tighter leading-[0.9] uppercase mb-10">
            Operational <br /> Framework.
          </h3>

          {/* Penjelasan langsung di bawah judul, tanpa kolom kanan/kiri */}
          <div className="max-w-3xl border-l-4 border-[#2D5A61] pl-8">
            <p className="text-xl md:text-2xl font-bold leading-tight mb-4">
              "Mentransformasi kultur organisasi pelajar menuju <span className="underline decoration-2 underline-offset-4">standar industri kreatif</span>."
            </p>
            <p className="text-sm font-medium opacity-80 leading-relaxed max-w-2xl">
              Kami menggunakan <strong>Monday.com</strong> sebagai <em>Central Command</em> untuk mengunci 4 pilar vital: Perencanaan, Komunikasi, Evaluasi, dan Kualitas.
            </p>
          </div>
        </div>

        {/* WORKFLOW GRID: TANPA GARIS KOTAK */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((proc, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="group relative flex flex-col justify-between h-[280px]"
            >
              {/* Background Card Halus (Hanya muncul pas hover biar clean) */}
              <div className="absolute inset-0 bg-[#2D5A61] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10 shadow-xl" />

              <div className="p-8 h-full flex flex-col justify-between">
                
                {/* Top: Icon & Number */}
                <div className="flex justify-between items-start w-full">
                   <div className="text-[#2D5A61] group-hover:text-[#D6E3A1] transition-colors duration-300">
                      {proc.icon}
                   </div>
                   <span className="text-4xl font-[900] text-[#2D5A61]/10 group-hover:text-[#D6E3A1]/20 transition-colors duration-300">
                      {proc.id}
                   </span>
                </div>

                {/* Bottom: Text */}
                <div>
                   <h4 className="text-xl font-[900] uppercase tracking-tighter mb-3 group-hover:text-[#D6E3A1] transition-colors duration-300">
                      {proc.title}
                   </h4>
                   <p className="text-xs font-bold leading-relaxed text-[#2D5A61]/60 group-hover:text-[#D6E3A1]/80 transition-colors duration-300">
                      {proc.desc}
                   </p>
                </div>

                {/* Arrow Decor (Muncul pas hover) */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="text-[#D6E3A1]" size={20} />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AgencyWorkflow;