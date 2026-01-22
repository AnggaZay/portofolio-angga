"use client"; // Tambahkan ini di baris pertama untuk fix error useState

import React from 'react';
import GeneralArtaUtama from "@/components/project/arta-utama/general";
import PhaseArtaUtama from "@/components/project/arta-utama/phase";
import SignatureProjectsArta from "@/components/project/arta-utama/signature-projects";
import ProductionVaultArta from "@/components/project/arta-utama/production-vault";
// Import bagian lainnya nanti di sini (phase, signature, dll)

export default function ArtaUtamaPage() {
  return (
    <main className="w-full bg-white">
      {/* 1. Latar Belakang & Tim (25 Sept 2024 Context) */}
      <GeneralArtaUtama />
      
      {/* 2. Evolusi Strategi (Mode 2024 vs 2026) */}
      <PhaseArtaUtama />
      
      {/* 3. Proyek Unggulan (Banner UMKM & Warung Literasi) */}
      <SignatureProjectsArta />
      
      {/* 4. Kapasitas Produksi (High-Intensity Output) */}
      <ProductionVaultArta />
      
      {/* Kamu bisa menambahkan Footer di sini jika perlu */}
    </main>
  );
}