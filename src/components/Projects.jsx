import { useState } from 'react';

const projectsList = [
  {
    id: 1,
    title: "EasyAssess",
    github: "https://github.com/JudeAlmaden/EasyAssess",
    live: "https://easyassess.omr.site",
    tagline: "OMR-based assessment platform",
    images: [
      "/images/easy_assess/easy-assess-landing.png",
      "/images/easy_assess/easy-assess-2.png",
      "/images/easy_assess/easy-assess-3.png",
    ],
    tags: ["PHP", "Vue.js", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Quizzly",
    github: "https://github.com/JudeAlmaden/Quizzly_SPA",
    tagline: "Real-time quiz bee application",
    images: [
      "/images/quizzly/quizzly-1.png",
      "/images/quizzly/quizzly-2.png",
      "/images/quizzly/quizzly-3.png",
      "/images/quizzly/quizzly-4.jpg",
      "/images/quizzly/quizzly-5.jpg",
    ],
    tags: ["Laravel", "Vue.js"],
  },
  {
    id: 3,
    title: "SACLI-Q",
    github: "https://github.com/JudeAlmaden/SACLI-Q",
    tagline: "Queue management system",
    images: [
      "/images/sacli_queue/sacli-queue-1.png",
    ],
    tags: ["Laravel", "Blade"],
  },
  {
    id: 4,
    title: "E-Commerce",
    github: "https://github.com/JudeAlmaden/E-menu-and-Online-Polling",
    tagline: "E-menu & polling platform",
    images: [
      "/images/ecommerce/sisigan-homepage.png",
      "/images/ecommerce/sisigan-1.png",
      "/images/ecommerce/sisigan-2.png",
      "/images/ecommerce/sisigan-3.png",
      "/images/ecommerce/sisigan-4.png",
    ],
    tags: ["React.js", "TypeScript"],
  },
  {
    id: 5,
    title: "Booking System",
    github: "https://github.com/JudeAlmaden/BookingSysCodeIgniter",
    tagline: "Admin dashboard for bookings",
    images: [
      "/images/booking_sys/booking-dashboard.png",
    ],
    tags: ["CodeIgniter", "PHP"],
  },
  {
    id: 6,
    title: "Swift Accounting",
    github: "https://github.com/JudeAlmaden/SwiftAccountingSystem",
    tagline: "Financial records management",
    images: [
      "/images/swift/swift-1.jpg",
      "/images/swift/swift-2.jpg",
      "/images/swift/swift-3.jpg",
      "/images/swift/swift-4.jpg",
      "/images/swift/swift-5.jpg",
    ],
    tags: ["TypeScript"],
  },
  {
    id: 7,
    title: "WriteSphere",
    github: "https://github.com/JudeAlmaden/WriteSphere",
    tagline: "Personal blog application",
    images: [
      "/images/writesphere/writesphere-1.png",
      "/images/writesphere/writesphere-2.png",
      "/images/writesphere/writesphere-3.png",
      "/images/writesphere/writesphere-4.png",
      "/images/writesphere/writesphere-5.png",
    ],
    tags: ["Web Development"],
  },
  {
    id: 8,
    title: "Sacli Bingo",
    github: "https://github.com/JudeAlmaden/SacliBingo",
    tagline: "Interactive bingo game",
    images: [
      "/images/bingo/bingo-1.png",
      "/images/bingo/bingo-2.png",
      "/images/bingo/bingo-3.png",
    ],
    tags: ["JavaScript"],
  },
  {
    id: 9,
    title: "Scout",
    tagline: "Scouting application",
    images: [
      "/images/scout/scout-1.jpg",
    ],
    tags: ["Web Development"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function openProject(project) {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  }

  function closeModal() {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  }

  function nextImage() {
    setCurrentImageIndex((i) => (i + 1) % selectedProject.images.length);
  }

  function prevImage() {
    setCurrentImageIndex((i) => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-violet-50/30 to-white px-6">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <a
            href="https://github.com/JudeAlmaden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-violet-600 transition-colors flex items-center gap-2 group font-medium"
          >
            View All on GitHub{' '}
            <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-up">
          {projectsList.map((project) => (
            <article
              key={project.id}
              onClick={() => openProject(project)}
              className="group relative rounded-2xl bg-white border-2 border-violet-100 overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-slate-100 relative">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.images.length > 1 && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <i className="fas fa-images"></i>
                    {project.images.length}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold flex items-center gap-2">
                    <i className="fas fa-expand-alt"></i>
                    View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{project.tagline}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-violet-50 hover:bg-primary hover:text-white text-slate-600 flex items-center justify-center transition-all"
                        aria-label="GitHub"
                      >
                        <i className="fab fa-github text-sm"></i>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-violet-50 hover:bg-primary hover:text-white text-slate-600 flex items-center justify-center transition-all"
                        aria-label="Live"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-full bg-violet-50 text-primary border border-violet-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center transition-all shadow-lg"
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 max-h-[90vh]">
              {/* Left: Image gallery */}
              <div className="lg:col-span-2 bg-slate-100 relative">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center transition-all shadow-lg"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center transition-all shadow-lg"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/90 text-sm font-medium">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Right: Project info */}
              <div className="p-6 space-y-4 overflow-y-auto">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-600">{selectedProject.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm rounded-full bg-violet-50 text-primary border border-violet-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-violet-600 transition-all text-center"
                    >
                      <i className="fab fa-github mr-2"></i>
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all text-center"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Live Site
                    </a>
                  )}
                </div>

                {/* Thumbnail strip */}
                {selectedProject.images.length > 1 && (
                  <div className="pt-4 border-t border-violet-100">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Gallery</p>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                            i === currentImageIndex
                              ? 'border-primary'
                              : 'border-violet-100 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
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
