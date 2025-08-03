import { ExternalLink, Phone } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-primary-custom to-secondary-custom text-white">
      <div className="container-spacing">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-accent-custom">Yugeshwaran</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 font-source">
              Full Stack Developer & Technology Enthusiast
            </p>
            <p className="text-lg mb-10 text-white/80 max-w-2xl">
              Passionate about creating innovative web solutions with modern technologies. 
              Specializing in MERN stack development and always eager to learn new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-accent-custom hover:bg-red-600 hover:scale-105 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-custom hover:scale-105 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 mt-10 justify-center lg:justify-start">
              <a
                href="https://github.com/yugeshwarangm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-custom hover:scale-110 transition-all duration-200"
              >
                <SiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/yugeshwaran-g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-custom hover:scale-110 transition-all duration-200"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="tel:+919514955425"
                className="text-white hover:text-accent-custom hover:scale-110 transition-all duration-200"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
