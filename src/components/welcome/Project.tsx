"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpRight, Briefcase, Rocket, Users, Utensils } from "lucide-react";
import { projectsData } from "@/data/welcome/home";

const IconMap: any = { Briefcase, Rocket, Users, Utensils };

export default function Project() {
  return (
    <section id="work" className="py-24 lg:py-40 px-6 lg:px-32 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20">
          <p className="text-emerald-900 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Selected Works</p>
          <h2 className="text-6xl lg:text-8xl font-[1000] text-emerald-950 tracking-tighter uppercase leading-[0.85]">
            Featured <br /> <span className="text-yellow-500">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {projectsData.map((item, index) => {
            const Icon = IconMap[item.icon];
            return (
              <Link href={`/project/${item.slug}`} key={index} 
                className={`group relative overflow-hidden rounded-[3rem] p-10 flex flex-col justify-between transition-all duration-700 ${item.size} ${index % 2 === 0 ? "bg-emerald-950 text-white" : "bg-yellow-400 text-emerald-950"}`}>
                <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                  <NextImage src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex justify-between items-start z-10">
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl">{Icon && <Icon size={24} />}</div>
                  <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="z-10">
                  <p className="text-[10px] font-black uppercase mb-2 opacity-60 tracking-widest">{item.category}</p>
                  <h3 className="text-3xl lg:text-5xl font-[1000] tracking-tighter uppercase leading-none">{item.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}