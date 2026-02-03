import Navbar from "@/components/welcome/Navbar";
import Hero from "@/components/welcome/Hero";
import Project from "@/components/welcome/Project";
import Profile from "@/components/welcome/Profile";
import Footer from "@/components/welcome/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      
      {/* Section Hasil Jadi */}
      <Project />
      
      {/* Section Tentang Angga */}
      <Profile />
      
      <Footer />
    </main>
  );
}