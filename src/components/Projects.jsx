import { useState, useEffect, useRef } from 'react';

const projectsList = [
  {
    id: 1,
    title: "EasyAssess",
    github: "https://github.com/JudeAlmaden/EasyAssess",
    live: "https://easyassessomr.site",
    tagline: "Transforms any smartphone into a precision OMR scanner. Print, scan, and get results instantly — completely hardware-free.",
    images: [
      "/images/easy_assess/easy-assess-landing.png",
      "/images/easy_assess/easy-assess-2.png",
      "/images/easy_assess/easy-assess-3.png",
    ],
    tags: ["PHP", "Vue.js", "TailwindCSS"],
    theme: "from-emerald-100 to-teal-200",
    sectionBg: "bg-emerald-50/50",
    orbColors: ["bg-emerald-300/40", "bg-teal-300/40", "bg-emerald-200/50"],
  },
  {
    id: 2,
    title: "Quizzly",
    github: "https://github.com/JudeAlmaden/Quizzly_SPA",
    tagline: "A real-time, interactive quiz bee application designed for competitive events. Successfully deployed and utilized during our school's Foundation Day competition.",
    images: [
      "/images/quizzly/quizzly-1.png",
      "/images/quizzly/quizzly-2.png",
      "/images/quizzly/quizzly-3.png",
      "/images/quizzly/quizzly-4.jpg",
      "/images/quizzly/quizzly-5.jpg",
    ],
    tags: ["Laravel", "Vue.js"],
    theme: "from-amber-100 to-orange-200",
    sectionBg: "bg-amber-50/50",
    orbColors: ["bg-amber-300/40", "bg-orange-300/40", "bg-yellow-200/50"],
  },
  {
    id: 3,
    title: "SACLI-Q",
    github: "https://github.com/JudeAlmaden/SACLI-Q",
    tagline: "A smart queue management system developed for St. Anne's College student services. Features a 'Where's My Ticket?' online portal, allowing students to track their queue status remotely in real-time.",
    images: [
      "/images/sacli_queue/sacli-queue-1.png",
    ],
    tags: ["Laravel", "Blade"],
    theme: "from-cyan-100 to-blue-200",
    sectionBg: "bg-cyan-50/50",
    orbColors: ["bg-cyan-300/40", "bg-blue-300/40", "bg-sky-200/50"],
  },
  {
    id: 4,
    title: "E-Commerce",
    github: "https://github.com/JudeAlmaden/E-menu-and-Online-Polling",
    tagline: "E-menu & polling platform, Vercel and Supabase hosted to learn about the deployment process of a fullstack web application",
    images: [
      "/images/ecommerce/sisigan-homepage.png",
      "/images/ecommerce/sisigan-1.png",
      "/images/ecommerce/sisigan-2.png",
      "/images/ecommerce/sisigan-3.png",
      "/images/ecommerce/sisigan-4.png",
    ],
    tags: ["React.js", "TypeScript"],
    theme: "from-rose-100 to-red-200",
    sectionBg: "bg-rose-50/50",
    orbColors: ["bg-rose-300/40", "bg-red-300/40", "bg-pink-200/50"],
  },
  {
    id: 5,
    title: "Booking System",
    github: "https://github.com/JudeAlmaden/BookingSysCodeIgniter",
    tagline: "A versatile administration dashboard developed with CodeIgniter and Tailwind CSS. Designed to handle end-to-end booking and reservation workflows, featuring an intuitive UI for calendar management, status tracking, and structured record-keeping.",
    images: [
      "/images/booking_sys/booking-dashboard.png",
    ],
    tags: ["CodeIgniter", "PHP"],
    theme: "from-sky-100 to-indigo-200",
    sectionBg: "bg-sky-50/50",
    orbColors: ["bg-sky-300/40", "bg-indigo-300/40", "bg-blue-200/50"],
  },
  {
    id: 6,
    title: "Swift Accounting",
    github: "https://github.com/JudeAlmaden/SwiftAccountingSystem",
    tagline: "Commissioned by St. Anne's College to streamline financial records. Features include daily transaction tracking, automated report generation, and a secure disbursement approval workflow.",
    images: [
      "/images/swift/swift-1.jpg",
      "/images/swift/swift-2.jpg",
      "/images/swift/swift-3.jpg",
      "/images/swift/swift-4.jpg",
      "/images/swift/swift-5.jpg",
    ],
    tags: ["TypeScript"],
    theme: "from-violet-100 to-fuchsia-200",
    sectionBg: "bg-violet-50/50",
    orbColors: ["bg-violet-300/40", "bg-fuchsia-300/40", "bg-purple-200/50"],
  },
  {
    id: 7,
    title: "WriteSphere",
    github: "https://github.com/JudeAlmaden/WriteSphere",
    tagline: "A fully-featured personal blogging platform developed from scratch using vanilla PHP and a custom MVC architecture. Features include a robust content management system, rich text editing capabilities, and a responsive reading experience.",
    images: [
      "/images/writesphere/writesphere-1.png",
      "/images/writesphere/writesphere-2.png",
      "/images/writesphere/writesphere-3.png",
      "/images/writesphere/writesphere-4.png",
      "/images/writesphere/writesphere-5.png",
    ],
    tags: ["Web Development"],
    theme: "from-blue-100 to-cyan-200",
    sectionBg: "bg-blue-50/50",
    orbColors: ["bg-blue-300/40", "bg-cyan-300/40", "bg-indigo-200/50"],
  },
  {
    id: 8,
    title: "Sacli Bingo",
    github: "https://github.com/JudeAlmaden/SacliBingo",
    live: "https://judealmaden.github.io/SacliBingo/",
    tagline: "A premium Bingo game built with React and Tailwind CSS. Created for my school's foundation day, it's now automated via GitHub Actions for continuous accessibility and reuse.",
    images: [
      "/images/bingo/bingo-1.png",
      "/images/bingo/bingo-2.png",
      "/images/bingo/bingo-3.png",
    ],
    tags: ["JavaScript"],
    theme: "from-lime-100 to-emerald-200",
    sectionBg: "bg-lime-50/50",
    orbColors: ["bg-lime-300/40", "bg-emerald-300/40", "bg-green-200/50"],
  },
  {
    id: 9,
    title: "Scout",
    tagline: "Proprietary Test Case Management System developed for Open iT. Features centralized test repositories, real-time execution tracking, team-based collaboration, and a structured change management workflow for robust QA governance.",
    images: [
      "/images/scout/scout-1.jpg",
      "/images/scout/scout-2.png",
      "/images/scout/scout-3.png",
      "/images/scout/scout-4.png",
      "/images/scout/scout-5.png",
    ],
    tags: ["Web Development", "QA Automation"],
    theme: "from-purple-100 to-violet-200",
    sectionBg: "bg-purple-50/50",
    orbColors: ["bg-purple-300/40", "bg-violet-300/40", "bg-fuchsia-200/50"],
  },
];

