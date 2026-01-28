"use client";
import React from 'react';
import { Award, Star, Activity } from 'lucide-react';

const TheMasterpiece = () => {
  return (
    <section className="w-full py-40 bg-[#FDFDFD] text-[#001F3F]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-7 relative">
            {/* Dekorasi Grid Pattern */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#FFC4A4_2px,transparent_2px)] [background-size:20px_20px] opacity-40" />
            
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,31,63,0.15)] bg-slate-100 aspect-video">
              <img 
                src="/images/project/ipm/the-avengers.jpg" 
                alt="The Avengers Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-10 -right-6 bg-[#001F3F] text-[#FFC4A4] p-8 rounded-3xl shadow-2xl max-w-[240px]">
              <Activity className="mb-4" size={24} />
              <p className="text-xs font-black uppercase tracking-widest leading-tight">
                Meningkatkan engagement digital melalui validasi data visual.
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-5">
            <div className="w-16 h-[2px] bg-[#FFC4A4] mb-10" />
            <h2 className="text-5xl md:text-6xl font-[900] tracking-tighter leading-[0.9] mb-8 uppercase">
              Proven <br /> <span className="text-[#FFC4A4]">Expertise.</span>
            </h2>
            <p className="text-xl font-medium text-slate-500 leading-relaxed mb-10">
              Pengakuan dari alumni dan pimpinan umum bukan datang secara cuma-cuma, melainkan lahir dari standar kualitas yang konsisten kami jaga.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1"><Award size={20} className="text-[#FFC4A4]" /></div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight">Special Room Facility</p>
                  <p className="text-xs text-slate-400 font-bold uppercase">Kepercayaan Pimpinan Umum</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><Star size={20} className="text-[#FFC4A4]" /></div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight">Notice from Alumni</p>
                  <p className="text-xs text-slate-400 font-bold uppercase">Validasi Standar Industri</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TheMasterpiece;