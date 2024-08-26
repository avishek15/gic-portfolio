import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar /> 
      <div className="container mt-24 mx-auto px-12 py-4">
        
        <Hero />
        <AboutSection />
        <ProjectSection />
      </div>
      
    </main>
  );
}
