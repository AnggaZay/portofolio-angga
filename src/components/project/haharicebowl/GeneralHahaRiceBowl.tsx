"use client";
import React from 'react';
import { LayoutGrid, MapPin, Soup, ShoppingBag } from 'lucide-react';

const GeneralHahaRiceBowl = () => {
  return (
    <section className="w-full py-24 bg-[#EF4444] font-['Helvetica',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8">
            <div className="inline-block px-4 py-1 bg-white text-[#EF4444] font-black text-[10px] rounded-md mb-6 uppercase tracking-widest">
              Business Setup Project
            </div>
            <h1 className="text-[12vw] lg:text-[10rem] font-black text-white leading-[0.8] uppercase tracking-tighter">
              Haha <br />
              <span className="text-[#FACC15]">Rice Bowl.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-4 pt-10">
            <div className="p-6 border-2 border-white/20 rounded-3xl bg-white/10 backdrop-blur-sm">
               <Soup className="text-[#FACC15] mb-4" size={24} />
               <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Category</p>
               <p className="text-xl font-black text-white uppercase">Ready-to-Eat Branding</p>
            </div>
            <div className="p-6 border-2 border-white/20 rounded-3xl bg-white/10 backdrop-blur-sm">
               <MapPin className="text-[#FACC15] mb-4" size={24} />
               <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Location</p>
               <p className="text-xl font-black text-white uppercase">Batang, Central Java</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-20 border-t border-white/20 pt-20">
            <h3 className="text-4xl font-black text-white uppercase leading-tight">
                Modern Meal <br /> Construction.
            </h3>
            <p className="text-lg text-white/80 font-medium leading-relaxed">
                Haha Rice Bowl adalah proyek pengembangan identitas merk makanan praktis dari nol mutlak. Saya membangun ekosistem visual yang konsisten—mulai dari logo yang ikonik hingga desain fisik kontainer dan kemasan bowl yang ergonomis.
            </p>
        </div>
      </div>
    </section>
  );
};

export default GeneralHahaRiceBowl;