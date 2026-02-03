import React from 'react';
// Import komponen-komponen baru Haha Rice Bowl
import GeneralHahaRiceBowl from '@/components/project/haharicebowl/GeneralHahaRiceBowl';
import RiceBowlVisualShowcase from '@/components/project/haharicebowl/RiceBowlVisualShowcase';
import BrandingProcess from '@/components/project/haharicebowl/BrandingProcess';
import RiceBowlReflective from '@/components/project/haharicebowl/RiceBowlReflective';

export const metadata = {
  title: 'Haha Rice Bowl | Full Brand Identity Setup',
  description: 'Proyek pengembangan identitas merk makanan praktis (Rice Bowl) dari nol mutlak, mencakup logo, kemasan, hingga desain outlet fisik.',
};

export default function HahaRiceBowlPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero & Identitas Utama (Merah Dominan) */}
      <GeneralHahaRiceBowl />

      {/* 2. Galeri Aset Visual (Container & Menu) */}
      <RiceBowlVisualShowcase />

      {/* 3. Detail Scope Pekerjaan & Proses Branding */}
      <BrandingProcess />

      {/* 4. Kesimpulan & Navigasi Project Selanjutnya */}
      <RiceBowlReflective />
    </main>
  );
}