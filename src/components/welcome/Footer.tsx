"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="py-24 lg:py-40 px-6 lg:px-32 bg-[#052219] text-white selection:bg-yellow-400 selection:text-black">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-40">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[15vw] lg:text-[10vw] font-bold leading-[0.75] tracking-tighter italic font-serif text-yellow-400">
              LET'S <br /> 
              <span className="not-italic font-sans font-[1000] text-white">WORK.</span>
            </h2>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div>
              <p className="text-yellow-400 uppercase tracking-[0.4em] text-[10px] mb-6 font-black">Quick Connection</p>
              <a 
                href="mailto:anggazaidan4@gmail.com" 
                className="text-2xl md:text-5xl font-bold hover:italic transition-all duration-300 border-b-4 border-white/10 hover:border-yellow-400 pb-4 block"
              >
                anggazaidan4@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-8 font-black uppercase tracking-[0.2em] text-[10px] text-gray-400">
              {["Instagram", "Behance", "LinkedIn"].map((social) => (
                <a key={social} href="#" className="hover:text-yellow-400 transition-colors">
                  {social} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Industrial Grid Style */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
            <p>© 2026 ANGGA ZAY — PEKALONGAN</p>
            <p>DESIGNED IN NEXT.JS</p>
          </div>
          
          <div className="flex gap-4 items-center bg-white/5 px-6 py-2 rounded-full border border-white/5">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_10px_#facc15]"></span>
            <p className="font-mono text-[10px] tracking-widest text-gray-300 uppercase">
              LOCAL TIME / {time} WIB
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}