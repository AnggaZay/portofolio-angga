"use client";
import { motion } from "framer-motion";

export default function DynamicAuthenticity() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Pillar 01 / Arta Utama</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mt-6 mb-12">
          Dynamic <br /> <span className="text-blue-600 not-italic">Authenticity</span>
        </h2>
        <div className="space-y-8 text-xl text-gray-600 leading-relaxed italic">
          <p>
            Tantangan di BPR Arta Utama adalah bagaimana sebuah institusi finansial lokal tetap terlihat kokoh (Authentic) namun tidak tertinggal oleh arus digital (Dynamic).
          </p>
          <div className="p-10 bg-slate-50 border-l-4 border-blue-600 not-italic">
            <p className="text-sm font-bold uppercase tracking-widest text-black mb-4">The Solution</p>
            <p className="text-2xl text-black font-medium tracking-tight">
              Menggunakan sistem grid yang presisi untuk melambangkan keamanan finansial, dipadukan dengan aksen warna vibran dan tipografi modern untuk menunjukkan kecepatan layanan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}