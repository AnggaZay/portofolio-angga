"use client";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section id="profile" className="py-32 px-6 md:px-16 lg:px-32 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Judul Kiri */}
        <div className="lg:col-span-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-8"
          >
            The Profile
          </motion.p>
        </div>

        {/* Konten Kanan */}
        <div className="lg:col-span-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-black mb-16"
          >
            Creative Designer specializing in visual systems. Currently shaping the visual narrative at BPR Arta Utama, with a strong foundation in technical engineering and leadership.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-gray-400">Experience</h4>
              <div className="space-y-8">
                <div>
                  <p className="font-bold text-lg text-black">BPR Arta Utama</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Creative Designer • 2024 — Present</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-black">Freelance Designer</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Visual Identity • 2023 — 2024</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-black">CV. Multinet Komputer</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Technical Specialist • 2022 — 2023</p>
                </div>
              </div>
            </div>

            {/* Leadership & Education */}
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-gray-400">Organization & Education</h4>
              <div className="space-y-8">
                <div>
                  <p className="font-bold text-lg text-black">PD IPM Pekalongan</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Head of Media & Tech • 2024 — 2025</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-black">PC IPM Wonokerto</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Chairman • 2021 — 2023</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-black">SMK 2 Pekalongan</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Computer & Network Engineering • Graduated 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}