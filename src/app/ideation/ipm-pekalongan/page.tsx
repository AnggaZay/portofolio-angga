"use client";

import React from 'react';
// Import 3 komponen inti IPM
import AgencyHero from '@/components/project/ipm/AgencyHero';
import AgencyWorkflow from '@/components/project/ipm/AgencyWorkflow';
import TheMasterpiece from '@/components/project/ipm/TheMasterpiece';

const IpmProjectPage = () => {
  return (
    <main className="min-h-screen bg-[#001F3F] selection:bg-[#FFC4A4] selection:text-[#001F3F]">
      {/* 1. Header: Perkenalan Tim Avengers 04-05 */}
      <AgencyHero />

      {/* 2. Strategy: Alur Kerja Internal Agency */}
      <AgencyWorkflow />

      {/* 3. Proof: Showcase Output & High Engagement */}
      <TheMasterpiece />

      {/* Footer Navigasi Langsung ke Tabakery */}
      <footer className="py-24 border-t border-white/5 bg-[#001326] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-8">
            Next Journey
          </p>
          <h4 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10">
            Tabakery.
          </h4>
          <button className="group px-10 py-4 bg-[#FFC4A4] text-[#001F3F] font-black uppercase tracking-widest text-xs rounded-full hover:scale-110 transition-all duration-500 flex items-center gap-3 mx-auto">
            Explore Project
            <div className="w-6 h-6 bg-[#001F3F]/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
               {/* Arrow Icon */}
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </button>
        </div>
      </footer>
    </main>
  );
};

export default IpmProjectPage;