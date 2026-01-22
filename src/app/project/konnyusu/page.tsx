"use client";

import React from 'react';
// Import semua komponen yang sudah kita buat tadi
import GeneralKonnyusu from '@/components/project/konnyusu/GeneralKonnyusu';
import LearningProcess from '@/components/project/konnyusu/LearningProcess';
import VisualShowcase from '@/components/project/konnyusu/VisualShowcase';
import ProjectReflective from '@/components/project/konnyusu/ProjectReflective';

const KonnyusuProjectPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header & Intro: Cerita Tim di Ngaliyan */}
      <GeneralKonnyusu />

      {/* 2. Strategy & Growth: Dari Desain ke Legal & Marketing */}
      <LearningProcess />

      {/* 3. The Work: Hasil visual karya Syamil & Arif */}
      <VisualShowcase />

      {/* 4. The Lesson: Pesan "Progress Over Perfection" */}
      <ProjectReflective />
      
      {/* Footer sederhana khusus project page jika diperlukan */}
      <footer className="py-10 text-center bg-slate-50">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
          Konnyusu — The Genesis Project
        </p>
      </footer>
    </main>
  );
};

export default KonnyusuProjectPage;