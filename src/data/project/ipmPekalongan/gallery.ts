import { Smartphone, Square, Clapperboard } from 'lucide-react';
// src/constants/ipm/gallery.ts
export const IPM_GALLERY = {
  tallLeft: [
    { title: "Thanksgiving", category: "Stories", dim: "1080x1920", icon: Smartphone, img: "/images/project/ipm/story1.png" },
    { title: "Live Event", category: "Stories", dim: "1080x1920", icon: Smartphone, img: "/images/project/ipm/story2.png" },
  ],
  feeds: [
    { title: "Fortasi 2025", category: "Feed", dim: "1080x1350", icon: Square, img: "/images/project/ipm/IPM1.jpg" },
    { title: "Safari Qurban", category: "Feed", dim: "1080x1350", icon: Square, img: "/images/project/ipm/IPM2.jpg" },
    { title: "Idul Adha", category: "Feed", dim: "1080x1350", icon: Square, img: "/images/project/ipm/IPM3.jpg" },
    { title: "Renstra Upgrading", category: "Feed", dim: "1080x1350", icon: Square, img: "/images/project/ipm/IPM4.jpg" },
    // TAMBAHAN 2 FEED 1:1 UNTUK MENUTUP CELAH
    { title: "Dokumentasi Kajian", category: "Feed", dim: "1080x1080", icon: Square, img: "/images/project/ipm/IPM5.png" },
    { title: "Kajian Ramadan", category: "Feed", dim: "1080x1080", icon: Square, img: "/images/project/ipm/IPM6.png" },
  ],
  tallRight: [
    { title: "Reels Showcase", category: "Video", dim: "1080x1920", icon: Clapperboard, img: "/images/project/ipm/reel1.png" },
    { title: "Event Cinematic", category: "Video", dim: "1080x1920", icon: Clapperboard, img: "/images/project/ipm/reel2.png" },
  ]
};