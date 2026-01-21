"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Logika Auto-hide
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Logika Perubahan Bentuk (Threshold 50px)
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Projects", href: "#work" },
    { name: "Ideation", href: "#ideation" },
    { name: "Profile", href: "#profile" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      //animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Bezier curve biar smooth
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.div 
        layout // Ini kunci biar transisi width & rounded-nya smooth banget
        className={`
          flex justify-between items-center transition-all duration-500 pointer-events-auto
          ${isScrolled 
            ? "mt-4 w-[90%] md:w-[70%] lg:w-[60%] px-8 py-3 rounded-full bg-emerald-950/90 backdrop-blur-xl shadow-2xl border border-white/10" 
            : "mt-0 w-full px-6 md:px-16 lg:px-32 py-6 bg-white border-b border-slate-100"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tighter">
          <span className={isScrolled ? "text-yellow-400" : "text-emerald-950"}>
            <span className="text-yellow-500">my</span>PORTFOLIO
          </span>
        </Link>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`
                text-[10px] font-bold uppercase tracking-[0.3em] transition-colors
                ${isScrolled 
                  ? "text-slate-300 hover:text-yellow-400" 
                  : "text-slate-400 hover:text-emerald-950"}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <a 
          href="mailto:hello@angga.com" 
          className={`
            text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full transition-all
            ${isScrolled 
              ? "bg-yellow-400 text-emerald-950 hover:bg-yellow-300" 
              : "border-b-2 border-yellow-500 text-emerald-950 hover:text-yellow-600"}
          `}
        >
          Let's Talk
        </a>
      </motion.div>
    </motion.nav>
  );
}