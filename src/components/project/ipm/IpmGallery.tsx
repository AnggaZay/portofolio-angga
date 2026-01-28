"use client";
import React from 'react';
import { Camera, PenTool, Play, LayoutGrid } from 'lucide-react';

const IpmGallery = () => {
  const works = [
    { title: "Visual Identity", category: "Branding", icon: <PenTool size={16} />, span: "md:col-span-8", img: "/images/project/ipm/branding.jpg" },
    { title: "Motion Content", category: "Video", icon: <Play size={16} />, span: "md:col-span-4", img: "/images/project/ipm/motion.jpg" },
    { title: "Social Media", category: "Engagement", icon: <LayoutGrid size={16} />, span: "md:col-span-4", img: "/images/project/ipm/feed.jpg" },
    { title: "Event Documentation", category: "Photography", icon: <Camera size={16} />, span: "md:col-span-8", img: "/images/project/ipm/photo.jpg" },
  ];

  return (
    <section className="w-full py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Galeri */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[8vw] lg:text-[6rem] font-[900] tracking-[-0.04em] leading-[0.8] uppercase text-[#001F3F]">
              THE <br />
              <span className="text-[#FFC4A4]">OUTPUTS.</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#001F3F]/40 mb-4">Selected Works</p>
            <div className="flex justify-end gap-2">
               <span className="px-4 py-1 bg-[#001F3F] text-white text-[10px] font-black uppercase rounded-full">Industrial Grade</span>
               <span className="px-4 py-1 border border-[#001F3F]/10 text-[#001F3F] text-[10px] font-black uppercase rounded-full">2024</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Pake gaya Masonry yang rapi */}
        <div className="grid md:grid-cols-12 gap-6">
          {works.map((item, i) => (
            <div key={i} className={`${item.span} group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-square md:aspect-auto md:h-[500px] border-[10px] border-[#FDFDFD] shadow-sm`}>
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-[#001F3F]/0 group-hover:bg-[#001F3F]/80 transition-all duration-500 z-10 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 text-[#FFC4A4] mb-4">
                    {item.icon}
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                </div>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">
                    {item.title}
                </h4>
              </div>

              {/* Real Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-20 text-center">
            <p className="text-sm font-bold text-slate-400 italic">
                Semua aset diproduksi secara internal dengan pengawasan standar kualitas agensi.
            </p>
        </div>

      </div>
    </section>
  );
};

export default IpmGallery;