import React from 'react';
import { signatureArtaData } from "@/data/project/artaUtama/signature";

const SignatureProjectsArta = () => {
  return (
    <section className="w-full py-20 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Seksi */}
        <div className="mb-20 lg:mb-32">
          <h2 className="text-sm font-black tracking-[0.4em] text-[#054fa0] uppercase mb-4">Masterpiece</h2>
          <p className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter">Signature Projects</p>
        </div>

        {/* List Project */}
        <div className="space-y-32 lg:space-y-52">
          {signatureArtaData.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col gap-12 lg:gap-24 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* VISUAL: Gambar Gede */}
              <div className="w-full lg:w-3/5">
                <div className="relative group overflow-hidden rounded-[2rem] lg:rounded-[4rem] bg-slate-100 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-[4/3] lg:aspect-video object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                  
                </div>
              </div>

              {/* TEXT: Penjelasan Impact */}
              <div className="w-full lg:w-2/5 space-y-6 lg:space-y-8">
                <h3 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed">
                  {project.impact}
                </p>
                <div className="pt-4">
                  <div className="w-20 h-1 bg-[#054fa0] mb-4" />
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Core Impact Strategy</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureProjectsArta;