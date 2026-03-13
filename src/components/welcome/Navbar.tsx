"use client";
import { motion, useScroll, useMotionValueEvent, LayoutGroup } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Threshold sedikit kita naikin biar transisinya gak terlalu sensitif di awal
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Projects", href: "#work" },
    { name: "Profile", href: "#profile" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <LayoutGroup>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none p-0 md:p-4">
        <motion.div 
          layout // Ini kunci utama keajaiban transisi Framer Motion
          initial={false}
          transition={{
            layout: { 
              type: "spring", 
              stiffness: 120, // Lebih rendah biar gak terlalu "ngeper"
              damping: 24,    // Redaman lebih smooth
              mass: 1
            },
            // Transisi untuk warna dan filter agar tetap sinkron
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] 
          }}
          className={`
            flex justify-between items-center pointer-events-auto relative
            ${isScrolled 
              ? "w-[90%] max-w-[900px] px-8 py-3 rounded-full bg-emerald-950/90 backdrop-blur-2xl shadow-2xl border border-white/10 mt-2" 
              : "w-full max-w-full px-10 md:px-20 py-6 rounded-none bg-white border-b border-black/5 mt-0"}
          `}
        >
          {/* Logo dengan layout prop biar ikut transisi posisi */}
          <motion.div layout className="shrink-0">
            <Link href="/" className="text-xl font-[1000] tracking-tighter">
              <span className={isScrolled ? "text-white" : "text-emerald-950"}>
                <span className="text-yellow-500 italic">ANGGA</span>ZAY.
              </span>
            </Link>
          </motion.div>
          
          {/* Nav Links - Desktop Only */}
          <motion.div layout className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`
                  text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500
                  ${isScrolled 
                    ? "text-gray-400 hover:text-yellow-400" 
                    : "text-gray-400 hover:text-emerald-950"}
                `}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.div layout className="shrink-0">
            <a 
              href="mailto:anggazaidan4@gmail.com" 
              className={`
                text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-500 active:scale-90 inline-block
                ${isScrolled 
                  ? "bg-yellow-400 text-emerald-950 hover:bg-white" 
                  : "bg-emerald-950 text-white hover:bg-yellow-500 shadow-lg"}
              `}
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </nav>
    </LayoutGroup>
  );
}