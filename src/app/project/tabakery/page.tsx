import TabakeryHero from "@/components/project/tabakery/TabakeryHero";
import TabakeryFeatures from "@/components/project/tabakery/TabakeryFeatures";
import ErpShowcase from "@/components/project/tabakery/ErpShowcase";

export default function TabakeryPage() {
  return (
    // Ganti bg ke Putih Bersih/Ultra Light Gray agar nyambung dengan desain baru
    <main className="bg-[#FBFBFB] selection:bg-[#FACC15] selection:text-black min-h-screen">
      
      {/* 1. HERO: Branding & Identity (Light & Airy) */}
      <TabakeryHero />

      {/* 2. THE ENGINE & SOLUTION: 
          Komponen ini sekarang sudah mencakup narasi "The Solution" 
          dan "Project Scope" di dalamnya, jadi lebih fokus.
      */}
      <TabakeryFeatures />

      {/* 3. SHOWCASE: UI/UX & Live Prototype */}
      <ErpShowcase />

      {/* 4. CLEAN FOOTER */}
      <footer className="py-24 bg-white border-t border-black/5 flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-1 w-8 bg-[#FACC15] rounded-full opacity-30" />
          ))}
        </div>
        <div>
          <span className="text-gray-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-2">
            End of Documentation
          </span>
          <h4 className="text-[#121212] font-black uppercase tracking-tighter text-3xl">
            Tabakery <span className="text-[#FACC15]">Hub.</span>
          </h4>
        </div>
        <p className="text-gray-400 text-[10px] font-medium max-w-[200px]">
          Designed to solve operational complexity through digital product excellence.
        </p>
      </footer>

    </main>
  );
}