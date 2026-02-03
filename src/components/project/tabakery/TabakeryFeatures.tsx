"use client";
import React from 'react';
import { Package, ShoppingCart, TrendingUp, Users } from 'lucide-react';

const TabakeryFeatures = () => {
  const features = [
    {
      title: "Smart Inventory",
      desc: "Tracking gramasi bahan baku otomatis berkurang setiap ada transaksi.",
      icon: <Package size={32} />,
      stat: "Zero Waste"
    },
    {
      title: "Kitchen POS",
      desc: "Interface kasir yang didesain untuk kecepatan input saat rush hour.",
      icon: <ShoppingCart size={32} />,
      stat: "0.5s Input"
    },
    {
      title: "Profit Analytics",
      desc: "Menghitung HPP dan profit bersih harian secara real-time.",
      icon: <TrendingUp size={32} />,
      stat: "+25% Margin"
    },
    {
      title: "Staff Shift",
      desc: "Manajemen absensi dan pembagian komisi karyawan otomatis.",
      icon: <Users size={32} />,
      stat: "Auto Payroll"
    }
  ];

  return (
    <section className="w-full py-32 bg-white text-[#121212] font-['Helvetica',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 border-l-8 border-[#FACC15] pl-8">
          <h2 className="text-6xl md:text-8xl font-[900] uppercase tracking-tighter leading-none mb-4">
            The <br/> Engine.
          </h2>
          <p className="text-lg font-bold text-gray-500 max-w-xl">
            Sistem terintegrasi yang menghubungkan Stok (Gudang) dengan Transaksi (Kasir) tanpa selisih data.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="group p-10 bg-[#F5F5F5] border-2 border-transparent hover:border-[#121212] hover:bg-[#FACC15] transition-all duration-300 rounded-[2rem]">
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-[#121212] text-white rounded-full group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <span className="text-4xl font-[900] opacity-10 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
              </div>
              
              <h3 className="text-3xl font-[900] uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform">
                {feat.title}
              </h3>
              <p className="text-sm font-bold text-gray-500 group-hover:text-[#121212] leading-relaxed mb-8">
                {feat.desc}
              </p>

              <div className="inline-block px-4 py-1 bg-white border border-[#121212] rounded-full text-[10px] font-black uppercase tracking-widest">
                {feat.stat}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TabakeryFeatures;