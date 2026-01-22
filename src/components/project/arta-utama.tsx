import React, { useState } from 'react';
import { ShieldCheck, Users, Zap, Layout, Camera, Sparkles } from 'lucide-react';

const ArtaUtamaProject = () => {
  const [activePhase, setActivePhase] = useState('2026');

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-slate-100">
      {/* Header Section */}
      <section className="mb-16 border-b border-slate-800 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter mb-4">BPR Arta Utama</h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl">
              Transforming a rigid corporate identity into a relatable, human-centric visual narrative.
            </p>
          </div>
          <div className="bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full">
            <span className="text-blue-400 text-sm font-medium italic">"Precisely Logical. Purely Visual."</span>
          </div>
        </div>
      </section>

      {/* Context & Team */}
      <section className="grid md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-white">The Creative Nexus</h2>
          <p className="text-slate-400 leading-relaxed">
            Joined on <span className="text-white font-medium">September 25, 2024</span>. I encountered a significant challenge: 
            a total absence of brand guidelines and visual documentation. My mission was to transition the brand from 
            reactive designing to a strategic visual system.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Working under <span className="text-white">Mr. Herland Herlambang</span> (Head of Operations), I teamed up with 
            <span className="text-white">Rosima Tahtita</span> (Content Creator) to build a creative powerhouse that 
            redefined how the bank communicates with its audience.
          </p>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-4">Core Team</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs">A</div>
              <div>
                <p className="text-sm font-medium">Angga</p>
                <p className="text-xs text-slate-500">Lead Creative Designer</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xs">R</div>
              <div>
                <p className="text-sm font-medium">Rosima Tahtita</p>
                <p className="text-xs text-slate-500">Content Creator</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Phase Switcher (Evolution) */}
      <section className="mb-20">
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button 
              onClick={() => setActivePhase('2024')}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${activePhase === '2024' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Phase 1: 2024 - 2025
            </button>
            <button 
              onClick={() => setActivePhase('2026')}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${activePhase === '2026' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Phase 2: 2026 (Current)
            </button>
          </div>
        </div>

        {activePhase === '2024' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold italic text-blue-400">"SMARTLY GROUNDED"</h3>
                <p className="text-slate-400">Focusing on repairing the rigid corporate image to be more accessible—much like the Gojek ecosystem approach. Professional, yet friendly.</p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-slate-900/40 rounded-xl border border-slate-800">
                    <Layout className="text-blue-500 shrink-0" />
                    <div>
                      <p className="font-medium">Memphis Corporate Flex</p>
                      <p className="text-sm text-slate-500">Utilizing illustrations, bold shapes, and deep blue dominance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-900/40 rounded-xl border border-slate-800">
                    <Zap className="text-yellow-500 shrink-0" />
                    <div>
                      <p className="font-medium">Banner UMKM Gratis</p>
                      <p className="text-sm text-slate-500">Strategic project to bridge the gap with the local MSME market.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-700">
                <span className="text-slate-500">[Preview Memphis Style Visuals]</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold italic text-emerald-400">"DYNAMIC AUTHENTICITY"</h3>
                <p className="text-slate-400">Moving past the "monotonous" phase. People know us, now they need to feel us. Real stories told through high-end visuals.</p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-slate-900/40 rounded-xl border border-slate-800">
                    <Camera className="text-emerald-500 shrink-0" />
                    <div>
                      <p className="font-medium">Photograph Studio Corporate</p>
                      <p className="text-sm text-slate-500">AI-Enhanced real human photography for professional lighting & shadows.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-900/40 rounded-xl border border-slate-800">
                    <Sparkles className="text-purple-500 shrink-0" />
                    <div>
                      <p className="font-medium">Warung Literasi</p>
                      <p className="text-sm text-slate-500">New flagship project: Closer, more real, more impactful.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-700">
                <span className="text-slate-500">[Preview AI-Enhanced Photography]</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Production Ecosystem Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">The High-Volume Ecosystem</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Weekly Profile Pics', qty: '2x / week' },
            { label: 'Literacy Content', qty: '2-5 slides' },
            { label: 'Product Design', qty: 'Weekly' },
            { label: 'Event Branding', qty: '3-5 Yearly' },
            { label: 'Print Media', qty: 'Banners & Flyers' },
            { label: 'Video Editing', qty: 'Reels & Videotron' },
            { label: 'Web Carousel', qty: 'On-demand' },
            { label: 'Social Assets', qty: 'Snapgram & Cover' },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-slate-900/20 border border-slate-800 rounded-lg text-center">
              <p className="text-xs text-slate-500 uppercase tracking-tighter mb-1">{item.qty}</p>
              <p className="text-sm font-medium text-slate-200">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtaUtamaProject;