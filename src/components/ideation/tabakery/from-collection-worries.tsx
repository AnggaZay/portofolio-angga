"use client";

export default function FromCollectionWorries() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Pillar 01 / Tabakery</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mt-6 mb-12 leading-none">
          From Collection <br /> <span className="text-blue-600 not-italic">of Worries</span>
        </h2>
        <div className="space-y-10 text-xl text-gray-600 leading-relaxed">
          <p>
            Lahir dari kegagalan bisnis selama 8 bulan. Analisis margin profit 39-43% menuntut narasi visual yang mampu menjustifikasi harga premium.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div className="p-8 bg-orange-50 rounded-xl">
              <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-4">Pain Point</h4>
              <p className="text-sm">Rendahnya margin pada produk harga 15rb-20rb memaksa branding untuk bergerak ke arah "Gift & Experience".</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-xl">
              <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-4">Visual Logic</h4>
              <p className="text-sm">Minimalisme yang "mahal" digunakan untuk menutupi kompleksitas kegelisahan operasional di balik layar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}