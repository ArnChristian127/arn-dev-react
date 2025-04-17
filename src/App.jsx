import Navbar from './components/comp-navbar/Navbar';
import About from './components/comp-about/About';
import Skills from './components/comp-skills/Skills';
import Projects from './components/comp-projects/Projects';
import Education from './components/comp-education/Education';
import Certificates from './components/comp-certificates/Certificates';
import Contact from './components/comp-contact/Contact';
import Sand from './assets/sand.png';
import { animate } from 'animejs';
import { useEffect } from 'react';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const elements = document.querySelectorAll('.stagger, .staggerl');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.dataset.animated) {
            const isLeft = el.classList.contains('staggerl');
            animate(el, {
              translateX: isLeft ? [-500, 0] : [500, 0],
              duration: 1000,
              opacity: [0, 0.5, 1],
              delay: 100,
            });
            el.dataset.animated = 'true';
          }
        });
      },
      { threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certificates/>
      <Contact/>
      <footer className="bg-blue-800 text-white">
        <div className="text-center">
          <h1 className="text-2xl">&copy;{new Date().getFullYear()} ArnDev. All rights reserved.</h1>
          <img src={Sand} alt="sand" className="mt-10"></img>
        </div>
      </footer>
    </>
  );
}

export default App;
