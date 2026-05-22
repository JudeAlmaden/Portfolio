export default function Contact({ onCopyEmail }) {
  const handleEmailClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const email = "Judealmaden2045@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        onCopyEmail("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          onCopyEmail("Email copied to clipboard!");
        } catch (e) {
          console.error('Fallback failed: ', e);
        }
        document.body.removeChild(textarea);
      });
  };

  return (
    <section id="contact" className="py-24 relative px-6 overflow-hidden bg-gradient-to-b from-white to-violet-50">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4 reveal-up">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900">
            Let's Work Together
          </h2>
          <p className="text-slate-600 text-lg">
            I'm open to entry-level roles and freelance projects. <br />
            Based in Candelaria, Quezon Province.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 reveal-up">
          <a
            href="mailto:Judealmaden2045@gmail.com"
            onClick={handleEmailClick}
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border-2 border-violet-100 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all w-full md:w-auto"
          >
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all">
              <i className="fas fa-envelope text-primary text-xl"></i>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Email Me</p>
              <p className="text-slate-800 font-medium">Judealmaden2045@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+639671559154"
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border-2 border-violet-100 hover:border-secondary hover:shadow-xl hover:shadow-secondary/10 transition-all w-full md:w-auto"
          >
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 transition-all">
              <i className="fas fa-phone text-secondary text-xl"></i>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Call Me</p>
              <p className="text-slate-800 font-medium">+63 09671559154</p>
            </div>
          </a>
        </div>

        <div className="pt-12 border-t border-violet-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Justine Jude D. Almaden. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/JudeAlmaden"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/justine-jude-almaden-09b0a438b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
