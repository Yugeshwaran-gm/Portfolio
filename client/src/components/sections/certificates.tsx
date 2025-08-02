import { Award, Tag, Trophy } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Python Basic Course",
      issuer: "Udemy",
      date: "2024",
      description: "Comprehensive Python programming fundamentals",
      icon: Tag
    },
    {
      title: "MySQL Implementation Certified Associate",
      issuer: "Oracle",
      date: "2024",
      description: "Database design and implementation expertise",
      icon: Award
    },
    {
      title: "API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2024",
      description: "REST API testing and development proficiency",
      icon: Tag
    },
    {
      title: "ESG Job Simulation",
      issuer: "Tata Group via Forage",
      date: "2024",
      description: "Environmental, Social & Governance business simulation",
      icon: Tag
    },
    {
      title: "Industry 4.0 & IoT",
      issuer: "NPTEL",
      date: "Apr 2025",
      description: "Scored 72% in comprehensive technology course",
      icon: Tag
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte via Forage",
      date: "Jun 2025",
      description: "Real-world technology consulting experience",
      icon: Tag
    },
    {
      title: "Career Edge Program",
      issuer: "TCS iON",
      date: "Aug 2025",
      description: "Young Professional development program",
      icon: Tag
    },
    {
      title: "Hindi Language Proficiency",
      issuer: "Dakshina Bharat Hindi Prachar Sabha",
      date: "Aug 2016",
      description: "Rashtrabasha Visharad certification",
      icon: Award
    },
    {
      title: "Problem Solving",
      issuer: "LeetCode",
      date: "Ongoing",
      description: "140+ coding problems solved successfully",
      icon: Trophy
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certificates & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="h-5 w-5 text-secondary-custom" />
                  <h3 className="font-bold text-card-foreground">{cert.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer} • {cert.date}</p>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
