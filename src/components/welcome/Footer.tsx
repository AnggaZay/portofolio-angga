"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [time, setTime] = useState("");

  // Update waktu real-time Indonesia
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
    <footer id="contact" className="py-32 px-6 md:px-16 lg:px-32 bg-[#052219] text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
          {/* Headline Besar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[12vw] md:text-[10vw] font-light leading-[0.8] tracking-tighter italic font-serif text-[#F4D03F]">
              LET'S <br /> 
              <span className="not-italic font-sans font-bold text-white">TALK.</span>
            </h2>
          </motion.div>

          {/* Socials & Email */}
          <div className="flex flex-col items-start md:items-end gap-10">
            <div className="text-left md:text-right">
              <p className="text-[#F4D03F] uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">Get in Touch</p>
              <a 
                href="mailto:anggazaidan4@gmail.com" 
                className="text-2xl md:text-4xl font-medium hover:italic transition-all duration-300 border-b border-white/20 pb-2"
              >
                anggazaidan4@gmail.com
              </a>
            </div>

            <div className="text-left md:text-right">
              <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mb-4">Socials</p>
              <div className="flex flex-wrap gap-6 justify-start md:justify-end font-bold uppercase tracking-widest text-xs">
                {["Instagram", "Behance", "LinkedIn"].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="hover:text-[#F4D03F] transition-colors duration-300 relative group"
                  >
                    {social}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4D03F] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-gray-500">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
            <p>© 2026 ANGGA ZAY</p>
            <p>Ceative Designer @ Pekalongan</p>
          </div>
          <div className="flex gap-4 items-center font-mono">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p>INDONESIA / {time} WIB</p>
          </div>
        </div>

      </div>
    </footer>
  );
}