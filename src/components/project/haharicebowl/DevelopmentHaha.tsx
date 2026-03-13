import React from 'react';
import { CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { developmentHahaData } from "@/data/project/hahaRicebowl/development";

const DevelopmentHaha = () => {
  return (
    <section className="w-full py-20 lg:py-40 bg-slate-50 relative overflow-hidden">
      {/* Ornamen Pola Dot (Titik-titik) ala Packaging */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#EF4444 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <UtensilsCrossed size={16} className="text-[#EF4444]" />
               <h2 className="text-xs font-black text-[#EF4444] uppercase tracking-[0.4em]">Service Scope</h2>
            </div>
            <p className="text-5xl lg:text-7xl font-[1000] text-slate-900 tracking-tighter">Brand Development</p>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 rounded-full border-[10px] border-[#FACC15] opacity-20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentHahaData.map((phase, idx) => (
            <div key={idx} className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border-b-[6px] border-transparent hover:border-[#EF4444]">
              <div className="flex items-start justify-between mb-10">
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-none">{phase.category}</h3>
                <span className="text-[#FACC15] font-black text-5xl opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
              </div>
              
              <ul className="space-y-6">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <div className="mt-1.5 shrink-0 bg-red-50 p-1 rounded-full group-hover/item:bg-[#EF4444] transition-colors">
                      <CheckCircle2 size={14} className="text-[#EF4444] group-hover/item:text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-[15px] uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentHaha;