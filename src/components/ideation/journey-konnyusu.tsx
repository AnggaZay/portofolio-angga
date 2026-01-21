"use client";

export default function JourneyKonnyusu() {
  return (
    <section className="py-24 bg-slate-50 px-6 md:px-32">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">
          Destiny <span className="text-blue-600 not-italic">Audit.</span>
        </h2>
        <p className="text-gray-500 text-lg mb-8 italic">Perjalanan membedah bagaimana perubahan identitas visual mampu mengubah nasib dan audiens sebuah brand secara fundamental.</p>
        <div className="flex gap-4">
          <div className="h-2 w-full bg-blue-600"></div>
          <div className="h-2 w-1/2 bg-gray-200"></div>
        </div>
        <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Progress: Ideation Phase</p>
      </div>
    </section>
  );
}