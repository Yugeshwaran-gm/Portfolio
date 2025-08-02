export default function Skills() {
  const languages = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "C", icon: "⚙️" }
  ];

  const databases = [
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🗄️" }
  ];

  const tools = [
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "🚀" },
    { name: "MongoDB Compass", icon: "🧭" },
    { name: "Docker Hub", icon: "🐳" }
  ];

  return (
    <section id="skills" className="section-spacing bg-white">
      <div className="container-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-custom mb-4">Skills & Technologies</h2>
          <p className="text-xl text-text-custom/70 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and development tools
          </p>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary-custom mb-6 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="bg-neutral-custom/50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-3">{lang.icon}</div>
                <h4 className="font-semibold text-text-custom">{lang.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary-custom mb-6 text-center">Databases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {databases.map((db) => (
              <div key={db.name} className="bg-neutral-custom/50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-3">{db.icon}</div>
                <h4 className="font-semibold text-text-custom">{db.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-bold text-primary-custom mb-6 text-center">Development Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-neutral-custom/50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h4 className="font-semibold text-text-custom">{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
