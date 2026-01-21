"use client";
import { motion } from "framer-motion";

export default function JourneyArta() {
  return (
    <section className="py-24 bg-white px-6 md:px-32">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">
          The Arta <span className="text-blue-600 not-italic">Pivot.</span>
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>Perjalanan ini dimulai dengan membedah 30 tahun sejarah kepercayaan di Arta Utama. Instrumen "Dynamic Authenticity" lahir saat gue menyadari bahwa keamanan finansial tidak harus terlihat kaku.</p>
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="h-40 bg-slate-50 rounded-lg border border-slate-100 p-6">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Phase 01</span>
              <p className="text-sm mt-2 text-black font-semibold">Auditing Trust & Legacy</p>
            </div>
            <div className="h-40 bg-blue-600 rounded-lg p-6 text-white">
              <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Phase 02</span>
              <p className="text-sm mt-2 font-semibold">Implementing Modern Dynamics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}