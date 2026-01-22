"use client";

import React from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  Layers, 
  Printer, 
  MonitorPlay, 
  Calendar, 
  FileText, 
  LayoutTemplate 
} from 'lucide-react';

const ProductionVaultArta = () => {
  const assets = [
    {
      category: "Digital Assets",
      items: [
        { label: "Foto Profil Mingguan", freq: "2x / Minggu", desc: "Konsistensi visual identitas staf & official." },
        { label: "Konten Literasi", freq: "2-5 Slide", desc: "Edukasi finansial dalam format carousel." },
        { label: "Konten Produk", freq: "Setiap Minggu", desc: "Visual promosi produk simpanan & kredit." },
        { label: "Snapgram & Social Covers", freq: "On-demand", desc: "Aset interaktif harian dan update promo." }
      ]
    },
    {
      category: "Event & Branding",
      items: [
        { label: "Thematic Event Branding", freq: "3-5x / Tahun", desc: "Menangani identitas visual event dari nol hingga selesai." },
        { label: "Merchandise Design", freq: "Per Event", desc: "Desain kaos, ID card, lanyard, dan gift set." },
        { label: "Stage & Layout Design", freq: "Per Event", desc: "Visual panggung utama, photobooth, dan denah kursi." },
        { label: "Videotron Content", freq: "Event Besar", desc: "Konten video looping dan promosi layar lebar." }
      ]
    },
    {
      category: "Print & Offline",
      items: [
        { label: "Media Cetak Luar Ruang", freq: "Fleksibel", desc: "Banner, baliho, dan spanduk kolaborasi UMKM." },
        { label: "Marketing Kit", freq: "Update Berkala", desc: "Pamflet lipat, brosur produk, dan flyer." },
        { label: "Corporate Stationery", freq: "Standarisasi", desc: "Kop surat, amplop, dan map dokumen resmi." },
        { label: "Internal Signage", freq: "Permanent", desc: "Panduan visual untuk lingkungan kantor pusat." }
      ]
    }
  ];

  return (
    <section className="w-full py-32 bg-[#054fa0] text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-white/10 pb-10">
          <div>
            <h2 className="text-sm font-black text-yellow-300 uppercase tracking-[0.4em] mb-4">Galeri Desain BPR Arta Utama</h2>
            <h3 className="text-5xl lg:text-7xl font-black tracking-tighter italic">Gudang Produksi.</h3>
          </div>
          <p className="text-slate-400 max-w-sm text-right text-xs font-bold uppercase tracking-widest leading-relaxed">
            Mengelola ekosistem kreatif dengan intensitas tinggi, memastikan setiap titik sentuh nasabah memiliki standar visual yang sesuai.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {assets.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/20" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#054fa0]">{section.category}</h4>
              </div>

              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="group p-6 bg-slate-900/50 border border-white/20 rounded-2xl hover:bg-white hover:text-slate-950 transition-all duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[9px] font-black px-2 py-1 bg-red-600 text-white rounded uppercase tracking-widest group-hover:bg-[#054fa0]">
                        {item.freq}
                      </span>
                    </div>
                    <p className="text-lg font-black tracking-tight mb-2 uppercase">{item.label}</p>
                    <p className="text-xs text-slate-500 group-hover:text-slate-700 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center">
            <p className="text-slate-400 text-sm font-medium italic">
                "Setiap aset yang keluar dari vault ini adalah hasil dari sinkronisasi antara logika operasional dan estetika visual yang konsisten."
            </p>
        </div>

      </div>
    </section>
  );
};

export default ProductionVaultArta;