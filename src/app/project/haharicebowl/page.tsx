"use client";

import React from 'react';
import HeroHaha from "@/components/project/haharicebowl/HeroHaha";
import DevelopmentHaha from "@/components/project/haharicebowl/DevelopmentHaha";
import ReflectiveHaha from "@/components/project/haharicebowl/ReflectiveHaha";
import VisualShowcaseHaha from "@/components/project/haharicebowl/VisualShowcaseHaha";

export default function HahaRicebowlPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. Header & Narasi Utama dengan Logo Circle */}
      <HeroHaha />

      {/* 2. Detail Paket Pengerjaan (Full Service Brand Development) */}
      <DevelopmentHaha />

      {/* 3. Insight Strategis, Stats, & Tools Ecosystem */}
      <ReflectiveHaha />

      {/* 4. Visual Showcase (Bento Grid Mockups & Branding) */}
      {/* Kita panggil komponennya langsung, section dark-nya sudah ada di dalam komponen tersebut */}
      <VisualShowcaseHaha />
    </main>
  );
}