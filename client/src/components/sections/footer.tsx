import { Heart, Phone } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-primary-custom text-white py-8">
      <div className="container-spacing">
        <div className="text-center">
          <p className="text-white/70 flex items-center justify-center gap-2">
            © 2024 Yugeshwaran G. Designed and developed with <Heart className="h-4 w-4 text-accent-custom" />
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/yugeshwarangm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yugeshwaran-g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
            <a
              href="tel:+919514955425"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
