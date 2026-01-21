"use client";

export default function JourneyTabakery() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white px-6 md:px-32">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">
          The <span className="text-blue-600 not-italic">Hard Truth.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">Mendokumentasikan bagaimana margin profit 39-43% dan kegagalan operasional selama 8 bulan menjadi pilar desain yang paling jujur.</p>
        <div className="border-l-2 border-blue-600 pl-8 space-y-10">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500">Analysis</h4>
            <p className="text-gray-500 mt-2">Membedah setiap struk penjualan untuk menemukan celah visual yang bisa menjustifikasi kenaikan harga produk.</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500">Pivot</h4>
            <p className="text-gray-500 mt-2">Berhenti menjual roti, mulai menjual "Gift Experience".</p>
          </div>
        </div>
      </div>
    </section>
  );
}