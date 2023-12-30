import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
