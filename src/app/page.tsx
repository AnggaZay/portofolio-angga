import Navbar from "@/components/welcome/Navbar";
import Hero from "@/components/welcome/Hero";
import Project from "@/components/welcome/Project";
import Ideation from "@/components/welcome/Ideation"; // Ini dia yang ditunggu-tunggu
import Profile from "@/components/welcome/Profile";
import Footer from "@/components/welcome/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      
      {/* Section Hasil Jadi */}
      <Project />
      
      {/* Section Pilar Penopang / Instrumen */}
      <Ideation />
      
      {/* Section Tentang Angga */}
      <Profile />
      
      <Footer />
    </main>
  );
}