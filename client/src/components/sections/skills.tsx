import { SiPython, SiJavascript, SiHtml5, SiCss3, SiC, SiMongodb, SiMysql, SiGit, SiGithub, SiPostman, SiDocker } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export default function Skills() {
  const languages = [
    { name: "Python", icon: SiPython, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    { name: "C", icon: SiC, color: "text-blue-700" }
  ];

  const databases = [
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" }
  ];

  const tools = [
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
    { name: "VS Code", icon: VscCode, color: "text-blue-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "MongoDB Compass", icon: SiMongodb, color: "text-green-500" },
    { name: "Docker Hub", icon: SiDocker, color: "text-blue-500" }
  ];

  return (
    <section id="skills" className="section-spacing bg-background">
      <div className="container-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and development tools
          </p>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {languages.map((lang) => {
              const IconComponent = lang.icon;
              return (
                <div key={lang.name} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 hover:border-primary">
                  <IconComponent className={`text-4xl mb-3 mx-auto ${lang.color}`} />
                  <h4 className="font-semibold text-card-foreground">{lang.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Databases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Databases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {databases.map((db) => {
              const IconComponent = db.icon;
              return (
                <div key={db.name} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 hover:border-primary">
                  <IconComponent className={`text-4xl mb-3 mx-auto ${db.color}`} />
                  <h4 className="font-semibold text-card-foreground">{db.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Development Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div key={tool.name} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 hover:border-primary">
                  <IconComponent className={`text-4xl mb-3 mx-auto ${tool.color}`} />
                  <h4 className="font-semibold text-card-foreground">{tool.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
