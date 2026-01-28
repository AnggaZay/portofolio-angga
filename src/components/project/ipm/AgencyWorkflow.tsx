"use client";
import React from 'react';
import { 
  BarChart3, 
  Workflow, 
  Search, 
  Cpu,
  ArrowRight
} from 'lucide-react';

const AgencyWorkflow = () => {
  const processes = [
    { title: "Job Planning", desc: "Sistem antrian konten terukur, meniadakan 'desain dadakan'.", icon: <Workflow size={24} /> },
    { title: "Technical Dev", desc: "Eskalasi kualitas visual setara standar agensi periklanan.", icon: <Cpu size={24} /> },
    { title: "Engagement Data", desc: "Menganalisis matriks interaksi untuk validasi strategi.", icon: <BarChart3 size={24} /> },
    { title: "Field Research", desc: "Observasi langsung untuk memetakan minat audiens daerah.", icon: <Search size={24} /> },
  ];

  return (
    <section className="w-full py-40 bg-white text-[#001F3F]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b-2 border-[#001F3F]/5 pb-16">
          <div className="max-w-xl">
            <h2 className="text-xs font-[900] uppercase tracking-[0.5em] text-[#FFC4A4] mb-8">System & Strategy</h2>
            <h3 className="text-5xl md:text-7xl font-[900] tracking-tighter leading-none uppercase">
              Operational <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #001F3F' }}>Framework.</span>
            </h3>
          </div>
          <p className="max-w-xs text-sm font-bold text-slate-400 leading-relaxed text-right uppercase italic">
            "Kami datang sebagai pimpinan, <br /> tapi kami bekerja sebagai praktisi."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#001F3F]/5 border border-[#001F3F]/5">
          {processes.map((proc, i) => (
            <div key={i} className="group p-12 bg-white hover:bg-[#001F3F] transition-all duration-500 relative">
              <div className="text-[#FFC4A4] mb-12 group-hover:scale-110 group-hover:text-white transition-all">
                {proc.icon}
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter mb-4 group-hover:text-white">
                {proc.title}
              </h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed group-hover:text-white/60">
                {proc.desc}
              </p>
              <div className="mt-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} className="text-[#FFC4A4]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AgencyWorkflow;