function ProjectCard({ project, onClick, useBrowser }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);
      }, 1500);
    } else {
      setCurrentImg(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <article
      data-id={project.id}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card group relative rounded-2xl bg-white border border-slate-100 overflow-hidden hover:border-slate-200 transition-all hover:shadow-xl hover:shadow-slate-200/50 cursor-pointer flex flex-col reveal-up opacity-0 translate-y-12 duration-1000 ease-out [&.active]:opacity-100 [&.active]:translate-y-0"
    >
      {/* Image with mockup */}
      <div className={`w-full aspect-[16/10] bg-gradient-to-br ${isHovered ? project.theme : 'from-slate-100 to-slate-200'} transition-colors duration-700 relative flex items-center justify-center p-6 flex-shrink-0`}>
        {/* Mockup wrapper */}
        {useBrowser ? (
          <div className="w-[95%] relative transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
            <div className="bg-slate-800 rounded-t-lg px-3 py-2 flex items-center gap-2 shadow-2xl">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-2 h-5 bg-slate-700 rounded text-xs flex items-center px-2 text-slate-400">
                <i className="fas fa-lock text-xs mr-1"></i>
                <span className="truncate">{project.title.toLowerCase().replace(/\s+/g, '')}.com</span>
              </div>
            </div>
            <div className="relative bg-white border-4 border-slate-800 border-t-0 rounded-b-lg overflow-hidden shadow-2xl bg-slate-900">
              <img src={project.images[currentImg]} alt={project.title} className="w-full aspect-video object-cover transition-opacity duration-300" />
            </div>
          </div>
        ) : (
          <div className="w-[90%] relative transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
            <div className="relative bg-slate-900 rounded-t-lg overflow-hidden shadow-2xl border-4 border-slate-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-slate-800 rounded-b-lg z-10"></div>
              <div className="aspect-video overflow-hidden bg-slate-900">
                <img src={project.images[currentImg]} alt={project.title} className="w-full h-full object-cover transition-opacity duration-300" />
              </div>
            </div>
            <div className="h-2.5 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl shadow-2xl relative z-10 mx-[-10px]"></div>
          </div>
        )}
        
        {project.images.length > 1 && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-xs font-semibold text-white flex items-center gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
            <i className="fas fa-play text-[10px] text-white"></i>
            Previewing
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col bg-white">
        {/* Category Pill */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 1).map((tag, i) => (
            <span key={i} className="px-4 py-1 text-xs rounded-full border border-blue-500/40 text-blue-400 font-medium bg-blue-500/10">{tag}</span>
          ))}
        </div>

        <div className="flex items-start justify-between gap-4 flex-1">
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">{project.title}</h3>
            <p className="text-[15px] text-slate-500 mt-3 leading-relaxed">{project.tagline}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-all border border-slate-200 hover:border-slate-300" aria-label="GitHub">
                <i className="fab fa-github text-sm"></i>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-all border border-slate-200 hover:border-slate-300" aria-label="Live">
                <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [activeProjectInfo, setActiveProjectInfo] = useState(null);

  function openProject(project) {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsClosing(false);
  }

  function closeModal() {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentImageIndex(0);
      setIsClosing(false);
    }, 150); // Matches the new exit animation duration exactly
  }

  function nextImage() {
    setCurrentImageIndex((i) => (i + 1) % selectedProject.images.length);
  }

  function prevImage() {
    setCurrentImageIndex((i) => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for active project background
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // We want the most prominent entry if multiple
        const intersecting = entries.filter(e => e.isIntersecting);
        if (intersecting.length > 0) {
          // Sort by intersection ratio (largest first)
          intersecting.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const id = parseInt(intersecting[0].target.dataset.id);
          const project = projectsList.find(p => p.id === id);
          if (project) {
            setActiveProjectInfo(project);
          }
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7, 0.9], rootMargin: '-20% 0px -20% 0px' }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeBgClass = activeProjectInfo ? activeProjectInfo.sectionBg : 'bg-white';
  const activeOrbs = activeProjectInfo ? activeProjectInfo.orbColors : ['bg-transparent', 'bg-transparent', 'bg-transparent'];

  return (
    <section id="projects" className={`py-24 px-6 relative overflow-hidden transition-colors duration-1000 ${activeBgClass}`}>
      {/* Floating Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className={`absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-slow transition-colors duration-1000 ${activeOrbs[0]}`}></div>
        <div className={`absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse-slow transition-colors duration-1000 ${activeOrbs[1]}`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse-slow transition-colors duration-1000 ${activeOrbs[2]}`} style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-up opacity-0 transition-all duration-1000 translate-y-8 [&.active]:opacity-100 [&.active]:translate-y-0">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
          </div>
          <a
            href="https://github.com/JudeAlmaden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 group font-medium"
          >
            View All on GitHub{' '}
            <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
        
        {/* Projects Grid - Staggered two-column masonry */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-8">
            {projectsList.filter((_, i) => i % 2 === 0).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => openProject(project)} 
                useBrowser={false} 
              />
            ))}
          </div>

          {/* Right column - offset down by ~50% of a card */}
          <div className="flex-1 flex flex-col gap-8 md:mt-[220px]">
            {projectsList.filter((_, i) => i % 2 === 1).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => openProject(project)} 
                useBrowser={true} 
              />
            ))}
          </div>
        </div>
      </div>
      {/* Modal/Lightbox */}
      {(selectedProject || isClosing) && selectedProject && (
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 ${isClosing ? 'animate-[fadeOut_0.15s_ease-out_forwards]' : 'animate-[fadeIn_0.2s_ease-out_forwards]'}`}
          onClick={closeModal}
        >
          <div
            className={`relative bg-white rounded-2xl w-full max-w-[1400px] h-[90vh] overflow-hidden shadow-2xl border border-slate-200 ${isClosing ? 'animate-[popdown_0.15s_ease-out_forwards]' : 'scale-95 opacity-0 animate-[popup_0.3s_ease-out_0.1s_forwards]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all"
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Left: Image gallery */}
              <div className="flex-1 flex flex-col min-h-0">
                {/* Main image */}
                <div className="flex-1 relative flex items-center justify-center bg-slate-50 p-6 min-h-0">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all backdrop-blur-sm shadow-md border border-slate-200"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all backdrop-blur-sm shadow-md border border-slate-200"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail strip */}
                {selectedProject.images.length > 1 && (
                  <div className="flex-shrink-0 px-6 py-3 bg-white/80 border-t border-slate-200">
                    <div className="flex gap-2 justify-center overflow-x-auto">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            i === currentImageIndex
                              ? 'border-primary ring-1 ring-primary/50'
                              : 'border-slate-200 opacity-50 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Project info */}
              <div className="lg:w-[340px] flex-shrink-0 bg-white flex flex-col">
                <div className="flex-1 p-8 flex flex-col justify-center space-y-6 overflow-y-auto">
                  {/* Project number */}
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">
                    Project {String(selectedProject.id).padStart(2, '0')}
                  </span>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 font-heading">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">{selectedProject.tagline}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-violet-50 text-primary border border-violet-200 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                      >
                        <i className="fab fa-github"></i>
                        View Source Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                      >
                        <i className="fas fa-external-link-alt text-sm"></i>
                        Visit Live Site
                      </a>
                    )}
                  </div>
                </div>

                {/* Image counter */}
                {selectedProject.images.length > 1 && (
                  <div className="px-8 py-4 border-t border-slate-100 text-center">
                    <span className="text-sm font-semibold text-slate-400">
                      {currentImageIndex + 1} <span className="text-slate-300">/</span> {selectedProject.images.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
