"use client";
import React from 'react';
import { 
  ClipboardList, 
  BarChart2, 
  Settings2, 
  LayoutDashboard, 
  ArrowRight 
} from 'lucide-react';

const AgencyWorkflow = () => {
  const steps = [
    {
      title: "The Job Plan",
      desc: "Menerapkan standarisasi agensi dalam perencanaan konten. Nggak ada lagi request dadakan.",
      icon: <ClipboardList size={24} />,
      label: "Phase 01"
    },
    {
      title: "Technical Division",
      desc: "Esekusi sesuai spesialisasi: Illustrator (Aman), Video (Dimas/Irfan), Advertising (Angga).",
      icon: <Settings2 size={24} />,
      label: "Phase 02"
    },
    {
      title: "Data Engagement",
      desc: "Menganalisis performa tiap konten. Kami bicara lewat angka, bukan sekadar estetika.",
      icon: <BarChart2 size={24} />,
      label: "Phase 03"
    },
    {
      title: "Final Evaluation",
      desc: "Laporan rutin ke pimpinan umum dengan standar profesionalisme industrial.",
      icon: <LayoutDashboard size={24} />,
      label: "Phase 04"
    }
  ];

  return (
    <section className="w-full py-32 bg-white text-[#001F3F]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-xs font-black text-[#FFC4A4] bg-[#001F3F] inline-block px-4 py-1 rounded-full uppercase tracking-[0.4em] mb-8">
              Work System
            </h3>
            <h4 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 uppercase">
              Bukan Sekadar <br /> 
              <span className="text-[#FFC4A4] drop-shadow-[2px_2px_0px_#001F3F]">Organisasi.</span>
            </h4>
            <p className="text-xl font-medium text-slate-500 leading-relaxed">
              Kami membagi peran secara presisi, memastikan setiap program kerja memiliki <span className="text-[#001F3F] underline decoration-[#FFC4A4] decoration-4">alur produksi yang terukur</span> layaknya agensi profesional.
            </p>
          </div>
          
          <div className="hidden md:block">
             <div className="w-32 h-32 border-4 border-[#FFC4A4] rounded-full flex items-center justify-center rotate-12">
                <p className="text-[10px] font-black uppercase tracking-widest text-center leading-tight">
                    Industrial <br /> Standard
                </p>
             </div>
          </div>
        </div>

        {/* Workflow Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="group p-10 bg-[#001F3F] rounded-[3rem] text-white hover:bg-[#FFC4A4] hover:text-[#001F3F] transition-all duration-700 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity">
                 {step.icon}
              </div>
              
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-10 block">
                {step.label}
              </span>
              
              <div className="mb-8 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#001F3F] group-hover:text-white transition-colors">
                {step.icon}
              </div>

              <h5 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">
                {step.title}
              </h5>
              
              <p className="text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100">
                {step.desc}
              </p>

              <div className="mt-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* The Agency Commitment Quote */}
        <div className="mt-20 p-16 bg-slate-50 border-2 border-[#001F3F]/5 rounded-[4rem] text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFC4A4] mb-6">The Commitment</p>
            <h2 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#001F3F]">
                "Kita nggak cuma bikin konten, kita bikin agensi di sini."
            </h2>
        </div>

      </div>
    </section>
  );
};

export default AgencyWorkflow;