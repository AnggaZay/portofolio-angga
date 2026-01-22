"use client";

import React, { useState } from 'react';
import { 
  Target, Lightbulb, Zap, Award, Camera, Layout, 
  CheckCircle2, ShieldAlert, Cpu, Sparkles, 
  Users2, MessageSquare, ClipboardList, Briefcase
} from 'lucide-react';

const PhaseArtaUtama = () => {
  const [activePhase, setActivePhase] = useState('2024');
  const [activeMode, setActiveMode] = useState('solution');

  const data = {
    "2024": {
      year: "Sept 2024 - Des 2025",
      theme: "SMARTLY GROUNDED",
      solution: {
        points: [
          { 
            title: "Tantangan Internal", 
            desc: "Ketiadaan identitas visual membuat desain bersifat subjektif & reaktif. Revisi atasan sering bertabrakan karena tidak ada panduan baku. Divisi bergerak individual tanpa jobplan.", 
            icon: <ShieldAlert className="text-red-500" /> 
          },
          { 
            title: "Tantangan Eksternal", 
            desc: "Visual terlalu kaku/korporat sehingga tercipta gap dengan nasabah UMKM. Brand belum memiliki karakter khas di mata audience.", 
            icon: <Target className="text-[#054fa0]" /> 
          },
          { 
            title: "Solusi Struktur", 
            desc: "Pengadaan Brand Identity, Jobplan, Rencana Kerja, hingga Laporan Mingguan yang disepakati bersama secara kolektif.", 
            icon: <ClipboardList className="text-emerald-500" /> 
          },
          { 
            title: "Solusi Komunikasi", 
            desc: "Membentuk style 'Memphis Corporate Flex' & komunikasi yang lebih humble hasil kolaborasi dengan konten kreator.", 
            icon: <MessageSquare className="text-yellow-300" /> 
          }
        ]
      },
      // Update pada bagian 'execution' di objek data (Phase 2024)
execution: {
  points: [
    { 
      title: "Alur Kolaborasi", 
      desc: "Sinergi harian bersama Konten Kreator untuk sinkronisasi visual-narasi, dengan pelaporan wajib langsung ke Kabag Operasional (Pak Herland).", 
      icon: <Users2 className="text-[#054fa0]" /> 
    },
    { 
      title: "Output Rutin Mingguan", 
      desc: "Manajemen aset intensitas tinggi: 1x Konten Literasi, 1x Konten Produk, 2x Foto Profil, dan 1x Cover Reels setiap pekan.", 
      icon: <Zap className="text-yellow-300" /> 
    },
    { 
      title: "Produksi Banner UMKM", 
      desc: "Eksekusi masif 5 - 10 desain banner UMKM per minggu sebagai bagian dari program kerja strategis yang diajukan.", 
      icon: <Layout className="text-red-600" /> 
    },
    { 
      title: "Desain Event & Cetak", 
      desc: "Menangani skala besar: Branding event tahunan (Panggung, Merchandise, Photobooth) hingga kebutuhan cetak rilis produk baru.", 
      icon: <Cpu className="text-slate-400" /> 
    }
  ]
},
      // Update pada bagian 'achievement' di objek data (Phase 2024)
achievement: {
  points: [
    { 
      title: "Arsitek Standar Visual", 
      desc: "Memutus siklus revisi subjektif dengan menciptakan Brand Guidelines resmi pertama, mempercepat proses approval desain secara signifikan.", 
      icon: <CheckCircle2 className="text-emerald-500" /> 
    },
    { 
      title: "Ekspansi Brand Organik", 
      desc: "Menyebarkan identitas Arta Utama di ratusan titik UMKM melalui program 5-10 Banner Gratis per minggu tanpa biaya pajak reklame.", 
      icon: <Award className="text-yellow-300" /> 
    },
    { 
      title: "Mastery Event Branding", 
      desc: "Sukses mengelola identitas visual event besar (Summer Camp & Tabungan WOW! Gold) dari skala panggung hingga merchandise.", 
      icon: <Sparkles className="text-[#054fa0]" /> 
    },
    { 
      title: "Transformasi Persepsi", 
      desc: "Berhasil mengubah citra bank dari 'kaku' menjadi 'humble & accessible' di mata nasabah melalui gaya Memphis Corporate Flex.", 
      icon: <Users2 className="text-red-600" /> 
    }
  ]
}
    },
    "2026": {
  year: "Jan 2026 - Present",
  theme: "DYNAMIC AUTHENTICITY",
  description: "Evolusi dari sekadar 'rapi' menjadi 'nyata'. Fokus pada optimasi kualitas visual dan kedekatan emosional melalui narasi manusia.",
  solution: {
    points: [
      { 
        title: "Tantangan Utama", 
        desc: "Visual mulai terasa monoton (over-branded biru) dan terkesan 'robot' karena struktur yang terlalu kaku.", 
        icon: <ShieldAlert className="text-red-500" /> 
      },
      { 
        title: "Style Desain Baru", 
        desc: "Pengadaan Style 'Photograph Studio Corporate' untuk menggantikan dominasi elemen grafis flat dan kaku.", 
        icon: <Camera className="text-[#054fa0]" /> 
      },
      { 
        title: "Program Strategis", 
        desc: "Pengajuan program 'Warung Literasi' sebagai wadah edukasi finansial yang lebih grounded dan relatable.", 
        icon: <MessageSquare className="text-yellow-300" /> 
      },
      { 
        title: "Evolusi AI-Based", 
        desc: "Integrasi Gemini, Remini, hingga Capcut AI untuk mencapai kualitas visual high-end di tengah keterbatasan fasilitas.", 
        icon: <Sparkles className="text-emerald-500" /> 
      }
    ]
  },
  execution: {
    points: [
      { 
        title: "Quality Over Quantity", 
        desc: "Reduksi kapasitas banner UMKM (dari 10 menjadi 3-5/minggu) untuk fokus pada detail desain yang lebih kompleks.", 
        icon: <Zap className="text-yellow-300" /> 
      },
      { 
        title: "Photo Manipulation", 
        desc: "Mengurangi blok warna masif dan mulai fokus pada teknik manipulasi foto agar visual terasa lebih hidup & dinamis.", 
        icon: <Layout className="text-[#054fa0]" /> 
      },
      { 
        title: "AI Workflows", 
        desc: "Implementasi AI untuk relighting & upscaling foto nasabah asli guna menunjang style Studio Corporate.", 
        icon: <Sparkles className="text-red-600" /> 
      },
      { 
        title: "Warung Literasi", 
        desc: "Eksekusi perdana konten literasi dengan pendekatan visual story-telling yang lebih manusiawi.", 
        icon: <MessageSquare size={14} className="text-slate-400" /> 
      }
    ]
  },
  achievement: {
  points: [
    { 
      title: "Visual Breakthrough", 
      desc: "Berhasil mematahkan dominasi gaya 'robot' yang monoton dengan estetika Studio Corporate yang lebih segar dan dinamis.", 
      icon: <Zap className="text-yellow-300" /> 
    },
    { 
      title: "AI Workflow Synergy", 
      desc: "Mencapai standar visual high-end secara konsisten melalui integrasi alat AI (Gemini, Remini, Capcut) di tengah keterbatasan fasilitas.", 
      icon: <Sparkles className="text-emerald-500" /> 
    }
  ]
}
}
  };

  const current = data[activePhase as keyof typeof data];
  const modeData = current[activeMode as keyof typeof current] as { points: { title: string, desc: string, icon: React.ReactNode }[] };

  return (
    <section className="w-full py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Phase Switcher */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
              {current.theme}
            </h3>
            <p className="text-[10px] font-black text-[#054fa0] tracking-[0.4em] uppercase mt-2 italic">{current.year}</p>
          </div>
          
          <div className="flex bg-slate-200/50 p-1.5 rounded-2xl border border-slate-200">
            {["2024", "2026"].map((year) => (
              <button 
                key={year}
                onClick={() => { setActivePhase(year); setActiveMode('solution'); }}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activePhase === year ? 'bg-[#054fa0] text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {year === "2024" ? "Phase I: 2024 - 2025" : "Phase II: 2026"}
              </button>
            ))}
          </div>
        </div>

        {/* Deep Dive Switcher */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {[
            { id: 'solution', label: 'Tantangan & Solusi', icon: <Briefcase size={14}/> },
            { id: 'execution', label: 'Eksekusi Strategis', icon: <Zap size={14}/> },
            { id: 'achievement', label: 'Hasil & Prestasi', icon: <Award size={14}/> }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all ${activeMode === mode.id ? 'bg-[#054fa0] border-[#054fa0] text-white shadow-md' : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'}`}
            >
              {mode.icon} {mode.label}
            </button>
          ))}
        </div>

        {/* Dynamic Display Grid */}
        <div className="bg-white rounded-[3.5rem] p-8 lg:p-16 shadow-2xl shadow-slate-200/40 border border-slate-100 min-h-[400px] flex items-center transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-8 w-full animate-in fade-in zoom-in-95 duration-700">
            {modeData.points.map((point, i) => (
              <div key={i} className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 group hover:border-[#054fa0] transition-all">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform border border-slate-100">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{point.title}</h4>
                  <p className="text-lg font-bold text-slate-900 tracking-tight leading-relaxed italic">"{point.desc}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhaseArtaUtama;