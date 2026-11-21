import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Stack from './components/Stack';
import Timeline from './components/Timeline';
import StatementMoment from './components/StatementMoment';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';
import Toast from './components/Toast';
import { loadKit } from './kit';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const triggerToast = useCallback((message) => {
    setToastMessage(message);
    setToastVisible(true);
  }, []);

  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 3000);
    return () => clearTimeout(t);
  }, [toastVisible]);

  // the kit's motion, layout and system layers bind to the rendered DOM: start them after the
  // first commit so the hero's entrance and the nav's menu have something to attach to
  useEffect(() => {
    loadKit();
  }, []);

  return (
    <>
      {/* skip link — first child of the page, before the header */}
      <a className="skip-link" href="#top">Skip to content</a>

      <Navbar />

      <main id="top">
        <Hero />
        <Work />
        <StatementMoment
          id="moment-1"
          statement={[
            { text: "I take the whole build,", accent: true },
            { text: "and I finish it." },
          ]}
        />
        <About />
        <Stack />
        <Timeline />
        <Contact onCopyEmail={triggerToast} />
      </main>

      <SiteFooter />
      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}
