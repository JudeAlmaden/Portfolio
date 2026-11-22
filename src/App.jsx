import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const triggerToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once revealed, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-[#101415] text-on-surface font-sans selection:bg-primary selection:text-on-primary min-h-screen relative" style={{ overflowX: 'clip' }}>
      {/* Dark Void Background with Violet Glow Orbs */}
      <div className="fixed top-0 left-0 w-full h-full bg-[#101415] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-hover/10 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-primary/8 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects onCopyEmail={triggerToast} />
      <Footer />
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}

export default App;
