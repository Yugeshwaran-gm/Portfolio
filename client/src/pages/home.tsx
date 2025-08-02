import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Certificates from "@/components/sections/certificates";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
