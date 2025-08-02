import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-spacing bg-neutral-custom/30">
      <div className="container-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-custom mb-4">Education</h2>
          <p className="text-xl text-text-custom/70 max-w-3xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-secondary-custom md:left-1/2 md:transform md:-translate-x-px"></div>

            {/* MCA */}
            <div className="relative flex items-center mb-12">
              <div className="absolute left-0 w-8 h-8 bg-secondary-custom rounded-full flex items-center justify-center md:left-1/2 md:transform md:-translate-x-4">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-custom">Master of Computer Applications</h3>
                      <p className="text-text-custom/70">Kongu Engineering College</p>
                    </div>
                    <span className="bg-secondary-custom text-white px-3 py-1 rounded-full text-sm">2024 - 2026</span>
                  </div>
                  <p className="text-text-custom/70 mb-3">Currently pursuing advanced studies in computer applications</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary-custom">CGPA:</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">8.26</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BSC */}
            <div className="relative flex items-center md:justify-end">
              <div className="absolute left-0 w-8 h-8 bg-secondary-custom rounded-full flex items-center justify-center md:left-1/2 md:transform md:-translate-x-4">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-custom">BSc Computer Science</h3>
                      <p className="text-text-custom/70">Mannar Thirumalai Naicker College</p>
                    </div>
                    <span className="bg-secondary-custom text-white px-3 py-1 rounded-full text-sm">2021 - 2024</span>
                  </div>
                  <p className="text-text-custom/70 mb-3">Comprehensive foundation in computer science principles</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary-custom">CGPA:</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">7.61</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
