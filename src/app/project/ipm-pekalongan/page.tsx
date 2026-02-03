"use client";

import React from 'react';
import AgencyHero from '@/components/project/ipm/AgencyHero';
import AgencyWorkflow from '@/components/project/ipm/AgencyWorkflow';
import SystemShowcase from '@/components/project/ipm/SystemShowcase';
import IpmGallery from '@/components/project/ipm/IpmGallery';
import TheMasterpiece from '@/components/project/ipm/TheMasterpiece';

const IpmProjectPage = () => {
  return (
    // TAMBAHKAN 'overflow-x-hidden' DI SINI 👇
    // Ini kuncinya biar elemen yang scale-110 atau absolute position nggak bikin scroll samping
    <main className="min-h-screen bg-[#D6E3A1] selection:bg-[#2D5A61] selection:text-[#D6E3A1] font-['Helvetica',_sans-serif] overflow-x-hidden">
      
      <AgencyHero />

      <AgencyWorkflow />

      <SystemShowcase />

      <IpmGallery />

      <TheMasterpiece />

      
    </main>
  );
};

export default IpmProjectPage;