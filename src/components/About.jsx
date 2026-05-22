export default function About() {
  const experiences = [
    {
      image: "/images/me/Hack4Gov.webp",
      title: "Hack4Gov CTF",
      description: "Cybersecurity competition",
      year: "2025"
    },
    {
      image: "/images/me/Resource_Speaker2.webp",
      title: "Resource Speaker",
      description: "Scratch in Action",
      year: "2025"
    },
    {
      image: "/images/me/Hackathon.webp",
      title: "Hackathon Participant",
      description: "Development competition",
      year: "2024"
    },
    {
      image: "/images/me/Student Research.jpg",
      title: "Student Research",
      description: "Academic research project",
      year: "2024"
    }
  ];

  const timeline = [
    {
      period: "2026",
      title: "Intern at Open iT",
      organization: "Open iT",
      description: "Software development internship",
      color: "emerald",
      icon: "briefcase"
    },
    {
      period: "2022 – Present",
      title: "Bachelor of Science in IT",
      organization: "St. Anne College Lucena",
      description: "Dean's Lister (Multiple Semesters) | Current Avg: 94%",
      color: "primary",
      icon: "graduation-cap"
    },
    {
      period: "Graduated 2022",
      title: "Senior High School",
      organization: "Tayabas Western Academy",
      description: "Percentage: 93%",
      color: "secondary",
      icon: "graduation-cap"
    },
    {
      period: "Graduated 2020",
      title: "Junior High School",
      organization: "Tayabas Western Academy",
      description: "Percentage: 90+%",
      color: "violet",
      icon: "graduation-cap"
    }
  ];

  return (
    <section id="about" className="py-24 relative px-6 bg-gradient-to-b from-white to-violet-50/30">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Intro */}
        <div className="text-center space-y-4 reveal-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I am focused on web development with practical experience in IT systems, troubleshooting, and
            networking. I seek to apply my skills to support IT infrastructure and create meaningful digital
            solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal-up">
          
          {/* Left: Timeline */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Education & Experience</h3>
            
            {/* Vertical line */}
            <div className="absolute left-[19px] top-16 bottom-0 w-0.5 bg-violet-200"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Icon circle */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-lg ${
                    item.color === 'emerald' 
                      ? 'bg-emerald-500 shadow-emerald-500/30' 
                      : item.color === 'primary' 
                      ? 'bg-primary shadow-primary/30'
                      : item.color === 'secondary'
                      ? 'bg-secondary shadow-secondary/30'
                      : 'bg-violet-500 shadow-violet-500/30'
                  }`}>
                    <i className={`fas fa-${item.icon} text-white text-sm`}></i>
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 pb-2">
                    <span className={`text-xs font-semibold tracking-wider ${
                      item.color === 'emerald' ? 'text-emerald-600' :
                      item.color === 'primary' ? 'text-primary' : 
                      item.color === 'secondary' ? 'text-secondary' : 
                      'text-violet-500'
                    }`}>
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mt-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{item.organization}</p>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Highlights & Experiences</h3>
            <div className="grid grid-cols-2 gap-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-white border-2 border-violet-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-semibold text-violet-300">{exp.year}</span>
                    <h4 className="font-bold text-sm mt-1 leading-tight">{exp.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-tight">{exp.description}</p>
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
