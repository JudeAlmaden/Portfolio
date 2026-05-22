const skills = [
  { name: "PHP", icon: "fab fa-php", color: "indigo" },
  { name: "Laravel", icon: "fab fa-laravel", color: "red" },
  { name: "Vue.js", icon: "fab fa-vuejs", color: "emerald" },
  { name: "React", icon: "fab fa-react", color: "cyan" },
  { name: "JavaScript", icon: "fab fa-js", color: "yellow" },
  { name: "TailwindCSS", icon: "fas fa-wind", color: "sky" },
  { name: "MySQL", icon: "fas fa-database", color: "blue" },
  { name: "Node.js", icon: "fab fa-node-js", color: "green" },
  { name: "Python", icon: "fab fa-python", color: "blue" },
  { name: "Java", icon: "fab fa-java", color: "orange" },
  { name: "C++", icon: "fas fa-code", color: "blue" },
  { name: "Git", icon: "fab fa-git-alt", color: "orange" },
];

const certifications = [
  { title: "Scratch in Action: Speaker", year: "2025", icon: "fas fa-microphone" },
  { title: "Internet of Things Conference", year: "2025", icon: "fas fa-wifi" },
  { title: "Hack4Gov CTF", year: "2025", icon: "fas fa-shield-alt" },
  { title: "Sensor Guided Robotics Workshop", year: "2023", icon: "fas fa-robot" },
  { title: "NCIII – Visual Graphics Design", year: "2023", icon: "fas fa-palette" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16 reveal-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
            Skills & Certifications
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-600">Technologies I work with and achievements I've earned</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Skills Grid - Takes 2 columns */}
          <div className="lg:col-span-2 reveal-up">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <i className="fas fa-code text-primary"></i>
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-white border-2 border-violet-100 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <i className={`${skill.icon} text-4xl text-slate-400 group-hover:text-primary transition-colors mb-3`}></i>
                  <span className="text-sm font-semibold text-slate-700 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications - Takes 1 column */}
          <div className="reveal-right">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <i className="fas fa-certificate text-primary"></i>
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <i className={`${cert.icon} text-primary text-lg`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">{cert.title}</h4>
                      <span className="text-xs text-primary font-semibold">{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
