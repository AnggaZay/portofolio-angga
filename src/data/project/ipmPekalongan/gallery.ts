import { Smartphone, Square, Clapperboard } from 'lucide-react';
// src/constants/ipm/gallery.ts
export const IPM_GALLERY = {
  tallLeft: [
    { title: "Engagement Campaign", category: "Stories", dim: "1080x1920", icon: Smartphone, img: "/images/project/ipm/story1.jpg" },
    { title: "Live Event Report", category: "Stories", dim: "1080x1920", icon: Smartphone, img: "/images/project/ipm/story2.jpg" },
  ],
  feeds: [
    { title: "Educational Content", category: "Feed", dim: "1080x1350", icon: Square, img: "/images/project/ipm/IPM1.jpg" },
    { title: "Organizational Update", category: "Feed", dim: "1080x1350", icon: Square, img: "/images/project/ipm/IPM2.jpg" },
    { title: "Event Identity", category: "Feed", dim: "1080x1350", icon: Square, img: "/images/project/ipm/IPM3.jpg" },
    { title: "Recruitment Graphic", category: "Feed", dim: "1080x1350", icon: Square, img: "/images/project/ipm/IPM4.jpg" },
    // TAMBAHAN 2 FEED 1:1 UNTUK MENUTUP CELAH
    { title: "Core Values", category: "Feed", dim: "1080x1080", icon: Square, img: "/images/project/ipm/IPM5.jpg" },
    { title: "Community Hub", category: "Feed", dim: "1080x1080", icon: Square, img: "/images/project/ipm/IPM6.jpg" },
  ],
  tallRight: [
    { title: "Reels Showcase", category: "Video", dim: "1080x1920", icon: Clapperboard, img: "/images/project/ipm/reel1.jpg" },
    { title: "Event Cinematic", category: "Video", dim: "1080x1920", icon: Clapperboard, img: "/images/project/ipm/reel2.jpg" },
  ]
};