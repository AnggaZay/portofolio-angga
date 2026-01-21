"use client";
import { motion } from "framer-motion";
import { 
  SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, 
  SiAdobeaftereffects, SiCoreldraw, SiCanva, SiFigma,
  SiNextdotjs, SiTailwindcss, SiFlutter, SiFirebase
} from "react-icons/si";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  isHighlight?: boolean;
}

function ExperienceItem({ company, role, period, isHighlight = false }: ExperienceProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="group">
      <h5 className={`text-xl font-medium ${isHighlight ? 'text-[#052219]' : 'text-gray-900'} group-hover:text-[#F4D03F] transition-colors`}>
        {company}
      </h5>
      <p className="text-[#052219]/60 text-xs uppercase tracking-widest font-medium">{role}</p>
      <p className="text-gray-300 text-[10px] font-mono mt-1">{period}</p>
    </motion.div>
  );
}

function SkillIcon({ icon, name, level }: { icon: React.ReactNode; name: string; level: string }) {
  return (
    <div className="group flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="text-2xl text-[#052219] group-hover:text-[#F4D03F] transition-all underline underline-offset-4 decoration-gray-100">
          {icon}
        </div>
        <div>
          <p className="text-[11px] font-bold text-[#052219] uppercase tracking-tighter">{name}</p>
          <p className="text-[9px] text-gray-400 font-medium">{level}</p>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <section id="profile" className="py-32 px-6 md:px-16 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Headline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#052219]"></div>
              <p className="text-[#052219] font-bold uppercase tracking-[0.4em] text-[10px]">The Profile</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-light leading-[1.1] tracking-tight text-[#052219]"
            >
              Brand & Marketing Designer with an <span className="italic font-serif">engineering mindset</span>. Expert in visual systems, powered by <span className="bg-[#F4D03F] px-2 font-medium text-black">AI-driven development</span>.
            </motion.h2>
          </div>
        </div>

        {/* Experience & Organization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-start-5 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h4 className="font-bold mb-10 uppercase tracking-widest text-[10px] text-gray-400 border-b border-gray-100 pb-4">Professional Path</h4>
              <div className="space-y-10">
                <ExperienceItem company="BPR Arta Utama" role="Creative Designer" period="September 2024 — Januari 2026" isHighlight={true} />
                <ExperienceItem company="Freelance Designer" role="Graphic Designer" period="Agustus 2023 — September 2024" />
                <ExperienceItem company="CV. Multinet Komputer" role="Repair & Assembly Technician" period="Januari 2022 —  Agustus 2023" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-10 uppercase tracking-widest text-[10px] text-gray-400 border-b border-gray-100 pb-4">Social Impact</h4>
              <div className="space-y-10">
                <ExperienceItem company="PD IPM Pekalongan" role="Social-Impact Agency Lead" period="2024 — 2025" isHighlight={true} />
                <ExperienceItem company="PC IPM Wonokerto" role="Chairman" period="2021 — 2023" />
              </div>
            </div>
          </div>
        </div>

        {/* The New Toolkit Section */}
        <div className="pt-20 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-gray-400 italic">Mastery & Tools</h4>
            </div>
            
            <div className="md:col-span-8 space-y-20">
              {/* CORE DESIGN - Skill Utama Lu */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-[0.2em]">Core Design Ecosystem (90%+)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                  <SkillIcon icon={<SiAdobephotoshop />} name="Photoshop" level="Expert / 95%" />
                  <SkillIcon icon={<SiAdobeillustrator />} name="Illustrator" level="Expert / 92%" />
                  <SkillIcon icon={<SiCoreldraw />} name="CorelDraw" level="Expert / 90%" />
                  <SkillIcon icon={<SiCanva />} name="Canva" level="Advanced / 90%" />
                </div>
              </div>

              {/* TECH-ENABLED DESIGN - Ini cara lo jelasin soal kodingan tadi */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-[0.2em]">AI-Driven Development (Conceptual & Logic)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                  <SkillIcon icon={<SiNextdotjs />} name="Next.js" level="Logic-Based" />
                  <SkillIcon icon={<SiFlutter />} name="Flutter" level="Logic-Based" />
                  <SkillIcon icon={<SiTailwindcss />} name="Tailwind" level="Visual-Driven" />
                  <SkillIcon icon={<SiFigma />} name="Figma" level="Layouting / 35%" />
                </div>
              </div>

              {/* MOTION & VIDEO - Skill Pendukung */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-[0.2em]">Motion & Multimedia</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                  <SkillIcon icon={<SiAdobeaftereffects />} name="After Effects" level="Motion / 65%" />
                  <SkillIcon icon={<SiAdobepremierepro />} name="Premiere Pro" level="Editing / 55%" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}