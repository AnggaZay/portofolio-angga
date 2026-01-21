"use client";
import { motion } from "framer-motion";

export default function TabakeryProject() {
  return (
    <section className="py-24 bg-white px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Project */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-600 font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            Project Detail / 2024 — 2026
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic mt-6">
            Tabakery <br /> <span className="text-orange-600 not-italic">Identity.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-4">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">The Scope</h4>
            <ul className="space-y-2 font-bold uppercase text-sm">
              <li>Brand Strategy</li>
              <li>Visual Identity</li>
              <li>Packaging Design</li>
              <li>Menu Engineering</li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl font-medium leading-tight text-gray-600 italic">
              "Transforming a local street food vendor into a premium gift experience through calculated visual intervention."
            </p>
          </div>
        </div>

        {/* Visual Showcase (Placeholder) */}
        <div className="space-y-12">
          <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100">
            <span className="text-orange-200 font-black text-4xl uppercase tracking-tighter">Primary Logo Showcase</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center">
              <span className="text-gray-200 font-black text-2xl uppercase tracking-tighter">Packaging Mockup</span>
            </div>
            <div className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center">
              <span className="text-gray-200 font-black text-2xl uppercase tracking-tighter">Social Media Grid</span>
            </div>
          </div>
        </div>

        {/* Closing Info */}
        <div className="mt-32 pt-12 border-t border-gray-100 flex justify-between items-end">
          <div className="max-w-md">
            <p className="text-sm text-gray-500 leading-relaxed">
              Project ini adalah pembuktian bahwa desain yang tepat bisa menjustifikasi margin profit 39-43% di pasar yang sangat kompetitif.
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest">Next Project: Arta Utama ↗</p>
        </div>
      </div>
    </section>
  );
}