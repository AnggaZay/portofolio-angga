import { Rocket, Briefcase, Users, Utensils } from "lucide-react";
import React from "react";

export const heroData = {
  greeting: "Hello There!",
  name: "Angga,",
  role: "Creative Designer",
  description: "Spesialis Kreatif Visual dalam Desain Merek & Pemasaran. Menggabungkan intuisi artistik dengan logika sistem untuk membangun sistem visual yang fungsional dan berkelanjutan.",
  badges: ["Advertising Designer", "Brand & Marketing Designer"]
};

export const projectsData = [
  { 
    title: "BPR Arta Utama", 
    slug: "arta-utama", 
    category: "Corporate Identity", 
    year: "2024 — 2026",
    icon: "Briefcase",
    size: "md:col-span-2 md:row-span-2",
    image: "/projects/arta-cover.png",
    desc: "Mentransformasi perbankan tradisional menjadi ekosistem digital yang modern dan efisien."
  },
  { 
    title: "Tabakery", 
    slug: "tabakery",
    category: "ERP System & Strategy", 
    year: "2024 — 2026",
    icon: "Rocket",
    size: "md:col-span-1 md:row-span-1",
    image: "/projects/tabakery-cover.png", 
    desc: "Sistem manajemen operasional dapur dan kasir yang terintegrasi penuh untuk bisnis F&B."
  },
  { 
    title: "IPM Pekalongan", 
    slug: "ipm-pekalongan",
    category: "Organizational Framework", 
    year: "2024 — 2025",
    icon: "Users",
    size: "md:col-span-1 md:row-span-2",
    image: "/projects/ipm-cover.png", 
    desc: "Menerapkan standar workflow industri kreatif ke dalam birokrasi organisasi pelajar."
  },
  { 
    title: "Haha Rice Bowl", 
    slug: "haharicebowl",
    category: "Full Brand Identity", 
    year: "2023",
    icon: "Utensils", 
    size: "md:col-span-2 md:row-span-1",
    image: "/projects/haharicebowl-cover.png", 
    desc: "Membangun identitas visual merk makanan praktis dari nol, mencakup logo hingga desain fisik outlet."
  },
];

export const experienceData = {
  professional: [
    { company: "BPR Arta Utama", role: "Creative Designer", period: "Sep 2024 — Jan 2026", highlight: true },
    { company: "Freelance Designer", role: "Graphic Designer", period: "Aug 2023 — Sep 2024", highlight: false },
    { company: "CV. Multinet Komputer", role: "Repair Technician", period: "Jan 2022 — Aug 2023", highlight: false },
  ],
  social: [
    { company: "PD IPM Pekalongan", role: "Secretary Tech-Com", period: "2024 — 2025", highlight: true },
    { company: "PC IPM Wonokerto", role: "Chairman", period: "2021 — 2023", highlight: false },
  ]
};