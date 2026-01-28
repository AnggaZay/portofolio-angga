"use client";

import React from 'react';
// Import semua komponen yang sudah kita buat makin cakep tadi
import AgencyHero from '@/components/project/ipm/AgencyHero';
import AgencyWorkflow from '@/components/project/ipm/AgencyWorkflow';
import IpmGallery from '@/components/project/ipm/IpmGallery'; // Ini galeri yang baru kita buat
import TheMasterpiece from '@/components/project/ipm/TheMasterpiece';

const IpmProjectPage = () => {
  return (
    <main className="min-h-screen bg-[#FDFDFD] selection:bg-[#FFC4A4] selection:text-[#001F3F]">
      {/* 1. Header: The Avengers Board & Intro */}
      <AgencyHero />

      {/* 2. Strategy: Framework Operasional & Agensi Mindset */}
      <AgencyWorkflow />

      {/* 3. Visual Gallery: Pameran hasil Branding, Motion, & Feed */}
      <IpmGallery />

      {/* 4. Proof: Pengakuan Alumni & Fasilitas Ruang Khusus */}
      <TheMasterpiece />

      {/* Simple Footer for Navigation */}
      <footer className="py-32 border-t border-[#001F3F]/5 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#001F3F]/20 mb-8">
            Next Journey
          </p>
          <h4 className="text-5xl md:text-7xl font-black text-[#001F3F] uppercase tracking-tighter mb-12">
            Tabakery.
          </h4>
          <button className="group px-12 py-5 bg-[#001F3F] text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-[#FFC4A4] hover:text-[#001F3F] transition-all duration-500 shadow-2xl shadow-[#001F3F]/20">
            Explore Bakery Project
          </button>
        </div>
      </footer>
    </main>
  );
};

export default IpmProjectPage;