"use client";
import { motion } from "framer-motion";
import { experienceData } from "@/data/welcome/home";
import { SiAdobephotoshop, SiAdobeillustrator, SiCoreldraw, SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";

export default function Profile() {
  return (
    <section id="profile" className="py-24 lg:py-40 px-6 lg:px-32 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4 flex items-center gap-4">
             <div className="h-px w-12 bg-emerald-900" />
             <p className="text-emerald-900 font-black uppercase tracking-[0.4em] text-[10px]">The Profile</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-6xl font-light leading-[1.1] text-emerald-950 tracking-tight">
              Desainer Merek dengan pola pikir sistematis. <span className="italic font-serif">Ahli dalam sistem visual,</span> didukung pengembangan <span className="bg-yellow-400 px-2 font-bold">berbasis berkelanjutan.</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-start-5 lg:col-span-8 grid md:grid-cols-2 gap-16">
            {/* Professional Path */}
            <div>
              <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-10 border-b pb-4">Professional Path</h4>
              <div className="space-y-10">
                {experienceData.professional.map((exp, i) => (
                  <div key={i} className="group">
                    <h5 className="text-xl font-bold text-emerald-950 group-hover:text-yellow-500 transition-colors">{exp.company}</h5>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40">{exp.role}</p>
                    <p className="text-[9px] font-mono text-gray-300 mt-1">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Social Impact - Same pattern as professional */}
          </div>
        </div>
      </div>
    </section>
  );
}