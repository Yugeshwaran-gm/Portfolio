import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="section-spacing bg-background">
      <div className="container-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my development skills through real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Auction System Project */}
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Auction system project showcase"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-card-foreground">Auction System</h3>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">In Progress</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A real-time auction platform that enables users to bid on items with live updates and secure payment processing. 
                  Features user authentication, item listing, bidding mechanisms, and real-time notifications for an 
                  engaging auction experience.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">Express.js</span>
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">Socket.io</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yugeshwarangm/auction-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-custom hover:bg-primary-custom/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WORK HUNT Project */}
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Job portal project showcase"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-card-foreground">WORK HUNT</h3>
                  <span className="bg-accent-custom text-white px-3 py-1 rounded-full text-sm">Featured</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A comprehensive job portal website featuring dual login systems for job seekers and employers. 
                  The platform serves as a bridge connecting talented individuals with potential employers, 
                  facilitating seamless job discovery and recruitment processes.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">Express.js</span>
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-secondary-custom/10 text-secondary-custom px-3 py-1 rounded-full text-sm">Node.js</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yugeshwarangm/work-hunt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-custom hover:bg-primary-custom/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action for More Projects */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-secondary-custom hover:bg-secondary-custom/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
