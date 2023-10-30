import CoronaVirus from "@/components/Lottie";
import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { About } from "@/components/About";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212] flex-col">
        <NavBar />
      <div className="container mt-24 m-auto px-12 py-4">
        <HeroSection />
        <About />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>

    )
}
