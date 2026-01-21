"use client";

export default function IpmProject() {
  return (
    <section className="py-24 bg-white px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Project Detail / 2024 — 2025</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic mt-6 mb-20">
          IPM <br /> <span className="text-blue-600 not-italic">Pekalongan.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">The Mission</h4>
            <p className="text-2xl text-gray-700 leading-snug">
              Membangun infrastruktur media dan teknologi yang inklusif untuk ribuan kader di Kabupaten Pekalongan.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-2xl">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Key Deliverables</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Social Media Identity</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Digital Campaign Assets</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Tech Infrastructure Strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}