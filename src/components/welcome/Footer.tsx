export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 md:px-16 lg:px-32 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <h2 className="text-[10vw] font-bold leading-none tracking-tighter">LET'S <br />WORK.</h2>
        <div className="text-right">
          <p className="text-gray-400 uppercase tracking-widest text-xs mb-4">Socials</p>
          <div className="flex gap-6 justify-end font-bold uppercase tracking-widest text-sm">
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">Behance</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-500">
        <p>© 2026 ANGGA ZAY. ALL RIGHTS RESERVED.</p>
        <p>INDONESIA / 14:58 WIB</p>
      </div>
    </footer>
  );
}